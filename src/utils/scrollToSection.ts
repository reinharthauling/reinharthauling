/** Fixed navbar clearance so section headings stay visible after anchor scroll. */
export const NAVBAR_SCROLL_OFFSET = 128;

export function scrollToSection(sectionId: string, behavior: ScrollBehavior = 'smooth'): boolean {
  const element = document.getElementById(sectionId);
  if (!element) return false;

  const top = element.getBoundingClientRect().top + window.scrollY - NAVBAR_SCROLL_OFFSET;
  window.scrollTo({ top: Math.max(0, top), behavior });
  return true;
}

export function scrollToSectionWhenReady(
  sectionId: string,
  { maxAttempts = 24, intervalMs = 50, behavior = 'smooth' }: { maxAttempts?: number; intervalMs?: number; behavior?: ScrollBehavior } = {},
): () => void {
  let attempts = 0;
  let timer: ReturnType<typeof setTimeout> | undefined;

  const tryScroll = () => {
    if (scrollToSection(sectionId, behavior)) return;
    attempts += 1;
    if (attempts < maxAttempts) {
      timer = setTimeout(tryScroll, intervalMs);
    }
  };

  tryScroll();

  return () => {
    if (timer) clearTimeout(timer);
  };
}
