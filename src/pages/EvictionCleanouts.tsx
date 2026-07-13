import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CalendarClock, CheckCircle2, ChevronDown, ClipboardCheck, MapPin, MessageSquare, Phone, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageCTAs from '../components/PageCTAs.tsx';
import CleanoutProcess from '../components/CleanoutProcess.tsx';

const WHO_WE_HELP = [
  {
    title: 'Property Managers',
    desc: 'Fast response for occupied-to-vacant transitions, with scheduling updates your team can rely on.',
  },
  {
    title: 'Landlords',
    desc: 'Straightforward support when a unit needs to be cleared quickly so repairs and showings can move forward.',
  },
  {
    title: 'Real Estate Investors',
    desc: 'Cleanout execution built for timeline-sensitive acquisitions, flips, and rental reset work.',
  },
  {
    title: 'Turnover Teams',
    desc: 'Coordinated cleanout sequencing so cleaners, maintenance crews, and contractors can step in without delays.',
  },
  {
    title: 'Rental Portfolios',
    desc: 'Consistent cleanout support across multiple units with clear scope and reliable communication.',
  },
  {
    title: 'Distressed Property Owners',
    desc: 'Practical, respectful help on difficult properties that need structure, planning, and steady follow-through.',
  },
];

const INCLUDED_SERVICES = [
  {
    title: 'Apartment Cleanouts',
    desc: 'Full unit clearing after move-outs and evictions, including remaining furniture and general debris.',
  },
  {
    title: 'Rental Turnovers',
    desc: 'Cleanout support that helps properties move into repair, cleaning, and re-listing without unnecessary lag.',
  },
  {
    title: 'Furniture & Debris Removal',
    desc: 'Beds, couches, loose debris, and mixed contents removed with a structured load-out process.',
  },
  {
    title: 'Appliance Removal',
    desc: 'Old or abandoned appliances removed safely so the next project phase can proceed.',
  },
  {
    title: 'Garage & Storage Cleanouts',
    desc: 'Overflow areas, detached storage spaces, and garages cleared as part of the turnover scope.',
  },
  {
    title: 'Move-Out Trash Removal',
    desc: 'Bagged waste, boxed leftovers, and scattered trash handled quickly during vacant-unit transitions.',
  },
  {
    title: 'Abandoned Property Removal',
    desc: 'Left-behind personal items and bulk contents removed with clear communication on what should stay.',
  },
  {
    title: 'Interior Sweep-Outs',
    desc: 'Final pass for loose debris and remaining items so the property is ready for the next step.',
  },
];

const EVICTION_PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Request an Estimate or Schedule a Walkthrough',
    description:
      'Submit project details for smaller turnovers. For larger or more complex jobs, we can schedule a walkthrough first.',
    cta: { label: 'Request an Estimate →', estimate: true },
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Scope Review & Scheduling Plan',
    description:
      'We review access, labor, debris volume, disposal needs, and scheduling so expectations are clear before work begins.',
    cta: { href: 'tel:6152000064', label: 'Call Now →' },
  },
  {
    number: '03',
    icon: Truck,
    title: 'Property Clear-Out & Final Readiness',
    description:
      'Our crew arrives on schedule, clears the unit, hauls debris, and leaves the space ready for cleaning, repairs, or listing prep.',
    cta: { href: 'tel:6152000064', label: 'Call Now ->' },
  },
];

const EVICTION_FAQS = [
  {
    question: 'How quickly can you schedule an eviction cleanout?',
    answer:
      'We prioritize turnover timelines and can often schedule quickly depending on scope and calendar availability. Request an estimate and we can usually give you a clear next-step timeline right away.',
  },
  {
    question: 'Do you work with property managers?',
    answer:
      'Yes. We regularly coordinate with property managers, landlords, and leasing teams to keep unit transitions moving with clear communication.',
  },
  {
    question: 'Can you remove abandoned furniture and trash?',
    answer:
      'Yes. We remove abandoned furniture, bagged trash, loose debris, and mixed leftover contents from apartments, homes, and rental units.',
  },
  {
    question: 'Do you offer walkthroughs before larger jobs?',
    answer:
      'Absolutely. Larger turnovers often benefit from a walkthrough so we can assess volume, access, labor, disposal needs, and timing before scheduling.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We serve Nashville, Goodlettsville, Hendersonville, Madison, Gallatin, Springfield, White House, Joelton, Greenbrier, and nearby Middle Tennessee communities.',
  },
  {
    question: 'Do you clean garages and storage areas too?',
    answer:
      'Yes. Garage and storage-area clearing is part of many turnover projects, and we can include it in the same scope when needed.',
  },
  {
    question: 'Can you work while maintenance crews are onsite?',
    answer:
      'Yes. We can coordinate timing with cleaning and maintenance teams so the handoff stays organized and the unit moves forward efficiently.',
  },
];

const EVICTION_SERVICE_AREAS = [
  'Nashville',
  'Goodlettsville',
  'Hendersonville',
  'Madison',
  'Gallatin',
  'Springfield',
  'White House',
  'Joelton',
  'Greenbrier',
];

export default function EvictionCleanouts() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <>
      <Helmet>
        <title>Eviction Cleanout Services in Nashville &amp; Middle Tennessee</title>
        <meta
          name="description"
          content="Eviction cleanout services for landlords and property managers across Nashville and Middle Tennessee. Fast turnover support, clear scheduling, and reliable property clearing."
        />
      </Helmet>
    
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                  FAST TURNOVER CLEANOUTS
                </span>
                <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                  Eviction Cleanout Services in <br />
                  <span className="text-brand-orange">Nashville &amp; Middle Tennessee</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
                  Operational eviction cleanout support for landlords and property managers who need units turned
                  over quickly. We handle abandoned belongings removal, debris clearing, and rental reset prep with
                  responsive communication from first message to final sweep-through.
                </p>

                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
                  Smaller jobs can often be quoted from submitted project details. Larger turnovers and more complex properties
                  can be reviewed through an on-site walkthrough so scope, access, and scheduling are clear upfront.
                </p>

                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                  Related support includes{' '}
                  <Link
                    to="/landlord-rental-cleanouts"
                    className="text-brand-orange hover:text-brand-orange transition-colors"
                  >
                    landlord &amp; rental cleanouts
                  </Link>{' '}
                  ,{' '}
                  <Link
                    to="/property-cleanouts"
                    className="text-brand-orange hover:text-brand-orange transition-colors"
                  >
                    property cleanouts
                  </Link>
                  ,{' '}
                  <Link to="/estate-cleanouts" className="text-brand-orange hover:text-brand-orange transition-colors">
                    estate cleanouts
                  </Link>
                  , and{' '}
                  <Link to="/garage-cleanouts" className="text-brand-orange hover:text-brand-orange transition-colors">
                    garage cleanouts
                  </Link>
                  .
                </p>

                <PageCTAs layout="hero" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
                Who We Help
              </h2>
              <p className="text-slate-600 max-w-2xl text-lg leading-relaxed">
                Built for teams and owners who need dependable turnover support and clear scheduling communication.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {WHO_WE_HELP.map((item) => (
                <motion.div
                  key={item.title}
                  whileHover={{ y: -8 }}
                  className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex h-full flex-col gap-5"
                >
                  <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                    <CheckCircle2 size={18} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{item.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-14">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">
                Services Included
              </h2>
              <p className="text-slate-600 max-w-3xl leading-relaxed">
                Structured eviction and turnover cleanout services designed to keep properties moving toward
                readiness without confusion.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {INCLUDED_SERVICES.map((service) => (
                <div
                  key={service.title}
                  className="bg-white p-7 rounded-3xl border border-slate-200 shadow-sm flex h-full flex-col"
                >
                  <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{service.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed flex-1">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">How We Work</h2>
              <p className="text-slate-600 max-w-3xl leading-relaxed">
                A straightforward workflow for eviction and turnover projects, including walkthroughs when larger
                scope requires extra planning.
              </p>
            </div>
          </div>

          <CleanoutProcess
            title="How Our Eviction Cleanout Process Works"
            subtitle="Smaller jobs often start from photos, while larger turnovers can be scoped through walkthroughs to keep execution smooth."
            className="pt-0 pb-0 bg-white"
            steps={EVICTION_PROCESS_STEPS}
          />
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Eviction Cleanout FAQs</h2>
              <p className="text-slate-600 leading-relaxed">
                Practical answers for property managers, landlords, and turnover teams.
              </p>
            </div>

            <div className="space-y-3">
              {EVICTION_FAQS.map((item, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={item.question}
                    className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    >
                      <span className="font-display text-base md:text-lg font-bold text-brand-navy leading-snug">
                        {item.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`shrink-0 text-brand-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Areas We Serve</h2>
              <p className="text-slate-600 max-w-3xl leading-relaxed">
                Eviction and turnover cleanouts across Nashville, Goodlettsville, Hendersonville, Madison, Gallatin,
                Springfield, White House, Joelton, Greenbrier, and surrounding Middle Tennessee communities.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
              {EVICTION_SERVICE_AREAS.map((area) => (
                <div
                  key={area}
                  className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3.5 text-center text-sm font-semibold text-brand-navy"
                >
                  {area}
                </div>
              ))}
              <div className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-center text-sm font-medium text-slate-500 col-span-2 sm:col-span-3 lg:col-span-5">
                Surrounding Middle Tennessee communities
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-10">
              <h2 className="font-display text-3xl font-bold text-brand-navy mb-4">Related Services</h2>
              <p className="text-slate-500 max-w-3xl">
                Related cleanout services for complex transitions and larger property scopes.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link
                to="/estate-cleanouts"
                className="px-6 py-4 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
              >
                Estate Cleanouts
              </Link>
              <Link
                to="/landlord-rental-cleanouts"
                className="px-6 py-4 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
              >
                Landlord &amp; Rental Cleanouts
              </Link>
              <Link
                to="/property-cleanouts"
                className="px-6 py-4 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
              >
                Property Cleanouts
              </Link>
              <Link
                to="/garage-cleanouts"
                className="px-6 py-4 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
              >
                Garage Cleanouts
              </Link>
            </div>
          </div>
        </section>
      </>
    );
}

