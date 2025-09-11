import React from 'react';
import { useTheme } from './ThemeProvider';
import { useQuoteModal } from './QuoteModal';

const cards = [
  {
    src: '/assets/leona/WhatsApp Image 2025-09-07 at 13.20.19_1fddcd6a.jpg',
    title: 'Sécurité Totale des Réseaux Informatiques',
    subtitle: "Votre cybersecurité partner",
    cta: 'Audit & Renforcement',
  },
  {
    src: '/assets/leona/WhatsApp Image 2025-09-07 at 13.20.21_e969c2e3.jpg',
    title: 'Vente et Réparation des Matériels Informatiques',
    subtitle: 'Diagnostic rapide, pièces d’origine',
    cta: 'Réserver une intervention',
  },
  {
    src: '/assets/leona/WhatsApp Image 2025-09-07 at 13.20.20_0f4c459a.jpg',
    title: "Installation d’Alarmes et Caméras de Surveillance",
    subtitle: 'Protection 24/7 pour maisons et entreprises',
    cta: 'Demander un devis',
  },
  {
    src: '/assets/leona/WhatsApp Image 2025-09-07 at 13.20.21_d6d5f6d3.jpg',
    title: 'Développement et Vente de Logiciels',
    subtitle: 'Solutions sur mesure centrées métier',
    cta: 'Parler à un expert',
  },
];

const Promotions: React.FC = () => {
  const { currentTheme } = useTheme();
  const { open } = useQuoteModal();

  return (
    <section
      className="py-16 relative overflow-hidden"
      style={{ backgroundColor: currentTheme.colors.background }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="relative rounded-3xl overflow-hidden shadow-xl group h-72 md:h-80"
              style={{ border: `1px solid ${currentTheme.colors.primary}20` }}
            >
              <img
                src={card.src}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  // graceful fallback to stock if asset not yet present
                  (e.currentTarget as HTMLImageElement).src =
                    'https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=1200';
                }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"
                style={{ mixBlendMode: 'multiply' }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-white text-2xl font-extrabold drop-shadow-lg">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm mt-1">{card.subtitle}</p>
                <div className="mt-4">
                  <button
                    onClick={() => open({ source: 'promotions', productName: card.title })}
                    className="relative text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: currentTheme.colors.accent }}
                  >
                    {card.cta}
                  </button>
                </div>
              </div>
              <div
                className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-30 blur-2xl"
                style={{ backgroundColor: currentTheme.colors.primary }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Promotions;
