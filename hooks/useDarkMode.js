// hooks/useDarkMode.js
import { useEffect, useState } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize on component mount
  useEffect(() => {
    // Check local storage for saved preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Initialize based on saved preference or system preference
    const shouldBeDark = savedMode === 'true' || (savedMode === null && prefersDark);
    
    if (shouldBeDark) {
      document.body.classList.add('dark');
      setIsDarkMode(true);
    }
  }, []);

  // Toggle function
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    const isDark = document.body.classList.contains('dark');
    setIsDarkMode(isDark);
    localStorage.setItem('darkMode', isDark);
  };

  return { isDarkMode, toggleDarkMode };
}