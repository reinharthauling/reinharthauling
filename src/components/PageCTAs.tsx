import { motion } from 'motion/react';
import { Phone } from 'lucide-react';
import EstimateRequestButton from './EstimateRequestButton.tsx';

type PageCTAsProps = {
  layout?: 'hero' | 'bottom';
  className?: string;
};

export default function PageCTAs({ layout = 'hero', className = '' }: PageCTAsProps) {
  const isBottom = layout === 'bottom';

  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row ${isBottom ? 'justify-center gap-6' : ''} ${className}`.trim()}
    >
      <EstimateRequestButton size={isBottom ? 'large' : 'default'} />
      <motion.a
        href="tel:6152000064"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={
          isBottom
            ? 'flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-10 py-5 text-xl font-bold text-brand-navy transition-all hover:scale-105 hover:border-brand-orange'
            : 'flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-orange'
        }
      >
        <Phone />
        Call Now
      </motion.a>
    </div>
  );
}
