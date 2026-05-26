import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollToSectionWhenReady } from './utils/scrollToSection.ts';

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const sectionId = hash.slice(1);
      return scrollToSectionWhenReady(sectionId);
    }

    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
