import React, { useEffect, useRef, useState } from 'react';
import { ThemeProvider, useTheme } from '../components/ThemeProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BrandLogo from '../components/BrandLogo';
import QuoteModalProvider, { useQuoteModal } from '../components/QuoteModal';
import {
  Wifi,
  Camera,
  Wrench,
  Code,
  MonitorSmartphone,
  CheckCircle2,
  Sparkles,
  ArrowRightCircle,
  ShieldCheck,
  Award,
  Headphones,
  Clock,
  Users,
  Rocket,
  Lock,
  Server,
  Cpu,
  Globe,
} from 'lucide-react';

const Reveal: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className }) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setShown(true); obs.disconnect(); } }, { threshold: 0.15 });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className={`transition-all duration-700 transform ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'} ${className ?? ''}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
};

const Hero = () => {
  const { currentTheme } = useTheme();
  return (
    <section className="pt-28 pb-10 relative overflow-hidden" style={{ background: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 items-center">
          <Reveal className="lg:col-span-2">
            <div className="space-y-4">
              <p className="text-sm font-semibold" style={{ color: currentTheme.colors.primary }}>À propos</p>
              <h1 className="text-4xl lg:text-6xl font-extrabold" style={{ color: currentTheme.colors.text }}>
                Leona Prom
                <span className="block text-2xl lg:text-3xl font-semibold mt-2" style={{ color: currentTheme.colors.textSecondary }}>
                  Sécurité, performance et confiance depuis plus de 15 ans.
                </span>
              </h1>
              <p className="text-lg max-w-3xl leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                Nous protégeons vos personnes, vos sites et vos données avec une expertise multi‑disciplinaire.
                De l’audit réseau aux caméras intelligentes en passant par les logiciels métier et le support,
                notre approche est simple: des solutions claires, performantes et durables, livrées avec un
                accompagnement humain et réactif.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                {[{k:'Années',v:'15+'},{k:'Clients',v:'2000+'},{k:'Projets',v:'5000+'}].map((it,i)=>(
                  <div key={i} className="rounded-2xl p-4 border shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5" style={{ borderColor: `${currentTheme.colors.primary}22`, background: currentTheme.colors.surface }}>
                    <div className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>{it.k}</div>
                    <div className="text-xl font-bold" style={{ color: currentTheme.colors.text }}>{it.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="flex justify-center lg:justify-end relative">
              <div className="absolute -z-10 -top-6 -left-6 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: currentTheme.colors.accent }} />
              <div className="absolute -z-10 -bottom-6 -right-6 w-40 h-40 rounded-full blur-3xl opacity-20" style={{ background: currentTheme.colors.primary }} />
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

const Story = () => {
  const { currentTheme } = useTheme();
  const items = [
    { y: '2010', t: 'Naissance', d: 'Création de LEONA PROM avec une vision: rendre la sécurité accessible et fiable.' },
    { y: '2015', t: 'Accélération', d: 'Déploiement à grande échelle des systèmes de vidéosurveillance et d’alarme.' },
    { y: '2019', t: 'Cybersécurité', d: 'Intégration d’un pôle réseau & sécurité IT pour protéger les données.' },
    { y: '2023', t: 'Logiciels & POS', d: 'Élargissement vers le développement, la vente de logiciels et les systèmes d’encaissement.' },
  ];
  return (
    <section className="py-10" style={{ background: currentTheme.colors.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6" style={{ color: currentTheme.colors.text }}>Notre Histoire</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((it,i)=>(
            <Reveal delay={i*80} key={it.y}>
              <div className="rounded-2xl p-6 shadow-md border" style={{ borderColor: `${currentTheme.colors.primary}22`, background: currentTheme.colors.background }}>
                <div className="text-sm font-semibold" style={{ color: currentTheme.colors.primary }}>{it.y}</div>
                <div className="text-xl font-bold" style={{ color: currentTheme.colors.text }}>{it.t}</div>
                <p className="mt-1" style={{ color: currentTheme.colors.textSecondary }}>{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const MissionVision = () => {
  const { currentTheme } = useTheme();
  const cards = [
    {
      title: 'Notre Mission',
      icon: Sparkles,
      text:
        "Offrir des solutions de sécurité globales – du réseau aux caméras – qui réunissent robustesse, simplicité et résultats mesurables. Nos équipes conseillent, déploient et forment, pour une prise en main rapide et un retour sur investissement tangible.",
      bullets: [
        'Conseil et audit orientés ROI',
        'Déploiements maîtrisés et documentés',
        'Transfert de compétences & formation',
      ],
    },
    {
      title: 'Notre Vision',
      icon: ArrowRightCircle,
      text:
        "Devenir la référence régionale en sécurité et en IT — où la confiance naît d’une qualité de service irréprochable, d’innovations pragmatiques et d’un support proactif disponible 24/7.",
      bullets: [
        'Innovation utile et continue',
        'Excellence opérationnelle',
        'Satisfaction client comme boussole',
      ],
    },
  ];
  return (
    <section className="py-10" style={{ background: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-stretch">
        {cards.map((c,i)=>{
          const Icon = c.icon; return (
            <Reveal delay={i*100} key={c.title}>
              <div
                className="group relative rounded-2xl p-6 shadow-md border h-full flex flex-col overflow-hidden"
                style={{ borderColor: `${currentTheme.colors.primary}22`, background: currentTheme.colors.surface }}
              >
                <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-10 group-hover:opacity-20 transition-opacity duration-500"
                     style={{ background: currentTheme.colors.accent }} />
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-xl transition-all duration-500 group-hover:-translate-y-0.5 group-hover:rotate-6"
                       style={{ background: `${currentTheme.colors.primary}12` }}>
                    <Icon className="h-5 w-5" style={{ color: currentTheme.colors.accent }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: currentTheme.colors.text }}>{c.title}</h3>
                </div>
                <p className="leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>{c.text}</p>
                {c.bullets && (
                  <div className="mt-4 space-y-2">
                    {c.bullets.map((b: string, idx: number) => (
                      <div key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 mt-0.5" style={{ color: currentTheme.colors.accent }} />
                        <span style={{ color: currentTheme.colors.text }}>{b}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-5">
                  <div className="h-1 rounded-full w-0 group-hover:w-full transition-all" style={{ background: currentTheme.colors.primary }} />
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
};

const Offers = () => {
  const { currentTheme } = useTheme();
  const { open } = useQuoteModal();
  const data = [
    { title: 'Sécurité des Réseaux Informatiques', icon: Wifi, img: 'public/assets/leona/Securite-des-reseaux-informatiques.jpg', bullets: ['Pare-feu & VPN', 'Segmentation & Wi‑Fi sécurisé', 'Supervision & alertes'], pitch: 'Protégez vos réseaux, sécurisez votre entreprise. Une cybersécurité fiable, moderne et sans compromis.' },
    { title: 'Alarmes & Caméras de Surveillance', icon: Camera, img: 'public/assets/leona/10843189.webp', bullets: ['IP/Analogique', 'Vision de nuit', 'Accès mobile'], pitch: 'Sécurité & sérénité: installation d’alarmes et de caméras pour la maison ou l’entreprise.' },
    { title: 'Vente & Réparation Informatique', icon: Wrench, img: 'public/assets/leona/maintenance-informatique-ordinateur-reparateur.webp', bullets: ['Diagnostic rapide', 'Pièces d’origine', 'Garantie'], pitch: 'Votre expert en informatique: des solutions fiables et durables pour vos équipements.' },
    { title: 'Développement & Vente de Logiciels', icon: Code, img: 'public/assets/leona/07.jpg', bullets: ['Sur‑mesure', 'Sécurisé', 'Évolutif'], pitch: 'Boostez votre entreprise avec des logiciels modernes et adaptés à vos besoins.' },
    { title: 'Systèmes d’Encaissement (POS)', icon: MonitorSmartphone, img: 'public/assets/leona/gcsf-feb-pos-600x400-1.png', bullets: ['Caisse & inventaire', 'Rapports', 'Support'], pitch: 'Encaissement fluide et pilotage précis pour votre activité.' },
  ];
  return (
    <section className="py-10" style={{ background: currentTheme.colors.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6" style={{ color: currentTheme.colors.text }}>Ce que nous faisons</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {data.map((item, i) => {
            const Icon = item.icon; return (
              <Reveal delay={i*80} key={item.title}>
                <div className="group rounded-2xl overflow-hidden border shadow-md flex flex-col h-full bg-white/90">
                  <div className="relative h-44 overflow-hidden">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 px-3 py-1 text-xs rounded-full" style={{ backgroundColor: `${currentTheme.colors.primary}15`, color: currentTheme.colors.primary }}>{item.title}</div>
                  </div>
                  <div className="p-5 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 mb-2"><Icon className="h-4 w-4" style={{ color: currentTheme.colors.accent }} /><span className="font-semibold" style={{ color: currentTheme.colors.text }}>{item.title}</span></div>
                    <p className="text-sm leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>{item.pitch}</p>
                    <div className="mt-3 space-y-2 flex-1">
                      {item.bullets.map((b, j)=>(
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4" style={{ color: currentTheme.colors.accent }} />
                          <span style={{ color: currentTheme.colors.text }}>{b}</span>
                        </div>
                      ))}
                    </div>
                    <div className="mt-auto pt-4">
                      <button onClick={() => open({ source: 'about-offer', productName: item.title })} className="px-4 py-2 rounded-xl text-white font-semibold shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})` }}>
                        Demande Devis
                      </button>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const WhyUs = () => {
  const { currentTheme } = useTheme();
  const items = [
    { icon: ShieldCheck, title: 'Sécurité certifiée', desc: 'Politiques, configurations et équipements conformes aux meilleures pratiques du marché.' },
    { icon: Award, title: 'Qualité éprouvée', desc: 'Matériels de marques reconnues et procédures d’installation documentées.' },
    { icon: Headphones, title: 'Support réactif', desc: 'Assistance multicanale, suivi proactif et interlocuteur dédié.' },
    { icon: Clock, title: 'Délais tenus', desc: 'Planification claire et mise en production sans surprise.' },
    { icon: Users, title: 'Approche humaine', desc: 'Écoute, pédagogie et transparence à chaque étape du projet.' },
    { icon: Rocket, title: 'Performance mesurable', desc: 'Des gains concrets: disponibilité, productivité et sérénité.' },
  ];
  return (
    <section className="py-10" style={{ background: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6" style={{ color: currentTheme.colors.text }}>Pourquoi nous choisir ?</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {items.map((it, i) => {
            const Icon = it.icon; return (
              <Reveal delay={i*70} key={it.title}>
                <div className="group rounded-2xl p-6 border shadow-md h-full flex flex-col transition-all duration-300 hover:-translate-y-0.5"
                     style={{ borderColor: `${currentTheme.colors.primary}22`, background: currentTheme.colors.surface }}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl transition-transform duration-500 group-hover:rotate-6 group-hover:-translate-y-0.5" style={{ background: `${currentTheme.colors.primary}12` }}>
                      <Icon className="h-5 w-5" style={{ color: currentTheme.colors.accent }} />
                    </div>
                    <h3 className="font-semibold" style={{ color: currentTheme.colors.text }}>{it.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>{it.desc}</p>
                  <div className="mt-4 h-1 w-0 group-hover:w-24 transition-all" style={{ background: currentTheme.colors.primary }} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Guarantees = () => {
  const { currentTheme } = useTheme();
  const blocks = [
    {
      icon: Lock,
      title: 'Sécurité de bout en bout',
      text: `Chiffrement, segmentation réseau, politiques d’accès et supervision.
      Nous appliquons des contrôles techniques et organisationnels de niveau entreprise.`,
    },
    {
      icon: Server,
      title: 'Infra & disponibilité',
      text: `Architectures robustes, sauvegardes et plan de reprise.
      Nos déploiements sont pensés pour durer et évoluer.`,
    },
    {
      icon: Cpu,
      title: 'Technologies modernes',
      text: `Équipements et logiciels récents, sélectionnés pour leur fiabilité,
      leur performance et leur compatibilité.`,
    },
    {
      icon: Globe,
      title: 'Conformité & bonnes pratiques',
      text: `Alignement avec les standards de sécurité et de qualité reconnus.
      Documentation et traçabilité incluses.`,
    },
  ];
  return (
    <section className="py-12" style={{ background: currentTheme.colors.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold mb-6" style={{ color: currentTheme.colors.text }}>Nos engagements</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {blocks.map((b, i) => {
            const Icon = b.icon; return (
              <Reveal delay={i*70} key={b.title}>
                <div className="group rounded-2xl p-6 border shadow-md h-full flex flex-col"
                     style={{ borderColor: `${currentTheme.colors.primary}22`, background: currentTheme.colors.background }}>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-xl" style={{ background: `${currentTheme.colors.primary}12` }}>
                      <Icon className="h-5 w-5" style={{ color: currentTheme.colors.accent }} />
                    </div>
                    <h3 className="font-semibold" style={{ color: currentTheme.colors.text }}>{b.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>{b.text}</p>
                  <div className="mt-4 h-1 w-0 group-hover:w-full transition-all" style={{ background: currentTheme.colors.primary }} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Steps = () => {
  const { currentTheme } = useTheme();
  const steps = [
    { t: '1. Prise de contact', d: 'Appelez, écrivez ou WhatsApp — on vous répond vite.' },
    { t: '2. Audit & Conseil', d: 'Analyse de votre besoin et proposition claire & avantageuse.' },
    { t: '3. Installation / Mise en œuvre', d: 'Déploiement professionnel, tests et formation.' },
    { t: '4. Support & Maintenance', d: 'Assistance 24/7, maintenance et évolutions.' },
  ];
  return (
    <section className="py-12" style={{ background: currentTheme.colors.background }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold mb-8" style={{ color: currentTheme.colors.text }}>Démarches pour profiter de nos services</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s,i)=>(
            <Reveal delay={i*60} key={s.t}>
              <div className="rounded-2xl p-6 shadow-md border h-full" style={{ borderColor: `${currentTheme.colors.primary}22`, background: currentTheme.colors.surface }}>
                <div className="text-sm font-semibold" style={{ color: currentTheme.colors.primary }}>{s.t}</div>
                <p className="mt-2" style={{ color: currentTheme.colors.textSecondary }}>{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClosingCTA = () => {
  const { currentTheme } = useTheme();
  const { open } = useQuoteModal();
  const bullets = [
    '🔒 Sécurité & sérénité avec LEONA PROM — solutions modernes et efficaces.',
    '🔐 Protégez vos réseaux, sécurisez votre entreprise: cybersécurité fiable et sans compromis.',
    '🚀 Boostez votre entreprise avec des logiciels adaptés et sécurisés.',
    '💻 Vente & réparation pro de matériels informatiques.'
  ];
  return (
    <section className="py-14" style={{ background: currentTheme.colors.surface }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl p-8 md:p-10 shadow-xl border text-center" style={{ borderColor: `${currentTheme.colors.primary}22`, background: currentTheme.colors.background }}>
            <h3 className="text-2xl md:text-3xl font-extrabold" style={{ color: currentTheme.colors.text }}>Vous êtes au bon endroit</h3>
            <p className="mt-2 text-lg" style={{ color: currentTheme.colors.textSecondary }}>Nous réunissons expertise, qualité et accompagnement pour répondre à vos besoins.</p>
            <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-left">
              {bullets.map((b,i)=>(
                <div key={i} className="rounded-2xl p-4" style={{ background: `${currentTheme.colors.primary}08` }}>
                  <div style={{ color: currentTheme.colors.text }}>{b}</div>
                </div>
              ))}
            </div>
            <div className="mt-6">
              <button onClick={() => open({ source: 'about-cta' })} className="px-6 py-3 rounded-2xl text-white font-semibold shadow-lg transition-transform hover:-translate-y-0.5" style={{ background: `linear-gradient(135deg, ${currentTheme.colors.primary}, ${currentTheme.colors.accent})` }}>
                Demande Devis
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

const AboutPage = () => {
  return (
    <ThemeProvider>
      <QuoteModalProvider>
        <Header />
        <Hero />
        <Story />
        <MissionVision />
  <WhyUs />
        <Offers />
  <Guarantees />
        <Steps />
        <ClosingCTA />
        <Footer />
      </QuoteModalProvider>
    </ThemeProvider>
  );
};

export default AboutPage;
