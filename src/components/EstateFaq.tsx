import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'How does an estate cleanout work?',
    answer:
      'You reach out with photos or a brief description of the property. We review scope, discuss whether a walkthrough makes sense, confirm pricing, schedule the job, and handle the cleanout from load-out through final sweep-through.',
  },
  {
    question: 'Can I text photos for a quote?',
    answer:
      'Yes. Photos are often the fastest way to get started—especially for smaller or straightforward jobs. Text what you can, and we will tell you if we need more detail or an on-site look.',
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
      'We serve Nashville, Goodlettsville, Hendersonville, Madison, Gallatin, Springfield, White House, Joelton, and surrounding Middle Tennessee communities.',
  },
];

export default function EstateFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl font-bold text-brand-navy mb-4">Estate Cleanout FAQs</h2>
          <p className="text-slate-600 leading-relaxed">
            Straight answers about how we handle estate and inherited-property cleanouts.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_ITEMS.map((item, index) => {
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
