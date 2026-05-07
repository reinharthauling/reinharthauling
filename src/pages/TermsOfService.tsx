import { Helmet } from 'react-helmet-async';

export default function TermsOfService() {
  return (
    <>
      <Helmet>
        <title>Terms of Service | Reinhart Hauling & Cleanouts</title>
        <meta
          name="description"
          content="Terms of service for Reinhart Hauling & Cleanouts covering estimates, pricing, materials, and payment terms."
        />
      </Helmet>

      <section className="pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">Terms of Service</h1>
            <p className="text-slate-500 mb-8">Last updated: May 2026</p>

            <div className="space-y-8 text-slate-600 leading-relaxed">
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Estimates and Scope</h2>
                <p>
                  Estimates are based on the information provided at the time of quote. Final pricing may be adjusted
                  if job scope, access conditions, or material volume differs from what was originally described.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Pricing</h2>
                <p>
                  Pricing is based on volume, labor time, loading conditions, and disposal requirements. We provide
                  clear pricing before work begins whenever possible.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Materials and Safety</h2>
                <p>
                  Unsafe or hazardous materials may require special handling, referral, or additional charges. We
                  reserve the right to decline items that cannot be safely handled under normal junk removal service.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Payment Terms</h2>
                <p>
                  Payment is due upon completion unless otherwise agreed in writing prior to service. Accepted payment
                  methods are provided at scheduling or on-site.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Service Availability</h2>
                <p>
                  Scheduling windows are based on crew availability, weather, and access. We do our best to maintain
                  agreed timeframes and communicate any needed changes promptly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
