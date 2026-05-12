"use client";

import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineCloud,
  HiOutlineLightningBolt,
  HiOutlineGlobeAlt,
} from "react-icons/hi";
import SectionHeader from "./SectionHeader";
import { profile, services } from "@/lib/data";

const iconMap = {
  code: HiOutlineCode,
  api: HiOutlineGlobeAlt,
  cloud: HiOutlineCloud,
  perf: HiOutlineLightningBolt,
} as const;

export default function About() {
  return (
    <section id="about" className="section">
      <SectionHeader
        eyebrow="About me"
        title="A senior full-stack partner for ambitious teams"
        description="I help startups and scale-ups turn ideas into production-grade web platforms — with code that's clean, infra that's predictable, and UX that converts."
      />

      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="glass p-8 lg:p-10"
        >
          <p className="text-base leading-relaxed text-slate-300 lg:text-lg">
            I&apos;m{" "}
            <span className="font-semibold text-white">{profile.name}</span>, a
            Full Stack Developer based in {profile.location} with{" "}
            <span className="font-semibold text-white">
              5+ years of hands-on experience
            </span>{" "}
            shipping production software for international clients.
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            I&apos;ve partnered with teams across the US, EU and APAC — including
            <span className="text-white"> Accudox</span>,
            <span className="text-white"> Xcore</span>,
            <span className="text-white"> Matrix Hub</span> and
            <span className="text-white"> Fluencr</span> — delivering full
            product lifecycles: from requirement gathering and architecture, to
            development, deployment and ongoing maintenance.
          </p>
          <p className="mt-5 text-base leading-relaxed text-slate-400">
            My sweet spot is the{" "}
            <span className="text-brand-300">
              React / Next.js + Nest.js + AWS
            </span>{" "}
            stack — but I&apos;m equally comfortable in Vue.js, Node.js, Laravel
            or PHP. I write code that&apos;s easy to read, easy to deploy and
            easy to evolve.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <Pill label="English" value="Professional" />
            <Pill label="Timezone" value="GMT+5 · flexible" />
            <Pill label="Engagement" value="Hourly / Project / Retainer" />
          </div>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass glass-hover p-6"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-300 ring-1 ring-inset ring-white/10">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {s.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Pill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
