import React from 'react';
import { useTheme } from './ThemeProvider';
import { useQuoteModal } from './QuoteModal';

export type Product = {
  id: string;
  name: string;
  price: number; // in MAD
  image: string;
  description: string;
  category: string;
  brand?: string;
};

type Props = {
  product: Product;
  index?: number; // used for staggered animations
};

const currency = new Intl.NumberFormat('fr-MA', {
  style: 'currency',
  currency: 'MAD',
  maximumFractionDigits: 0,
});

const ProductCard: React.FC<Props> = ({ product, index = 0 }) => {
  const { currentTheme } = useTheme();
  const { open } = useQuoteModal();

  return (
    <div
      className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 h-full flex flex-col min-h-[410px] sm:min-h-[430px]"
      style={{ backgroundColor: currentTheme.colors.surface, animationDelay: `${index * 70}ms` }}
    >
      <div className="relative h-44 sm:h-52 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: `linear-gradient(180deg, transparent, ${currentTheme.colors.primary}33)` }}
        />
        <span
          className="absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full"
          style={{ backgroundColor: `${currentTheme.colors.accent}22`, color: currentTheme.colors.accent }}
        >
          {product.category}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <h3 className="text-lg font-semibold" style={{ color: currentTheme.colors.text }}>
          {product.name}
        </h3>
        <p
          className="text-sm"
          style={{
            color: currentTheme.colors.textSecondary,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical' as any,
            overflow: 'hidden',
          }}
        >
          {product.description}
        </p>
        <div className="mt-auto pt-1 flex items-center justify-between">
          <span
            className="px-3 py-1 rounded-xl text-sm font-semibold"
            style={{ backgroundColor: `${currentTheme.colors.primary}10`, color: currentTheme.colors.primary }}
          >
            {currency.format(product.price)}
          </span>
          <button
            onClick={() => open({ source: 'product-card', productName: product.name, productId: product.id })}
            className="text-sm font-medium px-4 py-2 rounded-xl transition-colors"
            style={{ backgroundColor: currentTheme.colors.accent, color: '#ffffff' }}
          >
            Demande Devis
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
