import { Helmet } from 'react-helmet-async';
import { DEFAULT_OG_IMAGE, SITE_URL } from '../data/business.ts';

export type PageMetaProps = {
  title: string;
  description: string;
  /** Absolute path starting with `/`, or full URL. */
  path: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  /** When true, discourages indexing (aliases, utility, or duplicate surfaces). */
  noindex?: boolean;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  twitterCard?: 'summary' | 'summary_large_image';
};

export function absoluteUrl(pathOrUrl: string): string {
  if (pathOrUrl.startsWith('http://') || pathOrUrl.startsWith('https://')) {
    return pathOrUrl;
  }
  const path = pathOrUrl.startsWith('/') ? pathOrUrl : `/${pathOrUrl}`;
  return `${SITE_URL}${path}`;
}

/**
 * Shared Helmet metadata for indexable pages.
 * Preserves unique titles/descriptions; fills canonical + Open Graph consistently.
 */
export default function PageMeta({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage = DEFAULT_OG_IMAGE,
  noindex = false,
  jsonLd,
  twitterCard = 'summary_large_image',
}: PageMetaProps) {
  const canonicalUrl = absoluteUrl(path);
  const socialTitle = ogTitle ?? title;
  const socialDescription = ogDescription ?? description;
  const imageUrl = absoluteUrl(ogImage);
  const schemas = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex ? <meta name="robots" content="noindex, follow" /> : <meta name="robots" content="index, follow" />}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Reinhart Hauling & Cleanouts" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={socialTitle} />
      <meta property="og:description" content={socialDescription} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:secure_url" content={imageUrl} />
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={socialTitle} />
      <meta name="twitter:description" content={socialDescription} />
      <meta name="twitter:image" content={imageUrl} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      ))}
    </Helmet>
  );
}
