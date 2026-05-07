import { Helmet } from 'react-helmet-async';

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Reinhart Hauling & Cleanouts</title>
        <meta
          name="description"
          content="Privacy policy for Reinhart Hauling & Cleanouts including form submissions, phone/text communication, and analytics."
        />
      </Helmet>

      <section className="pt-36 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-sm">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-brand-navy mb-4">Privacy Policy</h1>
            <p className="text-slate-500 mb-8">Last updated: May 2026</p>

            <div className="space-y-8 text-slate-600 leading-relaxed">
              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Information We Collect</h2>
                <p>
                  When you contact us through our quote form, phone, or text, we may collect your name, phone
                  number, address, and details about your cleanout job so we can respond and provide service.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">How We Use Information</h2>
                <p>
                  We use submitted information to reply to quote requests, schedule jobs, provide customer support,
                  and communicate about pricing, availability, and service updates by call or text.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Text and Phone Communication</h2>
                <p>
                  By contacting us, you consent to communication related to your request. Message and data rates may
                  apply based on your carrier plan.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Information Sharing</h2>
                <p>
                  We do not sell customer information. We only share information when needed to run our business, meet
                  legal obligations, or support service operations.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Cookies and Analytics</h2>
                <p>
                  Our website may use basic analytics and cookies to understand site traffic and improve user
                  experience. This data is used for performance insights, not for selling personal information.
                </p>
              </div>

              <div>
                <h2 className="font-display text-2xl font-bold text-brand-navy mb-2">Contact</h2>
                <p>
                  If you have privacy questions, contact Reinhart Hauling &amp; Cleanouts at{' '}
                  <a href="tel:6152000064" className="text-brand-orange hover:text-brand-orange-light transition-colors">
                    615-200-0064
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
