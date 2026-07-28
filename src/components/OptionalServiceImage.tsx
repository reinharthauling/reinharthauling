import React from 'react';

type OptionalServiceImageProps = {
  src?: string;
  alt?: string;
  className?: string;
};

/** Renders a service/project photo when `src` is set; otherwise renders nothing. */
export default function OptionalServiceImage({ src, alt = '', className = '' }: OptionalServiceImageProps) {
  if (!src) return null;

  return (
    <div className={`aspect-[16/10] overflow-hidden rounded-2xl bg-slate-100 ${className}`}>
      <img
        src={src}
        alt={alt || 'Reinhart Hauling & Cleanouts project photo'}
        className="h-full w-full object-cover object-center"
        width={1200}
        height={750}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
