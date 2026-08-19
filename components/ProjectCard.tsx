"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { FaGithub } from "react-icons/fa";
import type { Project } from "@/lib/project-types";
import { categoryLabel } from "@/lib/project-types";
import { getTechMeta } from "@/lib/tech-icons";
import ProjectImage from "./ProjectImage";

type Props = {
  project: Project;
  index: number;
  featured?: boolean;
  priorityImage?: boolean;
};

function initialsOf(name: string) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ProjectCard({
  project: p,
  index,
  featured,
  priorityImage = false,
}: Props) {
  const isFeatured = featured ?? p.featured;
  const hasImage = Boolean(p.image);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.05 }}
      className="glass-hover flex flex-col overflow-hidden rounded-lg bg-surface"
    >
      {hasImage ? (
        <div className="washed relative aspect-[16/10] overflow-hidden">
          <ProjectImage
            src={p.image}
            alt={`${p.name} screenshot`}
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
            priority={priorityImage}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="grid aspect-[16/10] place-items-center bg-accent-soft">
          <span className="font-display text-[22px] text-accent opacity-50">
            {initialsOf(p.name)}
          </span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-2.5 flex flex-wrap gap-1.5">
          {isFeatured && <span className="chip">Featured</span>}
          <span className="chip-olive">{categoryLabel(p.category)}</span>
        </div>

        <h3 className="mb-[3px] font-display text-[19px] text-ink">{p.name}</h3>
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.03em] text-accent">
          {p.tagline}
        </p>
        <p className="mb-3.5 text-sm leading-[1.55] text-ink/75">
          {p.description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {p.tech.map((t) => {
            const meta = getTechMeta(t);
            const Icon = meta.Icon;
            return (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent-solid px-2.5 py-[3px] text-[11px] tracking-[0.02em] text-accent"
              >
                <Icon
                  className="h-3 w-3 shrink-0"
                  style={{ color: meta.color }}
                />
                {t}
              </span>
            );
          })}
        </div>

        {(p.liveUrl || p.githubUrl) && (
          <div className="mt-4 flex flex-wrap gap-2">
            {p.liveUrl && (
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !px-4 !py-2.5 !text-[13px]"
              >
                Visit site
                <HiOutlineArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {p.githubUrl && (
              <a
                href={p.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !px-4 !py-2.5 !text-[13px]"
              >
                <FaGithub className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
    </motion.article>
  );
}
