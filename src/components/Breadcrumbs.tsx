import { Link } from 'react-router-dom';
import {
  buildBreadcrumbListSchema,
  type BreadcrumbSchemaItem,
} from '../utils/schema.ts';

export type BreadcrumbItem = BreadcrumbSchemaItem;

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return buildBreadcrumbListSchema(items);
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="mb-8 flex flex-wrap items-center gap-2 text-sm font-semibold text-slate-500" aria-label="Breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={`${item.label}-${index}`} className="inline-flex items-center gap-2">
            {index > 0 && (
              <span className="text-slate-300" aria-hidden="true">
                /
              </span>
            )}
            {item.to && !isLast ? (
              <Link to={item.to} className="transition-colors hover:text-brand-orange">
                {item.label}
              </Link>
            ) : (
              <span className={isLast ? 'text-brand-navy' : undefined}>{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
