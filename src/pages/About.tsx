import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, Phone, ShieldCheck } from 'lucide-react';

const OPERATING_PRINCIPLES = [
  {
    title: 'Integrity',
    desc: 'Do what we say.',
  },
  {
    title: 'Stewardship',
    desc: 'Treat every property with respect.',
  },
  {
    title: 'Communication',
    desc: 'Clear expectations from start to finish.',
  },
  {
    title: 'Ownership',
    desc: 'Leave projects in better condition than we found them.',
  },
  {
    title: 'Problem Solving',
    desc: 'Focus on solutions, not excuses.',
  },
];

const WHO_WE_SERVE = [
  'Homeowners',
  'Families',
  'Investors',
  'Landlords',
  'Property Managers',
  'Businesses',
  'Developers',
];

const PROJECT_TYPES = [
  'Estate transitions',
  'Rental turnovers',
  'Commercial cleanouts',
  'Demolition preparation',
  'Property cleanup',
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Reinhart Hauling &amp; Cleanouts | Middle Tennessee Property Solutions</title>
        <meta
          name="description"
          content="Learn why Reinhart Hauling & Cleanouts exists: solving difficult property cleanup, cleanout, demolition, hauling, and property preparation problems across Middle Tennessee."
        />
      </Helmet>

      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                ABOUT REINHART
              </span>
              <h1 className="font-display text-5xl lg:text-6xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                About Reinhart Hauling &amp; Cleanouts
              </h1>
              <p className="text-xl lg:text-2xl text-slate-600 leading-relaxed max-w-2xl">
                We believe property problems shouldn&apos;t keep projects from moving forward.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[300px] sm:h-[380px] lg:h-[480px] rounded-3xl overflow-hidden shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 border border-slate-200/80 bg-slate-900"
            >
              <img
                src="/images/truck-trailer.jpeg"
                alt="Reinhart Hauling and Cleanouts truck and trailer in Middle Tennessee"
                className="h-full w-full object-cover object-[42%_50%] sm:object-[45%_50%] lg:object-center"
                width={1600}
                height={1200}
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">Why We Exist</h2>
            </div>
            <div className="lg:col-span-7 space-y-6 text-lg text-slate-600 leading-relaxed">
              <p>
                Reinhart exists to help homeowners, families, investors, landlords, businesses, and property managers
                solve difficult property cleanup challenges with professionalism, urgency, and integrity.
              </p>
              <p>
                We are building a company known for clear communication, dependable execution, and the ability to
                bring order to projects that feel stuck.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">Operating Principles</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              These standards guide how we communicate, plan, and execute on each property.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {OPERATING_PRINCIPLES.map((principle) => (
              <div
                key={principle.title}
                className="bg-white p-7 rounded-3xl shadow-sm border border-slate-200 flex h-full flex-col"
              >
                <div className="w-10 h-10 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange mb-5">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-navy mb-2">{principle.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{principle.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">Our Approach</h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Reinhart isn&apos;t built around hauling junk. It is built around helping people move properties
                  forward.
                </p>
                <p>
                  The objective is always progress. Remove the obstacle. Create order. Give the property a clear next
                  step.
                </p>
              </div>
            </div>

            <div className="grid gap-3">
              {PROJECT_TYPES.map((type) => (
                <div
                  key={type}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50/80 px-5 py-4"
                >
                  <CheckCircle2 size={18} className="text-brand-orange shrink-0" />
                  <span className="font-semibold text-brand-navy">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-14">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">Who We Serve</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              We work with the people responsible for getting difficult properties ready for what comes next.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 md:gap-4">
            {WHO_WE_SERVE.map((audience) => (
              <div
                key={audience}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-center text-sm font-semibold text-brand-navy shadow-sm"
              >
                {audience}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 py-24 bg-white" data-hide-sticky-cta>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-display text-5xl lg:text-6xl font-bold text-brand-navy mb-8 leading-tight">
              Need help moving your property project forward?
            </h2>
            <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
              Text photos for a fast quote.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <a
                href="sms:6152000064?body=Hi%2C%20I%20need%20help%20moving%20a%20property%20project%20forward"
                className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 hover:bg-brand-orange transition-all hover:scale-105"
              >
                <MessageSquare className="text-brand-orange" />
                Text Photos for a Fast Quote
              </a>
              <a
                href="tel:6152000064"
                className="bg-white border-2 border-slate-200 text-brand-navy px-10 py-5 rounded-2xl font-bold text-xl flex items-center justify-center gap-3 hover:border-brand-orange transition-all hover:scale-105"
              >
                <Phone />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
