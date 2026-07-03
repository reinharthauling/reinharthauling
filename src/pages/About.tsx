import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Building2,
  Hammer,
  Home,
  MessageSquare,
  Phone,
  ShieldCheck,
} from 'lucide-react';

const WHY_CLIENTS_CHOOSE = [
  {
    title: 'Clear Communication',
    desc: 'Expectations, scope, and timing are confirmed upfront so projects stay on track.',
  },
  {
    title: 'Transparent Pricing',
    desc: 'Upfront quotes based on the work—not surprises after loading begins.',
  },
  {
    title: 'Respect for Every Property',
    desc: 'Homes, rentals, offices, and job sites are handled with care and professionalism.',
  },
  {
    title: 'Real Project Experience',
    desc: 'Documented cleanout, commercial, and demolition work across Middle Tennessee.',
  },
  {
    title: 'Fully Insured',
    desc: 'Licensed and insured service for residential and commercial property projects.',
  },
  {
    title: 'Reliable Execution',
    desc: 'Organized crews, dependable scheduling, and steady progress from start to finish.',
  },
];

const SERVICE_DIVISIONS = [
  {
    icon: <Home className="h-6 w-6" />,
    title: 'Residential & Property Services',
    desc: 'Property cleanouts, junk removal, estate transitions, rental turnovers, and property preparation.',
    to: '/residential-property-services',
  },
  {
    icon: <Building2 className="h-6 w-6" />,
    title: 'Commercial Services',
    desc: 'Commercial cleanouts, office load-outs, warehouse cleanup, and property management support.',
    to: '/commercial-services',
  },
  {
    icon: <Hammer className="h-6 w-6" />,
    title: 'Demolition Services',
    desc: 'Selective demolition, tear-outs, and debris removal that prepare properties for renovation.',
    to: '/demolition-services',
  },
];

const WHO_WE_WORK_WITH = [
  'Homeowners',
  'Real Estate Investors',
  'Property Managers',
  'Contractors',
  'Businesses',
  'Developers',
  'Realtors',
  'Estate Representatives',
];

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Reinhart Hauling &amp; Cleanouts | Moving Properties Forward</title>
        <meta
          name="description"
          content="Reinhart helps homeowners, investors, property managers, contractors, and businesses move property projects forward through professional cleanup, commercial services, and selective demolition across Middle Tennessee."
        />
      </Helmet>

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="mb-6 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
                ABOUT REINHART
              </span>
              <h1 className="mb-8 font-display text-5xl font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-6xl">
                Moving Properties <span className="text-brand-orange">Forward.</span>
              </h1>
              <p className="max-w-2xl text-xl leading-relaxed text-slate-600 lg:text-2xl">
                Reinhart helps homeowners, investors, property managers, contractors, and businesses solve difficult
                property problems through professional cleanup, commercial services, and selective demolition.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative h-[300px] overflow-hidden rounded-3xl border border-slate-200/80 bg-slate-900 shadow-2xl shadow-slate-900/10 ring-1 ring-slate-900/5 sm:h-[380px] lg:h-[480px]"
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

      <section className="scroll-mt-32 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-start gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="mb-6 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Why Reinhart Exists</h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-slate-600 lg:col-span-7">
              <p>
                Property problems delay sales, renovations, rentals, and projects. A cluttered home, a rental left
                behind, a commercial space that needs reset, or a renovation stuck behind old finishes—all of it slows
                progress.
              </p>
              <p>
                Reinhart exists to remove those obstacles and create a clear next step. We help properties move toward
                sale, renovation, occupancy, or whatever comes next—with organized planning, upfront pricing, and
                dependable execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">
              Why Clients Choose Reinhart
            </h2>
            <p className="max-w-3xl leading-relaxed text-slate-600">
              Property professionals and homeowners choose Reinhart when the work needs to be handled correctly—not
              rushed, vague, or left half-finished.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CLIENTS_CHOOSE.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange">
                  <ShieldCheck size={18} />
                </div>
                <h3 className="mb-2 font-display text-xl font-bold text-brand-navy">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14 text-center">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Services We Provide</h2>
            <p className="mx-auto max-w-3xl leading-relaxed text-slate-600">
              Reinhart is organized around three divisions—each built to handle a distinct type of property work.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {SERVICE_DIVISIONS.map((division, index) => (
              <Link key={division.to} to={division.to} className="group block h-full">
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  whileHover={{ y: -10 }}
                  className="flex h-full flex-col gap-5 rounded-3xl border border-slate-100 bg-white p-8 shadow-xl shadow-slate-200/50 transition-all duration-300 group-hover:border-brand-orange/35 group-hover:shadow-brand-orange/10"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-navy/5 text-brand-orange transition-colors group-hover:bg-brand-orange/10">
                    {division.icon}
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <h3 className="font-display text-xl font-bold text-brand-navy">{division.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-500">{division.desc}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 border-t border-slate-100 pt-1 text-sm font-semibold text-brand-navy transition-colors group-hover:text-brand-orange">
                    View Division
                    <ArrowRight size={16} className="text-brand-orange transition-transform group-hover:translate-x-0.5" />
                  </span>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-14">
            <h2 className="mb-4 font-display text-4xl font-bold text-brand-navy lg:text-5xl">Who We Work With</h2>
            <p className="max-w-3xl leading-relaxed text-slate-600">
              We support the people responsible for getting difficult properties ready for what comes next.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-4">
            {WHO_WE_WORK_WITH.map((audience, index) => (
              <motion.div
                key={audience}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-center text-sm font-semibold text-brand-navy shadow-sm"
              >
                {audience}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-24" data-hide-sticky-cta>
        <div className="mx-auto max-w-7xl px-6 text-center">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 font-display text-5xl font-bold leading-tight text-brand-navy lg:text-6xl">
              Need help moving a property forward?
            </h2>

            <div className="flex flex-col justify-center gap-6 sm:flex-row">
              <a
                href="sms:6152000064?body=Hi%2C%20I%20need%20help%20moving%20a%20property%20project%20forward"
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
          </div>
        </div>
      </section>
    </>
  );
}
