import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EvictionCleanouts() {
  const steps = [
    "Text photos for a fast quote",
    "Schedule a removal time",
    "We clear the property and haul everything away",
  ];

  return (
    <>
      <Helmet>
    <title>Eviction Cleanouts in Nashville | Fast Turnover Service</title>
    <meta
      name="description"
      content="Eviction cleanouts for landlords and property managers. Fast junk removal and property turnover service in Nashville."
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
                  Eviction Cleanouts in <br />
                  <span className="text-brand-orange">Goodlettsville &amp; North Nashville</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
                  Fast eviction cleanout services for landlords, property managers, and rental turnovers. We
                  remove abandoned furniture, trash, and debris so you can get the property ready fast.
                </p>

                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
                  Need a reliable eviction cleanout company in Goodlettsville or North Nashville? We handle tenant
                  left-behind junk, apartment turnover cleanouts, abandoned property cleanouts, and rental cleanout
                  services for owners and managers who need the job done quickly.
                </p>

                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
                  We help clear the property quickly so repairs, showings, and re-renting can happen sooner.
                </p>

                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-6 max-w-2xl">
                  We also offer{' '}
                  <Link
                    to="/landlord-rental-cleanouts"
                    className="text-brand-orange hover:text-brand-orange transition-colors"
                  >
                    landlord and rental cleanouts
                  </Link>{' '}
                  plus{' '}
                  <Link
                    to="/junk-removal-goodlettsville"
                    className="text-brand-orange hover:text-brand-orange transition-colors"
                  >
                    general junk removal in Goodlettsville
                  </Link>
                  .
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="sms:6152000064?body=Hi%20I%20need%20a%20junk%20removal%20quote"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 group hover:bg-brand-orange transition-all"
                  >
                    <MessageSquare className="text-brand-orange" />
                    Text Photos for Fast Quote
                  </motion.a>
                  <motion.a
                    href="tel:6152000064"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white border-2 border-slate-200 text-brand-navy px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify_center gap-3 hover:border-brand-orange transition-colors"
                  >
                    <Phone />
                    Call 615-200-0064
                  </motion.a>
                </div>
                <div className="mt-4 text-[15px] text-slate-500 text-center space-y-2.5">
                  <p className="leading-relaxed">✔ Fast scheduling for urgent cleanouts</p>
                  <p className="leading-relaxed">✔ Clear, upfront pricing</p>
                  <p className="text-slate-400 leading-relaxed">✔ Most quotes in 5 minutes via text</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
                Eviction &amp; Turnover Cleanout Services
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Tenant Left Junk Behind</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We remove furniture, bags, trash, and leftover belongings after move-outs.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Eviction Trash-Outs</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Fast cleanout help for units that need to be cleared after eviction.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Rental Turnovers</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Quick cleanouts to help prepare the property for repairs, cleaning, or the next tenant.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Abandoned Property Cleanouts</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We clear unwanted items and debris left behind in homes, apartments, and rentals.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Furniture, Mattresses &amp; Appliances</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Removal of bulky items commonly left behind in rental properties.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Garage, Storage &amp; Overflow Areas</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We clear extra junk from garages, storage rooms, and other packed spaces on the property.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">
                Why Landlords &amp; Property Managers Call Reinhart Hauling &amp; Cleanouts
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                When a property needs to be cleared fast, delays cost money. We help landlords and property managers get units emptied quickly so they can move on to repairs, cleaning, and re-renting without dragging the process out.
              </p>

              <ul className="max-w-2xl mx-auto mt-6 space-y-3 text-left text-slate-600">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Fast turnaround for urgent cleanouts</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">No hidden fees or surprise add-ons</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Reliable local service in Goodlettsville and North Nashville</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-brand-orange mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">Simple process from photos to removal</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">How It Works</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">A simple process to get your property ready faster.</p>
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
                    <h3 className="text-2xl font-bold text-brand-navy mb-3">Goodlettsville &amp; North Nashville</h3>
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
                Explore more estate and junk removal services in the area.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/landlord-rental-cleanouts"
                className="px-6 py-3 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
              >
                Landlord &amp; Rental Cleanouts
              </Link>
              <Link
                to="/junk-removal-goodlettsville"
                className="px-6 py-3 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover;border-brand-orange transition-colors text-center"
              >
                Junk Removal in Goodlettsville
              </Link>
              <Link
                to="/estate-cleanouts"
                className="px-6 py-3 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
              >
                Estate Cleanouts
              </Link>
            </div>
          </div>
        </section>
      </>
  );
}

