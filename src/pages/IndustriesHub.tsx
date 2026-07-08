import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Breadcrumbs, { buildBreadcrumbSchema } from '../components/Breadcrumbs.tsx';
import EmailContactMenu from '../components/EmailContactMenu.tsx';
import { INDUSTRIES_NAV_LINKS, INDUSTRIES_HUB_PATH } from '../data/industriesNavigation.ts';

const SITE_URL = 'https://www.reinharthauling.com';
const OG_IMAGE = `${SITE_URL}/og/reinhart-cleanouts-og-v2.jpg?v=3`;

const PAGE_TITLE = 'Industries We Serve | Reinhart Hauling & Cleanouts';
const META_DESCRIPTION =
  'Reinhart partners with businesses, property owners, and contractors across Middle Tennessee for commercial cleanouts, property turnovers, interior strip-outs, tenant improvement demo, and construction support.';

const HERO_IMAGE =
  '/images/projects/2026%20Projects/2026-06_Commercial-Office-Cleanout_Nashville/01_Before/cubicle-office-before-01.jpeg';

const SMS_HREF =
  'sms:6152000064?body=Hi%2C%20I%27d%20like%20to%20discuss%20commercial%20property%20support%20for%20our%20project.';

export default function IndustriesHub() {
  const canonicalUrl = `${SITE_URL}${INDUSTRIES_HUB_PATH}`;
  const breadcrumbItems = [{ label: 'Home', to: '/' }, { label: 'Industries We Serve' }];

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Industries We Serve',
    description: META_DESCRIPTION,
    url: canonicalUrl,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Reinhart Hauling & Cleanouts',
      url: SITE_URL,
      telephone: '+1-615-200-0064',
    },
  };

  return (
    <>
      <Helmet>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={META_DESCRIPTION} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={META_DESCRIPTION} />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={META_DESCRIPTION} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(collectionSchema)}</script>
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
                <h1 className="mb-6 font-display text-[2.75rem] font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-[4.5rem]">
                  Industries We Serve
                </h1>
                <p className="mb-4 font-display text-2xl font-bold leading-tight text-brand-navy lg:text-3xl">
                  Helping Businesses, Property Owners, and Contractors Prepare Properties for Their Next Phase
                </p>
                <p className="mb-6 max-w-2xl text-lg leading-relaxed text-slate-600 lg:text-xl">
                  Reinhart partners with professionals across Middle Tennessee to provide commercial cleanouts, property
                  turnovers, interior strip-outs, tenant improvement demolition, property preparation, and construction
                  support—with professional execution, clear communication, and dependable scheduling.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <motion.a
                    href={SMS_HREF}
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

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[300px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 sm:h-[380px] lg:h-[480px]"
            >
              <img
                src={HERO_IMAGE}
                alt="Commercial property services across Middle Tennessee industries"
                className="h-full w-full object-cover object-center"
                width={1600}
                height={1200}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Who We Partner With</h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Select an industry to see typical projects, common commercial services, and how Reinhart helps properties
              move toward renovation, turnover, and the next occupancy phase.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES_NAV_LINKS.map((industry, index) => (
              <motion.div
                key={industry.to}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
              >
                <Link
                  to={industry.to}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-brand-orange hover:shadow-md"
                >
                  <h3 className="mb-3 font-display text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    {industry.label}
                  </h3>
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">{industry.description}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand-navy group-hover:text-brand-orange transition-colors">
                    View Industry
                    <ArrowRight size={16} className="text-brand-orange" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24" data-hide-sticky-cta>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 font-display text-4xl font-bold leading-tight text-brand-navy lg:text-5xl">
              Need dependable commercial property support?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-slate-600">
              Text project photos, call to discuss scope, or explore our commercial services for your next property
              transition.
            </p>

            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <a
                href={SMS_HREF}
                className="flex items-center justify-center gap-3 rounded-2xl bg-brand-navy px-10 py-5 text-xl font-bold text-white shadow-2xl shadow-brand-navy/30 transition-all hover:scale-105 hover:bg-brand-orange"
              >
                <MessageSquare className="text-brand-orange" />
                Text Photos for a Fast Quote
              </a>
              <Link
                to="/commercial-services"
                className="flex items-center justify-center gap-3 rounded-2xl border-2 border-slate-200 bg-white px-10 py-5 text-xl font-bold text-brand-navy transition-all hover:scale-105 hover:border-brand-orange"
              >
                View Commercial Services
                <ArrowRight size={18} className="text-brand-orange" />
              </Link>
            </div>

            <div className="mt-6 flex flex-col items-center gap-1">
              <span className="text-sm font-semibold text-brand-navy">Prefer to talk through scope first?</span>
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
