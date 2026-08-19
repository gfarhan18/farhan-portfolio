"use client";

import { skillCategories } from "@/lib/data";

export default function Marquee() {
  const allSkills = skillCategories.flatMap((c) => c.skills);
  const items = [...allSkills, ...allSkills];

  return (
    <section
      aria-hidden
      className="relative overflow-hidden border-y border-divider py-[18px]"
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-page to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-page to-transparent" />

      <div className="flex w-max animate-marquee gap-10">
        {items.map((s, i) => (
          <div
            key={`${s.name}-${i}`}
            className="flex shrink-0 items-center gap-2.5 text-ink/[0.55]"
          >
            <s.Icon className="h-[18px] w-[18px]" style={{ color: s.color }} />
            <span className="whitespace-nowrap text-sm font-semibold">
              {s.name}
            </span>
            <span className="h-1 w-1 rounded-full bg-accent-solid" />
          </div>
        ))}
      </div>
    </section>
  );
}
