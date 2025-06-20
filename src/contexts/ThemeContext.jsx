import React, { createContext, useState, useEffect, useContext } from 'react';

// 1. Create Context
const ThemeContext = createContext();

// 2. Create a custom hook to use the theme context
export const useTheme = () => {
  return useContext(ThemeContext);
};

// 3. Create the Provider component
export const ThemeProvider = ({ children }) => {
  // State to hold the current theme, defaulting to 'light' or from localStorage
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('flyaw_theme');
    return storedTheme ? storedTheme : 'light'; // Default to light theme
  });

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Effect to update localStorage and the class on the HTML element when the theme changes
  useEffect(() => {
    localStorage.setItem('flyaw_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Value to be provided by the context
  const value = {
    theme,
    toggleTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};