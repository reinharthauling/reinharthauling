import { motion } from 'motion/react';
import { ClipboardList, Phone } from 'lucide-react';
import PageCTAs from './PageCTAs.tsx';
import EmailContactMenu from './EmailContactMenu.tsx';
import { useEstimateRequest } from '../context/EstimateRequestContext.tsx';

export const SERVICE_BOTTOM_CTA_HEADLINE = 'Have a Property Problem?';

export const SERVICE_BOTTOM_CTA_COPY =
  "Whether you're preparing a property for sale, managing an estate, coordinating a renovation, clearing a commercial facility, or facing a difficult cleanup, Reinhart helps remove obstacles so the project can move forward. Tell us about the property and scope of work, and we'll contact you to determine the next step.";

type ServiceBottomCTAProps = {
  variant?: 'light' | 'dark' | 'home';
  showContactExtras?: boolean;
  sectionClassName?: string;
};

export default function ServiceBottomCTA({
  variant = 'light',
  showContactExtras = false,
  sectionClassName,
}: ServiceBottomCTAProps) {
  const { openEstimateRequest } = useEstimateRequest();

  const defaultSectionClass =
    variant === 'dark'
      ? 'bg-brand-navy py-24 text-white'
      : variant === 'home'
        ? 'py-24 relative overflow-hidden'
        : 'scroll-mt-32 bg-slate-50 py-24';

  const sectionClass = sectionClassName ?? defaultSectionClass;

  const headingClass =
    variant === 'home'
      ? 'font-display text-5xl lg:text-7xl font-bold text-brand-navy mb-8 leading-tight'
      : variant === 'dark'
        ? 'mb-6 font-display text-4xl font-bold lg:text-5xl'
        : 'mb-6 font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl';

  const copyClass =
    variant === 'home'
      ? 'text-xl text-slate-600 mb-12 max-w-2xl mx-auto'
      : variant === 'dark'
        ? 'mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-slate-300'
        : 'mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600';

  const containerClass =
    variant === 'home'
      ? 'max-w-7xl mx-auto px-6 text-center'
      : variant === 'dark'
        ? 'mx-auto max-w-5xl px-6 text-center'
        : 'mx-auto max-w-7xl px-6 text-center';

  const innerClass = variant === 'home' || variant === 'light' ? 'mx-auto max-w-4xl' : '';

  const buttons =
    variant === 'dark' ? (
      <div className="flex flex-col justify-center gap-4 sm:flex-row">
        <motion.button
          type="button"
          onClick={openEstimateRequest}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-flex items-center justify-center gap-3 rounded-2xl bg-brand-orange px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-brand-orange/25"
        >
          <ClipboardList />
          Request an Estimate
        </motion.button>
        <a
          href="tel:6152000064"
          className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-orange"
        >
          <Phone />
          Call Now
        </a>
      </div>
    ) : (
      <PageCTAs layout="bottom" />
    );

  const content = (
    <>
      <h2 className={headingClass}>{SERVICE_BOTTOM_CTA_HEADLINE}</h2>
      <p className={copyClass}>{SERVICE_BOTTOM_CTA_COPY}</p>
      {buttons}
      {showContactExtras && (
        <div className="mt-6 flex flex-col items-center gap-1">
          <span className="text-sm font-semibold text-brand-navy">Need an on-site walkthrough?</span>
          <span className="inline-flex items-center gap-2 text-sm font-semibold">
            <a
              href="tel:6152000064"
              className="rounded-md text-brand-orange transition-colors hover:text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-offset-2"
            >
              Call Us
            </a>
            <span className="text-slate-300" aria-hidden="true">
              •
            </span>
            <EmailContactMenu />
          </span>
        </div>
      )}
    </>
  );

  return (
    <section className={sectionClass} data-hide-sticky-cta>
      <div className={containerClass}>
        {variant === 'home' ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className={innerClass}
          >
            {content}
          </motion.div>
        ) : innerClass ? (
          <div className={innerClass}>{content}</div>
        ) : (
          content
        )}
      </div>
    </section>
  );
}
