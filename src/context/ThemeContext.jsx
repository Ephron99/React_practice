// src/context/ThemeContext.jsx
import { createContext, useState } from 'react';

// 1. Create the Context object
export const ThemeContext = createContext();

// 2. Create the Provider component
export function ThemeProvider({ children }) {
  // We manage the state here, at the highest level
  const [theme, setTheme] = useState('light');

  const toggleTheme = (selectedTheme) => {
    setTheme(selectedTheme);
  };

  return (
    // 3. Broadcast the 'theme' value and the 'toggleTheme' function
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}