"use client";

import clsx from "clsx";
import type { ProjectCategory } from "@/lib/project-types";
import { PROJECT_CATEGORIES } from "@/lib/project-types";

type Props = {
  active: ProjectCategory | "all";
  onChange: (category: ProjectCategory | "all") => void;
  counts: Record<ProjectCategory | "all", number>;
};

/** The design's segmented control: one joined pill, divided by hairlines. */
export default function ProjectCategoryFilter({
  active,
  onChange,
  counts,
}: Props) {
  return (
    <div className="mb-9 inline-flex max-w-full flex-wrap overflow-hidden rounded-full border border-divider">
      {PROJECT_CATEGORIES.map((cat, i) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onChange(cat.id)}
          aria-pressed={active === cat.id}
          className={clsx(
            "px-3.5 py-[7px] text-[13px] transition-colors",
            i > 0 && "border-l border-divider",
            active === cat.id
              ? "bg-accent-solid text-onaccent"
              : "text-ink hover:bg-surface"
          )}
        >
          {cat.label} ({counts[cat.id]})
        </button>
      ))}
    </div>
  );
}
