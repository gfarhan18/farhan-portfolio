"use client";

import { motion } from "framer-motion";
import {
  HiOutlineDownload,
  HiOutlineMail,
  HiOutlineArrowRight,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { profile } from "@/lib/data";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-clip pb-24 pt-[168px]">
      {/* Organic blobs — olive top-right, terracotta bottom-left. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-36 top-16 h-[380px] w-[380px] rounded-full bg-olive-soft opacity-[0.55]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -left-20 h-[220px] w-[220px] rounded-full bg-accent-soft opacity-50"
      />

      <div className="container-px relative z-10 grid items-center gap-14 lg:grid-cols-[1.3fr_0.7fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-divider bg-surface px-4 py-[7px] text-[13px] font-semibold text-ink"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-olive-solid opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-olive-solid" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-[22px] max-w-[14ch] font-display text-[clamp(38px,6vw,64px)] leading-[1.06] text-ink"
          >
            Hi, I&apos;m {profile.firstName}. I build and ship with{" "}
            <span className="text-accent">AI + full stack</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-[22px] max-w-[52ch] text-lg leading-[1.65] text-ink/[0.78]"
          >
            {profile.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <HiOutlineDownload className="h-[17px] w-[17px]" />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Hire Me
              <HiOutlineArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <span className="text-[13px] text-ink/60">Find me on</span>
            <div className="flex items-center gap-3">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="social-tile"
              >
                <FaGithub className="h-[18px] w-[18px]" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="social-tile"
              >
                <FaLinkedin className="h-[18px] w-[18px]" />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="social-tile"
              >
                <HiOutlineMail className="h-[18px] w-[18px]" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-11 grid max-w-[560px] grid-cols-[repeat(auto-fit,minmax(110px,1fr))] gap-2.5"
          >
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-md bg-surface px-2.5 py-4 text-center"
              >
                <div className="font-display text-2xl text-ink">{s.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.06em] text-ink/60">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <HeroVisual />
      </div>
    </section>
  );
}

/**
 * The design frames a portrait inside two concentric rings. Until a photo
 * exists in /public we render the monogram in the same frame.
 */
function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto grid aspect-square w-[min(320px,100%)] place-items-center justify-self-center"
    >
      <div className="absolute inset-0 rounded-full border border-divider" />
      <div className="absolute inset-[26px] rounded-full border border-divider" />
      <div className="grid h-[62%] w-[62%] place-items-center overflow-hidden rounded-full border-4 border-page bg-surface shadow-lg">
        <span className="font-display text-5xl text-accent">
          {profile.initials}
        </span>
      </div>
    </motion.div>
  );
}
