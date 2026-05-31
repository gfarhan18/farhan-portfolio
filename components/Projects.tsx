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
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [pinnedId, setPinnedId] = useState<string | null>(null);

  const sorted = useMemo(() => sortProjects(projects), [projects]);

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

  const filtered = useMemo(() => {
    const list =
      activeCategory === "all"
        ? sorted
        : sorted.filter((p) => p.category === activeCategory);
    return sortProjects(list);
  }, [sorted, activeCategory]);

  const featured = useMemo(
    () => filtered.filter((p) => p.featured),
    [filtered]
  );
  const rest = useMemo(
    () => filtered.filter((p) => !p.featured),
    [filtered]
  );

  const showFeaturedBlock =
    activeCategory === "all" && featured.length > 0;

  function isCompactExpanded(id: string) {
    return hoveredId === id || pinnedId === id;
  }

  function handleHoverStart(id: string) {
    setHoveredId(id);
  }

  function handleHoverEnd() {
    setHoveredId(null);
  }

  function handleTogglePin(id: string) {
    setPinnedId((prev) => (prev === id ? null : id));
    setHoveredId(null);
  }

  const compactCardProps = (p: Project, idx: number) => ({
    project: p,
    index: idx,
    compact: true as const,
    expanded: isCompactExpanded(p.id),
    onHoverStart: () => handleHoverStart(p.id),
    onHoverEnd: handleHoverEnd,
    onTogglePin: () => handleTogglePin(p.id),
    priorityImage: false,
  });

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
        <p className="text-muted text-center">No projects in this category yet.</p>
      ) : (
        <div className="space-y-10">
          {showFeaturedBlock && (
            <div>
              <h3 className="text-primary mb-4 font-display text-lg font-semibold">
                Flagship projects
              </h3>
              <div className="grid gap-6 lg:grid-cols-2">
                {featured.map((p, idx) => (
                  <ProjectCard
                    key={p.id}
                    project={p}
                    index={idx}
                    featured
                    priorityImage={idx < 2}
                  />
                ))}
              </div>
            </div>
          )}

          {rest.length > 0 && (
            <div>
              {showFeaturedBlock && (
                <h3 className="text-primary mb-4 font-display text-lg font-semibold">
                  More work
                </h3>
              )}
              <p className="text-muted mb-3 text-sm">
                Hover a project to expand — others stay compact.
              </p>
              <div className="grid items-start gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {rest.map((p, idx) => (
                  <ProjectCard key={p.id} {...compactCardProps(p, idx)} />
                ))}
              </div>
            </div>
          )}

          {!showFeaturedBlock && (
            <>
              {filtered.some((p) => !p.featured) && (
                <p className="text-muted mb-3 text-sm">
                  Hover a project to expand — others stay compact.
                </p>
              )}
              <div className="grid items-start gap-2 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p, idx) =>
                  p.featured ? (
                    <ProjectCard
                      key={p.id}
                      project={p}
                      index={idx}
                      featured
                      priorityImage={idx < 2}
                    />
                  ) : (
                    <ProjectCard key={p.id} {...compactCardProps(p, idx)} />
                  )
                )}
              </div>
            </>
          )}
        </div>
      )}
    </section>
  );
}
