"use client";

import clsx from "clsx";
import type { ProjectCategory } from "@/lib/project-types";
import { PROJECT_CATEGORIES } from "@/lib/project-types";

type Props = {
  active: ProjectCategory | "all";
  onChange: (category: ProjectCategory | "all") => void;
  counts: Record<ProjectCategory | "all", number>;
};

export default function ProjectCategoryFilter({
  active,
  onChange,
  counts,
}: Props) {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {PROJECT_CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => onChange(cat.id)}
          className={clsx(
            "rounded-full border px-4 py-2 text-sm font-medium transition-all",
            active === cat.id
              ? "border-brand-500/40 bg-brand-500/15 text-brand-800 dark:border-brand-400/50 dark:bg-brand-500/20 dark:text-white"
              : "border-subtle surface-faint text-muted hover:border-slate-300 hover:text-slate-900 dark:hover:border-white/20 dark:hover:text-white"
          )}
        >
          {cat.label}
          <span className="ml-1.5 text-xs opacity-60">({counts[cat.id]})</span>
        </button>
      ))}
    </div>
  );
}
