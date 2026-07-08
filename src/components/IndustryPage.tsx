import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import {
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs, { buildBreadcrumbSchema } from './Breadcrumbs.tsx';
import EmailContactMenu from './EmailContactMenu.tsx';
import { INDUSTRIES_HUB_PATH } from '../data/industriesNavigation.ts';
import type { IndustryPageConfig } from '../data/industryPages.ts';

const SITE_URL = 'https://www.reinharthauling.com';
const OG_IMAGE = `${SITE_URL}/og/reinhart-cleanouts-og-v2.jpg?v=3`;

const WHY_REINHART = [
  {
    title: 'Professional Execution',
    description: 'Organized commercial work built around scope clarity—not rushed pickups without a plan.',
  },
  {
    title: 'Property Protection',
    description: 'Defined scope boundaries so surrounding areas, finishes, and access points stay protected.',
  },
  {
    title: 'Reliable Scheduling',
    description: 'Dependable mobilization aligned with turnover, renovation, and contractor timelines.',
  },
  {
    title: 'Commercial Experience',
    description: 'Documented office, retail, warehouse, and managed-property project support across Middle Tennessee.',
  },
  {
    title: 'Responsive Communication',
    description: 'Clear updates from quote through completion—especially when project schedules shift.',
  },
  {
    title: 'Licensed & Insured',
    description: 'Professional property services backed by proper insurance and accountable execution.',
  },
];

type IndustryPageProps = {
  config: IndustryPageConfig;
};

export default function IndustryPage({ config }: IndustryPageProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const smsHref = `sms:6152000064?body=${encodeURIComponent(`Hi, I need commercial property support for ${config.heroHeadline.toLowerCase()}.`)}`;
  const canonicalUrl = `${SITE_URL}${config.canonicalPath}`;
  const ogTitle = config.ogTitle ?? config.pageTitle;

  const breadcrumbItems = [
    { label: 'Home', to: '/' },
    { label: 'Industries', to: INDUSTRIES_HUB_PATH },
    { label: config.heroHeadline },
  ];

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${config.heroHeadline} Property Services`,
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
    audience: {
      '@type': 'Audience',
      audienceType: config.heroHeadline,
    },
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
        <script type="application/ld+json">{JSON.stringify(buildBreadcrumbSchema(breadcrumbItems))}</script>
      </Helmet>

      <section className="relative scroll-mt-32 overflow-hidden pt-32 pb-16 lg:pt-48 lg:pb-24">
        <div className="mx-auto max-w-7xl px-6">
          <Breadcrumbs items={breadcrumbItems} />
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                  INDUSTRIES WE SERVE
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
                    Request Project Support
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
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="max-w-3xl">
              <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Overview</h2>
              <p className="text-lg leading-relaxed text-slate-600">{config.overview}</p>
            </div>
            <div>
              <h3 className="mb-4 font-display text-2xl font-bold text-brand-navy">Typical Property Types</h3>
              <ul className="grid gap-3 sm:grid-cols-2" role="list">
                {config.propertyTypes.map((type) => (
                  <li
                    key={type}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4 text-sm font-semibold text-brand-navy"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                    {type}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Typical Projects</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Common situations where {config.heroHeadline.toLowerCase()} partners need dependable property support.
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
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Common Services</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Commercial services Reinhart commonly provides for {config.heroHeadline.toLowerCase()} partners.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {config.commonServices.map((service, index) => (
              <motion.div
                key={service.to}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  to={service.to}
                  className="flex h-full flex-col rounded-3xl border border-slate-200 bg-slate-50/80 p-7 shadow-sm transition-colors hover:border-brand-orange"
                >
                  <h3 className="mb-3 font-display text-xl font-bold text-brand-navy">{service.label}</h3>
                  <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Why Choose Reinhart</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Partners choose Reinhart when professional execution, schedule reliability, and property protection
              matter on commercial projects.
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
                className="rounded-3xl border border-slate-200 bg-white p-7"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  {index % 3 === 0 ? (
                    <ShieldCheck size={18} />
                  ) : index % 3 === 1 ? (
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

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Related Services</h2>
            <p className="mx-auto max-w-2xl leading-relaxed text-slate-600">
              Explore commercial services that support the same property transitions and project timelines.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {config.relatedServices.map((service) => (
              <Link
                key={service.to}
                to={service.to}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-orange hover:text-brand-orange"
              >
                {service.label}
              </Link>
            ))}
            <Link
              to={INDUSTRIES_HUB_PATH}
              className="rounded-full border border-brand-orange/30 bg-brand-orange/5 px-4 py-2 text-sm font-semibold text-brand-orange transition-colors hover:bg-brand-orange/10"
            >
              View All Industries
            </Link>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy">Frequently Asked Questions</h2>
            <p className="leading-relaxed text-slate-600">Common questions from {config.heroHeadline.toLowerCase()} partners.</p>
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

      <section className="scroll-mt-32 bg-white py-24" data-hide-sticky-cta>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
              Ready to move your project forward?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
              Text project photos, call to discuss scope, or request a walkthrough for larger commercial property
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
          </div>
        </div>
      </section>
    </>
  );
}
