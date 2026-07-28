import {
  BUSINESS,
  HOME_FAQS,
  OPENING_HOURS,
  PRIMARY_SERVICES,
  SERVICE_CITIES,
  SITE_URL,
  type ServiceCity,
} from '../data/business.ts';

export type FaqItem = {
  question: string;
  answer: string;
};

export function buildAreaServedSchema(cities: ServiceCity[] = SERVICE_CITIES) {
  const items: Record<string, unknown>[] = cities.map((city) => {
    if (city.isNeighborhood) {
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
    '@id': `${SITE_URL}/#jeremiah-reinhart`,
    name: BUSINESS.owner.name,
    givenName: BUSINESS.owner.givenName,
    familyName: BUSINESS.owner.familyName,
    jobTitle: BUSINESS.owner.jobTitle,
    worksFor: { '@id': `${SITE_URL}/#business` },
    url: `${SITE_URL}/about`,
  };
}

export function buildProviderRef() {
  return {
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: SITE_URL,
    telephone: BUSINESS.phoneSchema,
    email: BUSINESS.email,
    areaServed: 'Middle Tennessee',
  };
}

/** LocalBusiness for homepage / sitewide entity clarity. No street address, no geo coords. */
export function buildLocalBusinessSchema(options?: { includeOffers?: boolean; includeFaqs?: boolean }) {
  const schema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    image: BUSINESS.image,
    logo: BUSINESS.logo,
    telephone: BUSINESS.phoneSchema,
    email: BUSINESS.email,
    priceRange: BUSINESS.priceRange,
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
    areaServed: buildAreaServedSchema(),
    founder: buildPersonSchema(),
    employee: buildPersonSchema(),
    knowsAbout: [...PRIMARY_SERVICES],
  };

  if (BUSINESS.isInsured) {
    schema.hasCredential = {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'Insurance',
      name: 'Fully Insured',
    };
  }

  if (options?.includeOffers !== false) {
    schema.hasOfferCatalog = {
      '@type': 'OfferCatalog',
      name: 'Property cleanup, commercial cleanout, and selective demolition services',
      itemListElement: PRIMARY_SERVICES.map((serviceName) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: serviceName,
          provider: { '@id': `${SITE_URL}/#business` },
        },
      })),
    };
  }

  return schema;
}

export function buildFAQPageSchema(faqs: FaqItem[]) {
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

export function buildHomeFaqSchema() {
  return buildFAQPageSchema(HOME_FAQS);
}

export function buildServiceSchema(options: {
  name: string;
  description: string;
  url: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: options.name,
    serviceType: options.serviceType ?? options.name,
    description: options.description,
    provider: buildProviderRef(),
    areaServed: buildAreaServedSchema(),
    url: options.url,
  };
}

export function buildAboutPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: `About ${BUSINESS.name}`,
    description: BUSINESS.description,
    mainEntity: {
      '@id': `${SITE_URL}/#business`,
    },
    about: buildPersonSchema(),
  };
}
