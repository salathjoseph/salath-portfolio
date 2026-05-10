import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import logoImage from '../../assets/logo.png';

export default function Login() {
  const { signInWithGoogle } = useAuth();

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh', 
      padding: 20,
      background: 'var(--bg-color)',
      backgroundImage: 'radial-gradient(circle at top right, rgba(59, 130, 246, 0.1), transparent 400px), radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.1), transparent 400px)'
    }}>
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="glass-panel"
        style={{ 
          width: '100%', 
          maxWidth: 420, 
          padding: '48px 32px', 
          textAlign: 'center', 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          background: 'rgba(30, 41, 59, 0.6)'
        }}
      >
        <img src={logoImage} alt="Logo" style={{ width: 80, height: 80, borderRadius: 20, marginBottom: 24, boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }} />
        <h1 style={{ fontSize: '1.8rem', marginBottom: 12, fontWeight: 700 }}>Welcome Back</h1>
        <p style={{ color: 'var(--text-secondary)', marginBottom: 36, lineHeight: 1.5 }}>
          Sign in to access your secure portfolio dashboard and private workspace.
        </p>
        
        <button 
          onClick={signInWithGoogle}
          className="btn btn-primary"
          style={{ 
            width: '100%', 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            gap: 12, 
            padding: '14px', 
            fontSize: '1.05rem',
            borderRadius: 12,
            background: 'var(--surface-color)',
            border: '1px solid var(--border-color)',
            color: 'var(--text-primary)',
            transition: 'all 0.2s',
            cursor: 'pointer'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--surface-color-hover)';
            e.currentTarget.style.borderColor = 'var(--accent-blue)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--surface-color)';
            e.currentTarget.style.borderColor = 'var(--border-color)';
          }}
        >
          <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style={{ width: 20, height: 20 }} />
          Continue with Google
        </button>
      </motion.div>
    </div>
  );
}
