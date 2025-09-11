import React, { useState } from 'react';
import { Palette, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { currentTheme, setTheme, themes } = useTheme();

  return (
    <>
      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-20 right-4 z-50 bg-white/90 backdrop-blur-md border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        style={{ backgroundColor: `${currentTheme.colors.surface}90` }}
      >
        <Palette className="h-5 w-5" style={{ color: currentTheme.colors.primary }} />
      </button>

      {/* Theme Selector Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Modal */}
          <div 
            className="relative bg-white rounded-2xl p-6 shadow-2xl max-w-md w-full mx-4 transform animate-in fade-in zoom-in duration-300"
            style={{ backgroundColor: currentTheme.colors.surface }}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 
                className="text-xl font-bold"
                style={{ color: currentTheme.colors.text }}
              >
                Choose Theme
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-5 w-5" style={{ color: currentTheme.colors.textSecondary }} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {themes.map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => {
                    setTheme(theme.name);
                    setIsOpen(false);
                  }}
                  className={`p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105 ${
                    currentTheme.name === theme.name 
                      ? 'border-current shadow-lg' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{ 
                    borderColor: currentTheme.name === theme.name ? theme.colors.primary : undefined 
                  }}
                >
                  <div className="flex space-x-2 mb-2">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.colors.primary }}
                    />
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.colors.accent }}
                    />
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{ backgroundColor: theme.colors.secondary }}
                    />
                  </div>
                  <p 
                    className="text-sm font-medium"
                    style={{ color: currentTheme.colors.text }}
                  >
                    {theme.name}
                  </p>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeSelector;