// no default React import needed with jsx: react-jsx
import { Camera, Shield, Smartphone, Settings, Users, Clock } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import AnimatedCard from './AnimatedCard';
import { useQuoteModal } from './QuoteModal';

const Services = () => {
  const { currentTheme } = useTheme();
  const { open } = useQuoteModal();

  const services = [
    {
      icon: Camera,
      title: "Vidéosurveillance",
      description: "Systèmes de caméras IP et analogiques pour une surveillance optimale de vos locaux.",
      features: ["Caméras HD/4K", "Vision nocturne", "Accès mobile", "Stockage cloud"]
    },
    {
      icon: Shield,
      title: "Systèmes d'Alarme",
      description: "Solutions d'alarme intelligentes pour détecter et prévenir les intrusions.",
      features: ["Détecteurs de mouvement", "Sirènes", "Notification instantanée", "Application mobile"]
    },
    {
      icon: Smartphone,
      title: "Contrôle d'Accès",
      description: "Gérez l'accès à vos locaux avec des systèmes modernes et sécurisés.",
      features: ["Badges RFID", "Code PIN", "Biométrie", "Historique des accès"]
    },
    {
      icon: Settings,
      title: "Installation & Maintenance",
      description: "Service professionnel d'installation et de maintenance de tous vos équipements.",
      features: ["Installation certifiée", "Maintenance préventive", "Support technique", "Garantie étendue"]
    },
    {
      icon: Users,
      title: "Consultation Sécurité",
      description: "Analyse complète de vos besoins en sécurité avec recommandations personnalisées.",
      features: ["Audit sécurité", "Étude de risques", "Plan de sécurité", "Formation utilisateur"]
    },
    {
      icon: Clock,
      title: "Support 24/7",
      description: "Assistance technique disponible 24h/24 et 7j/7 pour une tranquillité d'esprit totale.",
      features: ["Hotline dédiée", "Intervention rapide", "Diagnostic à distance", "Maintenance d'urgence"]
    }
  ];

  return (
    <section 
      id="services" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(45deg, ${currentTheme.colors.primary} 25%, transparent 25%), linear-gradient(-45deg, ${currentTheme.colors.primary} 25%, transparent 25%), linear-gradient(45deg, transparent 75%, ${currentTheme.colors.primary} 75%), linear-gradient(-45deg, transparent 75%, ${currentTheme.colors.primary} 75%)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 
            className="text-4xl lg:text-6xl font-bold mb-6"
            style={{ color: currentTheme.colors.text }}
          >
            Nos Services
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: currentTheme.colors.accent }}
          />
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            Des solutions complètes de sécurité adaptées à vos besoins spécifiques, 
            avec un service professionnel de qualité supérieure.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <AnimatedCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              className="shadow-xl border animate-in fade-in slide-in-from-bottom duration-700"
              style={{
                borderColor: `${currentTheme.colors.primary}20`,
                animationDelay: `${index * 200}ms`
              }}
              delay={index * 200}
            />
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={() => open({ source: 'services-section' })}
            className="px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
            style={{ backgroundColor: currentTheme.colors.accent, color: '#fff' }}
          >
            Demande Devis
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;