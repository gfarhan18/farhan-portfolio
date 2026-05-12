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

      <div className="relative mx-auto max-w-4xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/60 via-white/10 to-transparent md:left-1/2 md:-translate-x-1/2" />

        <ul className="space-y-10">
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.li
                key={exp.company + exp.period}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: idx * 0.05 }}
                className="relative grid grid-cols-[2.5rem_1fr] gap-4 md:grid-cols-2 md:gap-12"
              >
                <div className="relative flex justify-center md:hidden">
                  <span className="absolute top-2 h-3.5 w-3.5 rounded-full bg-gradient-to-br from-brand-400 to-accent-500 ring-4 ring-ink-950" />
                </div>

                <span className="absolute left-1/2 top-6 hidden h-3.5 w-3.5 -translate-x-1/2 rounded-full bg-gradient-to-br from-brand-400 to-accent-500 ring-4 ring-ink-950 md:block" />

                {isLeft ? (
                  <>
                    <ExperienceCard exp={exp} side="left" />
                    <div className="hidden md:block" />
                  </>
                ) : (
                  <>
                    <div className="hidden md:block" />
                    <ExperienceCard exp={exp} side="right" />
                  </>
                )}
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function ExperienceCard({
  exp,
  side,
}: {
  exp: (typeof experiences)[number];
  side: "left" | "right";
}) {
  return (
    <div
      className={`glass glass-hover relative p-6 lg:p-7 ${
        side === "left" ? "md:mr-4" : "md:ml-4"
      }`}
    >
      <div className="flex flex-wrap items-center gap-2">
        <h3 className="font-display text-lg font-bold text-white">
          {exp.role}
        </h3>
        <span className="text-slate-500">·</span>
        <span className="text-sm font-medium text-brand-300">
          {exp.company}
        </span>
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <HiOutlineCalendar className="h-3.5 w-3.5" />
          {exp.period}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <HiOutlineLocationMarker className="h-3.5 w-3.5" />
          {exp.location}
        </span>
      </div>

      <ul className="mt-4 space-y-2.5">
        {exp.highlights.map((h) => (
          <li
            key={h}
            className="flex gap-3 text-sm leading-relaxed text-slate-300"
          >
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-brand-400 to-accent-500" />
            <span>{h}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {exp.tech.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
