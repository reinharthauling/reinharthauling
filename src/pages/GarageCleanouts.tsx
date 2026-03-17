import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GarageCleanouts() {
  useEffect(() => {
    document.title = 'Garage Cleanouts | Goodlettsville & North Nashville';

    const metaDescription = document.querySelector('meta[name=\"description\"]') as HTMLMetaElement | null;
    const content =
      'Garage cleanout services in Goodlettsville and North Nashville. Fast, local help clearing cluttered garages and storage spaces.';

    if (metaDescription) {
      metaDescription.content = content;
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);

  const steps = [
    'Text photos for a fast quote',
    'Schedule a removal time',
    'We haul everything away',
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                GARAGE CLEANOUT SERVICE
              </span>
              <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                Garage Cleanouts in <br />
                <span className="text-brand-orange">Goodlettsville &amp; North Nashville</span>
              </h1>
              <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                Reinhart Hauling provides fast garage cleanout services for cluttered, packed, or neglected spaces. We
                remove old furniture, boxes, tools, and junk so you can reclaim your garage.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="sms:6152000064?body=Hi%20I%20need%20a%20garage%20cleanout%20quote"
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
              <div className="mt-3 text-sm text-slate-500 text-center">
                <p>⚡ Text photos — most quotes in 5 minutes</p>
                <p className="text-slate-400">Call or Text: 615-200-0064</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
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

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">How It Works</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              A simple process to clear your garage and get your space back.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((text, i) => (
              <motion.div
                key={text}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-navy mb-6 group-hover:bg-brand-orange group-hover:text-white transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:shadow-brand-orange/20">
                  <span className="font-display font-bold text-2xl">{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-4">{text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Service Areas</h2>
            <p className="text-slate-500 max-w-3xl mx-auto">
              Serving Goodlettsville, Nashville, Hendersonville, Madison, and surrounding areas.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-slate-100 relative text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-orange/10 rounded-2xl flex items-center justify-center text-brand-orange shrink-0">
                  <MapPin />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-brand-navy mb-3">Middle Tennessee</h3>
                  <p className="text-slate-600 leading-relaxed">
                    If you're nearby and not sure if you're in our service area, reach out—chances are we can help.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:6152000064"
                  className="bg-brand-navy text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 hover:bg-brand-orange transition-all hover:scale-105"
                >
                  <Phone />
                  Call or Text 615-200-0064
                </a>
              </div>
            </div>
          </div>
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
              className="px-6 py-3 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover;border-brand-orange transition-colors text-center"
            >
              Landlord &amp; Rental Cleanouts
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

