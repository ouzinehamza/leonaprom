import { Facebook, Instagram, Linkedin, Twitter, PhoneCall, Mail, Clock4, MapPin } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import BrandLogo from './BrandLogo';

const Footer = () => {
  const { currentTheme } = useTheme();

  const services = [
    'Protection des réseaux',
    'Vidéosurveillance intelligente',
    "Alarmes & détection d’intrusion",
    'Logiciels & POS',
    'Informatique & Réparation',
    'Maintenance & Support 24/7',
  ];

  const quickLinks = [
    { label: 'Accueil', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Produits', href: '/#products' },
    { label: 'À Propos', href: '/about' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <footer 
      className="text-white relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.secondary }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-5 animate-pulse blur-3xl"
          style={{ backgroundColor: currentTheme.colors.primary }}
        />
        <div 
          className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-5 animate-pulse delay-1000 blur-3xl"
          style={{ backgroundColor: currentTheme.colors.accent }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-20">
          {/* Company Info */}
          <div className="animate-in fade-in slide-in-from-left duration-1000">
            <div className="mb-0">
              <BrandLogo size={220} />
            </div>
            <p className="text-gray-300 leading-relaxed text-lg mt-0">
              Votre spécialiste en solutions de sécurité depuis plus de 15 ans. 
              Nous protégeons ce qui compte le plus pour vous.
            </p>
            <div className="flex space-x-6 mt-6">
              {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                <div 
                  key={index}
                  className="p-3 rounded-xl cursor-pointer transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
                  style={{ backgroundColor: `${currentTheme.colors.primary}20` }}
                >
                  <Icon 
                    className="h-6 w-6 text-gray-300 group-hover:text-white transition-colors duration-300" 
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Services (renamed to creative solutions) */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-200">
            <h3 className="text-xl font-bold mb-8">Solutions & Expertises</h3>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index} className="group">
                  <a 
                    href="#" 
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                  >
                    <div 
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{ backgroundColor: currentTheme.colors.accent }}
                    />
                    <span>
                    {service}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links replacing Brands */}
          <div className="animate-in fade-in slide-in-from-bottom duration-1000 delay-400">
            <h3 className="text-xl font-bold mb-8">Liens rapides</h3>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index} className="group">
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-all duration-300 flex items-center space-x-2 group-hover:translate-x-2"
                  >
                    <div 
                      className="w-2 h-2 rounded-full transition-all duration-300"
                      style={{ backgroundColor: currentTheme.colors.accent }}
                    />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

      {/* Contact */}
          <div className="animate-in fade-in slide-in-from-right duration-1000 delay-600">
            <h3 className="text-xl font-bold mb-8">Contact</h3>
            <div className="space-y-6 text-gray-300">
              <div className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <PhoneCall className="h-5 w-5" style={{ color: currentTheme.colors.accent }} />
                <span className="group-hover:text-white transition-colors duration-300">+212 778 353 067 / +212 778 353 066</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <Mail className="h-5 w-5" style={{ color: currentTheme.colors.accent }} />
                <span className="group-hover:text-white transition-colors duration-300">contact@leonaprom.com</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <Clock4 className="h-5 w-5" style={{ color: currentTheme.colors.accent }} />
                <span className="group-hover:text-white transition-colors duration-300">Lun-Ven: 8h-18h</span>
              </div>
              <div className="flex items-center space-x-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                <MapPin className="h-5 w-5" style={{ color: currentTheme.colors.accent }} />
                <span className="group-hover:text-white transition-colors duration-300">Al Massar No 837 Appt N° 3 Route De Safi - Marrakech</span>
              </div>
            </div>
          </div>
        </div>

        <div 
          className="border-t mt-16 pt-10 relative z-10"
          style={{ borderColor: `${currentTheme.colors.primary}30` }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-300 text-lg animate-in fade-in slide-in-from-left duration-1000 delay-800">
              © 2025 Leonaprom. Tous droits réservés.
            </p>
            <div className="flex space-x-8 text-sm animate-in fade-in slide-in-from-right duration-1000 delay-1000">
              {[
                'Politique de confidentialité',
                'Conditions d\'utilisation',
                'Mentions légales'
              ].map((link, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 relative group"
              >
                <span className="relative z-10">{link}</span>
                <div 
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: currentTheme.colors.accent }}
                />
              </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;