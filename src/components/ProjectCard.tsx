import React, { useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import type { Project } from '../data/projects';

type ProjectCardProps = {
  project: Project;
};

const ProjectCardImage = ({ src, alt }: { src: string; alt: string }) => {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div className="flex h-full min-h-[230px] w-full items-center justify-center bg-gradient-to-br from-brand-navy via-slate-800 to-slate-950 px-6 text-center">
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
      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      loading="lazy"
      decoding="async"
      onError={() => setHasError(true)}
    />
  );
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/60"
    >
      <Link to={`/projects/${project.slug}`} className="block">
        <div className="relative h-64 overflow-hidden bg-slate-100">
          <ProjectCardImage src={project.featuredImage} alt={`${project.title} in ${project.city}`} />
          <div className="absolute left-4 top-4 rounded-full bg-brand-orange px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-brand-orange/25">
            {project.category}
          </div>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-7">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-500">
          <MapPin size={16} className="text-brand-orange" />
          {project.serviceArea}
        </div>
        <h3 className="mb-3 font-display text-2xl font-bold leading-tight text-brand-navy">
          <Link to={`/projects/${project.slug}`} className="transition-colors hover:text-brand-orange">
            {project.title}
          </Link>
        </h3>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-slate-600">{project.summary}</p>

        <div className="mb-7 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          to={`/projects/${project.slug}`}
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand-navy px-5 py-3 text-sm font-bold text-white shadow-lg shadow-brand-navy/20 transition-colors hover:bg-brand-orange"
        >
          View Project
          <ArrowRight size={16} />
        </Link>
      </div>
    </motion.article>
  );
}
