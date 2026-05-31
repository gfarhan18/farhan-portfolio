"use client";

import { skillCategories } from "@/lib/data";

export default function Marquee() {
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const items = [...allSkills, ...allSkills];

  return (
    <section
      aria-hidden
      className="relative mt-8 overflow-hidden border-y border-subtle bg-slate-100/50 py-5 lg:mt-10 dark:bg-white/[0.015]"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-slate-50 to-transparent dark:from-ink-950" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-slate-50 to-transparent dark:from-ink-950" />

      <div className="flex w-max animate-marquee gap-10">
        {items.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="text-muted flex shrink-0 items-center gap-2.5"
          >
            <s.Icon className="h-5 w-5" style={{ color: s.color }} />
            <span className="whitespace-nowrap text-sm font-medium">
              {s.name}
            </span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
          </div>
        ))}
      </div>
    </section>
  );
}
