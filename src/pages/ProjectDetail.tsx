import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import ServiceBottomCTA from '../components/ServiceBottomCTA.tsx';
import { getProjectBySlug } from '../data/projects';

type ManagedImageProps = {
  src: string;
  alt: string;
  className: string;
  fallback?: 'placeholder' | 'hide';
  onUnavailable?: (src: string) => void;
};

const ManagedImage = ({ src, alt, className, fallback = 'hide', onUnavailable }: ManagedImageProps) => {
  const [hasError, setHasError] = useState(false);

  if (hasError && fallback === 'hide') return null;

  if (hasError) {
    return (
      <div className="flex h-full min-h-[280px] w-full items-center justify-center rounded-3xl bg-gradient-to-br from-brand-navy via-slate-800 to-slate-950 px-6 text-center">
        <div>
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.24em] text-brand-orange">Project Photos</p>
          <p className="font-display text-2xl font-bold text-white">Coming Soon</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        setHasError(true);
        onUnavailable?.(src);
      }}
    />
  );
};

const PhotoSection = ({ title, images }: { title: string; images: string[] }) => {
  const [hiddenImages, setHiddenImages] = useState<string[]>([]);
  const visibleImages = images.filter((image) => !hiddenImages.includes(image));

  if (visibleImages.length === 0) return null;

  return (
    <section className="scroll-mt-32 py-12">
      <div className="mb-6 flex items-end justify-between gap-6">
        <h2 className="font-display text-3xl font-bold text-brand-navy">{title}</h2>
        <div className="hidden h-px flex-1 bg-slate-200 sm:block" />
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {visibleImages.map((image, index) => (
          <div
            key={image}
            className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl shadow-slate-200/60"
          >
            <ManagedImage
              src={image}
              alt={`${title} photo ${index + 1}`}
              className="h-80 w-full object-cover"
              onUnavailable={(unavailableImage) =>
                setHiddenImages((current) =>
                  current.includes(unavailableImage) ? current : [...current, unavailableImage],
                )
              }
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProjectBySlug(slug);

  if (!project) {
    return (
      <>
        <Helmet>
          <title>Project Not Found | Reinhart Hauling &amp; Cleanouts</title>
          <meta
            name="description"
            content="The Reinhart Hauling & Cleanouts project you are looking for could not be found."
          />
        </Helmet>

        <section className="pt-32 pb-24 lg:pt-48">
          <div className="mx-auto max-w-3xl px-6 text-center">
            <span className="mb-5 inline-block rounded-full bg-brand-orange/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-orange">
              Project Not Found
            </span>
            <h1 className="mb-5 font-display text-5xl font-bold text-brand-navy">This project page is not available.</h1>
            <p className="mb-8 text-lg leading-relaxed text-slate-600">
              The project may have moved, or the link may be incorrect. View the full portfolio to see current Reinhart
              project examples.
            </p>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-navy px-6 py-3 font-bold text-white shadow-lg shadow-brand-navy/20 transition-colors hover:bg-brand-orange"
            >
              <ArrowLeft size={18} />
              Back to Projects
            </Link>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>{project.seoTitle}</title>
        <meta name="description" content={project.seoDescription} />
      </Helmet>

      <section className="relative overflow-hidden pt-32 pb-20 lg:pt-48 lg:pb-28">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a0a_1px,transparent_1px),linear-gradient(to_bottom,#0f172a0a_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <Link
            to="/projects"
            className="mb-8 inline-flex items-center gap-2 text-sm font-bold text-slate-500 transition-colors hover:text-brand-orange"
          >
            <ArrowLeft size={17} />
            Back to Projects
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-6"
            >
              <div className="mb-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-brand-orange px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
                  {project.category}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-slate-600">
                  <MapPin size={14} className="text-brand-orange" />
                  {project.city}
                </span>
              </div>
              <h1 className="mb-6 font-display text-5xl font-bold leading-[0.95] tracking-tighter text-brand-navy lg:text-7xl">
                {project.title}
              </h1>
              <p className="text-xl leading-relaxed text-slate-600">{project.summary}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-6"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-2xl shadow-slate-200/70">
                <ManagedImage
                  src={project.featuredImage}
                  alt={`${project.title} in ${project.city}`}
                  fallback="placeholder"
                  className="h-[320px] w-full object-cover sm:h-[420px]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="scroll-mt-32 bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="space-y-8">
                {[
                  ['Project Overview', project.overview],
                  ['Problem', project.problem],
                  ['Solution', project.solution],
                  ['Outcome', project.outcome],
                ].map(([title, content]) => (
                  <div key={title} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                    <h2 className="mb-4 font-display text-3xl font-bold text-brand-navy">{title}</h2>
                    <p className="text-lg leading-relaxed text-slate-600">{content}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="sticky top-36 rounded-3xl border border-slate-200 bg-slate-50 p-8">
                <h2 className="mb-6 font-display text-3xl font-bold text-brand-navy">Scope of Work</h2>
                <div className="space-y-4">
                  {project.scope.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={19} className="mt-0.5 shrink-0 text-brand-orange" />
                      <span className="font-semibold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <PhotoSection title="Before" images={project.beforeImages} />
          <PhotoSection title="During" images={project.duringImages} />
          <PhotoSection title="After" images={project.afterImages} />
        </div>
      </section>

      <ServiceBottomCTA variant="dark" />
    </>
  );
}
