// no default React import needed with jsx: react-jsx
import { Shield, ArrowRight, CheckCircle, Zap, Star } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useQuoteModal } from './QuoteModal';

const Hero = () => {
  const { currentTheme } = useTheme();
  const { open } = useQuoteModal();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${currentTheme.colors.background}, ${currentTheme.colors.surface})`
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              backgroundColor: i % 2 === 0 ? currentTheme.colors.primary : currentTheme.colors.accent,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, ${currentTheme.colors.primary} 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <div className="space-y-4">
              <div 
                className="inline-flex items-center space-x-3 px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-500 hover:scale-105 animate-in fade-in slide-in-from-left duration-1000"
                style={{
                  backgroundColor: `${currentTheme.colors.primary}15`,
                  color: currentTheme.colors.primary,
                  borderColor: `${currentTheme.colors.primary}30`
                }}
              >
                <Zap className="h-5 w-5 animate-pulse" />
                <span>Solutions de Sécurité Avancées</span>
                <Star className="h-4 w-4" />
              </div>
              
              <h1 
                className="text-5xl lg:text-7xl font-bold leading-tight animate-in fade-in slide-in-from-left duration-1000 delay-300"
                style={{ color: currentTheme.colors.text }}
              >
                Sécurisez Votre 
                <span 
                  className="block bg-gradient-to-r bg-clip-text text-transparent animate-pulse"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
                  }}
                >
                  Environnement
                </span>
                <span className="block">avec Leonaprom</span>
              </h1>
              
              <p 
                className="text-xl leading-relaxed animate-in fade-in slide-in-from-left duration-1000 delay-500"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                Spécialiste en vente et installation d'équipements de sécurité. 
                Nous offrons des solutions technologiques avancées pour protéger ce qui vous tient à cœur.
              </p>
            </div>

            <div className="space-y-4 animate-in fade-in slide-in-from-left duration-1000 delay-700">
              {[
                'Installation professionnelle garantie',
                'Support technique 24/7',
                'Équipements de marques reconnues'
              ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-2"
              >
                <div className="relative">
                  <CheckCircle 
                    className="h-6 w-6 flex-shrink-0 transition-all duration-300 group-hover:scale-110" 
                    style={{ color: currentTheme.colors.accent }}
                  />
                  <div 
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                    style={{ boxShadow: `0 0 15px ${currentTheme.colors.accent}` }}
                  />
                </div>
                <span 
                  className="transition-colors duration-300"
                  style={{ color: currentTheme.colors.textSecondary }}
                >
                  {feature}
                </span>
              </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-left duration-1000 delay-1000">
              <button 
                onClick={() => open({ source: 'hero' })}
                className="relative overflow-hidden text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 flex items-center justify-center space-x-2 shadow-2xl hover:shadow-3xl transform hover:-translate-y-2 hover:scale-105 group"
                style={{ backgroundColor: currentTheme.colors.primary }}
              >
                {/* Button Background Animation */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
                  }}
                />
                <span className="relative z-10">Demander un Devis</span>
                <ArrowRight className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                
                {/* Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                     style={{ boxShadow: `0 0 30px ${currentTheme.colors.primary}` }} />
              </button>
              
              <button 
                onClick={() => open({ source: 'hero-secondary' })}
                className="border-2 px-8 py-4 rounded-2xl font-semibold transition-all duration-500 hover:scale-105 backdrop-blur-md relative overflow-hidden group"
                style={{ 
                  borderColor: currentTheme.colors.primary,
                  color: currentTheme.colors.primary,
                  backgroundColor: `${currentTheme.colors.primary}05`
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  style={{ backgroundColor: currentTheme.colors.primary }}
                />
                <span>Demander un Devis</span>
                <span className="relative z-10">Nos Produits</span>
              </button>
            </div>
          </div>

      {/* Right Content - Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-500">
            <div className="relative z-10 group">
              <img 
                src="public/assets/leona/prix-terrebonne.jpg" 
                alt="Installation d’alarmes et caméras de surveillance"
                className="rounded-3xl shadow-2xl w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-105"
                onError={(e)=>{(e.currentTarget as HTMLImageElement).src='public/assets/leona/alarme-à-Saint-Grégoire.jpg';}}
              />
              
              {/* Image Overlay */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.colors.primary}40, ${currentTheme.colors.accent}40)`
                }}
              />
              
              {/* Floating Badge */}
              <div 
                className="absolute -top-4 -right-4 backdrop-blur-md rounded-2xl p-4 shadow-xl border transition-all duration-500 hover:scale-110 animate-bounce"
                style={{
                  backgroundColor: `${currentTheme.colors.surface}90`,
                  borderColor: `${currentTheme.colors.primary}30`
                }}
              >
                <Shield 
                  className="h-8 w-8" 
                  style={{ color: currentTheme.colors.primary }}
                />
              </div>
              {/* Caption */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white px-4 py-3 rounded-xl text-sm shadow-lg">
                Installation d’alarmes et caméras – profitez d’une tranquillité d’esprit absolue.
              </div>
            </div>
            
            {/* Decorative elements */}
            <div 
              className="absolute -top-8 -right-8 w-32 h-32 rounded-full opacity-20 animate-pulse blur-xl"
              style={{ backgroundColor: currentTheme.colors.accent }}
            />
            <div 
              className="absolute -bottom-8 -left-8 w-40 h-40 rounded-full opacity-20 animate-pulse delay-1000 blur-xl"
              style={{ backgroundColor: currentTheme.colors.primary }}
            />
            
            {/* Glow Effect */}
            <div 
              className="absolute inset-0 rounded-3xl opacity-30 blur-2xl"
              style={{
                background: `linear-gradient(135deg, ${currentTheme.colors.primary}20, ${currentTheme.colors.accent}20)`
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;