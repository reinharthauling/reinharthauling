import { motion } from 'motion/react';
import { ClipboardList } from 'lucide-react';
import { useEstimateRequest } from '../context/EstimateRequestContext.tsx';

type EstimateRequestButtonProps = {
  size?: 'default' | 'large';
  className?: string;
};

const sizeClasses = {
  default:
    'group flex items-center justify-center gap-3 rounded-2xl bg-brand-navy px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-brand-navy/30 transition-all hover:bg-brand-orange',
  large:
    'flex items-center justify-center gap-3 rounded-2xl bg-brand-navy px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-brand-navy/30 transition-all hover:scale-105 hover:bg-brand-orange',
};

export default function EstimateRequestButton({ size = 'default', className = '' }: EstimateRequestButtonProps) {
  const { openEstimateRequest } = useEstimateRequest();

  return (
    <motion.button
      type="button"
      onClick={openEstimateRequest}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${sizeClasses[size]} ${className}`.trim()}
    >
      <ClipboardList className="text-brand-orange" />
      Request an Estimate
    </motion.button>
  );
}
