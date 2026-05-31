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
      className="relative flex min-h-screen items-center pb-12 pt-28 lg:pb-16"
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
            className="text-secondary inline-flex items-center gap-2 rounded-full border border-subtle surface-faint px-4 py-1.5 text-xs font-medium backdrop-blur"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </span>
            {profile.availability}
          </motion.div>

          <motion.h1
            variants={item}
            className="text-primary mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient">{profile.firstName}</span>
            <br />
            <span className="text-secondary">— I build & ship with</span>
            <br />
            <span className="text-secondary">
              <span className="text-gradient">AI + full stack</span>.
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg"
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
            className="text-muted mt-8 flex flex-wrap items-center gap-3 text-sm"
          >
            <span className="hidden sm:inline">Find me on</span>
            <div className="flex items-center gap-2">
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-secondary group grid h-11 w-11 place-items-center rounded-xl border border-subtle surface-faint transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:border-white/25 dark:hover:bg-white/[0.06] dark:hover:text-white"
              >
                <FaGithub className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-secondary group grid h-11 w-11 place-items-center rounded-xl border border-subtle surface-faint transition-all hover:-translate-y-0.5 hover:border-[#0a66c2]/60 hover:bg-[#0a66c2]/10 hover:text-[#0a66c2] dark:hover:text-[#54a8ff]"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="text-secondary group grid h-11 w-11 place-items-center rounded-xl border border-subtle surface-faint transition-all hover:-translate-y-0.5 hover:border-brand-400/60 hover:bg-brand-500/10 hover:text-brand-600 dark:hover:text-brand-300"
              >
                <HiOutlineMail className="h-5 w-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          >
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="glass glass-hover px-4 py-4 text-center"
              >
                <div className="text-primary font-display text-2xl font-bold">
                  {s.value}
                </div>
                <div className="text-muted mt-1 text-[11px] uppercase tracking-wider">
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
  const techChips = [
    { label: "React.js", dot: "bg-cyan-400", className: "left-0 top-[6%]" },
    { label: "Next.js", dot: "bg-slate-700 dark:bg-white", className: "right-0 top-[10%]" },
    { label: "Vue.js", dot: "bg-emerald-400", className: "-right-3 top-[34%]" },
    { label: "TypeScript", dot: "bg-blue-500", className: "left-1/2 top-0 -translate-x-1/2" },
    { label: "Tailwind", dot: "bg-sky-400", className: "-left-2 top-[32%]" },
    { label: "Nest.js", dot: "bg-red-400", className: "left-1 top-[52%]" },
    { label: "Node.js", dot: "bg-green-500", className: "right-1 top-[54%]" },
    { label: "Laravel", dot: "bg-red-500", className: "right-[8%] top-[72%]" },
    { label: "PHP", dot: "bg-indigo-400", className: "left-[6%] top-[68%]" },
    { label: "PostgreSQL", dot: "bg-blue-600", className: "-right-1 bottom-[14%]" },
    { label: "MySQL", dot: "bg-blue-400", className: "-left-1 bottom-[12%]" },
    { label: "AWS", dot: "bg-amber-400", className: "left-[28%] bottom-0" },
    { label: "Docker", dot: "bg-sky-500", className: "right-[26%] bottom-0" },
    { label: "AI", dot: "bg-purple-400", className: "left-[42%] top-[18%]" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
      className="relative mx-auto hidden aspect-square w-full max-w-lg lg:block"
    >
      <div className="absolute inset-0 animate-float">
        <div className="absolute inset-6 rounded-full border border-subtle" />
        <div className="absolute inset-14 rounded-full border border-subtle" />
        <div className="absolute inset-24 rounded-full border border-subtle" />
        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-500/25 via-transparent to-accent-500/30 blur-2xl" />
      </div>

      <div className="absolute inset-0 grid place-items-center">
        <div className="glass relative grid h-40 w-40 place-items-center rounded-full shadow-glow">
          <span className="text-primary font-display text-5xl font-bold">
            {profile.initials}
          </span>
          <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-slate-200 dark:ring-white/10" />
        </div>
      </div>

      {techChips.map((chip, i) => (
        <FloatingChip
          key={chip.label}
          className={chip.className}
          delay={0.35 + i * 0.07}
          label={chip.label}
          dot={chip.dot}
        />
      ))}
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
      <div className="glass text-secondary flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium shadow-lg">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        {label}
      </div>
    </motion.div>
  );
}
