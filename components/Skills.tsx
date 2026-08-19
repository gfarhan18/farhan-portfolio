"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skillCategories } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionHeader
        eyebrow="Tech stack"
        title="Tools I use to build great products"
        description="A versatile toolbox refined over 5+ years of shipping real products — chosen because they help me move fast without breaking quality."
      />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-4">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className="rounded-lg bg-surface p-6"
          >
            <div className="flex items-baseline justify-between gap-2.5">
              <h3 className="font-display text-[17px] text-ink">{cat.title}</h3>
              <span className="whitespace-nowrap text-[11px] text-ink/[0.55]">
                {cat.skills.length} tools
              </span>
            </div>
            <p className="mb-4 mt-1.5 text-[13px] text-ink/[0.68]">
              {cat.description}
            </p>

            <div className="flex flex-wrap gap-1.5">
              {cat.skills.map((skill) => (
                <span
                  key={skill.name}
                  className="inline-flex items-center gap-1.5 rounded-full border border-accent-solid px-2.5 py-[3px] text-[11px] tracking-[0.02em] text-accent"
                >
                  <skill.Icon
                    className="h-[11px] w-[11px] shrink-0"
                    style={{ color: skill.color }}
                  />
                  {skill.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
