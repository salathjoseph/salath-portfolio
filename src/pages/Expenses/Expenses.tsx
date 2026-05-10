import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Calendar, IndianRupee, Tag, Trash2, Wallet } from 'lucide-react';

interface Expense {
  id: string;
  description: string;
  amount: number;
  date: string; // YYYY-MM-DD
}

export default function Expenses() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const handleAddExpense = (e: React.FormEvent) => {
    e.preventDefault();
    if (!description || !amount || !date) return;

    const newExpense: Expense = {
      id: crypto.randomUUID(),
      description,
      amount: parseFloat(amount),
      date
    };

    setExpenses([newExpense, ...expenses]);
    setDescription('');
    setAmount('');
  };

  const handleDelete = (id: string) => {
    setExpenses(expenses.filter(e => e.id !== id));
  };

  // Group expenses by Year -> Month -> Date
  const groupedExpenses = expenses.reduce((acc, expense) => {
    const [year, month, day] = expense.date.split('-');
    
    if (!acc[year]) acc[year] = {};
    if (!acc[year][month]) acc[year][month] = {};
    if (!acc[year][month][day]) acc[year][month][day] = [];
    
    acc[year][month][day].push(expense);
    return acc;
  }, {} as Record<string, Record<string, Record<string, Expense[]>>>);

  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

  const totalExpenses = expenses.reduce((sum, e) => sum + e.amount, 0);

  return (
    <div className="page-wrapper app-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>
            Expense <span className="text-gradient">Tracker</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)' }}>Manage and track your expenses by date</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {/* Add Expense Form */}
          <div className="glass-panel" style={{ padding: '30px', height: 'fit-content' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Plus className="text-pink-500" /> Add New Expense
            </h3>
            
            <form onSubmit={handleAddExpense}>
              <div className="input-group">
                <label>Description</label>
                <div style={{ position: 'relative' }}>
                  <Tag size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input 
                    type="text" 
                    className="input-field" 
                    placeholder="E.g., Groceries" 
                    style={{ paddingLeft: '40px' }}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Amount (₹)</label>
                <div style={{ position: 'relative' }}>
                  <IndianRupee size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input 
                    type="number" 
                    className="input-field" 
                    placeholder="0.00" 
                    style={{ paddingLeft: '40px' }}
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                    min="0"
                    step="0.01"
                  />
                </div>
              </div>

              <div className="input-group">
                <label>Date</label>
                <div style={{ position: 'relative' }}>
                  <Calendar size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
                  <input 
                    type="date" 
                    className="input-field" 
                    style={{ paddingLeft: '40px' }}
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                  />
                </div>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }}>
                Add Expense
              </button>
            </form>

            <div style={{ marginTop: '30px', paddingTop: '20px', borderTop: '1px solid var(--glass-border)', textAlign: 'center' }}>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '5px' }}>Total Expenses</p>
              <h2 className="text-gradient" style={{ fontSize: '2.5rem' }}>₹{totalExpenses.toFixed(2)}</h2>
            </div>
          </div>

          {/* Expense List */}
          <div className="glass-panel" style={{ padding: '30px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Your Expenses</h3>
            
            {expenses.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--text-secondary)' }}>
                <Wallet size={48} style={{ margin: '0 auto 15px', opacity: 0.5 }} />
                <p>No expenses added yet.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                {Object.keys(groupedExpenses).sort((a,b) => Number(b)-Number(a)).map(year => (
                  <div key={year}>
                    <h4 style={{ color: 'var(--accent-blue)', fontSize: '1.3rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '10px', marginBottom: '15px' }}>
                      {year}
                    </h4>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                      {Object.keys(groupedExpenses[year]).sort((a,b) => Number(b)-Number(a)).map(month => (
                        <div key={month}>
                          <h5 style={{ color: 'var(--text-secondary)', marginBottom: '10px', fontSize: '1.1rem' }}>
                            {monthNames[parseInt(month) - 1]}
                          </h5>
                          
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                            {Object.keys(groupedExpenses[year][month]).sort((a,b) => Number(b)-Number(a)).map(day => (
                              <div key={day} style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '12px', padding: '15px' }}>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '10px' }}>
                                  Date: {day}/{month}/{year}
                                </p>
                                
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                  {groupedExpenses[year][month][day].map(expense => (
                                    <div key={expense.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.03)', padding: '10px 15px', borderRadius: '8px' }}>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-pink)' }}></div>
                                        <span>{expense.description}</span>
                                      </div>
                                      <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <span style={{ fontWeight: 600 }}>₹{expense.amount.toFixed(2)}</span>
                                        <button 
                                          onClick={() => handleDelete(expense.id)}
                                          style={{ background: 'none', border: 'none', color: '#ef4444', cursor: 'pointer', opacity: 0.7, transition: 'opacity 0.2s' }}
                                          onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                                          onMouseLeave={(e) => e.currentTarget.style.opacity = '0.7'}
                                        >
                                          <Trash2 size={16} />
                                        </button>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
