import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutDashboard, Wallet, Calculator, Menu, X, Wand2, TrendingUp, Image as ImageIcon, ListTodo, ChevronDown, Grid, LogOut } from 'lucide-react';
import logoImage from '../assets/logo.png';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopDropdownOpen, setIsDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const { logout, user } = useAuth();
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const profileDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDesktopDropdownOpen(false);
    setIsProfileDropdownOpen(false);
  }, [location]);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDesktopDropdownOpen(false);
      }
      if (profileDropdownRef.current && !profileDropdownRef.current.contains(event.target as Node)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: 'Dashboard', path: '/', icon: <LayoutDashboard size={18} /> },
    { name: 'Portfolio', path: '/portfolio', icon: <Grid size={18} /> },
    { name: 'Tasks', path: '/tasks', icon: <ListTodo size={18} /> },
  ];

  const appLinks = [
    { name: 'Expenses', path: '/expenses', icon: <Wallet size={18} /> },
    { name: 'EMI Calculator', path: '/emi-calculator', icon: <Calculator size={18} /> },
    { name: 'Financial Platform', path: '/finance', icon: <TrendingUp size={18} /> },
    { name: 'Prompt Generator', path: '/prompt-generator', icon: <Wand2 size={18} /> },
    { name: 'Advanced Image', path: '/advanced-image-prompt', icon: <ImageIcon size={18} /> },
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
        <nav style={{ display: 'none', gap: '30px', alignItems: 'center' }} className="desktop-nav">
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

          {/* Desktop Apps Dropdown */}
          <div 
            ref={dropdownRef}
            style={{ position: 'relative' }}
          >
            <button 
              onClick={() => setIsDesktopDropdownOpen(!isDesktopDropdownOpen)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--text-primary)';
              }}
              onMouseLeave={(e) => {
                if (!isDesktopDropdownOpen) e.currentTarget.style.color = 'var(--text-secondary)';
              }}
            >
              <span style={{ color: 'inherit' }}><Grid size={18} /></span>
              More Apps
              <ChevronDown size={14} style={{ transform: isDesktopDropdownOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>

            <AnimatePresence>
              {isDesktopDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.15 }}
                  className="glass-panel"
                  style={{
                    position: 'absolute',
                    top: 'calc(100% + 15px)',
                    right: 0,
                    width: '240px',
                    padding: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}
                >
                  {appLinks.map((link) => (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      style={({ isActive }) => ({
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '0.95rem',
                        fontWeight: isActive ? 600 : 500,
                        color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        background: isActive ? 'rgba(255,255,255,0.05)' : 'transparent',
                        transition: 'all 0.2s'
                      })}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                        e.currentTarget.style.color = 'var(--text-primary)';
                      }}
                      onMouseLeave={(e) => {
                        if (!e.currentTarget.className.includes('active')) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = 'var(--text-secondary)';
                        }
                      }}
                    >
                      <span style={{ color: 'var(--accent-blue)' }}>{link.icon}</span>
                      {link.name}
                    </NavLink>
                  ))}
                  
                  <div style={{ height: 1, background: 'var(--border-color)', margin: '4px 0' }} />
                  
                  <button
                    onClick={logout}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      fontSize: '0.95rem',
                      fontWeight: 500,
                      color: 'var(--text-secondary)',
                      padding: '10px 12px',
                      borderRadius: '8px',
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      width: '100%',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                      e.currentTarget.style.color = 'var(--text-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    <span style={{ color: 'var(--accent-pink)' }}><LogOut size={18} /></span>
                    Sign Out
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* User Profile Dropdown */}
          {user && (
            <div ref={profileDropdownRef} style={{ position: 'relative', marginLeft: '10px' }}>
              <button 
                onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
                style={{
                  background: 'transparent',
                  border: '2px solid var(--glass-border)',
                  borderRadius: '50%',
                  padding: 0,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  width: '36px',
                  height: '36px',
                  transition: 'border-color 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-blue)'}
                onMouseLeave={(e) => {
                  if (!isProfileDropdownOpen) e.currentTarget.style.borderColor = 'var(--glass-border)';
                }}
              >
                {user.photoURL ? (
                  <img src={user.photoURL} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} referrerPolicy="no-referrer" />
                ) : (
                  <div style={{ width: '100%', height: '100%', background: 'var(--accent-blue)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>
                    {user.email?.charAt(0).toUpperCase() || 'U'}
                  </div>
                )}
              </button>

              <AnimatePresence>
                {isProfileDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.15 }}
                    className="glass-panel"
                    style={{
                      position: 'absolute',
                      top: 'calc(100% + 15px)',
                      right: 0,
                      width: '220px',
                      padding: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <div style={{ padding: '4px 8px', marginBottom: '4px' }}>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {user.displayName || 'User'}
                      </div>
                      <div style={{ color: 'var(--text-secondary)', fontSize: '0.8rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {user.email}
                      </div>
                    </div>
                    
                    <div style={{ height: 1, background: 'var(--border-color)' }} />
                    
                    <button
                      onClick={logout}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        color: 'var(--accent-pink)',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                        width: '100%',
                        textAlign: 'left'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'rgba(239, 68, 68, 0.1)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                      }}
                    >
                      <LogOut size={16} />
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
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
            
            <button
              onClick={logout}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                fontSize: '1.1rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                padding: '10px',
                borderRadius: '8px',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                textAlign: 'left',
                width: '100%'
              }}
            >
              <span style={{ color: 'var(--accent-pink)' }}><LogOut size={18} /></span>
              Sign Out
            </button>
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
