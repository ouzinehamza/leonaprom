// no default React import needed with jsx: react-jsx
import { Award, Users, Clock, ThumbsUp } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const About = () => {
  const { currentTheme } = useTheme();

  const stats = [
    { icon: Award, label: "Années d'Expérience", value: "15+" },
    { icon: Users, label: "Clients Satisfaits", value: "2000+" },
    { icon: Clock, label: "Projets Réalisés", value: "5000+" },
    { icon: ThumbsUp, label: "Taux de Satisfaction", value: "98%" }
  ];

  const features = [
    {
      title: "Expertise Technique",
      description: "Notre équipe possède une expertise approfondie dans les technologies de sécurité les plus récentes."
    },
    {
      title: "Service Personnalisé",
      description: "Chaque projet est unique. Nous adaptons nos solutions à vos besoins spécifiques."
    },
    {
      title: "Support Continu",
      description: "Un accompagnement de qualité, de l'installation à la maintenance, pour votre tranquillité d'esprit."
    },
    {
      title: "Garantie Qualité",
      description: "Tous nos équipements et installations sont garantis pour vous assurer une protection durable."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-10 animate-pulse blur-3xl"
          style={{ backgroundColor: currentTheme.colors.primary }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-10 animate-pulse delay-1000 blur-3xl"
          style={{ backgroundColor: currentTheme.colors.accent }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <h2 
              className="text-4xl lg:text-6xl font-bold mb-8"
              style={{ color: currentTheme.colors.text }}
            >
              À Propos de 
              <span 
                className="block bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
                }}
              >
                Leonaprom
              </span>
            </h2>
            <p 
              className="text-xl mb-10 leading-relaxed"
              style={{ color: currentTheme.colors.textSecondary }}
            >
              Depuis plus de 15 ans, Leonaprom est votre partenaire de confiance pour tous vos besoins 
              en matière de sécurité. Nous nous spécialisons dans la vente et l'installation d'équipements 
              de sécurité de haute qualité pour protéger ce qui compte le plus pour vous.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-10">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="space-y-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 cursor-pointer group"
                  style={{ backgroundColor: `${currentTheme.colors.primary}05` }}
                >
                  <h3 
                    className="font-bold text-lg group-hover:scale-105 transition-transform duration-300"
                    style={{ color: currentTheme.colors.text }}
                  >
                    {feature.title}
                  </h3>
                  <p 
                    className="text-sm leading-relaxed"
                    style={{ color: currentTheme.colors.textSecondary }}
                  >
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
            
            <a 
              href="/about"
              className="inline-block text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-500 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group"
              style={{ backgroundColor: currentTheme.colors.primary }}
            >
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
                }}
              />
              <span className="relative z-10">
                En Savoir Plus
              </span>
            </a>
          </div>

          {/* Right Content */}
          <div className="relative animate-in fade-in slide-in-from-right duration-1000 delay-300">
            <div className="relative group">
              <img 
                src=""
                alt="Sécurité totale des réseaux informatiques"
                className="rounded-3xl shadow-2xl w-full h-[500px] object-cover transition-all duration-700 group-hover:scale-105"
                onError={(e)=>{(e.currentTarget as HTMLImageElement).src='public/assets/leona/pexels-photo-3861958.webp';}}
              />
              
              {/* Image Overlay */}
              <div 
                className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.colors.primary}40, ${currentTheme.colors.accent}40)`
                }}
              />
            </div>
            
            <div 
              className="absolute -bottom-8 -left-8 text-white p-6 rounded-2xl shadow-2xl backdrop-blur-md border transition-all duration-500 hover:scale-110 animate-bounce"
              style={{
                backgroundColor: currentTheme.colors.accent,
                borderColor: `${currentTheme.colors.accent}30`
              }}
            >
              <p className="text-sm font-bold">Sécurité Réseau</p>
              <p className="text-xs opacity-90">Audit, durcissement et supervision</p>
            </div>
            
            {/* Glow Effects */}
            <div 
              className="absolute -top-4 -right-4 w-32 h-32 rounded-full opacity-20 animate-pulse blur-2xl"
              style={{ backgroundColor: currentTheme.colors.primary }}
            />
            <div 
              className="absolute -bottom-4 -left-4 w-40 h-40 rounded-full opacity-20 animate-pulse delay-1000 blur-2xl"
              style={{ backgroundColor: currentTheme.colors.accent }}
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 animate-in fade-in slide-in-from-bottom duration-1000 delay-500">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group cursor-pointer transform transition-all duration-500 hover:scale-110"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div 
                className="flex items-center justify-center w-20 h-20 rounded-3xl mx-auto mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 relative"
                style={{ backgroundColor: `${currentTheme.colors.primary}15` }}
              >
                <stat.icon 
                  className="h-10 w-10 transition-colors duration-300" 
                  style={{ color: currentTheme.colors.primary }}
                />
                <div 
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 25px ${currentTheme.colors.primary}60` }}
                />
              </div>
              <p 
                className="text-4xl font-bold mb-3 bg-gradient-to-r bg-clip-text text-transparent"
                style={{
                  backgroundImage: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})`
                }}
              >
                {stat.value}
              </p>
              <p 
                className="font-medium"
                style={{ color: currentTheme.colors.textSecondary }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;