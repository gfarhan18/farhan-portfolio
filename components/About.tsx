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
        description="Full-stack delivery with modern AI in the loop — from intelligent product features to faster, higher-quality shipping."
      />

      <div className="grid items-start gap-9 lg:grid-cols-[1.1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-[32px] bg-surface p-7 sm:p-9"
        >
          <p className="text-base leading-[1.65] text-ink">
            <span className="font-bold">{profile.name}</span>, a Full Stack
            Developer based in {profile.location} with{" "}
            <span className="font-bold">5+ years of hands-on experience</span>{" "}
            shipping production software for international clients.
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-ink/[0.78]">
            I&apos;ve partnered with teams across the US, EU and APAC —
            including Acudocx, Xcore, Matrix Hub and Fluencr — delivering full
            product lifecycles: from requirement gathering and architecture, to
            development, deployment and ongoing maintenance.
          </p>
          <p className="mt-4 text-[15px] leading-[1.65] text-ink/[0.78]">
            My sweet spot is{" "}
            <span className="font-semibold text-accent">
              React / Next.js + Nest.js + AWS
            </span>
            , with strong Vue.js and PHP experience. I use AI tools daily for
            prototyping, refactors, and shipping features like document
            intelligence on Acudocx — so teams move faster without cutting
            corners.
          </p>

          <div className="mt-7 grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-2.5">
            <Pill label="English" value="Professional" />
            <Pill label="Timezone" value="GMT+5 · flexible" />
            <Pill label="Engagement" value="Hourly / Project" />
          </div>
        </motion.div>

        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-3.5">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon as keyof typeof iconMap];
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-hover rounded-lg bg-surface p-[22px]"
              >
                <div className="icon-tile">
                  <Icon className="h-[19px] w-[19px]" />
                </div>
                <h3 className="mt-3.5 font-display text-base text-ink">
                  {s.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-[1.55] text-ink/70">
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
    <div className="rounded-md border border-divider px-3.5 py-3">
      <div className="text-[10px] uppercase tracking-[0.06em] text-ink/60">
        {label}
      </div>
      <div className="mt-[3px] text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}
