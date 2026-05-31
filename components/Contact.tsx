"use client";

import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineDownload,
} from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionHeader
        eyebrow="Let's talk"
        title="Have a project in mind?"
        description="I'm currently open to freelance projects, contract roles and long-term partnerships with founders and product teams worldwide."
      />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-subtle bg-gradient-to-br from-white to-slate-50 p-8 backdrop-blur-xl dark:from-white/[0.05] dark:to-white/[0.02] lg:p-14"
      >
        <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand-500/15 blur-3xl dark:bg-brand-500/20" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-accent-500/15 blur-3xl dark:bg-accent-500/20" />

        <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="text-primary font-display text-3xl font-bold sm:text-4xl">
              Let&apos;s build something{" "}
              <span className="text-gradient">remarkable</span> together.
            </h3>
            <p className="text-secondary mt-4 max-w-xl text-base leading-relaxed">
              Whether you need a complete product built from scratch, a senior
              engineer to join your team, or a trusted partner to scale your
              platform — I&apos;d love to hear about it.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.socials.email} className="btn-primary">
                <HiOutlineMail className="h-5 w-5" />
                Email Me
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <HiOutlineDownload className="h-5 w-5" />
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex items-center gap-2">
              <SocialLink
                href={profile.socials.github}
                label="GitHub"
                Icon={FaGithub}
              />
              <SocialLink
                href={profile.socials.linkedin}
                label="LinkedIn"
                Icon={FaLinkedin}
              />
              <SocialLink
                href={profile.socials.email}
                label="Email"
                Icon={HiOutlineMail}
              />
            </div>
          </div>

          <div className="grid gap-3">
            <InfoCard
              Icon={HiOutlineMail}
              title="Email"
              value={profile.email}
              href={profile.socials.email}
            />
            <InfoCard
              Icon={HiOutlineLocationMarker}
              title="Based in"
              value={`${profile.location} · working globally`}
            />
            <InfoCard
              Icon={HiOutlineClock}
              title="Availability"
              value={profile.availability}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-secondary grid h-11 w-11 place-items-center rounded-xl border border-subtle surface-faint transition-all hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-100 hover:text-slate-900 dark:hover:border-white/25 dark:hover:bg-white/[0.06] dark:hover:text-white"
    >
      <Icon className="h-5 w-5" />
    </a>
  );
}

function InfoCard({
  Icon,
  title,
  value,
  href,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <>
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-500/20 to-accent-500/20 text-brand-600 ring-1 ring-inset ring-slate-200 dark:text-brand-300 dark:ring-white/10">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <div className="text-muted text-[10px] font-medium uppercase tracking-wider">
          {title}
        </div>
        <div className="text-primary mt-0.5 text-sm font-medium">{value}</div>
      </div>
    </>
  );

  const className =
    "flex items-center gap-4 rounded-2xl border border-subtle surface-faint p-4 transition-all hover:border-slate-300 hover:bg-slate-100 dark:hover:border-white/20 dark:hover:bg-white/[0.06]";

  return href ? (
    <a href={href} className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}
