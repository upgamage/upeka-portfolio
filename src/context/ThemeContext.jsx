import { createContext, useContext, useEffect, useMemo, useState } from 'react';

// Create a context to share the theme across the application.
const ThemeContext = createContext(null);

// Theme provider: wraps the application and manages theme state.
export function ThemeProvider({ children }) {
  // Restore the previously selected theme.
  // Light is the default theme for first-time visitors.
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');

    return savedTheme === 'dark' ? 'dark' : 'light';
  });

  // Apply the theme to the HTML document and persist the preference.
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  // Switch between light and dark themes.
  const toggleTheme = () => {
    setTheme((currentTheme) =>
      currentTheme === 'light' ? 'dark' : 'light'
    );
  };

  // Share theme information with consuming components.
  const contextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Custom hook: allows components to access the theme.
export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }

  return context;
}