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
        alt={alt}
        className="h-full w-full object-cover object-center"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
