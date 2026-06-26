import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronDown, ClipboardCheck, Hammer, MessageSquare, Phone, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CleanoutProcess from '../components/CleanoutProcess.tsx';

const ITEMS_REMOVED = [
  'Drywall and paneling',
  'Cabinets and built-ins',
  'Flooring and carpet',
  'Fixtures and non-structural materials',
  'Sheds, decks, and small tear-downs when appropriate',
  'Construction and renovation debris',
];

const GOOD_FIT_FOR = [
  'Investors preparing a flip',
  'Contractors needing demo help before repair work',
  'Property owners opening walls or rooms for inspection',
  'Landlords preparing rentals',
  'Businesses clearing space before renovations',
];

const DEMO_PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Send Photos or Schedule a Walkthrough',
    description:
      'Text photos of the space or schedule a walkthrough so we can understand materials, access, and the renovation goal.',
    cta: { href: 'sms:6152000064?body=Hi%2C%20I%20need%20interior%20demolition%20help', label: 'Text Photos →' },
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Confirm Scope & Access',
    description:
      'We review what is being removed, what stays, debris volume, parking, entry points, and timing before work begins.',
    cta: {
      href: 'sms:6152000064?body=Hi%2C%20I%27d%20like%20a%20quote%20for%20interior%20demo',
      label: 'Get Pricing →',
    },
  },
  {
    number: '03',
    icon: Hammer,
    title: 'Tear-Out, Loading & Cleanup',
    description:
      'Our crew completes the selective tear-out, loads debris, hauls it away, and keeps the work area organized.',
    cta: { href: 'tel:6152000064', label: 'Call Now →' },
  },
  {
    number: '04',
    icon: Truck,
    title: 'Ready for the Next Phase',
    description:
      'The space is left clearer and ready for the next trade, inspection, repair work, or renovation phase.',
    cta: { href: 'sms:6152000064?body=Hi%2C%20I%20need%20renovation%20prep%20cleanup', label: 'Start Project →' },
  },
];

const DEMO_FAQS = [
  {
    question: 'Do you do full house demolition?',
    answer:
      'No. We focus on interior demolition, selective tear-outs, debris removal, and cleanup. For full structural demolition, a licensed demolition contractor may be required.',
  },
  {
    question: 'Do you remove drywall?',
    answer:
      'Yes. We remove drywall and related debris as part of interior demo and renovation prep projects.',
  },
  {
    question: 'Do you haul away the debris?',
    answer: 'Yes. Tear-out, loading, hauling, and disposal can be included.',
  },
  {
    question: 'Do you work with investors and contractors?',
    answer:
      'Yes. We help investors, contractors, landlords, and property owners keep projects moving.',
  },
];

const RELATED_SERVICES = [
  { label: 'Property Cleanouts', to: '/property-cleanouts' },
  { label: 'Commercial Cleanouts', to: '/commercial-cleanouts' },
  { label: 'Landlord & Rental Cleanouts', to: '/landlord-rental-cleanouts' },
  { label: 'Garage Cleanouts', to: '/garage-cleanouts' },
];

export default function InteriorDemolition() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>Interior Demolition in Middle Tennessee | Reinhart Hauling &amp; Cleanouts</title>
        <meta
          name="description"
          content="Interior demolition in Middle Tennessee for drywall removal, selective tear-outs, debris loading, hauling, and cleanup before repair or renovation work."
        />
      </Helmet>

      <section className="relative scroll-mt-32 pt-32 pb-16 lg:pt-48 lg:pb-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                  INTERIOR DEMOLITION
                </span>
                <h1 className="font-display text-[3.4rem] lg:text-[5rem] font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                  Interior Demolition That Keeps Renovation Projects Moving
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                  Drywall removal, selective tear-outs, debris loading, and cleanup for property owners, investors,
                  contractors, and businesses preparing a space for repair or renovation.
                </p>
                <p className="text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  This is clean, organized interior demolition and debris removal for renovation prep, property
                  transitions, and repair work—not full structural demolition.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="sms:6152000064?body=Hi%2C%20I%20need%20a%20fast%20quote%20for%20interior%20demolition"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 group hover:bg-brand-orange transition-all"
                  >
                    <MessageSquare className="text-brand-orange" />
                    Text Photos for a Fast Quote
                  </motion.a>
                  <motion.a
                    href="tel:6152000064"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white border-2 border-slate-200 text-brand-navy px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:border-brand-orange transition-colors"
                  >
                    <Phone />
                    Call 615-200-0064
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[300px] sm:h-[380px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 border border-slate-200/80 bg-slate-900"
            >
              <img
                src="/images/truck-trailer.jpeg"
                alt="Reinhart Hauling and Cleanouts truck and trailer for interior demolition debris removal"
                className="h-full w-full object-cover object-[42%_50%] sm:object-[45%_50%] lg:object-center"
                width={1600}
                height={1200}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">What We Remove</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Interior demolition support for non-structural materials, renovation debris, and small tear-downs when
              they fit the project scope.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ITEMS_REMOVED.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4"
              >
                <CheckCircle2 size={18} className="text-brand-orange shrink-0 mt-0.5" />
                <span className="font-semibold text-brand-navy">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">Good Fit For</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Organized demo help for spaces that need to be opened up, cleaned out, and prepared for what comes next.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {GOOD_FIT_FOR.map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -8 }}
                className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex h-full flex-col gap-5"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                  <Hammer size={18} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy">{item}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CleanoutProcess
        id="interior-demo-process"
        title="Interior Demo Process"
        subtitle="A clear scope, organized tear-out, and debris removal so the property is ready for the next trade or project phase."
        steps={DEMO_PROCESS_STEPS}
      />

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl border border-brand-orange/30 bg-brand-orange/5 p-8 md:p-10 shadow-xl shadow-brand-orange/10">
            <div className="flex gap-1 mb-6">
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-brand-orange text-xl">
                  ★
                </span>
              ))}
            </div>
            <blockquote className="text-xl md:text-2xl leading-relaxed text-brand-navy font-medium mb-8">
              &ldquo;We hired Reinhart to remove drywall from an entire house. The workmanship, attention to detail is
              outstanding and pricing is more than fair. Jeremiah, the owner is a great communicator, courteous and
              punctual. I highly recommend their services for any hauling, interior demo and general clean-up.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-11 h-11 bg-brand-orange/10 rounded-full flex items-center justify-center text-brand-orange font-bold">
                D
              </div>
              <div>
                <div className="font-bold text-brand-navy">David Abbondanza</div>
                <div className="text-sm text-slate-500 font-medium">Verified Google Review</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">
              Interior Demolition FAQs
            </h2>
            <p className="text-slate-600">
              Common questions about selective tear-outs, drywall removal, debris hauling, and renovation prep.
            </p>
          </div>

          <div className="space-y-4">
            {DEMO_FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;

              return (
                <div key={faq.question} className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                  <button
                    type="button"
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-bold text-brand-navy">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`text-brand-orange shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="font-display text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
                  Related Services
                </h2>
                <p className="text-slate-600 leading-relaxed">
                  Interior demolition often supports larger property cleanout, rental turnover, commercial, and
                  renovation-prep projects.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {RELATED_SERVICES.map((service) => (
                  <Link
                    key={service.label}
                    to={service.to}
                    className="flex items-center justify-between rounded-2xl bg-white border border-slate-200 px-5 py-4 font-semibold text-brand-navy hover:border-brand-orange hover:text-brand-orange transition-colors"
                  >
                    {service.label}
                    <ChevronDown size={16} className="-rotate-90 text-brand-orange" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-hide-sticky-cta className="py-24 bg-brand-navy text-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6">Need interior demo help?</h2>
          <p className="text-slate-300 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
            Text photos for a fast quote or call now to talk through the scope, access, debris, and timeline.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="sms:6152000064?body=Hi%2C%20I%20need%20a%20fast%20quote%20for%20interior%20demolition"
              className="inline-flex items-center justify-center gap-3 bg-brand-orange text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-orange/25"
            >
              <MessageSquare />
              Text Photos for a Fast Quote
            </a>
            <a
              href="tel:6152000064"
              className="inline-flex items-center justify-center gap-3 bg-white text-brand-navy px-8 py-4 rounded-2xl font-bold text-lg hover:border-brand-orange transition-colors"
            >
              <Phone />
              Call 615-200-0064
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
