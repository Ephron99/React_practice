import { NavLink } from 'react-router-dom'; // NEW IMPORT
import { ThemeContext } from './context/ThemeContext';
import { useContext } from 'react';

export default function Sidebar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <aside className="sidebar">
      <div className="branding">
        <h2>EVS</h2>
      </div>
      
      <nav className="main-nav">
        <p>MAIN</p>
        <ul>
          {/* Replace <li> elements with <NavLink> */}
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>
              Dashboard
            </NavLink>
          </li>
        </ul>
        
        <p>SCANNING</p>
        <ul>
          <li>
            <NavLink to="/scanning" className={({ isActive }) => isActive ? "active" : ""}>
              Scanning
            </NavLink>
          </li>
        </ul>
        
        <p>HANDOVER</p>
        <ul>
          <li>
            <NavLink to="/handover" className={({ isActive }) => isActive ? "active" : ""}>
              Handover
            </NavLink>
          </li>
        </ul>
        
        <p>EXIT</p>
        <ul>
          <li>Logout</li>
        </ul>
      </nav>

      {/* UPDATE THIS SECTION AT THE BOTTOM */}
      <div className="theme-toggle">
        <button 
          onClick={() => toggleTheme('light')}
          style={{ opacity: theme === 'light' ? 1 : 0.5 }}
        >
          ☀️ Light
        </button>
        <button 
          onClick={() => toggleTheme('dark')}
          style={{ opacity: theme === 'dark' ? 1 : 0.5 }}
        >
          🌙 Dark
        </button>
      </div>
    </aside>
  );
}