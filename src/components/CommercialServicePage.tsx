import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  Calendar,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
  Truck,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import EmailContactMenu from './EmailContactMenu.tsx';
import {
  getRelatedCommercialServices,
  type CommercialServicePageConfig,
} from '../data/commercialServicePages.ts';

const SITE_URL = 'https://www.reinharthauling.com';
const OG_IMAGE = `${SITE_URL}/og/reinhart-cleanouts-og-v2.jpg?v=3`;

const DEFAULT_IDEAL_CUSTOMERS = [
  'Commercial Property Managers',
  'General Contractors',
  'Commercial Real Estate',
  'Investors',
  'Business Owners',
  'Retail Chains',
  'Facility Managers',
];

const WHY_REINHART = [
  {
    title: 'Local',
    description: 'Middle Tennessee commercial property support with regional project experience.',
  },
  {
    title: 'Responsive',
    description: 'Clear communication from quote through completion—especially when timelines are tight.',
  },
  {
    title: 'Licensed & Insured',
    description: 'Professional commercial service backed by proper insurance and accountable execution.',
  },
  {
    title: 'Professional Communication',
    description: 'Scope, scheduling, and expectations confirmed upfront for property teams and contractors.',
  },
  {
    title: 'Property Protection',
    description: 'Organized work that respects access points, facilities, and the next project phase.',
  },
  {
    title: 'Commercial Experience',
    description: 'Documented office, retail, warehouse, and managed-property project support.',
  },
];

const PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Request Quote',
    description: 'Share photos, project details, or schedule a call so we can understand scope and timing.',
  },
  {
    number: '02',
    icon: Calendar,
    title: 'Schedule Walkthrough',
    description: 'For larger scopes, we confirm access, volume, and project requirements on site when needed.',
  },
  {
    number: '03',
    icon: Truck,
    title: 'Complete Project',
    description: 'Our crew executes the cleanout, strip-out, or load-out with organized loading and haul-away.',
  },
  {
    number: '04',
    icon: CheckCircle2,
    title: 'Property Ready For Next Phase',
    description: 'The space is left cleared and ready for renovation, occupancy, marketing, or lease turnover.',
  },
];

type CommercialServicePageProps = {
  config: CommercialServicePageConfig;
};

export default function CommercialServicePage({ config }: CommercialServicePageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const smsHref =
    config.smsBody ??
    `sms:6152000064?body=${encodeURIComponent(`Hi, I need help with ${config.heroHeadline.toLowerCase()}.`)}`;
  const canonicalUrl = `${SITE_URL}${config.canonicalPath}`;
  const ogTitle = config.ogTitle ?? config.pageTitle;
  const relatedServices = getRelatedCommercialServices(config.canonicalPath);
  const idealCustomers = config.idealCustomers ?? DEFAULT_IDEAL_CUSTOMERS;

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: config.heroHeadline,
    serviceType: config.heroHeadline,
    description: config.metaDescription,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Reinhart Hauling & Cleanouts',
      url: SITE_URL,
      telephone: '+1-615-200-0064',
      areaServed: 'Middle Tennessee',
    },
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Middle Tennessee',
    },
    url: canonicalUrl,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: config.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Helmet>
        <title>{config.pageTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={config.metaDescription} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={config.metaDescription} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(serviceSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="relative scroll-mt-32 overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  {config.heroEyebrow}
                </span>
                <h1 className="mb-8 font-display text-[2.75rem] font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-[4.5rem]">
                  {config.heroHeadline}
                </h1>
                <p className="mb-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">{config.heroIntro}</p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <motion.a
                    href={smsHref}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group flex items-center justify-center gap-3 rounded-2xl bg-brand-navy px-8 py-4 text-lg font-bold text-white shadow-2xl shadow-brand-navy/30 transition-all hover:bg-brand-orange"
                  >
                    <MessageSquare className="text-brand-orange" />
                    Text Photos for a Fast Quote
                  </motion.a>
                  <motion.a
                    href="tel:6152000064"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-orange"
                  >
                    <Phone />
                    Call Now
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {config.heroImage && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="relative h-[300px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 sm:h-[380px] lg:h-[480px]"
              >
                <img
                  src={config.heroImage}
                  alt={config.heroImageAlt ?? config.heroHeadline}
                  className="h-full w-full object-cover object-center"
                  width={1600}
                  height={1200}
                />
              </motion.div>
            )}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              What This Service Includes
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Structured commercial project support designed to help properties move toward renovation, occupancy, lease
              turnover, or the next phase.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2" role="list">
            {config.servicesIncluded.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm font-semibold text-brand-navy"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Typical Projects</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Common commercial situations where property teams, contractors, and ownership groups need dependable
              execution.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {config.typicalProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <h3 className="mb-3 font-display text-xl font-bold text-brand-navy">{project.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Ideal Customers</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              We support commercial property professionals and businesses preparing spaces for transition, renovation,
              or occupancy.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {idealCustomers.map((customer, index) => (
              <motion.div
                key={customer}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-center text-sm font-semibold text-brand-navy shadow-sm"
              >
                {customer}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Our Process</h2>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
              A clear commercial workflow built around scope, communication, execution, and handoff.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-base font-extrabold tracking-[0.2em] text-brand-orange">{step.number}</span>
                    <Icon className="text-brand-navy" size={24} />
                  </div>
                  <h3 className="mb-3 font-display text-2xl font-bold text-brand-navy">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Why Reinhart</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Property teams choose Reinhart when professional execution, schedule discipline, and clear communication
              matter.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_REINHART.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  {index === 0 ? (
                    <MapPin size={18} />
                  ) : index === 1 ? (
                    <MessageSquare size={18} />
                  ) : index === 2 ? (
                    <ShieldCheck size={18} />
                  ) : index === 5 ? (
                    <ClipboardCheck size={18} />
                  ) : (
                    <Star size={18} />
                  )}
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Frequently Asked Questions</h2>
            <p className="text-slate-600 leading-relaxed">Common questions about {config.heroHeadline.toLowerCase()}.</p>
          </div>
          <div className="space-y-3">
            {config.faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={faq.question} className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  >
                    <span className="font-semibold text-brand-navy">{faq.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-brand-orange transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <div className="border-t border-slate-100 px-5 pb-4 pt-1 text-sm leading-relaxed text-slate-600">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Related Commercial Services</h2>
            <p className="mx-auto max-w-2xl text-slate-600 leading-relaxed">
              Explore other commercial property services that often support the same transitions and project timelines.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                {service.label}
              </Link>
            ))}
            <Link
              to="/commercial-services"
              className="rounded-full border border-brand-orange/30 bg-brand-orange/5 px-4 py-2 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange/10"
            >
              View All Commercial Services
            </Link>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24" data-hide-sticky-cta>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
              Ready to move your commercial project forward?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
              Text photos for a fast quote, call to discuss scope, or request an on-site estimate for larger commercial
              projects.
            </p>

            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <a
                href={smsHref}
                className="flex items-center justify-center gap-3 rounded-2xl bg-brand-navy px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-brand-navy/30 transition-all hover:scale-105 hover:bg-brand-orange"
              >
                <MessageSquare className="text-brand-orange" />
                Text Photos for a Fast Quote
              </a>
              <a
                href="tel:6152000064"
                className="flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-10 py-5 text-xl font-bold text-brand-navy transition-all hover:scale-105 hover:border-brand-orange"
              >
                <Phone />
                Call Now
              </a>
            </div>

            <div className="mt-6 flex flex-col items-center gap-1">
              <span className="text-sm font-semibold text-brand-navy">Need an on-site estimate?</span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <a
                  href="tel:6152000064"
                  className="text-brand-orange transition-colors hover:text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-offset-2 rounded-md"
                >
                  Call Us
                </a>
                <span className="text-slate-300" aria-hidden="true">
                  •
                </span>
                <EmailContactMenu />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
