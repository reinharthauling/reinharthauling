import React from 'react';
import { Calendar, CheckCircle2, MessageSquare, Truck, type LucideIcon } from 'lucide-react';

type ProcessStep = {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  cta?: { href: string; label: string };
};

const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Send Photos or Project Details',
    description:
      'Share photos, project details, access notes, and timing needs so we can understand the problem and respond clearly.',
    cta: { href: 'sms:6152000064', label: 'Text Photos \u2192' },
  },
  {
    number: '02',
    icon: CheckCircle2,
    title: 'Clear Scope & Pricing',
    description:
      'We review labor, access, volume, disposal needs, and scheduling, then provide straightforward recommendations and pricing.',
    cta: {
      href: 'sms:6152000064?body=Hi%20I%20need%20pricing%20for%20a%20cleanout',
      label: 'Get Pricing \u2192',
    },
  },
  {
    number: '03',
    icon: Truck,
    title: 'Efficient Execution & Completion',
    description:
      'Our crew arrives prepared, completes the work efficiently, communicates throughout the project, and leaves the property ready for what is next.',
    cta: { href: 'tel:6152000064', label: 'Call Now \u2192' },
  },
];

type CleanoutProcessProps = {
  id?: string;
  title?: string;
  subtitle?: string;
  className?: string;
  steps?: ProcessStep[];
};

export default function CleanoutProcess({
  id = 'process',
  title = 'How We Work With You',
  subtitle = 'A clear process built around communication, scope, execution, and reliable completion.',
  className = 'py-20 bg-slate-50/70',
  steps = DEFAULT_PROCESS_STEPS,
}: CleanoutProcessProps) {
  const gridClass =
    steps.length === 4
      ? 'grid gap-8 md:gap-10 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid gap-8 md:gap-10 md:grid-cols-3';

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

        <div className={gridClass}>
          {steps.map((step) => {
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
