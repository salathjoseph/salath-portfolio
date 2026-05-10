import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ListTodo, AlertOctagon, Clock, CheckCircle2, X, Calendar as CalendarIcon, GripVertical, PhoneCall, Users, User, Briefcase, LayoutGrid, CalendarDays } from 'lucide-react';
import { collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot } from 'firebase/firestore';
import { db } from '../../lib/firebase';
import CalendarView from '../../components/CalendarView';

type TaskStatus = 'blocked' | 'todo' | 'in-progress' | 'completed';
type TaskCategory = 'self task' | 'client call' | 'personal' | 'business meet';
type CallType = 'inbound' | 'outbound';

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  category: TaskCategory;
  createdAt: number;
  datetime?: string; // ISO string for calendar
  clientName?: string;
  clientNumber?: string;
  clientAddress?: string;
  callType?: CallType;
}

const COLUMNS: { id: TaskStatus; label: string; icon: any; color: string; bg: string }[] = [
  { id: 'todo', label: 'To Do', icon: ListTodo, color: '#94a3b8', bg: 'rgba(148, 163, 184, 0.1)' },
  { id: 'in-progress', label: 'Working On', icon: Clock, color: '#3b82f6', bg: 'rgba(59, 130, 246, 0.1)' },
  { id: 'blocked', label: 'Blocked', icon: AlertOctagon, color: '#ef4444', bg: 'rgba(239, 68, 68, 0.1)' },
  { id: 'completed', label: 'Completed', icon: CheckCircle2, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
];

const CATEGORY_ICONS: Record<TaskCategory, any> = {
  'self task': User,
  'personal': User,
  'client call': PhoneCall,
  'business meet': Briefcase
};

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [viewMode, setViewMode] = useState<'board' | 'calendar'>('board');
  const [firebaseError, setFirebaseError] = useState(false);
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskDesc, setNewTaskDesc] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState<TaskStatus>('todo');
  const [newTaskCategory, setNewTaskCategory] = useState<TaskCategory>('self task');
  const [newDatetime, setNewDatetime] = useState('');
  const [newClientName, setNewClientName] = useState('');
  const [newClientNumber, setNewClientNumber] = useState('');
  const [newClientAddress, setNewClientAddress] = useState('');
  const [newCallType, setNewCallType] = useState<CallType>('outbound');

  // Load from Firebase
  useEffect(() => {
    try {
      const q = collection(db, 'tasks');
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const tasksData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Task[];
        setTasks(tasksData);
        setFirebaseError(false);
      }, (error) => {
        console.error("Firebase error (Have you added your config?):", error);
        setFirebaseError(true);
      });
      return () => unsubscribe();
    } catch (e) {
      console.error("Firebase is likely missing config:", e);
      setFirebaseError(true);
    }
  }, []);

  const handleCreateTask = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    if (firebaseError) {
      console.warn("Continuing despite firebase error, as you have recently configured it.");
    }

    const payload: Omit<Task, 'id'> = {
      title: newTaskTitle.trim(),
      description: newTaskDesc.trim(),
      status: newTaskStatus,
      category: newTaskCategory,
      createdAt: Date.now(),
      datetime: newDatetime || undefined,
    };

    if (newTaskCategory === 'client call' || newTaskCategory === 'business meet') {
      payload.clientName = newClientName;
      payload.clientNumber = newClientNumber;
      payload.clientAddress = newClientAddress;
      if (newTaskCategory === 'client call') payload.callType = newCallType;
    }

    try {
      await addDoc(collection(db, 'tasks'), payload);
      resetModal();
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const resetModal = () => {
    setIsModalOpen(false);
    setNewTaskTitle('');
    setNewTaskDesc('');
    setNewTaskStatus('todo');
    setNewTaskCategory('self task');
    setNewDatetime('');
    setNewClientName('');
    setNewClientNumber('');
    setNewClientAddress('');
    setNewCallType('outbound');
  };

  const handleDeleteTask = async (id: string) => {
    try { await deleteDoc(doc(db, 'tasks', id)); } catch (error) { console.error(error); }
  };

  const handleDragStart = (e: React.DragEvent, id: string) => {
    e.dataTransfer.setData('taskId', id);
    e.currentTarget.classList.add('dragging');
  };

  const handleDragEnd = (e: React.DragEvent) => {
    e.currentTarget.classList.remove('dragging');
  };

  const handleDragOver = (e: React.DragEvent) => e.preventDefault();

  const handleDrop = async (e: React.DragEvent, status: TaskStatus) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    if (!taskId) return;
    
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, status } : t));
    try { await updateDoc(doc(db, 'tasks', taskId), { status }); } catch (error) { console.error(error); }
  };

  const moveTask = async (id: string, newStatus: TaskStatus) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, status: newStatus } : t));
    try { await updateDoc(doc(db, 'tasks', id), { status: newStatus }); } catch (error) { console.error(error); }
  };

  // Calendar Event Mapping
  const calendarEvents = tasks.filter(t => t.datetime).map(t => {
    let baseColor = '#94a3b8'; // default
    let bgColor = 'rgba(148, 163, 184, 0.15)';

    if (t.category === 'client call') { baseColor = '#8b5cf6'; bgColor = 'rgba(139, 92, 246, 0.15)'; }
    if (t.category === 'business meet') { baseColor = '#3b82f6'; bgColor = 'rgba(59, 130, 246, 0.15)'; }
    if (t.category === 'personal') { baseColor = '#ec4899'; bgColor = 'rgba(236, 72, 153, 0.15)'; }
    if (t.category === 'self task') { baseColor = '#10b981'; bgColor = 'rgba(16, 185, 129, 0.15)'; }
    
    return {
      id: t.id,
      title: `${t.title} ${t.clientName ? `(${t.clientName})` : ''}`,
      start: t.datetime,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      textColor: baseColor,
      extendedProps: { ...t, baseColor, bgColor }
    };
  });

  const handleCalendarEventDrop = async (arg: any) => {
    const taskId = arg.event.id;
    // FullCalendar provides dates that we can convert to local ISO string without the Z offset issues usually, 
    // but the easiest is just formatting the local date to match datetime-local input YYYY-MM-DDTHH:mm
    const d = arg.event.start;
    const offset = d.getTimezoneOffset() * 60000;
    const newStart = (new Date(d.getTime() - offset)).toISOString().slice(0, 16);
    
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, datetime: newStart } : t));
    try { await updateDoc(doc(db, 'tasks', taskId), { datetime: newStart }); } catch (error) { console.error(error); }
  };

  return (
    <div className="page-wrapper app-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40, flexWrap: 'wrap', gap: 20 }}>
        <div>
          <h1 style={{ fontSize: '2.6rem', marginBottom: 8 }}>
            Task <span className="text-gradient">Manager</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage tasks, appointments, and client calls.</p>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {/* View Toggles */}
          <div style={{ display: 'flex', background: 'rgba(255,255,255,0.05)', padding: 4, borderRadius: 10 }}>
            <button 
              onClick={() => setViewMode('board')}
              style={{ 
                padding: '6px 12px', border: 'none', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                background: viewMode === 'board' ? 'var(--accent-blue)' : 'transparent',
                color: viewMode === 'board' ? '#fff' : 'var(--text-secondary)'
              }}
            >
              <LayoutGrid size={15} /> Board
            </button>
            <button 
              onClick={() => setViewMode('calendar')}
              style={{ 
                padding: '6px 12px', border: 'none', borderRadius: 6, display: 'flex', alignItems: 'center', gap: 6, cursor: 'pointer',
                background: viewMode === 'calendar' ? 'var(--accent-blue)' : 'transparent',
                color: viewMode === 'calendar' ? '#fff' : 'var(--text-secondary)'
              }}
            >
              <CalendarDays size={15} /> Calendar
            </button>
          </div>

          <button 
            className="btn btn-primary"
            onClick={() => setIsModalOpen(true)}
            style={{ padding: '8px 20px', borderRadius: 8 }}
          >
            <Plus size={18} /> New Task
          </button>
        </div>
      </div>

      {viewMode === 'board' ? (
        /* ══════════════ KANBAN BOARD ══════════════ */
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24, alignItems: 'start' }}>
          {COLUMNS.map(col => {
            const columnTasks = tasks.filter(t => t.status === col.id).sort((a, b) => b.createdAt - a.createdAt);
            
            return (
              <div key={col.id} className="glass-panel"
                style={{ background: 'rgba(30, 41, 59, 0.4)', padding: '16px', minHeight: '400px', display: 'flex', flexDirection: 'column', gap: 16 }}
                onDragOver={handleDragOver} onDrop={(e) => handleDrop(e, col.id)}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 12, borderBottom: '1px solid var(--border-color)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ background: col.bg, color: col.color, padding: 6, borderRadius: 8 }}><col.icon size={16} /></div>
                    <h3 style={{ fontSize: 16, fontWeight: 600 }}>{col.label}</h3>
                  </div>
                  <span style={{ background: 'rgba(255,255,255,0.05)', padding: '2px 8px', borderRadius: 12, fontSize: 12, color: 'var(--text-secondary)' }}>
                    {columnTasks.length}
                  </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, flex: 1 }}>
                  <AnimatePresence>
                    {columnTasks.map(task => {
                      const CatIcon = CATEGORY_ICONS[task.category] || ListTodo;
                      return (
                        <motion.div
                          layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                          key={task.id} draggable onDragStart={(e: any) => handleDragStart(e, task.id)} onDragEnd={(e: any) => handleDragEnd(e)}
                          style={{ background: 'var(--surface-color)', border: '1px solid var(--border-color)', borderRadius: 8, padding: 14, cursor: 'grab', position: 'relative' }}
                        >
                          <div style={{ position: 'absolute', top: 12, right: 12 }}>
                            <button onClick={() => handleDeleteTask(task.id)} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', padding: 2 }}>
                              <X size={14} />
                            </button>
                          </div>

                          <div style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                            <GripVertical size={14} color="var(--text-secondary)" style={{ marginTop: 3, cursor: 'grab' }} />
                            <h4 style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-primary)', paddingRight: 20, wordBreak: 'break-word', display: 'flex', alignItems: 'flex-start', gap: 6, flexWrap: 'wrap' }}>
                              <span style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 6px', borderRadius: 4, display: 'inline-flex', alignItems: 'center', gap: 4, color: 'var(--accent-purple)', fontSize: 10, textTransform: 'capitalize', fontWeight: 600 }}>
                                <CatIcon size={10} /> {task.category}
                              </span>
                              {task.title}
                            </h4>
                          </div>
                          
                          {task.description && (
                            <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 12, paddingLeft: 22, wordBreak: 'break-word' }}>
                              {task.description}
                            </p>
                          )}

                          {/* Client / Business Details */}
                          {(task.category === 'client call' || task.category === 'business meet') && task.clientName && (
                            <div style={{ paddingLeft: 22, marginBottom: 12, fontSize: 11, color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: 4, background: 'rgba(255,255,255,0.02)', padding: '8px 8px 8px 22px', borderRadius: 6 }}>
                              <div><strong>Client:</strong> {task.clientName}</div>
                              {task.clientNumber && <div><strong>Number:</strong> {task.clientNumber}</div>}
                              {task.clientAddress && <div><strong>Location:</strong> {task.clientAddress}</div>}
                              {task.callType && <div><strong>Call:</strong> <span style={{textTransform:'capitalize'}}>{task.callType}</span></div>}
                            </div>
                          )}

                          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 22 }}>
                            {task.datetime ? (
                              <span style={{ fontSize: 11, color: 'var(--accent-pink)', display: 'flex', alignItems: 'center', gap: 4, fontWeight: 500 }}>
                                <Clock size={11} />
                                {new Date(task.datetime).toLocaleString('en-US', { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}
                              </span>
                            ) : (
                              <span style={{ fontSize: 11, color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: 4 }}>
                                <CalendarIcon size={11} /> {new Date(task.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                              </span>
                            )}
                            
                            <select value={task.status} onChange={(e) => moveTask(task.id, e.target.value as TaskStatus)} style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: 11, borderRadius: 4, padding: '2px 4px', cursor: 'pointer' }}>
                              {COLUMNS.map(c => <option key={c.id} value={c.id} style={{ background: 'var(--bg-color)' }}>{c.label}</option>)}
                            </select>
                          </div>
                        </motion.div>
                      );
                    })}
                  </AnimatePresence>
                  
                  {columnTasks.length === 0 && (
                    <div style={{ border: '1px dashed var(--border-color)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, color: 'var(--text-secondary)', fontSize: 13, flex: 1 }}>
                      Drop tasks here
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        /* ══════════════ CALENDAR VIEW ══════════════ */
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <CalendarView 
            events={calendarEvents} 
            eventDrop={handleCalendarEventDrop}
            eventClick={(arg: any) => {
              // Quick view or toggle logic could go here in the future
              alert(`Task: ${arg.event.title}\nStatus: ${arg.event.extendedProps.status.toUpperCase()}\nScheduled for: ${new Date(arg.event.start).toLocaleString()}`);
            }}
          />
        </motion.div>
      )}

      {/* ── CREATE TASK MODAL ── */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 500, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 20 }}
            onClick={(e) => e.target === e.currentTarget && resetModal()}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="glass-panel"
              style={{ width: '100%', maxWidth: 550, padding: 32, maxHeight: '85vh', overflowY: 'auto' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
                <h2 style={{ fontSize: '1.4rem' }}>Create New Task / Appointment</h2>
                <button onClick={resetModal} style={{ background: 'none', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleCreateTask}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                    <label>Task Title</label>
                    <input type="text" className="input-field" value={newTaskTitle} onChange={e => setNewTaskTitle(e.target.value)} placeholder="e.g. Discuss Q3 Strategy" autoFocus required />
                  </div>

                  <div className="input-group">
                    <label>Category</label>
                    <select className="input-field" value={newTaskCategory} onChange={e => setNewTaskCategory(e.target.value as TaskCategory)} style={{ appearance: 'none' }}>
                      <option value="self task" style={{background:'var(--bg-color)'}}>Self Task</option>
                      <option value="client call" style={{background:'var(--bg-color)'}}>Client Call</option>
                      <option value="business meet" style={{background:'var(--bg-color)'}}>Business Meet</option>
                      <option value="personal" style={{background:'var(--bg-color)'}}>Personal</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label>Schedule (Date & Time)</label>
                    <input type="datetime-local" className="input-field" value={newDatetime} onChange={e => setNewDatetime(e.target.value)} />
                    <span style={{ fontSize: 10, color: 'var(--text-secondary)', marginTop: 2 }}>Will appear in your Calendar</span>
                  </div>
                </div>

                {/* Conditional Fields for Client / Business */}
                <AnimatePresence>
                  {(newTaskCategory === 'client call' || newTaskCategory === 'business meet') && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                      <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--border-color)', borderRadius: 8, padding: 16, marginTop: 16 }}>
                        <h4 style={{ fontSize: 13, marginBottom: 12, color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: 6 }}><Users size={14} /> Contact Details</h4>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                          <div className="input-group">
                            <label>Client / Contact Name</label>
                            <input type="text" className="input-field" value={newClientName} onChange={e => setNewClientName(e.target.value)} placeholder="John Doe" required />
                          </div>
                          <div className="input-group">
                            <label>Phone Number</label>
                            <input type="tel" className="input-field" value={newClientNumber} onChange={e => setNewClientNumber(e.target.value)} placeholder="+1 234 567 8900" />
                          </div>
                          {newTaskCategory === 'client call' && (
                            <div className="input-group">
                              <label>Call Type</label>
                              <select className="input-field" value={newCallType} onChange={e => setNewCallType(e.target.value as CallType)} style={{ appearance: 'none' }}>
                                <option value="inbound" style={{background:'var(--bg-color)'}}>Inbound</option>
                                <option value="outbound" style={{background:'var(--bg-color)'}}>Outbound</option>
                              </select>
                            </div>
                          )}
                          <div className="input-group" style={{ gridColumn: '1 / -1' }}>
                            <label>Address / Meeting Link</label>
                            <input type="text" className="input-field" value={newClientAddress} onChange={e => setNewClientAddress(e.target.value)} placeholder="Zoom URL or Physical Address" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                <div className="input-group" style={{ marginTop: 16 }}>
                  <label>Description (Optional)</label>
                  <textarea className="input-field" value={newTaskDesc} onChange={e => setNewTaskDesc(e.target.value)} placeholder="Add meeting agenda or notes..." rows={2} style={{ resize: 'vertical' }} />
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12, marginTop: 24, paddingTop: 20, borderTop: '1px solid var(--border-color)' }}>
                  <button type="button" onClick={resetModal} className="btn btn-secondary">Cancel</button>
                  <button type="submit" className="btn btn-primary" disabled={!newTaskTitle.trim()}>
                    Create {newTaskCategory === 'self task' || newTaskCategory === 'personal' ? 'Task' : 'Appointment'}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`.dragging { opacity: 0.5; }`}</style>
    </div>
  );
}
