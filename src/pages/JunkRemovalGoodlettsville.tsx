import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, MessageSquare, Phone } from 'lucide-react';

export default function JunkRemovalGoodlettsville() {
  useEffect(() => {
    document.title = 'Junk Removal in Goodlettsville TN | Reinhart Hauling';

    const metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
    const content =
      'Fast local junk removal in Goodlettsville TN. Furniture, appliances, garage junk, yard debris and household clutter hauled away.';

    if (metaDescription) {
      metaDescription.content = content;
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = content;
      document.head.appendChild(meta);
    }
  }, []);
  const removals = [
    'Furniture',
    'Appliances',
    'Mattresses',
    'Garage junk',
    'Yard debris',
    'Construction debris',
    'General household clutter',
  ];

  const reasons = [
    'Local small business',
    'Fast scheduling',
    'Upfront pricing',
    'Reliable hauling',
  ];

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-white">
      <main>
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/10 text-brand-orange text-xs font-bold uppercase tracking-widest mb-6">
                  Junk Removal Specialists
                </span>
                <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tighter text-brand-navy mb-8">
                  Junk Removal in <br />
                  <span className="text-brand-orange">Goodlettsville TN</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl">
                  Reinhart Hauling provides fast and affordable junk removal services in Goodlettsville and surrounding
                  areas. We remove furniture, appliances, mattresses, garage clutter, yard debris, and general
                  household junk.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="tel:6152000064"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-brand-navy text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-brand-navy/30 flex items-center justify-center gap-3 group hover:bg-brand-orange transition-all"
                  >
                    <Phone />
                    Call or Text 615-200-0064
                  </motion.a>
                  <motion.a
                    href="sms:6152000064"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="bg-white border-2 border-slate-200 text-brand-navy px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 hover:border-brand-orange transition-colors"
                  >
                    <MessageSquare className="text-brand-orange" />
                    Text Photos for Quote
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-6">What We Remove</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {removals.map((item) => (
                <motion.div
                  key={item}
                  whileHover={{ y: -10 }}
                  className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col gap-6"
                >
                  <div className="w-12 h-12 bg-brand-navy/5 rounded-xl flex items-center justify-center text-brand-orange">
                    <CheckCircle2 />
                  </div>
                  <div>
                    <h4 className="font-display text-xl font-bold text-brand-navy mb-2">{item}</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      Removal, hauling, and responsible disposal or donation when possible.
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Why Choose Reinhart Hauling</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                A local team focused on reliable, stress-free junk removal.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {reasons.map((reason) => (
                <motion.div
                  key={reason}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 text-center"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                    <CheckCircle2 />
                  </div>
                  <h3 className="font-display text-lg font-bold text-brand-navy">{reason}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Areas We Serve</h2>
              <p className="text-slate-500 max-w-3xl mx-auto">
                Goodlettsville, Hendersonville, Madison, East Nashville, Gallatin, Springfield, White House, and
                surrounding Middle Tennessee communities.
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
      </main>
    </div>
  );
}

