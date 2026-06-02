import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './context/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Wrap the App component to give it access to Global State */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
