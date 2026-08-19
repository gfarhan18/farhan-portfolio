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

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[18px]">
        {testimonials.map((t, i) => (
          <motion.figure
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative flex flex-col rounded-lg bg-surface p-7"
          >
            <FaQuoteLeft
              aria-hidden
              className="absolute right-6 top-[22px] h-[26px] w-[26px] text-accent-200 dark:text-accent-900"
            />

            <div className="flex gap-0.5 text-accent-600 dark:text-accent-400">
              {Array.from({ length: 5 }).map((_, s) => (
                <HiStar key={s} className="h-3.5 w-3.5" />
              ))}
            </div>

            <blockquote className="mt-3.5 flex-1 text-[14.5px] leading-[1.6] text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>

            <figcaption className="mt-5 flex items-center gap-3 border-t border-divider pt-4">
              <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-accent-solid font-display text-[13px] text-onaccent">
                {t.initials}
              </span>
              <span className="min-w-0">
                <strong className="block text-[13px] font-bold text-ink">
                  {t.name}
                </strong>
                <span className="block truncate text-xs text-ink/[0.62]">
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
