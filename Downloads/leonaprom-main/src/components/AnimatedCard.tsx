import { useState } from 'react';
import type { LucideIcon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

interface AnimatedCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features?: string[];
  image?: string;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  icon: Icon,
  title,
  description,
  features,
  image,
  className = '',
  delay = 0,
  style
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const { currentTheme } = useTheme();

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl transition-all duration-700 hover:scale-105 hover:-translate-y-2 ${className}`}
      style={{
        backgroundColor: currentTheme.colors.surface,
        animationDelay: `${delay}ms`,
        ...style
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Gradient */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        style={{
          background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
        }}
      />

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-2 h-2 rounded-full opacity-0 group-hover:opacity-30 transition-all duration-1000`}
            style={{
              backgroundColor: currentTheme.colors.accent,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 200}ms`,
              transform: isHovered ? `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)` : 'translate(0, 0)'
            }}
          />
        ))}
      </div>

      {/* Image Section */}
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div 
            className="absolute inset-0 transition-opacity duration-500"
            style={{
              background: `linear-gradient(135deg, ${currentTheme.colors.primary}20, ${currentTheme.colors.accent}20)`,
              opacity: isHovered ? 1 : 0
            }}
          />
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12">
            <Icon className="h-6 w-6" style={{ color: currentTheme.colors.primary }} />
          </div>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 relative z-10">
        {!image && (
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
               style={{ backgroundColor: `${currentTheme.colors.primary}15` }}>
            <Icon className="h-8 w-8 transition-colors duration-300" style={{ color: currentTheme.colors.primary }} />
          </div>
        )}
        
        <h3 
          className="text-xl font-bold mb-4 transition-colors duration-300"
          style={{ color: currentTheme.colors.text }}
        >
          {title}
        </h3>
        
        <p 
          className="mb-6 transition-colors duration-300"
          style={{ color: currentTheme.colors.textSecondary }}
        >
          {description}
        </p>
        
        {features && (
          <ul className="space-y-2 mb-6">
            {features.map((feature, index) => (
              <li 
                key={index} 
                className="flex items-center space-x-2 transform transition-all duration-300"
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{ 
                    backgroundColor: currentTheme.colors.accent,
                    transform: isHovered ? 'scale(1.2)' : 'scale(1)'
                  }}
                />
                <span 
                  className="text-sm transition-colors duration-300"
                  style={{ color: currentTheme.colors.textSecondary }}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Animated Border */}
        <div 
          className="absolute bottom-0 left-0 h-1 transition-all duration-500 rounded-full"
          style={{
            backgroundColor: currentTheme.colors.accent,
            width: isHovered ? '100%' : '0%'
          }}
        />
      </div>

      {/* Glow Effect */}
      <div 
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 0 30px ${currentTheme.colors.primary}40`
        }}
      />
    </div>
  );
};

export default AnimatedCard;