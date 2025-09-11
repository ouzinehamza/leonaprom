import { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import BrandLogo from './BrandLogo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Produits', href: '/#products' },
  { name: 'À Propos', href: '/about' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header 
      className={`fixed w-full z-40 transition-all duration-500 ${
        isScrolled ? 'shadow-2xl backdrop-blur-xl' : 'backdrop-blur-md'
      }`}
      style={{
        backgroundColor: isScrolled 
          ? currentTheme.colors.surface 
          : `${currentTheme.colors.surface}95`
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <BrandLogo className="group cursor-pointer" size={220} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 font-medium transition-all duration-300 rounded-lg hover:scale-105 group"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                <span 
                  className="relative z-10 group-hover:text-white transition-colors duration-300"
                >
                  {item.name}
                </span>
                <div 
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100"
                  style={{ backgroundColor: currentTheme.colors.primary }}
                />
              </a>
            ))}
          </nav>

      {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <div 
              className="flex items-center space-x-2 text-sm transition-colors duration-300 hover:scale-105"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              <Phone className="h-4 w-4" style={{ color: currentTheme.colors.accent }} />
        <span>+212 778 353 067 / +212 778 353 066</span>
            </div>
            <div 
              className="flex items-center space-x-2 text-sm transition-colors duration-300 hover:scale-105"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              <Mail className="h-4 w-4" style={{ color: currentTheme.colors.accent }} />
        <span>contact@leonaprom.com</span>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-3 rounded-xl transition-all duration-300 hover:scale-110"
            style={{ backgroundColor: `${currentTheme.colors.primary}10` }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? 
              <X className="h-6 w-6" style={{ color: currentTheme.colors.primary }} /> : 
              <Menu className="h-6 w-6" style={{ color: currentTheme.colors.primary }} />
            }
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-500 overflow-hidden ${
        isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}
      style={{ 
        backgroundColor: currentTheme.colors.surface,
        borderTop: `1px solid ${currentTheme.colors.primary}20`
      }}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-4 py-3 rounded-xl transition-all duration-300 hover:scale-105 transform"
                style={{ 
                  color: currentTheme.colors.textSecondary,
                  animationDelay: `${index * 100}ms`,
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = `${currentTheme.colors.primary}10`;
                  e.currentTarget.style.color = currentTheme.colors.primary;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = currentTheme.colors.textSecondary;
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
      </div>
    </header>
  );
};

export default Header;