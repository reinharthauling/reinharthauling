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
      className={`flex ${isBottom ? 'flex-col justify-center gap-4 sm:flex-row sm:gap-6' : 'flex-row flex-wrap gap-2.5 sm:gap-4'} ${className}`.trim()}
    >
      <EstimateRequestButton
        size={isBottom ? 'large' : 'default'}
        className={isBottom ? '' : 'min-w-0 flex-1 !px-3 !py-3 !text-sm leading-tight sm:flex-none sm:!px-8 sm:!py-4 sm:!text-lg sm:leading-normal'}
      />
      <motion.a
        href="tel:+16152000064"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={
          isBottom
            ? 'flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-10 py-5 text-xl font-bold text-brand-navy transition-all hover:scale-105 hover:border-brand-orange'
            : 'flex min-w-0 flex-1 items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-3 py-3 text-sm font-bold leading-tight text-brand-navy transition-colors hover:border-brand-orange sm:flex-none sm:gap-3 sm:px-8 sm:py-4 sm:text-lg sm:leading-normal'
        }
      >
        <Phone />
        Call Now
      </motion.a>
    </div>
  );
}
