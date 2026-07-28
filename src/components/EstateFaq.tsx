import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';
import { buildFAQPageSchema } from '../utils/schema.ts';

export const ESTATE_FAQ_ITEMS = [
  {
    question: 'How does an estate cleanout work?',
    answer:
      'You reach out with project details or a brief description of the property. We review scope, discuss whether a walkthrough makes sense, confirm pricing, schedule the job, and handle the cleanout from load-out through final sweep-through.',
  },
  {
    question: 'How do I request an estimate?',
    answer:
      'Submit project details through our estimate request form, call us at 615-200-0064, text, or email. We review scope, access, and timing, then provide clear pricing and next steps.',
  },
  {
    question: 'Do larger projects require a walkthrough?',
    answer:
      'Usually, yes. Full-home and estate cleanouts often involve more rooms, access considerations, debris volume, and disposal logistics. A walkthrough helps us price accurately and plan the work properly.',
  },
  {
    question: 'How long does an estate cleanout take?',
    answer:
      'It depends on home size, contents, and access. Some jobs finish in a day; larger estates may take longer. After we understand the scope, we give you a realistic timeline—not a vague estimate.',
  },
  {
    question: 'Do you remove furniture and appliances?',
    answer:
      'Yes. Furniture, appliances, boxed items, garage contents, and general household debris are all part of typical estate cleanout work.',
  },
  {
    question: 'Can family items be set aside first?',
    answer:
      'Absolutely. Let us know what should stay, what needs to be set aside, and what is ready to go. We work with families and coordinators to respect those boundaries.',
  },
  {
    question: 'Do you work with realtors and estate sale companies?',
    answer:
      'Yes. We regularly coordinate with realtors, family members, and estate sale teams when properties need to be cleared for listing, sale wrap-up, or turnover.',
  },
  {
    question: 'What areas do you service?',
    answer:
      'We serve Goodlettsville, Hendersonville, Gallatin, White House, Greenbrier, Ridgetop, Springfield, Nashville (including East Nashville, Downtown Nashville, Old Hickory, and Joelton), Belle Meade, Brentwood, Franklin, Mt. Juliet, Lebanon, Portland, and surrounding Middle Tennessee communities.',
  },
];

export default function EstateFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqSchema = buildFAQPageSchema(ESTATE_FAQ_ITEMS);

  return (
    <section className="py-24 bg-slate-50">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Estate Cleanout FAQs</h2>
          <p className="text-slate-600 leading-relaxed">
            Straight answers about how we handle estate and inherited-property cleanouts.
          </p>
        </div>

        <div className="space-y-3">
          {ESTATE_FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={item.question}
                className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden"
              >
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-display text-base md:text-lg font-bold text-brand-navy leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand-orange transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 pt-0">
                    <p className="text-slate-600 text-sm md:text-base leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
