import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PageMeta from './PageMeta.tsx';

/**
 * Client-side redirect that also emits noindex + canonical toward the final URL.
 * Keeps legacy routes alive without treating them as independent indexable pages.
 */
export default function SeoRedirect({
  to,
  title,
  canonicalPath,
}: {
  to: string;
  title?: string;
  /** Override canonical when `to` includes a hash (e.g. `/#services`). */
  canonicalPath?: string;
}) {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(to, { replace: true });
  }, [navigate, to]);

  const metaPath = canonicalPath ?? (to.split('#')[0] || '/');

  return (
    <PageMeta
      title={title ?? 'Redirecting | Reinhart Hauling & Cleanouts'}
      description="This page has moved. You are being redirected to the current Reinhart Hauling & Cleanouts page."
      path={metaPath}
      noindex
    />
  );
}
