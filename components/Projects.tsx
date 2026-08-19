"use client";

import { useMemo, useState } from "react";
import SectionHeader from "./SectionHeader";
import ProjectCategoryFilter from "./ProjectCategoryFilter";
import ProjectCard from "./ProjectCard";
import type { Project, ProjectCategory } from "@/lib/project-types";
import { sortProjects } from "@/lib/project-types";

type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">(
    "all"
  );

  const counts = useMemo(() => {
    const result: Record<ProjectCategory | "all", number> = {
      all: projects.length,
      frontend: 0,
      fullstack: 0,
      backend: 0,
    };
    for (const p of projects) {
      result[p.category]++;
    }
    return result;
  }, [projects]);

  // Featured first, then the rest — one uniform grid, per the design.
  const filtered = useMemo(() => {
    const list =
      activeCategory === "all"
        ? projects
        : projects.filter((p) => p.category === activeCategory);
    return sortProjects(list);
  }, [projects, activeCategory]);

  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="Selected work"
        title="Products I've shipped"
        description="Flagship builds first — including AI-powered platforms — plus a broader portfolio of client sites and full-stack products."
      />

      <ProjectCategoryFilter
        active={activeCategory}
        onChange={setActiveCategory}
        counts={counts}
      />

      {filtered.length === 0 ? (
        <p className="text-ink/60">No projects in this category yet.</p>
      ) : (
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          {filtered.map((p, idx) => (
            <ProjectCard
              key={p.id}
              project={p}
              index={idx}
              priorityImage={idx < 2}
            />
          ))}
        </div>
      )}
    </section>
  );
}
