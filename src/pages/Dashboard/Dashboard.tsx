import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  ListTodo, 
  Wallet, 
  TrendingUp, 
  Wand2, 
  ChevronRight, 
  Clock, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

export default function Dashboard() {
  const { user } = useAuth();

  const stats = [
    { label: 'Pending Tasks', value: '12', icon: <ListTodo size={20} />, color: 'var(--accent-blue)', bg: 'rgba(59, 130, 246, 0.1)' },
    { label: 'Total Expenses', value: '₹45,200', icon: <Wallet size={20} />, color: 'var(--accent-pink)', bg: 'rgba(236, 72, 153, 0.1)' },
    { label: 'Active Projects', value: '4', icon: <TrendingUp size={20} />, color: 'var(--accent-purple)', bg: 'rgba(139, 92, 246, 0.1)' },
    { label: 'AI Generations', value: '128', icon: <Wand2 size={20} />, color: '#10b981', bg: 'rgba(16, 185, 129, 0.1)' },
  ];

  const quickLinks = [
    { name: 'Task Manager', path: '/tasks', desc: 'Manage your daily todos and appointments', icon: <ListTodo size={24} />, color: 'var(--accent-blue)' },
    { name: 'Expense Tracker', path: '/expenses', desc: 'Track your spending and budget', icon: <Wallet size={24} />, color: 'var(--accent-pink)' },
    { name: 'Finance Hub', path: '/finance', desc: 'View your investment portfolio', icon: <TrendingUp size={24} />, color: 'var(--accent-purple)' },
    { name: 'AI Prompter', path: '/prompt-generator', desc: 'Generate high-quality AI prompts', icon: <Wand2 size={24} />, color: '#10b981' },
  ];

  return (
    <div className="page-wrapper app-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Welcome Section */}
        <div style={{ marginBottom: '40px' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '8px' }}>
            Welcome back, <span className="text-gradient">{user?.displayName?.split(' ')[0] || 'User'}</span>
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
            Here's what's happening with your workspace today.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '20px',
          marginBottom: '40px'
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="glass-panel"
              style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}
            >
              <div style={{ 
                background: stat.bg, 
                color: stat.color, 
                padding: '12px', 
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {stat.icon}
              </div>
              <div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '4px' }}>{stat.label}</p>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{stat.value}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '30px' }}>
          {/* Quick Access */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LayoutDashboard size={20} className="text-blue-500" /> Quick Access
            </h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
              {quickLinks.map((link, i) => (
                <NavLink 
                  key={i} 
                  to={link.path}
                  className="glass-panel hover-lift"
                  style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px', textDecoration: 'none' }}
                >
                  <div style={{ color: link.color }}>{link.icon}</div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontWeight: 600, marginBottom: '4px' }}>{link.name}</h4>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', lineHeight: 1.4 }}>{link.desc}</p>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>

          {/* Recent Activity / Schedule */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock size={20} className="text-purple-500" /> Today's Schedule
            </h3>
            <div className="glass-panel" style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { time: '10:00 AM', event: 'Client Call - John Doe', type: 'Call', color: 'var(--accent-blue)' },
                { time: '02:30 PM', event: 'Marketing Strategy Review', type: 'Meeting', color: 'var(--accent-purple)' },
                { time: '04:00 PM', event: 'Update Portfolio UI', type: 'Dev', color: 'var(--accent-pink)' },
              ].map((item, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '15px', 
                  padding: '12px', 
                  background: 'rgba(255,255,255,0.03)', 
                  borderRadius: '12px',
                  borderLeft: `4px solid ${item.color}`
                }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', width: '70px', color: 'var(--text-secondary)' }}>{item.time}</div>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 500 }}>{item.event}</h4>
                    <span style={{ fontSize: '0.75rem', color: item.color, textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700 }}>{item.type}</span>
                  </div>
                  <CheckCircle2 size={18} className="text-gray-600" />
                </div>
              ))}
              
              <NavLink to="/tasks" style={{ 
                marginTop: 'auto', 
                textAlign: 'center', 
                color: 'var(--accent-blue)', 
                fontSize: '0.9rem', 
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '5px'
              }}>
                View all tasks <ChevronRight size={16} />
              </NavLink>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
