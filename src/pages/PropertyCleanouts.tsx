import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function PropertyCleanouts() {
  return (
    <>
      <Helmet>
        <title>Property Cleanouts in Nashville | Reinhart Hauling &amp; Cleanouts</title>
        <meta
          name="description"
          content="Full property cleanouts for estates, rentals, evictions, and move-out situations across Nashville and Middle Tennessee. Text photos for a fast quote."
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
                FULL PROPERTY CLEANOUTS
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                Property Cleanouts in <br />
                <span className="text-brand-orange">Nashville &amp; Middle Tennessee</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                Whole-home and rental property cleanouts for estates, evictions, turnovers, and difficult
                transitions—handled with clear pricing and responsive communication.
              </p>
              <p className="text-base text-slate-600 leading-relaxed mb-8 max-w-2xl">
                Related services:{' '}
                <Link to="/estate-cleanouts" className="text-brand-orange hover:text-brand-orange-light transition-colors">
                  estate cleanouts
                </Link>
                ,{' '}
                <Link to="/eviction-cleanouts" className="text-brand-orange hover:text-brand-orange-light transition-colors">
                  eviction cleanouts
                </Link>
                , and{' '}
                <Link to="/garage-cleanouts" className="text-brand-orange hover:text-brand-orange-light transition-colors">
                  garage cleanouts
                </Link>
                .
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="sms:6152000064?body=Hi%2C%20I%20need%20a%20property%20cleanout%20quote"
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
        </div>
      </section>
    </>
  );
}
