import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Mail, Phone, X, MessageCircle } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import BrandLogo from './BrandLogo';

type Payload = {
  source?: string;
  productName?: string;
  productId?: string;
};

type ModalCtx = {
  open: (p?: Payload) => void;
  close: () => void;
};

const Ctx = createContext<ModalCtx | null>(null);

export const useQuoteModal = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useQuoteModal must be used within QuoteModalProvider');
  return ctx;
};

export const QuoteModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setOpen] = useState(false);
  const [payload, setPayload] = useState<Payload | undefined>();
  const { currentTheme } = useTheme();

  const open = useCallback((p?: Payload) => {
    setPayload(p);
    setOpen(true);
  }, []);
  const close = useCallback(() => setOpen(false), []);

  const ctx = useMemo(() => ({ open, close }), [open, close]);

  // Business contacts (centralize here)
  const email = 'contact@leonaprom.com';
  const phone = '+212778353067';
  const whatsapp = '212778353067'; // international format without +

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `Demande de devis${payload?.productName ? ' – ' + payload.productName : ''}`
    );
    const body = encodeURIComponent(
      `Bonjour,\n\nJe souhaite recevoir un devis${
        payload?.productName ? ` pour: ${payload.productName}` : ''
      }.\nMerci de me recontacter.\n\n(Cet envoi provient du site — ${payload?.source || 'général'})`
    );
    return `mailto:${email}?subject=${subject}&body=${body}`;
  }, [email, payload]);

  const waLink = useMemo(() => {
    const text = encodeURIComponent(
      `Bonjour, je souhaite un devis${payload?.productName ? ` pour: ${payload.productName}` : ''}. (Depuis le site)`
    );
    return `https://wa.me/${whatsapp}?text=${text}`;
  }, [whatsapp, payload]);

  return (
    <Ctx.Provider value={ctx}>
      {children}
      {isOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          aria-modal="true"
          role="dialog"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm opacity-100 animate-in fade-in duration-300"
            onClick={close}
          />
          {/* Modal */}
          <div
            className="relative w-full max-w-xl rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
            style={{ background: currentTheme.colors.surface }}
          >
            {/* Accent ring */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  `radial-gradient(1200px 1200px at -10% -10%, ${currentTheme.colors.primary}15, transparent 40%), radial-gradient(1200px 1200px at 110% 110%, ${currentTheme.colors.accent}15, transparent 40%)`,
              }}
            />
            <button
              aria-label="Fermer"
              onClick={close}
              className="absolute top-3 right-3 p-2 rounded-full bg-black/10 hover:bg-black/20 transition"
              style={{ color: currentTheme.colors.text }}
            >
              <X size={18} />
            </button>
            <div className="relative p-6 sm:p-8">
              <div className="flex items-center gap-4">
                <BrandLogo size={80} />
                <div>
                  <h3 className="text-2xl font-extrabold" style={{ color: currentTheme.colors.text }}>
                    Demande de Devis
                  </h3>
                  <p className="text-sm" style={{ color: currentTheme.colors.textSecondary }}>
                    Réponse rapide par email, WhatsApp ou téléphone.
                  </p>
                </div>
              </div>

              {payload?.productName && (
                <div className="mt-4 text-sm px-4 py-2 rounded-xl inline-flex" style={{ backgroundColor: `${currentTheme.colors.primary}10`, color: currentTheme.colors.primary }}>
                  Intérêt pour: <span className="font-semibold ml-2">{payload.productName}</span>
                </div>
              )}

              <div className="mt-6 space-y-4">
                <div className="rounded-2xl p-4 border" style={{ borderColor: `${currentTheme.colors.primary}20`, background: currentTheme.colors.background }}>
                  <p style={{ color: currentTheme.colors.textSecondary }}>
                    Dites-nous brièvement votre besoin. Notre équipe vous recontacte sous 24h avec une proposition claire et avantageuse.
                  </p>
                </div>

                <div className="grid sm:grid-cols-3 gap-3">
                  <a
                    href={mailto}
                    className="group rounded-xl px-4 py-3 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                    style={{ backgroundColor: currentTheme.colors.primary, color: '#fff' }}
                    onClick={close}
                  >
                    <Mail size={18} className="group-hover:scale-110 transition-transform" /> Email
                  </a>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noreferrer"
                    className="group rounded-xl px-4 py-3 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                    style={{ backgroundColor: currentTheme.colors.accent, color: '#fff' }}
                    onClick={close}
                  >
                    <MessageCircle size={18} className="group-hover:scale-110 transition-transform" /> WhatsApp
                  </a>
                  <a
                    href={`tel:${phone}`}
                    className="group rounded-xl px-4 py-3 font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all border"
                    style={{ color: currentTheme.colors.primary, borderColor: `${currentTheme.colors.primary}40`, background: `${currentTheme.colors.primary}05` }}
                    onClick={close}
                  >
                    <Phone size={18} className="group-hover:scale-110 transition-transform" /> Appeler
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Ctx.Provider>
  );
};

export default QuoteModalProvider;
