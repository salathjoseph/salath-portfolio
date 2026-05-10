import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Wallet, Calculator, Menu, X } from 'lucide-react';
import logoImage from '../assets/logo.png';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Portfolio', path: '/', icon: <LayoutDashboard size={18} /> },
    { name: 'Expenses', path: '/expenses', icon: <Wallet size={18} /> },
    { name: 'EMI Calculator', path: '/emi-calculator', icon: <Calculator size={18} /> },
  ];

  return (
    <header 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        padding: isScrolled ? '15px 0' : '25px 0',
        transition: 'all 0.3s ease',
        background: isScrolled ? 'rgba(15, 23, 42, 0.85)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent'
      }}
    >
      <div className="app-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <NavLink to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img 
            src={logoImage}
            alt="Salath.dev Logo" 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              objectFit: 'cover'
            }}
          />
          <span style={{ fontWeight: 700, fontSize: '1.2rem', letterSpacing: '1px' }}>
            SALATH<span className="text-gradient">.DEV</span>
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', gap: '30px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                transition: 'color 0.2s',
                position: 'relative'
              })}
            >
              {({ isActive }) => (
                <>
                  <span style={{ color: isActive ? 'var(--accent-blue)' : 'inherit' }}>
                    {link.icon}
                  </span>
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      style={{
                        position: 'absolute',
                        bottom: '-8px',
                        left: 0,
                        right: 0,
                        height: '2px',
                        background: 'var(--accent-gradient)',
                        borderRadius: '2px'
                      }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-menu-btn"
          style={{ 
            background: 'none', 
            border: 'none', 
            color: 'var(--text-primary)',
            cursor: 'pointer',
            display: 'block' // Will be hidden in CSS for desktop
          }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Dropdown */}
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-panel"
            style={{
              position: 'absolute',
              top: '100%',
              left: '20px',
              right: '20px',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              marginTop: '10px'
            }}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  fontSize: '1.1rem',
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                  padding: '10px',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(255,255,255,0.05)' : 'transparent'
                })}
              >
                <span style={{ color: 'var(--accent-blue)' }}>{link.icon}</span>
                {link.name}
              </NavLink>
            ))}
          </motion.div>
        )}
      </div>
      
      {/* Quick responsive styles for navbar */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </header>
  );
}
