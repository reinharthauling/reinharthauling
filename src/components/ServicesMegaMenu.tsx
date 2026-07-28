import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { SERVICES_NAV_COLUMNS, type ServiceNavColumn } from '../data/servicesNavigation.ts';

const serviceLinkClassName =
  'group flex items-start gap-2.5 rounded-lg px-2 py-1.5 text-[13px] leading-snug text-slate-600 transition-colors hover:bg-brand-orange/5 hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-offset-1';

const hubHeadingClassName =
  'group mb-4 block rounded-xl px-2 py-1.5 -mx-2 text-base font-bold leading-snug text-brand-navy transition-colors hover:bg-brand-orange/5 hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-offset-1';

const columnHeadingClassName =
  'mb-4 block rounded-xl px-2 py-1.5 -mx-2 text-base font-bold leading-snug text-brand-navy';

const viewAllLinkClassName =
  'group mt-4 inline-flex rounded-lg px-2 py-1.5 -mx-2 text-xs font-semibold text-brand-orange transition-colors hover:bg-brand-orange/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-offset-1';

const columnDividerClass = (columnIndex: number) =>
  [
    'px-6 py-5',
    columnIndex === 0 ? 'md:border-r md:border-slate-100' : '',
    columnIndex === 1 ? 'lg:border-r lg:border-slate-100' : '',
    columnIndex === 2 ? 'md:col-span-2 lg:col-span-1 md:border-t md:border-slate-100 lg:border-t-0' : '',
  ]
    .filter(Boolean)
    .join(' ');

type MegaMenuColumnProps = {
  column: ServiceNavColumn;
  onNavigate?: () => void;
  columnIndex: number;
};

const MegaMenuColumn = ({ column, onNavigate, columnIndex }: MegaMenuColumnProps) => (
  <div className={columnDividerClass(columnIndex)}>
    {column.hubLink ? (
      <Link to={column.hubLink} className={hubHeadingClassName} onClick={onNavigate}>
        {column.title}
      </Link>
    ) : (
      <p className={columnHeadingClassName}>{column.title}</p>
    )}

    {column.categories ? (
      <div className="space-y-3.5">
        {column.categories.map((category) => (
          <div key={category.title}>
            <p className="mb-1.5 px-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">{category.title}</p>
            <ul className="space-y-0.5" role="list">
              {category.services.map((service) => (
                <li key={service.to + service.label}>
                  <Link to={service.to} className={serviceLinkClassName} onClick={onNavigate}>
                    <span
                      className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-slate-300 transition-colors group-hover:bg-brand-orange"
                      aria-hidden="true"
                    />
                    <span>{service.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ) : (
      <ul className="space-y-0.5" role="list">
        {(column.services ?? []).map((service) => (
          <li key={service.to + service.label}>
            <Link to={service.to} className={serviceLinkClassName} onClick={onNavigate}>
              <span
                className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full bg-slate-300 transition-colors group-hover:bg-brand-orange"
                aria-hidden="true"
              />
              <span>{service.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    )}

    {column.hubLink && column.viewAllLabel ? (
      <Link to={column.hubLink} className={viewAllLinkClassName} onClick={onNavigate}>
        ({column.viewAllLabel})
      </Link>
    ) : null}
  </div>
);

type ServicesMegaMenuPanelProps = {
  id: string;
  onNavigate?: () => void;
};

export const ServicesMegaMenuPanel = ({ id, onNavigate }: ServicesMegaMenuPanelProps) => {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'ArrowDown' && event.key !== 'ArrowUp') return;

      const links = Array.from(panel.querySelectorAll<HTMLAnchorElement>('a[href]'));
      const currentIndex = links.indexOf(document.activeElement as HTMLAnchorElement);
      if (currentIndex === -1) return;

      event.preventDefault();
      const nextIndex =
        event.key === 'ArrowDown'
          ? (currentIndex + 1) % links.length
          : (currentIndex - 1 + links.length) % links.length;
      links[nextIndex]?.focus();
    };

    panel.addEventListener('keydown', handleKeyDown);
    return () => panel.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      id={id}
      ref={panelRef}
      role="navigation"
      aria-label="Services menu"
      className="absolute top-full z-[60] w-[min(980px,calc(100vw-2rem))] pt-3 right-0 xl:left-1/2 xl:right-auto xl:-translate-x-1/2"
    >
      <div className="max-h-[calc(100vh-120px)] overflow-y-auto overscroll-contain rounded-2xl border border-slate-100 bg-white shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5 scrollbar-subtle">
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {SERVICES_NAV_COLUMNS.map((column, index) => (
            <MegaMenuColumn key={column.id} column={column} columnIndex={index} onNavigate={onNavigate} />
          ))}
        </div>
      </div>
    </div>
  );
};

type ServicesMobileAccordionsProps = {
  onNavigate?: () => void;
};

export const ServicesMobileAccordions = ({ onNavigate }: ServicesMobileAccordionsProps) => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({});

  const toggleSection = (id: string) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="flex flex-col gap-2 pb-1">
      {SERVICES_NAV_COLUMNS.map((column) => {
        const isOpen = openSections[column.id] ?? false;

        return (
          <div key={column.id} className="overflow-hidden rounded-xl border border-slate-100 bg-slate-50/50">
            <button
              type="button"
              className="flex w-full items-center justify-between px-3 py-3.5 text-left text-sm font-semibold text-brand-navy transition-colors hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-inset rounded-xl"
              aria-expanded={isOpen}
              aria-controls={`mobile-services-${column.id}`}
              onClick={() => toggleSection(column.id)}
            >
              {column.title}
              <ChevronDown
                size={16}
                className={`shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {isOpen && (
              <div
                id={`mobile-services-${column.id}`}
                className="max-h-[min(50vh,360px)] overflow-y-auto overscroll-contain border-t border-slate-100 px-3 pb-3 pt-2 scrollbar-subtle"
                role="region"
                aria-label={column.title}
              >
                {column.categories ? (
                  <div className="space-y-3.5">
                    {column.categories.map((category) => (
                      <div key={category.title}>
                        <p className="mb-1.5 px-2 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                          {category.title}
                        </p>
                        <ul className="flex flex-col gap-0.5" role="list">
                          {category.services.map((service) => (
                            <li key={service.to + service.label}>
                              <Link
                                to={service.to}
                                className="flex items-start gap-2.5 rounded-lg px-2 py-2.5 text-sm text-slate-600 transition-colors hover:bg-white hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                                onClick={onNavigate}
                              >
                                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                                {service.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : (
                  <ul className="flex flex-col gap-0.5" role="list">
                    {(column.services ?? []).map((service) => (
                      <li key={service.to + service.label}>
                        <Link
                          to={service.to}
                          className="flex items-start gap-2.5 rounded-lg px-2 py-2.5 text-sm text-slate-600 transition-colors hover:bg-white hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                          onClick={onNavigate}
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-300" aria-hidden="true" />
                          {service.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}

                {column.hubLink && column.viewAllLabel ? (
                  <Link
                    to={column.hubLink}
                    className="mt-3 inline-flex rounded-lg px-2 py-2 text-xs font-semibold text-brand-orange transition-colors hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30"
                    onClick={onNavigate}
                  >
                    ({column.viewAllLabel})
                  </Link>
                ) : null}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
