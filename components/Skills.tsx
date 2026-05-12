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

      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((cat, idx) => (
          <motion.div
            key={cat.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: idx * 0.05 }}
            className="glass glass-hover relative overflow-hidden p-7"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/10 blur-3xl" />
            <div className="flex items-baseline justify-between">
              <h3 className="font-display text-xl font-bold text-white">
                {cat.title}
              </h3>
              <span className="text-xs font-medium text-slate-500">
                {cat.skills.length} tools
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-400">{cat.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
              {cat.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.02] px-3 py-2.5 transition-all hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  <skill.Icon
                    className="h-5 w-5 shrink-0 transition-transform group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                  <span className="truncate text-sm font-medium text-slate-200">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
