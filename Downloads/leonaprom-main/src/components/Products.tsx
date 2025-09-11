// no default React import needed with jsx: react-jsx
import React from 'react';
import { useTheme } from './ThemeProvider';
import ProductCard from './ProductCard';
import products from '../data/products';
import { useQuoteModal } from './QuoteModal';

const Products = () => {
  const { currentTheme } = useTheme();
  const { open } = useQuoteModal();
  // rows to show initially and on each increment
  const ROWS_STEP = 2;
  const [rowsVisible, setRowsVisible] = React.useState(2);

  // Determine columns based on CSS breakpoints to compute slice size
  // We also keep it robust on server build by defaulting to 1
  const [cols, setCols] = React.useState(1);
  React.useEffect(() => {
    const computeCols = () => {
      const w = window.innerWidth;
      if (w >= 1280) return 4; // xl
      if (w >= 1024) return 3; // lg
      if (w >= 640) return 2; // sm
      return 1;
    };
    const update = () => setCols(computeCols());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const itemsPerPage = Math.max(cols * rowsVisible, cols); // at least one row
  const visibleProducts = products.slice(0, itemsPerPage);
  const hasMore = itemsPerPage < products.length;

  return (
    <section 
      id="products" 
      className="py-20 relative"
      style={{ backgroundColor: currentTheme.colors.surface }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-1000">
          <h2 
            className="text-4xl lg:text-6xl font-bold mb-6"
            style={{ color: currentTheme.colors.text }}
          >
            Nos Produits
          </h2>
          <div 
            className="w-24 h-1 mx-auto mb-6 rounded-full"
            style={{ backgroundColor: currentTheme.colors.accent }}
          />
          <p 
            className="text-xl max-w-3xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            Une gamme complète d'équipements de sécurité des marques les plus reconnues 
            pour répondre à tous vos besoins de protection.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleProducts.map((p, idx) => (
            <div key={p.id} className="animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: `${idx * 40}ms` }}>
              <ProductCard product={p} index={idx} />
            </div>
          ))}
        </div>

        <div className="text-center mt-10 flex flex-col items-center gap-6">
          {hasMore && (
            <button
              onClick={() => setRowsVisible(v => v + ROWS_STEP)}
              className="px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-0.5"
              style={{ backgroundColor: currentTheme.colors.primary, color: '#fff' }}
            >
              Afficher 2 rangées de plus
            </button>
          )}
          <button
            onClick={() => open({ source: 'products-section' })}
            className="text-white px-10 py-4 rounded-2xl font-semibold transition-all duration-500 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 hover:scale-105 relative overflow-hidden group inline-block"
            style={{ backgroundColor: currentTheme.colors.accent }}
          >
            <span className="relative z-10">Demande Devis</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;