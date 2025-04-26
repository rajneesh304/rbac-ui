// components/DarkModeToggle.js
import { useState, useEffect } from 'react';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  // Initialize on component mount
  useEffect(() => {
    // Check if we're in the browser environment
    if (typeof window === 'undefined') return;
    
    // Check local storage or user preference
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial state based on saved preference or system preference
    const shouldBeDark = savedMode === 'true' || (savedMode === null && prefersDark);
    setIsDarkMode(shouldBeDark);
    
    // Apply the class to the body
    if (shouldBeDark) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');
    const newDarkModeState = document.body.classList.contains('dark');
    setIsDarkMode(newDarkModeState);
    localStorage.setItem('darkMode', newDarkModeState);
  };

  return (
    <button 
      onClick={toggleDarkMode}
      className="flex items-center justify-center w-12 h-6 rounded-full bg-gray-300 dark:bg-gray-600 relative transition-colors duration-300"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      <div 
        className={`absolute w-5 h-5 rounded-full bg-white transform transition-transform duration-300 ${
          isDarkMode ? 'translate-x-2.5' : '-translate-x-2.5'
        }`}
      ></div>
      <span className="sr-only">{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>
      
      {/* Sun icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-4 w-4 absolute left-1.5 text-yellow-500 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <circle cx="12" cy="12" r="5" fill="currentColor" />
        <line x1="12" y1="1" x2="12" y2="3" stroke="currentColor" strokeWidth="2" />
        <line x1="12" y1="21" x2="12" y2="23" stroke="currentColor" strokeWidth="2" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" stroke="currentColor" strokeWidth="2" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" stroke="currentColor" strokeWidth="2" />
        <line x1="1" y1="12" x2="3" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="21" y1="12" x2="23" y2="12" stroke="currentColor" strokeWidth="2" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" stroke="currentColor" strokeWidth="2" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" stroke="currentColor" strokeWidth="2" />
      </svg>
      
      {/* Moon icon */}
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        className={`h-4 w-4 absolute right-1.5 text-indigo-200 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`} 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
  );
}