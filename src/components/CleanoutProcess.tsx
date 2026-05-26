import React from 'react';
import { CheckCircle2, MessageSquare, Truck, type LucideIcon } from 'lucide-react';

type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta?: { href: string; label: string };
};

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Send Photos or Project Details',
    description:
      'Text photos, explain the situation, or send property details so we can understand the scope of the cleanout—whether that is a garage, inherited home, rental turnover, estate situation, or full property cleanout.',
    cta: { href: 'sms:6152000064', label: 'Text Photos \u2192' },
  },
  {
    number: '02',
    icon: CheckCircle2,
    title: 'Walkthrough & Clear Pricing',
    description:
      'Smaller jobs can often be quoted from photos. Larger estate and property cleanouts usually benefit from an on-site walkthrough, where we assess labor, access, debris volume, disposal needs, logistics, and scheduling—so pricing is accurate and execution stays smooth.',
    cta: {
      href: 'sms:6152000064?body=Hi%20I%20need%20pricing%20for%20a%20cleanout',
      label: 'Get Pricing \u2192',
    },
  },
  {
    number: '03',
    icon: Truck,
    title: 'Scheduling & Cleanout Execution',
    description:
      'We confirm scheduling, coordinate access, and run a coordinated cleanout process—hauling, disposal, efficient property clearing, and a final sweep-through before completion.',
    cta: { href: 'tel:6152000064', label: 'Call Now \u2192' },
  },
];

type CleanoutProcessProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
};

export default function CleanoutProcess({
  id = 'process',
  title = 'How We Work With You',
  subtitle = 'A realistic workflow for estate, eviction, inherited-property, and turnover cleanouts.',
  className = 'py-20 bg-slate-50/70',
}: CleanoutProcessProps) {
  return (
    <section id={id} className={className}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14 md:mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/10 text-brand-orange text-[11px] font-bold uppercase tracking-[0.18em] mb-4">
            HOW IT WORKS
          </span>
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-brand-navy mb-4">{title}</h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed">{subtitle}</p>
        </div>

        <div className="grid gap-8 md:gap-10 md:grid-cols-3">
          {PROCESS_STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 md:p-8 shadow-sm"
              >
                <div className="mb-4 flex items-center justify-between">
                  <span className="text-base font-extrabold tracking-[0.2em] text-brand-orange">{step.number}</span>
                  <Icon className="text-brand-navy" size={24} />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-navy mb-3">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed flex-1">{step.description}</p>
                {step.cta && (
                  <a
                    href={step.cta.href}
                    className="mt-6 inline-flex items-center text-sm font-semibold text-brand-navy hover:text-brand-orange transition-colors"
                  >
                    {step.cta.label}
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
