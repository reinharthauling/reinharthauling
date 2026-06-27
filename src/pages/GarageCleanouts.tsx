import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import CleanoutProcess from '../components/CleanoutProcess.tsx';
import { projectImages } from '../data/projectImages';

const GARAGE_SHOWCASE = {
  beforeSrc: projectImages.garageCleanouts.gallatin.before,
  afterSrc: projectImages.garageCleanouts.gallatin.after,
};

const SERVICE_AREAS = [
  'Goodlettsville',
  'Nashville',
  'Hendersonville',
  'Madison',
  'Gallatin',
  'White House',
  'Springfield',
  'Joelton',
];

export default function GarageCleanouts() {
  return (
    <>
   <Helmet>
        <title>Garage Cleanouts in Nashville | Reinhart Hauling &amp; Cleanouts</title>
  <meta
    name="description"
    content="Garage cleanout services in Nashville. Remove clutter, furniture, tools, and junk. Fast quotes by text."
  />
</Helmet>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl lg:max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                GARAGE CLEANOUT SERVICE
              </span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-[4.25rem] xl:text-7xl font-bold leading-[1.02] tracking-tighter text-brand-navy mb-8">
                Garage Cleanout Services in <br />
                <span className="text-brand-orange">Nashville &amp; Middle Tennessee</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
                Professional garage cleanout support for cluttered, packed, or neglected spaces—we remove furniture,
                storage bins, tools, and accumulated contents so you can reclaim usable space.
              </p>

              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Text photos for a fast quote on smaller jobs, or request a walkthrough when access and volume need a
                closer look before scheduling.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="sms:6152000064?body=Hi%2C%20I%20need%20a%20garage%20cleanout%20quote"
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
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 md:mb-12 max-w-3xl">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">
              Recent Garage Cleanout Project
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-4">
              Packed garage cleared, loaded out, and swept clean for the next phase of the property.
            </p>
            <p className="text-slate-600 leading-relaxed">
              This project involved a heavily packed garage with furniture, storage bins, debris, and years of
              accumulated contents. We coordinated the load-out, disposal, and final clean sweep to leave the space
              cleared and usable again.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 p-6 md:p-8 lg:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              <div className="relative rounded-[1.75rem] overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src={GARAGE_SHOWCASE.beforeSrc}
                  alt="Garage cleanout in Gallatin — before, packed with furniture and storage"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 bg-brand-orange text-white px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  Before
                </div>
              </div>
              <div className="relative rounded-[1.75rem] overflow-hidden border border-slate-200 bg-slate-100 aspect-[4/3] lg:aspect-[5/4]">
                <img
                  src={GARAGE_SHOWCASE.afterSrc}
                  alt="Garage cleanout in Gallatin — after, cleared and swept clean"
                  className="w-full h-full object-cover object-center"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 right-4 bg-white text-brand-navy px-3 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-widest shadow-sm">
                  After
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
              Common Garage Cleanout Jobs
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                <CheckCircle2 />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Packed Garages</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  We clear out garages filled with boxes, storage, and years of accumulated clutter.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                <CheckCircle2 />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Old Furniture &amp; Junk</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Removal of unwanted furniture, shelving, and bulky items.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                <CheckCircle2 />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Storage Cleanouts</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Bins, boxes, and stored items that are no longer needed.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                <CheckCircle2 />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Yard Equipment &amp; Tools</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Old tools, broken equipment, and unused items taking up space.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                <CheckCircle2 />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Move-Out Garage Cleanups</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Cleaning out garages during moves or home sales.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
            >
              <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                <CheckCircle2 />
              </div>
              <div>
                <h4 className="font-display text-xl font-bold text-brand-navy mb-2">General Garage Junk</h4>
                <p className="text-slate-500 text-sm leading-relaxed">
                  Everything from loose clutter to full garage cleanouts.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <CleanoutProcess
        subtitle="Photos, walkthrough when needed, and coordinated execution for packed or neglected garage spaces."
        className="py-24 bg-white"
      />

      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Areas We Serve</h2>
            <p className="text-slate-600 max-w-3xl leading-relaxed">
              Garage cleanouts across Middle Tennessee—including the communities below and nearby areas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
            {SERVICE_AREAS.map((area) => (
              <div
                key={area}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-center text-sm font-semibold text-brand-navy shadow-sm"
              >
                {area}
              </div>
            ))}
          </div>

          <p className="mt-6 md:mt-8 text-slate-500 text-sm md:text-base leading-relaxed max-w-3xl">
            We also help clients in nearby Middle Tennessee communities depending on scheduling and project scope.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="font-display text-3xl font-bold text-brand-navy mb-4">Related Services</h2>
            <p className="text-slate-500">
              Need more help? Explore related cleanout services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/junk-removal-goodlettsville"
              className="px-6 py-3 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
            >
              Junk Removal in Goodlettsville
            </Link>
            <Link
              to="/estate-cleanouts"
              className="px-6 py-3 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
            >
              Estate Cleanouts
            </Link>
            <Link
              to="/landlord-rental-cleanouts"
              className="px-6 py-3 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
            >
              Landlord &amp; Rental Cleanouts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

