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
    <section
      id="top"
      className="relative flex min-h-screen items-center pt-28"
    >
      <div className="container-px grid items-center gap-16 lg:grid-cols-[1.4fr_1fr]">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative z-10"
        >
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-slate-300 backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={item}
            className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.firstName}</span>
            <br />
            <span className="text-slate-300">— I build web products</span>
            <br />
            <span className="text-slate-300">
              that <span className="text-gradient">scale</span>.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
          >
            {profile.description}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <HiOutlineDownload className="h-5 w-5" />
              Download Resume
            </a>
            <a href="#contact" className="btn-ghost">
              Hire Me
              <HiOutlineArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-8 flex flex-wrap items-center gap-3 text-sm text-slate-400"
          >
            <span className="hidden sm:inline">Find me on</span>
            <div className="flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="group grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.06] hover:text-white"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-[#0a66c2]/60 hover:bg-[#0a66c2]/10 hover:text-[#54a8ff]"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="group grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-300 transition-all hover:-translate-y-0.5 hover:border-brand-400/60 hover:bg-brand-500/10 hover:text-brand-300"
              >
                <HiOutlineMail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="glass glass-hover px-4 py-4 text-center"
              >
                <div className="font-display text-2xl font-bold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-wider text-slate-400">
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

function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto hidden aspect-square w-full max-w-md lg:block"
    >
      <div className="absolute inset-0 animate-float">
        <div className="absolute inset-6 rounded-full border border-white/10" />
        <div className="absolute inset-14 rounded-full border border-white/10" />
        <div className="absolute inset-24 rounded-full border border-white/10" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500/25 via-transparent to-accent-500/30 blur-2xl" />
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <div className="glass relative grid h-44 w-44 place-items-center rounded-full shadow-glow">
          <span className="font-display text-5xl font-bold text-white">
            {profile.initials}
          </span>
          <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/10" />
        </div>
      </div>

      <FloatingChip
        className="left-2 top-10"
        delay={0.4}
        label="React.js"
        dot="bg-cyan-400"
      />
      <FloatingChip
        className="right-2 top-24"
        delay={0.55}
        label="Next.js"
        dot="bg-white"
      />
      <FloatingChip
        className="bottom-16 left-0"
        delay={0.7}
        label="Nest.js"
        dot="bg-red-400"
      />
      <FloatingChip
        className="bottom-6 right-4"
        delay={0.85}
        label="AWS Lambda"
        dot="bg-amber-400"
      />
      <FloatingChip
        className="left-1/2 top-0 -translate-x-1/2"
        delay={1}
        label="TypeScript"
        dot="bg-blue-400"
      />
    </motion.div>
  );
}

function FloatingChip({
  className,
  label,
  dot,
  delay,
}: {
  className?: string;
  label: string;
  dot: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={`absolute ${className ?? ""}`}
    >
      <div className="glass flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-slate-200 shadow-lg">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        {label}
      </div>
    </motion.div>
  );
}
