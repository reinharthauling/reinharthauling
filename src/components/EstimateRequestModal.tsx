import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import EstimateRequestForm from './EstimateRequestForm.tsx';

type EstimateRequestModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function EstimateRequestModal({ isOpen, onClose }: EstimateRequestModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[80] flex items-end justify-center bg-brand-navy/60 p-4 backdrop-blur-sm sm:items-center"
          onClick={handleBackdropClick}
          role="presentation"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.24, ease: 'easeOut' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="estimate-request-title"
            className="relative max-h-[calc(100vh-2rem)] w-full max-w-xl overflow-y-auto rounded-2xl bg-white shadow-2xl shadow-brand-navy/20 ring-1 ring-slate-900/5 scrollbar-subtle"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="sticky top-0 z-10 bg-brand-navy px-6 pb-5 pt-6 text-white">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close estimate request form"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
              >
                <X size={18} />
              </button>
              <h2 id="estimate-request-title" className="pr-10 font-display text-2xl font-bold leading-tight">
                Request an Estimate
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
                Tell us about the property and project. We&apos;ll review the scope and contact you to determine the next
                step.
              </p>
            </div>

            <div className="px-6 py-6">
              <EstimateRequestForm variant="modal" onSubmitted={onClose} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
