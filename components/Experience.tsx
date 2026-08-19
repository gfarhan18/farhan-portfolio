"use client";

import { motion } from "framer-motion";
import { HiOutlineLocationMarker, HiOutlineCalendar } from "react-icons/hi";
import SectionHeader from "./SectionHeader";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionHeader
        eyebrow="Experience"
        title="A track record of shipping"
        description="From in-house engineering to freelance partnerships with international clients — here's where I've created impact."
      />

      {/* A single left rail, per the design — not an alternating timeline. */}
      <ul className="relative max-w-[760px] border-l-2 border-divider pl-7">
        {experiences.map((exp, idx) => (
          <motion.li
            key={exp.company + exp.period}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className="relative mb-9 last:mb-0"
          >
            <span className="absolute -left-[35px] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-page bg-accent-solid" />

            <div className="rounded-lg bg-surface px-7 py-[26px]">
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-lg text-ink">{exp.role}</h3>
                <span className="text-ink/40">·</span>
                <span className="text-sm font-semibold text-accent">
                  {exp.company}
                </span>
              </div>

              <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-ink/[0.62]">
                <span className="inline-flex items-center gap-1.5">
                  <HiOutlineCalendar className="h-3.5 w-3.5" />
                  {exp.period}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <HiOutlineLocationMarker className="h-3.5 w-3.5" />
                  {exp.location}
                </span>
              </div>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 text-sm leading-[1.55] text-ink/[0.82]"
                  >
                    <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-olive-solid" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-flex items-center rounded-full bg-neutral-200 px-2.5 py-[3px] text-[11px] tracking-[0.02em] text-neutral-800 dark:bg-page dark:text-ink/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
