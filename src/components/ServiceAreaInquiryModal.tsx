import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, X } from 'lucide-react';

type ServiceAreaInquiryModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  propertyAddress: string;
  projectDetails: string;
};

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  propertyAddress: '',
  projectDetails: '',
};

const inputClassName =
  'w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-brand-navy outline-none transition-colors placeholder:text-slate-400 focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20';

export default function ServiceAreaInquiryModal({ isOpen, onClose }: ServiceAreaInquiryModalProps) {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  useEffect(() => {
    if (isOpen) return;
    setIsSubmitted(false);
    setFormData(INITIAL_FORM);
    setIsSubmitting(false);
  }, [isOpen]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/service-area-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert('There was an error sending your inquiry. Please call us at 615-200-0064.');
      }
    } catch {
      alert('There was an error sending your inquiry. Please call us at 615-200-0064.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            aria-labelledby="service-area-inquiry-title"
            className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl shadow-brand-navy/20 ring-1 ring-slate-900/5"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="relative bg-brand-navy px-6 pb-5 pt-6 text-white">
              <button
                type="button"
                onClick={onClose}
                aria-label="Close service area inquiry form"
                className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-colors hover:bg-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/40"
              >
                <X size={18} />
              </button>
              <h2 id="service-area-inquiry-title" className="pr-10 font-display text-2xl font-bold leading-tight">
                Service Area Inquiry
              </h2>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-slate-300">
                Send us the property address and project details. We&apos;ll confirm whether we can help and follow up
                promptly.
              </p>
            </div>

            <div className="px-6 py-6">
              {isSubmitted ? (
                <div className="py-4 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange/10">
                    <CheckCircle2 className="h-7 w-7 text-brand-orange" />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-bold text-brand-navy">Inquiry Received</h3>
                  <p className="mb-6 text-sm leading-relaxed text-slate-600">
                    Thanks for reaching out. We&apos;ll review your property location and project details and follow up
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="rounded-xl bg-brand-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-orange"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label htmlFor="service-area-name" className="text-sm font-semibold text-brand-navy">
                      Full Name
                    </label>
                    <input
                      id="service-area-name"
                      required
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      className={inputClassName}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <label htmlFor="service-area-email" className="text-sm font-semibold text-brand-navy">
                        Email Address
                      </label>
                      <input
                        id="service-area-email"
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className={inputClassName}
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="service-area-phone" className="text-sm font-semibold text-brand-navy">
                        Phone Number
                      </label>
                      <input
                        id="service-area-phone"
                        required
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        autoComplete="tel"
                        className={inputClassName}
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service-area-address" className="text-sm font-semibold text-brand-navy">
                      Property Address
                    </label>
                    <input
                      id="service-area-address"
                      required
                      type="text"
                      name="propertyAddress"
                      value={formData.propertyAddress}
                      onChange={handleChange}
                      autoComplete="street-address"
                      placeholder="Street address, city, state"
                      className={inputClassName}
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="service-area-details" className="text-sm font-semibold text-brand-navy">
                      Project Details
                    </label>
                    <textarea
                      id="service-area-details"
                      required
                      name="projectDetails"
                      value={formData.projectDetails}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Tell us about the cleanout, turnover, demolition support, or commercial project."
                      className={`${inputClassName} resize-y min-h-[112px]`}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-brand-orange px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-orange/25 transition-all hover:bg-brand-orange-light disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Inquiry'}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
