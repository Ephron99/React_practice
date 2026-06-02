import { useState, useContext } from 'react'; // ADD useContext
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContext } from './context/ThemeContext'; // IMPORT the context
import './App.css'; 

import Sidebar from './Sidebar';
import ScanningPage from './pages/ScanningPage';
import DashboardPage from './pages/DashboardPage';
import HandoverPage from './pages/HandoverPage';

export default function App() {
  const [recentTaps, setRecentTaps] = useState([]);
  
  // REACH UP AND GRAB THE THEME STATE!
  const { theme } = useContext(ThemeContext); 

  const handleAddNewTap = (newRecord) => {
    setRecentTaps([newRecord, ...recentTaps]);
  };

  return (
    <Router>
      {/* Dynamically apply a CSS class based on the global theme! */}
      <div className={`evs-layout ${theme === 'dark' ? 'theme-dark' : 'theme-light'}`}>
        <Sidebar />
        <main className="workspace">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/scanning" element={<ScanningPage onAddRecord={handleAddNewTap} records={recentTaps} />} />
            <Route path="/handover" element={<HandoverPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}