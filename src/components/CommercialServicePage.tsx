import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, ClipboardCheck, MessageSquare, Phone, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CleanoutProcess from './CleanoutProcess.tsx';
import EmailContactMenu from './EmailContactMenu.tsx';
import type { CommercialServicePageConfig } from '../data/commercialServicePages.ts';

const DEFAULT_PROCESS_STEPS = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Share Photos or Project Details',
    description:
      'Text photos, floor plans, or access notes so we can understand scope, volume, and timing before work begins.',
    cta: { href: 'sms:6152000064?body=Hi%2C%20I%20need%20a%20commercial%20project%20quote', label: 'Text Photos →' },
  },
  {
    number: '02',
    icon: ClipboardCheck,
    title: 'Confirm Scope & Quote',
    description:
      'We review labor, access, disposal needs, and scheduling—then provide straightforward pricing for the project.',
    cta: { href: 'sms:6152000064?body=Hi%2C%20I%20need%20commercial%20pricing', label: 'Get Pricing →' },
  },
  {
    number: '03',
    icon: Truck,
    title: 'Execute & Hand Off',
    description:
      'Our crew completes the cleanout or load-out, hauls debris, and leaves the space ready for the next project phase.',
    cta: { href: 'tel:6152000064', label: 'Call Now →' },
  },
];

type CommercialServicePageProps = {
  config: CommercialServicePageConfig;
};

export default function CommercialServicePage({ config }: CommercialServicePageProps) {
  const smsHref =
    config.smsBody ??
    `sms:6152000064?body=${encodeURIComponent(`Hi, I need help with ${config.heroHeadline.toLowerCase()}.`)}`;

  return (
    <>
      <Helmet>
        <title>{config.pageTitle}</title>
        <meta name="description" content={config.metaDescription} />
        <link rel="canonical" href={`https://www.reinharthauling.com${config.canonicalPath}`} />
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
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-6 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
                {config.servicesIncludedTitle ?? 'Services Included'}
              </h2>
              <ul className="space-y-3" role="list">
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

            <div>
              <h2 className="mb-6 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
                {config.idealCustomersTitle ?? 'Ideal For'}
              </h2>
              <ul className="space-y-3" role="list">
                {config.idealCustomers.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-brand-navy shadow-sm"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-brand-orange" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CleanoutProcess
        id="process"
        title={config.processTitle ?? 'How Commercial Projects Work'}
        subtitle={
          config.processSubtitle ??
          'Clear scope, responsive communication, and organized execution for commercial property projects.'
        }
        showEyebrow={false}
        steps={DEFAULT_PROCESS_STEPS}
      />

      <section className="scroll-mt-32 bg-white py-24" data-hide-sticky-cta>
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

            {config.relatedServices && config.relatedServices.length > 0 && (
              <div className="mt-14 border-t border-slate-100 pt-10">
                <h3 className="mb-4 font-display text-2xl font-bold text-brand-navy">Related Commercial Services</h3>
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
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
