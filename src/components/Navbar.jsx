// src/components/Navbar.jsx
import { Link, useLocation } from 'react-router';
import { useTheme } from '../context/ThemeContext.jsx';
// 🚀 FIXED: Removed the accidental string expression to restore standard valid JavaScript paths
import { FaSun, FaMoon } from 'react-icons/fa'; 

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  const getLinkStyle = (path) => ({
    color: location.pathname === path ? 'var(--accent-blue)' : 'var(--text-muted)',
    textDecoration: 'none',
    fontWeight: location.pathname === path ? '600' : '400',
    fontSize: '0.95rem',
    transition: 'color 0.2s ease',
  });

  return (
    <nav style={{
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1.25rem 0', 
      borderBottom: '1px solid var(--border-color)', 
      marginBottom: '2.5rem'
    }} className="nav-links">
      
      <Link to="/" style={{ 
        color: 'var(--text-main)', 
        textDecoration: 'none', 
        fontWeight: '700', 
        fontSize: '1.25rem',
        letterSpacing: '-0.5px'
      }}>
        spnraju<span style={{ color: 'var(--accent-blue)' }}>.dev</span>
      </Link>

      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <Link to="/" style={getLinkStyle('/')}>Home</Link>
        <Link to="/timeline" style={getLinkStyle('/timeline')}>Timeline</Link>
        <Link to="/projects" style={getLinkStyle('/projects')}>Projects</Link>
        <Link to="/contact" style={getLinkStyle('/contact')}>Contact</Link>
        
        {/* Sleek Minimalist Theme Switcher Button */}
        <button 
          onClick={toggleTheme}
          onTouchEnd={(e) => {
            e.preventDefault(); 
            toggleTheme();
          }}
          style={{
            background: 'none',
            color: theme === 'dark' ? '#f59e0b' : '#475569', 
            border: 'none',
            padding: '0.5rem',
            borderRadius: '50%',
            cursor: 'pointer',
            fontSize: '1.25rem',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            transition: 'background-color 0.2s ease, transform 0.2s ease',
            touchAction: 'manipulation',
            webkitTapHighlightColor: 'transparent',
            outline: 'none'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--bg-card)';
            e.currentTarget.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {theme === 'dark' ? <FaSun size={20} /> : <FaMoon size={20} />}
        </button>
      </div>
    </nav>
  );
}
