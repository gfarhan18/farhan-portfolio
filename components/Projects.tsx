"use client";

import { motion } from "framer-motion";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import SectionHeader from "./SectionHeader";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionHeader
        eyebrow="Selected work"
        title="Projects I'm proud of"
        description="A snapshot of real products I've designed, built and shipped — each one solving real problems for real users."
      />

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, idx) => (
          <motion.article
            key={p.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: idx * 0.08 }}
            className="group glass glass-hover relative flex flex-col overflow-hidden p-6 lg:p-7"
          >
            <div
              className={`absolute -right-20 -top-20 h-52 w-52 rounded-full bg-gradient-to-br ${p.accent} opacity-[0.18] blur-3xl transition-opacity duration-500 group-hover:opacity-30`}
            />

            <div className="relative">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-2xl font-bold text-white">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-brand-300">
                    {p.tagline}
                  </p>
                </div>
                <div
                  className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${p.accent} text-white opacity-80 transition-all duration-300 group-hover:opacity-100 group-hover:scale-105`}
                >
                  <HiOutlineArrowUpRight className="h-4 w-4" />
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                {p.description}
              </p>

              <ul className="mt-5 space-y-2">
                {p.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex gap-2.5 text-xs leading-relaxed text-slate-400"
                  >
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-400" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
