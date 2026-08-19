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
    <section id="contact" className="section pb-28">
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
        className="relative overflow-hidden rounded-[32px] bg-surface p-7 sm:p-10 lg:p-14"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-24 -left-24 h-60 w-60 rounded-full bg-olive-soft opacity-50"
        />

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <h3 className="font-display text-[clamp(24px,3vw,32px)] text-ink">
              Let&apos;s build something{" "}
              <span className="text-accent">remarkable</span> together.
            </h3>
            <p className="mt-3.5 max-w-[48ch] text-[15px] leading-[1.6] text-ink/75">
              Whether you need a complete product built from scratch, a senior
              engineer to join your team, or a trusted partner to scale your
              platform — I&apos;d love to hear about it.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={profile.socials.email} className="btn-primary">
                <HiOutlineMail className="h-4 w-4" />
                Email Me
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                <HiOutlineDownload className="h-4 w-4" />
                Download Resume
              </a>
            </div>

            <div className="mt-7 flex items-center gap-3">
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

          <div className="grid gap-2.5">
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
      className="social-tile"
    >
      <Icon className="h-[18px] w-[18px]" />
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
      <span className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
        <Icon className="h-4 w-4" />
      </span>
      <span>
        <span className="block text-[10px] uppercase tracking-[0.06em] text-ink/60">
          {title}
        </span>
        <span className="block text-sm font-semibold text-ink">{value}</span>
      </span>
    </>
  );

  // Cards sit on the section surface, so they use the page ground to separate.
  const className =
    "flex items-center gap-3.5 rounded-md bg-page px-4 py-3.5 text-ink transition-colors hover:bg-surface2";

  return href ? (
    <a href={href} className={className}>
      {inner}
    </a>
  ) : (
    <div className={className}>{inner}</div>
  );
}
