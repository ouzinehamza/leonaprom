import { useTheme } from './ThemeProvider';

interface BrandLogoProps {
  className?: string;
  showTagline?: boolean;
  /**
   * Force a specific variant regardless of theme background.
   * - 'blue' for light backgrounds
   * - 'white' for dark backgrounds
   */
  variant?: 'blue' | 'white';
  /** Preferred pixel height (defaults 40). */
  size?: number;
}

/**
 * Theme-aware company logo renderer. Expects the following files in /public/assets/leona:
 * - logo-blue.svg (colored logo on light backgrounds)
 * - logo-white.svg (white logo for dark backgrounds)
 */
const BrandLogo: React.FC<BrandLogoProps> = ({ className = '', showTagline = false, variant, size = 40 }) => {
  const { currentTheme } = useTheme();

  const isDarkTheme = currentTheme.name === 'Dark Mode' || currentTheme.colors.background === 'rgb(17, 24, 39)';
  const resolvedVariant: 'blue' | 'white' = variant ? variant : (isDarkTheme ? 'white' : 'blue');

  // Exact filenames from provided folder (black/neutral and white variants)
  // Light themes → black logo (logo v3-01.png). Dark theme → white logo (logo png 2-01.png).
  const fileByTheme: Record<string, string> = {
    'Professional Blue': 'logo v3-01.png',
    'Modern Purple': 'logo v3-01.png',
    'Tech Green': 'logo v3-01.png',
    'Dark Mode': 'logo png 2-01.png',
  };

  // Determine file, allowing variant prop to override theme mapping
  let themed = fileByTheme[currentTheme.name] || (resolvedVariant === 'white' ? 'logo png 2-01.png' : 'logo v3-01.png');
  if (variant === 'white') themed = 'logo png 2-01.png';
  if (variant === 'blue') themed = 'logo v3-01.png';
  const src = `/assets/leona/${themed}`;

  return (
    <div className={`flex items-center space-x-3 ${className}`}> 
      <img
        src={src}
        alt="Leona Prom - Your Cybersecurity Partner"
        style={{ height: size, width: 'auto' }}
        className="object-contain select-none"
      />
      {!showTagline ? null : (
        <span
          className="text-xs sm:text-sm font-medium tracking-wide opacity-80"
          style={{ color: currentTheme.colors.textSecondary }}
        >
          YOUR CYBERSECURITY PARTNER
        </span>
      )}
    </div>
  );
};

export default BrandLogo;
