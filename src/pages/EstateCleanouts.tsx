import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, MessageSquare, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function EstateCleanouts() {
 
  const steps = [
    "Text photos for a fast quote",
    "Schedule a pickup time",
    "We clear the entire property and handle disposal",
  ];

  return (
    <>
      <Helmet>
        <title>Estate Cleanouts in Nashville | Full Property Cleanouts</title>
        <meta
          name="description"
          content="Full estate cleanout services for homes and inherited properties. Serving Nashville and surrounding areas."
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
                  Estate Cleanouts in <br />
                  <span className="text-brand-orange">Goodlettsville &amp; North Nashville</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-4 max-w-2xl">
                  Full-service estate cleanout services for homes, inherited properties, and family transitions. We
                  handle everything—furniture, belongings, and debris—so you don’t have to.
                </p>

                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                  Looking for a reliable estate cleanout company in Goodlettsville or North Nashville? We
                  specialize in full estate cleanout services, including house cleanouts after death, inherited
                  property cleanouts, and complete property cleanouts. Whether you're preparing a home for sale or
                  clearing out years of belongings, we handle the entire process from start to finish.
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
                    className="bg-white border-2 border-slate-200 text-brand-navy px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:border-brand-orange transition-colors"
                  >
                    <Phone />
                    Call 615-200-0064
                  </motion.a>
                </div>
                <div className="mt-3 text-sm text-slate-500 text-center">
                  <p>✔ Same-day &amp; next-day availability</p>
                  <p>✔ Discreet, respectful service</p>
                  <p className="text-slate-400">✔ Most quotes in 5 minutes via text</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">
                Estate Cleanout Services We Handle
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Full Property Cleanouts</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Complete estate cleanouts for entire homes, including all rooms, garages, and storage areas.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Inherited Home Cleanouts</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    We help families clear inherited properties quickly and respectfully.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">House Cleanouts After Death</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Compassionate, discreet cleanout services during difficult times.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Downsizing &amp; Moving Cleanouts</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Remove excess belongings before a move or transition.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Garage, Basement &amp; Storage Cleanouts</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Clear out packed storage areas and long-term clutter.
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
                  <h4 className="font-display text-xl font-bold text-brand-navy mb-2">Furniture &amp; Bulk Item Removal</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    Removal of couches, beds, appliances, and large household items.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">
                Why Choose Reinhart Hauling for Estate Cleanouts?
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We understand estate cleanouts can be overwhelming. Our team handles the entire process with
                professionalism, speed, and respect. Whether you're dealing with an inherited property, preparing a
                home for sale, or managing a difficult situation, we make it simple.
              </p>
              <div className="max-w-2xl mx-auto mt-8 space-y-2 text-left text-slate-600">
                <p>Fast scheduling and turnaround</p>
                <p>No hidden fees or surprises</p>
                <p>Local, reliable service in Goodlettsville and North Nashville</p>
                <p>One call handles everything</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">
                How Our Estate Cleanout Service Works
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                A simple, respectful process designed to make a tough time easier.
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
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Areas We Serve</h2>
              <p className="text-slate-500 max-w-3xl mx_auto">
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
                Explore more specialized cleanout and junk removal services.
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
                to="/eviction-cleanouts"
                className="px-6 py-3 rounded-2xl border border-slate-200 bg-white text-brand-navy font-bold text-sm hover:border-brand-orange transition-colors text-center"
              >
                Eviction Cleanouts
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

