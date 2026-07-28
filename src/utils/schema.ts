import {
  BUSINESS,
  BUSINESS_HAS_MAP,
  BUSINESS_PRICE_RANGE,
  BUSINESS_SAME_AS,
  HOME_FAQS,
  OPENING_HOURS,
  PRIMARY_SERVICE_CITIES,
  PRIMARY_SERVICES,
  SITE_URL,
  type ServiceCity,
} from '../data/business.ts';

export type FaqItem = {
  question: string;
  answer: string;
};

export type BreadcrumbSchemaItem = {
  label: string;
  /** Absolute path starting with `/`. Omit on the current (last) crumb. */
  to?: string;
};

export const BUSINESS_ID = `${SITE_URL}/#business`;
export const PERSON_ID = `${SITE_URL}/#jeremiah-reinhart`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Canonical site URL with trailing slash for entity URLs. */
export const SITE_HOME_URL = `${SITE_URL}/`;

function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  if (path === '/') return SITE_HOME_URL;
  return `${SITE_URL}${path}`;
}

function omitUndefined<T extends Record<string, unknown>>(obj: T): T {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined && v !== null)) as T;
}

/**
 * areaServed for entity / Service schema.
 * Defaults to priority markets only — not the full FAQ community list.
 */
export function buildAreaServedSchema(cities: ServiceCity[] = PRIMARY_SERVICE_CITIES) {
  const items: Record<string, unknown>[] = cities.map((city) => {
    if (city.isPlace) {
      return {
        '@type': 'Place',
        name: city.name,
        containedInPlace: {
          '@type': 'City',
          name: city.containedInCity ?? 'Nashville',
          containedInPlace: {
            '@type': 'State',
            name: 'Tennessee',
          },
        },
      };
    }

    return {
      '@type': 'City',
      name: city.name,
      containedInPlace: {
        '@type': 'State',
        name: 'Tennessee',
      },
    };
  });

  items.push({
    '@type': 'AdministrativeArea',
    name: 'Middle Tennessee',
  });

  return items;
}

export function buildPersonSchema() {
  return {
    '@type': 'Person',
    '@id': PERSON_ID,
    name: BUSINESS.owner.name,
    givenName: BUSINESS.owner.givenName,
    familyName: BUSINESS.owner.familyName,
    jobTitle: BUSINESS.owner.jobTitle,
    worksFor: { '@id': BUSINESS_ID },
    url: `${SITE_URL}/about`,
  };
}

/**
 * Lightweight provider reference — avoids nesting full areaServed / NAP on every Service.
 * The authoritative LocalBusiness lives at BUSINESS_ID (synced into index.html).
 */
export function buildProviderRef() {
  return {
    '@type': 'LocalBusiness',
    '@id': BUSINESS_ID,
  };
}

/**
 * Authoritative business entity.
 * Emit once in index.html (via sync script). React pages should reference @id only.
 * HomeAndConstructionBusiness is a valid LocalBusiness subtype for cleanup / selective demo work.
 */
export function buildLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': BUSINESS_ID,
    name: BUSINESS.name,
    url: SITE_HOME_URL,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    telephone: BUSINESS.phoneSchema,
    email: BUSINESS.email,
    description: BUSINESS.description,
    address: {
      '@type': 'PostalAddress',
      addressLocality: BUSINESS.address.addressLocality,
      addressRegion: BUSINESS.address.addressRegion,
      addressCountry: BUSINESS.address.addressCountry,
    },
    openingHoursSpecification: OPENING_HOURS.map((hours) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    })),
    areaServed: buildAreaServedSchema(PRIMARY_SERVICE_CITIES),
    founder: buildPersonSchema(),
    sameAs: [...BUSINESS_SAME_AS],
    priceRange: BUSINESS_PRICE_RANGE,
    hasMap: BUSINESS_HAS_MAP,
    additionalProperty: {
      '@type': 'PropertyValue',
      name: 'Insurance',
      value: 'Insured',
    },
    knowsAbout: [...PRIMARY_SERVICES],
  };
}

export function buildWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: SITE_HOME_URL,
    name: BUSINESS.name,
    description: BUSINESS.description,
    publisher: { '@id': BUSINESS_ID },
    inLanguage: 'en-US',
  };
}

export function buildWebPageSchema(options: {
  path: string;
  name: string;
  description: string;
  type?: 'WebPage' | 'AboutPage' | 'CollectionPage';
  mainEntityId?: string;
}) {
  const url = absoluteUrl(options.path);
  return omitUndefined({
    '@context': 'https://schema.org',
    '@type': options.type ?? 'WebPage',
    '@id': `${url.replace(/\/$/, '') || SITE_URL}#webpage`,
    url,
    name: options.name,
    description: options.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    primaryImageOfPage: BUSINESS.image,
    ...(options.mainEntityId ? { mainEntity: { '@id': options.mainEntityId } } : {}),
  });
}

export function buildFAQPageSchema(faqs: FaqItem[]) {
  if (!faqs.length) {
    return null;
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/** @deprecated Homepage FAQs are not visibly rendered — do not emit FAQPage from this. */
export function buildHomeFaqSchema() {
  return buildFAQPageSchema(HOME_FAQS);
}

export function buildServiceSchema(options: {
  name: string;
  description: string;
  /** Canonical path (`/estate-cleanouts`) or absolute URL. */
  path?: string;
  url?: string;
  serviceType?: string;
}) {
  const url = absoluteUrl(options.url ?? options.path ?? '/');
  const pageId = `${url.replace(/\/$/, '')}#webpage`;
  const serviceId = `${url.replace(/\/$/, '')}#service`;

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': serviceId,
    name: options.name,
    serviceType: options.serviceType ?? options.name,
    description: options.description,
    url,
    provider: buildProviderRef(),
    areaServed: buildAreaServedSchema(PRIMARY_SERVICE_CITIES),
    mainEntityOfPage: { '@id': pageId },
  };
}

export function buildBreadcrumbListSchema(items: BreadcrumbSchemaItem[]) {
  if (items.length < 2) return null;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) =>
      omitUndefined({
        '@type': 'ListItem',
        position: index + 1,
        name: item.label,
        ...(item.to ? { item: absoluteUrl(item.to) } : {}),
      }),
    ),
  };
}

export function buildAboutPageSchema() {
  const url = `${SITE_URL}/about`;
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${url}#webpage`,
    url,
    name: `About ${BUSINESS.name}`,
    description: BUSINESS.description,
    isPartOf: { '@id': WEBSITE_ID },
    mainEntity: { '@id': BUSINESS_ID },
    about: { '@id': PERSON_ID },
  };
}

/**
 * Project / case-study page markup. Uses only provided facts — no invented dates or outcomes.
 */
export function buildProjectPageSchema(options: {
  path: string;
  name: string;
  description: string;
  image?: string;
  relatedServicePath?: string;
  locationName?: string;
}) {
  const url = absoluteUrl(options.path);
  const imageUrl = options.image ? absoluteUrl(options.image) : undefined;

  return omitUndefined({
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url.replace(/\/$/, '')}#webpage`,
    url,
    name: options.name,
    description: options.description,
    isPartOf: { '@id': WEBSITE_ID },
    about: { '@id': BUSINESS_ID },
    ...(imageUrl ? { primaryImageOfPage: imageUrl, image: imageUrl } : {}),
    ...(options.relatedServicePath
      ? {
          mentions: {
            '@type': 'Service',
            '@id': `${absoluteUrl(options.relatedServicePath).replace(/\/$/, '')}#service`,
          },
        }
      : {}),
    ...(options.locationName
      ? {
          contentLocation: {
            '@type': 'Place',
            name: options.locationName,
          },
        }
      : {}),
    provider: buildProviderRef(),
  });
}

/** Drop null entries when assembling page jsonLd arrays. */
export function compactJsonLd(
  schemas: Array<Record<string, unknown> | null | undefined>,
): Record<string, unknown>[] {
  return schemas.filter((s): s is Record<string, unknown> => Boolean(s));
}
