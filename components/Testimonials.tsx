"use client";

import { motion } from "framer-motion";
import { HiStar } from "react-icons/hi2";
import { FaQuoteLeft } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { testimonials } from "@/lib/data";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <SectionHeader
        eyebrow="Testimonials"
        title="What clients say"
        description="A few words from founders and teams I've partnered with across the US, EU and APAC."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass glass-hover relative flex flex-col p-7 lg:p-8"
          >
            <FaQuoteLeft className="absolute right-6 top-6 h-8 w-8 text-brand-500/15 dark:text-brand-400/15" />

            <div className="flex gap-0.5 text-brand-500 dark:text-brand-400">
              {Array.from({ length: 5 }).map((_, s) => (
                <HiStar key={s} className="h-4 w-4" />
              ))}
            </div>

            <blockquote className="text-secondary mt-4 flex-1 text-[15px] leading-relaxed">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-6 flex items-center gap-3 border-t border-subtle pt-5">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-accent-600 text-sm font-bold text-white shadow-glow">
                {t.initials}
              </span>
              <span className="min-w-0">
                <span className="text-primary block font-display text-sm font-semibold">
                  {t.name}
                </span>
                <span className="text-muted block truncate text-xs">
                  {t.role} · {t.company}
                </span>
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
