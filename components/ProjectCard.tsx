"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowUpRight, HiChevronDown } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/project-types";
import { categoryLabel } from "@/lib/project-types";
import { getTechMeta } from "@/lib/tech-icons";
import ProjectImage from "./ProjectImage";

type Props = {
  project: Project;
  index: number;
  featured?: boolean;
  compact?: boolean;
  expanded?: boolean;
  onHoverStart?: () => void;
  onHoverEnd?: () => void;
  onTogglePin?: () => void;
  priorityImage?: boolean;
};

export default function ProjectCard({
  project: p,
  index,
  featured,
  compact = false,
  expanded = false,
  onHoverStart,
  onHoverEnd,
  onTogglePin,
  priorityImage = false,
}: Props) {
  const isFeatured = featured ?? p.featured;
  const hasLiveUrl = Boolean(p.liveUrl);
  const hasGithubUrl = Boolean(p.githubUrl);
  const hasImage = Boolean(p.image);

  function handleCardClick(e: React.MouseEvent) {
    if (!compact) return;
    if ((e.target as HTMLElement).closest("a, button")) return;
    onTogglePin?.();
  }

  const thumbSizes = "64px";
  const heroSizes = compact
    ? "(max-width: 768px) 90vw, 400px"
    : "(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw";

  const details = (
    <>
      {hasImage && (
        <div
          className={
            compact
              ? "relative mb-3 aspect-[16/10] overflow-hidden rounded-xl border border-subtle"
              : "relative aspect-[16/10] w-full overflow-hidden border-b border-subtle"
          }
        >
          <ProjectImage
            src={p.image}
            alt={`${p.name} screenshot`}
            sizes={heroSizes}
            priority={priorityImage}
            className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
          />
          {!compact && (
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent dark:from-ink-950/80" />
          )}
        </div>
      )}

      {!compact && !hasImage && (
        <div
          className={`relative aspect-[16/10] w-full bg-gradient-to-br ${p.accent} opacity-20`}
        />
      )}

      <div
        className={`relative flex flex-1 flex-col ${
          compact ? "px-4 pb-4 pt-0" : "p-6 lg:p-7"
        }`}
      >
        {!compact && (
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                {isFeatured && (
                  <span className="rounded-full border border-accent-500/40 bg-accent-500/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-accent-600 dark:text-accent-500">
                    Featured
                  </span>
                )}
                <span className="rounded-full border border-subtle bg-brand-500/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                  {categoryLabel(p.category)}
                </span>
              </div>
              <h3 className="text-primary font-display text-2xl font-bold">
                {p.name}
              </h3>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-600 dark:text-brand-300">
                {p.tagline}
              </p>
            </div>

            {hasLiveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${p.name} live site`}
                className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${p.accent} text-white opacity-80 transition-all duration-300 hover:scale-105 hover:opacity-100`}
              >
                <HiOutlineArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        )}

        <p
          className={`text-secondary text-sm leading-relaxed ${
            compact ? "mt-0" : "mt-4"
          }`}
        >
          {p.description}
        </p>

        <ul className={`space-y-2 ${compact ? "mt-3" : "mt-5"}`}>
          {p.highlights.map((h) => (
            <li
              key={h}
              className="text-muted flex gap-2.5 text-xs leading-relaxed"
            >
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-500 dark:bg-brand-400" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className={`flex flex-wrap gap-1.5 ${compact ? "mt-3" : "mt-6"}`}>
          {p.tech.map((t) => {
            const meta = getTechMeta(t);
            const Icon = meta.Icon;
            return (
              <span key={t} className="chip flex items-center gap-1.5">
                <Icon
                  className="h-3.5 w-3.5 shrink-0"
                  style={{ color: meta.color }}
                />
                {t}
              </span>
            );
          })}
        </div>

        {(hasLiveUrl || hasGithubUrl) && (
          <div
            className={`mt-auto flex flex-wrap gap-2 ${compact ? "pt-3" : "pt-6"}`}
          >
            {hasLiveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-primary !px-4 !py-2 text-sm"
              >
                Visit website
                <HiOutlineArrowUpRight className="h-4 w-4" />
              </a>
            )}
            {hasGithubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="btn-ghost !px-4 !py-2 text-sm"
              >
                <FaGithub className="h-4 w-4" />
                View on GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: compact ? 12 : 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: compact ? index * 0.03 : index * 0.08 }}
      onMouseEnter={() => compact && onHoverStart?.()}
      onMouseLeave={() => compact && onHoverEnd?.()}
      onClick={handleCardClick}
      aria-expanded={compact ? expanded : undefined}
      className={`relative ${compact ? "min-h-[4.75rem]" : ""} ${
        compact && expanded ? "z-30" : compact ? "z-0" : ""
      }`}
    >
      <div
        className={`glass relative flex flex-col overflow-hidden transition-shadow duration-300 ${
          compact ? "cursor-pointer" : "glass-hover"
        } ${
          isFeatured
            ? "ring-2 ring-brand-500/30 dark:ring-brand-400/40"
            : compact && expanded
              ? "ring-1 ring-brand-500/25 shadow-xl dark:ring-brand-400/30"
              : ""
        }`}
      >
        <div
          className={`absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br ${p.accent} opacity-[0.18] blur-3xl transition-opacity duration-500 ${
            expanded ? "opacity-30" : "opacity-10"
          }`}
        />

        {compact ? (
          <>
            <div className="relative flex items-center gap-3 p-3 sm:p-4">
              <div
                className={`relative h-11 w-11 shrink-0 overflow-hidden rounded-lg bg-gradient-to-br ${p.accent} opacity-40 sm:h-12 sm:w-12`}
              >
                {hasImage && (
                  <ProjectImage
                    src={p.image}
                    alt=""
                    sizes={thumbSizes}
                    quality={60}
                    className="object-cover opacity-90"
                  />
                )}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="rounded-full border border-subtle bg-brand-500/10 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-brand-700 dark:text-brand-300">
                    {categoryLabel(p.category)}
                  </span>
                </div>
                <h3 className="text-primary truncate font-display text-base font-bold sm:text-lg">
                  {p.name}
                </h3>
                <p className="text-muted truncate text-xs">{p.tagline}</p>
              </div>
              <div className="flex shrink-0 items-center gap-1">
                {hasLiveUrl && (
                  <a
                    href={p.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${p.name}`}
                    onClick={(e) => e.stopPropagation()}
                    className={`grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br ${p.accent} text-white opacity-90 transition-opacity hover:opacity-100`}
                  >
                    <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
                  </a>
                )}
                <HiChevronDown
                  className={`text-muted h-5 w-5 transition-transform duration-300 ${
                    expanded ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </div>
            </div>

            {!expanded && (
              <p className="text-muted px-4 pb-2.5 text-[10px] sm:hidden">
                Tap to expand
              </p>
            )}
          </>
        ) : (
          details
        )}
      </div>

      {compact && expanded && (
        <div
          className="absolute left-0 right-0 top-full z-50 mt-1 max-h-[min(70vh,32rem)] overflow-y-auto rounded-2xl border border-subtle bg-white shadow-2xl dark:bg-ink-900"
          onMouseEnter={() => onHoverStart?.()}
          onMouseLeave={() => onHoverEnd?.()}
        >
          <div className="glass relative overflow-hidden ring-1 ring-brand-500/20 dark:ring-brand-400/25">
            {details}
          </div>
        </div>
      )}
    </motion.article>
  );
}
