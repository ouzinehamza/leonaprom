import { Camera, Shield, Smartphone, Settings, Users, Clock, CheckCircle2, Star, type LucideIcon } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { ThemeProvider, useTheme } from '../components/ThemeProvider';
import QuoteModalProvider, { useQuoteModal } from '../components/QuoteModal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrandLogo from '../components/BrandLogo';

type Service = {
  icon: LucideIcon;
  title: string;
  teaser: string;
  bullets: string[];
  details: string;
  image?: string;
};

const services: Service[] = [
  {
    icon: Camera,
    title: 'Vidéosurveillance',
    teaser: "Systèmes IP/analogiques avec vision nocturne et accès mobile.",
    bullets: ['Caméras HD/4K', 'Vision nocturne', 'Accès mobile', 'Stockage cloud'],
    details:
      "Conception, installation et paramétrage complets: étude d'angles, câblage structuré, enregistreurs (NVR/DVR), réseau sécurisé, accès distant chiffré, plan de maintenance et SLA. Nous optimisons la couverture sans zones mortes, avec une qualité d'image adaptée (HD/4K) et une rétention conforme.",
    image: 'https://www.ipponsecurite.com/wp-content/uploads/2019/02/VIDEOSURVEILLANCE-3.jpg',
  },
  {
    icon: Shield,
    title: "Systèmes d'Alarme",
    teaser: "Alarmes filaires/sans fil, détection avancée et notifications instantanées.",
    bullets: ["Détecteurs de mouvement", 'Sirènes', 'App mobile', 'Scénarios anti-intrusion'],
    details:
      "Déploiement de centrales d’alarme, zoning fin, scénarios intelligents (présence, périmétrie), intégration sirènes int./ext., sauvegarde batterie, tests périodiques, télésurveillance et rapports d'événements détaillés.",
    image: 'https://www.it-matelec.fr/media/2024/10/nouveaux-alarme-incendie-entreprise-1-1024x580.jpg',
  },
  {
    icon: Smartphone,
    title: "Contrôle d'Accès",
    teaser: "Badges RFID, code PIN ou biométrie avec journalisation.",
    bullets: ['Lecteurs/badges', 'Biométrie', 'Gestion horaire', 'Historique des accès'],
    details:
      "Sécurisation des points d’accès, profils utilisateurs granulaires, anti-passback, intégration portiers vidéo/interphonie IP, synchronisation annuaire et export des journaux pour audit.",
    image: 'https://sirixmonitoring.com/wp-content/uploads/2024/05/Top-7-benefits-of-access-control-.webp',
  },
  {
    icon: Settings,
    title: 'Installation & Maintenance',
    teaser: 'Mise en service certifiée et maintenance préventive/corrective.',
    bullets: ['Audit sur site', 'Installation certifiée', 'Support technique', 'Garantie étendue'],
    details:
      "Procédures standardisées, documentation complète (schémas, nomenclatures), contrats de maintenance avec SLA, supervision proactive et interventions d’urgence 24/7.",
    image: 'https://res.cloudinary.com/rspoc/image/upload/w_768,h_300,c_crop,c_fill,f_auto,q_auto/dpr_auto/v1728305840/RS%20CONTENTFUL/Discovery/FR/Maintenance/maintenance-installations-electriques/entretien-installation-electrique.png',
  },
  {
    icon: Users,
    title: 'Consultation Sécurité',
    teaser: 'Audit, plan directeur de sécurité et formation.',
    bullets: ['Étude de risques', 'Recommandations', 'Plan de sécurité', 'Formation'],
    details:
      "Évaluation des menaces, conformité (politiques, RGPD), feuille de route pragmatique, chiffrage et priorisation selon le budget, transfert de compétences et formations ciblées.",
    image: 'https://tcmsecurite.com/wp-content/uploads/2023/06/trois-ouvriers-usine-portant-casques-securite-discutant-du-plan-fabrication-min-scaled-2560x1280.jpg',
  },
  {
    icon: Clock,
    title: 'Support 24/7',
    teaser: 'Hotline, monitoring et intervention rapide.',
    bullets: ['Hotline dédiée', 'Monitoring', 'Diagnostic à distance', "Maintenance d'urgence"],
    details:
      "Centre d'assistance disponible 24/7, outils de supervision temps réel, procédures d'escalade, reporting périodique, interventions sur site garanties par SLA.",
    image: 'https://www.malwarebytes.com/wp-content/uploads/sites/2/2025/06/247support_line.png',
  },
];

// Simple scroll reveal wrapper
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 transform ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className ?? ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// Auto-scrolling horizontal row for testimonials
const AutoScrollRow: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const interval = setInterval(() => {
      const next = el.scrollLeft + el.clientWidth;
      if (next + 8 >= el.scrollWidth) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: el.clientWidth, behavior: 'smooth' });
      }
    }, 4500);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative">
      <div
        ref={ref}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2"
        style={{ scrollbarWidth: 'thin' }}
      >
        {children}
      </div>
      {/* subtle gradient edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/90 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/90 to-transparent" />
    </div>
  );
};

const HeroBanner = () => {
  const { currentTheme } = useTheme();
  return (
    <section className="pt-24 pb-12 relative overflow-hidden" style={{ backgroundColor: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold" style={{ color: currentTheme.colors.primary }}>Nos Offres</p>
              <h1 className="text-4xl lg:text-6xl font-extrabold" style={{ color: currentTheme.colors.text }}>
                Services Professionnels
              </h1>
              <p className="text-lg max-w-2xl" style={{ color: currentTheme.colors.textSecondary }}>
                Des solutions de sécurité sur-mesure, installées par des experts et soutenues par un support réactif.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {[
                  { k: 'Déploiement rapide', v: '48h-72h' },
                  { k: 'Satisfaction', v: '98%' },
                  { k: 'Maintenance', v: 'SLA garanti' },
                ].map((it) => (
                  <div key={it.k} className="rounded-2xl p-4 border shadow-sm" style={{ borderColor: `${currentTheme.colors.primary}22`, background: currentTheme.colors.surface }}>
                    <div className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>{it.k}</div>
                    <div className="text-xl font-bold" style={{ color: currentTheme.colors.text }}>{it.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex justify-center lg:justify-end">
              <BrandLogo size={420} />
            </div>
          </Reveal>
        </div>
      </div>
      <div className="absolute -right-20 -top-20 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: currentTheme.colors.accent }} />
      <div className="absolute -left-20 -bottom-20 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: currentTheme.colors.primary }} />
    </section>
  );
};

const ServiceCard: React.FC<{ s: Service; index: number }> = ({ s, index }) => {
  const { currentTheme } = useTheme();
  const { open } = useQuoteModal();
  const Icon = s.icon;
  return (
    <Reveal delay={index * 70}>
      <div className="group h-full min-h-[480px] sm:min-h-[520px] xl:min-h-[560px] rounded-2xl overflow-hidden border shadow-md bg-white/90 backdrop-blur flex flex-col">
        {/* Banner */}
        {s.image && (
          <div className="relative h-40 md:h-44 w-full overflow-hidden">
            <img src={s.image} alt={s.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute top-4 left-4 w-11 h-11 rounded-xl flex items-center justify-center shadow-lg" style={{ backgroundColor: `${currentTheme.colors.primary}15` }}>
              <Icon className="h-5 w-5" style={{ color: '#fff' }} />
            </div>
          </div>
        )}
        {/* Body */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-xl font-bold" style={{ color: currentTheme.colors.text }}>{s.title}</h3>
          <p className="mt-1 max-h-12 overflow-hidden" style={{ color: currentTheme.colors.textSecondary }}>{s.teaser}</p>
          <div className="mt-3 text-sm max-h-28 md:max-h-32 overflow-hidden" style={{ color: currentTheme.colors.textSecondary }}>
            {s.details}
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            {s.bullets.map((b, i) => (
              <div key={i} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="mt-0.5 h-4 w-4" style={{ color: currentTheme.colors.accent }} />
                <span style={{ color: currentTheme.colors.text }}>{b}</span>
              </div>
            ))}
          </div>
          <div className="mt-5 md:mt-auto">
            <button onClick={() => open({ source: 'services-card', productName: s.title })} className="inline-flex items-center px-5 py-2.5 rounded-xl text-white font-semibold shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})` }}>
              Demande Devis
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

const Content = () => {
  const { currentTheme } = useTheme();
  const { open: openQuote } = useQuoteModal();
  return (
    <main className="pb-20" style={{ background: currentTheme.colors.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Services grid */}
        <section className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
          {services.map((s, i) => (
            <ServiceCard s={s} index={i} key={s.title} />
          ))}
        </section>

        {/* Value props row */}
        <section className="mt-12 grid sm:grid-cols-3 gap-6">
          {[{ title: 'Audit Gratuit', desc: 'Pré-diagnostic et devis en 24h.' }, { title: 'SLA & Maintenance', desc: 'Contrats flexibles et interventions prioritaires.' }, { title: 'Formations', desc: 'Sessions courtes pour une adoption rapide.' }].map((a, i) => (
            <Reveal delay={50 * i} key={i}>
              <div className="rounded-2xl p-6 shadow-md border" style={{ borderColor: `${currentTheme.colors.primary}22`, background: currentTheme.colors.background }}>
                <h4 className="font-bold text-lg" style={{ color: currentTheme.colors.text }}>{a.title}</h4>
                <p className="mt-2" style={{ color: currentTheme.colors.textSecondary }}>{a.desc}</p>
              </div>
            </Reveal>
          ))}
        </section>

        {/* Testimonials */}
        <section className="mt-14">
          <Reveal>
            <h3 className="text-2xl font-bold mb-4" style={{ color: currentTheme.colors.text }}>Témoignages</h3>
          </Reveal>
          <AutoScrollRow>
            {[{
              name: 'Amina B.', role: "Directrice d'hôtel", quote: 'Installation impeccable, accès distant simple et réduction des incidents.', img: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=256&auto=format&fit=crop'
            }, {
              name: 'Youssef R.', role: 'Gestionnaire d’entrepôt', quote: 'Contrôle d’accès et alarme ont fluidifié les entrées/sorties.', img: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?q=80&w=256&auto=format&fit=crop'
            }, {
              name: 'Nadia S.', role: 'Responsable retail', quote: 'Caméras 4K + monitoring: pertes divisées par deux en 3 mois.', img: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=256&auto=format&fit=crop'
            }, {
              name: 'Karim T.', role: 'DG PME', quote: 'Déploiement rapide et support 24/7 très réactif.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=256&auto=format&fit=crop'
            }].map((t, i) => (
              <div key={i} className="snap-start min-w-[300px] max-w-sm rounded-2xl p-6 shadow-md border bg-white/90" style={{ borderColor: `${currentTheme.colors.primary}22` }}>
                <div className="flex items-center gap-3">
                  <img src={t.img} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold" style={{ color: currentTheme.colors.text }}>{t.name}</div>
                    <div className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>{t.role}</div>
                  </div>
                </div>
                <p className="mt-3" style={{ color: currentTheme.colors.textSecondary }}>« {t.quote} »</p>
                <div className="mt-3 flex gap-1 text-yellow-500"><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /><Star size={16} /></div>
              </div>
            ))}
          </AutoScrollRow>
        </section>

        {/* Case Studies */}
        <section className="mt-10">
          <Reveal>
            <h3 className="text-2xl font-bold mb-6" style={{ color: currentTheme.colors.text }}>Études de cas</h3>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[{
              title: 'Retail multi-sites', metric: '60% d’incidents en moins',
              img: 'https://www.lpcentre.com/_next/image?url=https%3A%2F%2Fbackend.lpcentre.com%2F%2Fnew_storage%252Fimages%252Fposts%252F%252FEffectivelyStoreManagementandStockControl2_1702663434.jpg&w=1200&q=75'
            }, {
              title: 'Site industriel', metric: 'Audit → déploiement en 10j',
              img: 'https://www.factoryfuture.fr/wp-content/uploads/2019/10/audit-energetique-industrie.jpeg'
            }, {
              title: 'Résidence sécurisée', metric: 'Accès et vidéosurveillance unifiés',
              img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop'
            }].map((cs, i) => (
              <Reveal delay={60 * i} key={cs.title}>
                <div className="relative rounded-2xl overflow-hidden shadow-md border group" style={{ borderColor: `${currentTheme.colors.primary}22` }}>
                  <img src={cs.img} alt={cs.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <div className="font-semibold text-lg">{cs.title}</div>
                    <div className="opacity-90 text-sm">{cs.metric}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button onClick={() => openQuote({ source: 'case-studies' })} className="inline-flex items-center px-6 py-3 rounded-2xl text-white font-semibold shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})` }}>
              Demande Devis
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

const ServicesPage = () => {
  return (
    <ThemeProvider>
      <QuoteModalProvider>
        <div className="min-h-screen">
          <Header />
          <HeroBanner />
          <Content />
          <Footer />
        </div>
      </QuoteModalProvider>
    </ThemeProvider>
  );
};

export default ServicesPage;
