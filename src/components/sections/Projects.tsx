"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ExternalLink, Github, Star } from "lucide-react";
import { useIntersectionObserver } from "iso-hooks";

/* -------------------------------------------------------------------------- */
/*                               Static Content                               */
/* -------------------------------------------------------------------------- */

const PROJECTS = [
  {
    title: "Minimal Workspace Concept",
    description:
      "A calm, minimal interface focused on balance, spacing, and subtle interactions — designed to feel quiet and intentional.",
    image: "https://picsum.photos/400",
    tags: ["React", "TypeScript", "Tailwind"],
    featured: true,
  },
  {
    title: "Modern Web Platform",
    description:
      "A web platform built with clarity in mind, keeping the experience simple, consistent, and easy to navigate.",
    image: "https://picsum.photos/400",
    tags: ["Next.js", "Node.js", "PostgreSQL"],
  },
  {
    title: "Interactive Visual Experiment",
    description:
      "An experimental project exploring motion and visual detail, where small interactions shape the overall experience.",
    image: "https://picsum.photos/400",
    tags: ["React", "Three.js", "GSAP"],
  },
];

/* -------------------------------------------------------------------------- */
/*                               Project Card                                 */
/* -------------------------------------------------------------------------- */

type ProjectCardProps = {
  project: (typeof PROJECTS)[number];
  index: number;
};

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef<HTMLElement>(null);

  const { isIntersecting } = useIntersectionObserver(ref, {
    threshold: 0.2,
  });

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isIntersecting ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.12 }}
      className="group h-full"
    >
      {/* Card container */}
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border
       bg-background transition-colors duration-500 hover:border-accent/40"
      >
        {/* ------------------------------------------------------------------ */}
        {/* Image                                                              */}
        {/* ------------------------------------------------------------------ */}
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority={index === 0} // Improves LCP for the featured card
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover opacity-65 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-85"
          />

          {/* Image overlay for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent" />

          {/* Featured label */}
          {project.featured && (
            <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1.5 text-xs font-mono text-background">
              <Star size={12} fill="currentColor" />
              Featured
            </span>
          )}

          {/* Actions */}
          <div className="pointer-events-none absolute right-4 top-4 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
            <button
              aria-label="View source"
              className="rounded-lg border border-border bg-background/80 p-2 backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={18} />
            </button>

            <button
              aria-label="Open project"
              className="rounded-lg border border-border bg-background/80 p-2 backdrop-blur transition-colors hover:border-accent hover:text-accent"
            >
              <ExternalLink size={18} />
            </button>
          </div>
        </div>

        {/* ------------------------------------------------------------------ */}
        {/* Content (flex column to normalize height)                           */}
        {/* ------------------------------------------------------------------ */}
        <div className="flex flex-1 flex-col gap-4 p-6">
          <h3 className="text-lg text-foreground transition-colors group-hover:text-accent">
            {project.title}
          </h3>

          {/* Clamp description for consistent card height */}
          <p className="line-clamp-3 text-sm leading-relaxed text-muted">
            {project.description}
          </p>

          {/* Tags pinned to bottom */}
          <div className="mt-auto flex flex-wrap gap-2 pt-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-mono text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Projects Section                              */
/* -------------------------------------------------------------------------- */

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  const { isIntersecting } = useIntersectionObserver(ref, {
    threshold: 0.1,
  });

  return (
    <section id="projects" className="relative px-6 py-10">
      {/* Subtle background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div ref={ref} className="relative mx-auto max-w-5xl px-6 py-32">
        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-3 flex items-center gap-3">
            <span className="font-mono text-sm text-accent">02.</span>
            <span className="font-mono text-sm text-muted">Selected Work</span>
          </div>

          <h2 className="text-3xl leading-snug text-foreground md:text-4xl">
            Projects shaped by clarity, balance, and quiet systems.
          </h2>
        </div>

        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* View all */}
      </div>
    </section>
  );
}
