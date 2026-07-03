import React, { useEffect, useRef, useState } from 'react';

const BUSINESS_EMAIL = 'reinharthauling@gmail.com';
const MAILTO_URL = `mailto:${BUSINESS_EMAIL}?subject=Cleanout%20Estimate%20Request`;
const GMAIL_COMPOSE_URL =
  'https://mail.google.com/mail/?view=cm&fs=1&to=reinharthauling@gmail.com&su=Cleanout%20Estimate%20Request';

const triggerClassName =
  'text-brand-orange transition-colors hover:text-brand-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-offset-2 rounded-md';

const menuItemClassName =
  'block w-full rounded-lg px-3 py-2 text-left text-sm font-medium text-brand-navy transition-colors hover:bg-brand-orange/5 hover:text-brand-orange focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/30 focus-visible:ring-inset';

export default function EmailContactMenu() {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  useEffect(() => {
    if (!copied) return;

    const timer = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timer);
  }, [copied]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(BUSINESS_EMAIL);
      setCopied(true);
      setOpen(false);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = BUSINESS_EMAIL;
      textarea.setAttribute('readonly', '');
      textarea.style.position = 'absolute';
      textarea.style.left = '-9999px';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      setOpen(false);
    }
  };

  return (
    <div ref={menuRef} className="relative inline-flex items-center gap-1.5">
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Email Reinhart Hauling and Cleanouts"
        className={triggerClassName}
        onClick={() => setOpen((isOpen) => !isOpen)}
      >
        Email Us
      </button>

      {copied && (
        <span className="text-xs font-medium text-slate-500" role="status" aria-live="polite">
          Copied
        </span>
      )}

      {open && (
        <div
          role="menu"
          aria-label="Email contact options"
          className="absolute left-0 top-full z-20 mt-1 min-w-[12.5rem] overflow-hidden rounded-xl border border-slate-100 bg-white py-1 shadow-xl shadow-slate-200/60 ring-1 ring-slate-900/5"
        >
          <a
            role="menuitem"
            href={MAILTO_URL}
            className={menuItemClassName}
            onClick={() => setOpen(false)}
          >
            Use Email App
          </a>
          <a
            role="menuitem"
            href={GMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={menuItemClassName}
            onClick={() => setOpen(false)}
          >
            Open Gmail
          </a>
          <button type="button" role="menuitem" className={menuItemClassName} onClick={handleCopy}>
            Copy Email Address
          </button>
        </div>
      )}
    </div>
  );
}
