import React, { createContext, useContext, useState, useEffect } from 'react';

interface Theme {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
  };
}

const themes: Theme[] = [
  {
    name: 'Professional Blue',
    colors: {
      primary: 'rgb(30, 58, 138)', // blue-900
      secondary: 'rgb(55, 65, 81)', // gray-700
      accent: 'rgb(249, 115, 22)', // orange-500
      background: 'rgb(249, 250, 251)', // gray-50
      surface: 'rgb(255, 255, 255)', // white
      text: 'rgb(17, 24, 39)', // gray-900
      textSecondary: 'rgb(107, 114, 128)', // gray-500
    }
  },
  {
    name: 'Modern Purple',
    colors: {
      primary: 'rgb(88, 28, 135)', // purple-900
      secondary: 'rgb(55, 65, 81)', // gray-700
      accent: 'rgb(236, 72, 153)', // pink-500
      background: 'rgb(250, 245, 255)', // purple-50
      surface: 'rgb(255, 255, 255)', // white
      text: 'rgb(17, 24, 39)', // gray-900
      textSecondary: 'rgb(107, 114, 128)', // gray-500
    }
  },
  {
    name: 'Tech Green',
    colors: {
      primary: 'rgb(20, 83, 45)', // green-900
      secondary: 'rgb(55, 65, 81)', // gray-700
      accent: 'rgb(34, 197, 94)', // green-500
      background: 'rgb(240, 253, 244)', // green-50
      surface: 'rgb(255, 255, 255)', // white
      text: 'rgb(17, 24, 39)', // gray-900
      textSecondary: 'rgb(107, 114, 128)', // gray-500
    }
  },
  {
    name: 'Dark Mode',
    colors: {
      primary: 'rgb(59, 130, 246)', // blue-500
      secondary: 'rgb(75, 85, 99)', // gray-600
      accent: 'rgb(249, 115, 22)', // orange-500
      background: 'rgb(17, 24, 39)', // gray-900
      surface: 'rgb(31, 41, 55)', // gray-800
      text: 'rgb(255, 255, 255)', // white
      textSecondary: 'rgb(156, 163, 175)', // gray-400
    }
  }
];

interface ThemeContextType {
  currentTheme: Theme;
  setTheme: (themeName: string) => void;
  themes: Theme[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>(themes[0]);

  const setTheme = (themeName: string) => {
    const theme = themes.find(t => t.name === themeName);
    if (theme) {
      setCurrentTheme(theme);
      localStorage.setItem('leonaprom-theme', themeName);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('leonaprom-theme');
    if (savedTheme) {
      const theme = themes.find(t => t.name === savedTheme);
      if (theme) {
        setCurrentTheme(theme);
      }
    }
  }, []);

  useEffect(() => {
    // Apply CSS custom properties
    const root = document.documentElement;
    Object.entries(currentTheme.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
};