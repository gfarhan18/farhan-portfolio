"use client";

import { motion } from "framer-motion";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineClock,
  HiOutlineDownload,
  HiOutlineExternalLink,
} from "react-icons/hi";
import { FaGithub, FaLinkedin, FaGlobe } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import CopyButton from "./CopyButton";
import { profile } from "@/lib/data";

const linkIcons = {
  linkedin: FaLinkedin,
  github: FaGithub,
  portfolio: FaGlobe,
  email: HiOutlineMail,
} as const;

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

        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.15fr_1fr]">
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

            <div className="mt-8 grid gap-2.5 sm:grid-cols-2">
              <MetaPill
                Icon={HiOutlineLocationMarker}
                title="Based in"
                value={`${profile.location} · global`}
              />
              <MetaPill
                Icon={HiOutlineClock}
                title="Availability"
                value={profile.availability}
              />
            </div>
          </div>

          <div>
            <div className="mb-3 flex items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-accent">
                  Quick links
                </p>
                <p className="mt-1 text-[13px] text-ink/60">
                  Open or copy — handy for applications and intros.
                </p>
              </div>
            </div>

            <ul className="grid gap-2">
              {profile.quickLinks.map((link) => {
                const Icon =
                  linkIcons[link.id as keyof typeof linkIcons] ?? FaGlobe;
                const isExternal = link.href.startsWith("http");

                return (
                  <li
                    key={link.id}
                    className="flex items-center gap-2 rounded-md bg-page px-3 py-2.5 transition-colors hover:bg-surface2"
                  >
                    <a
                      href={link.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="flex min-w-0 flex-1 items-center gap-3 text-ink"
                    >
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-[10px] uppercase tracking-[0.06em] text-ink/55">
                          {link.label}
                        </span>
                        <span className="block truncate text-sm font-semibold">
                          {link.display}
                        </span>
                      </span>
                      {isExternal && (
                        <HiOutlineExternalLink
                          className="ml-auto hidden h-3.5 w-3.5 shrink-0 text-ink/35 sm:block"
                          aria-hidden
                        />
                      )}
                    </a>
                    <CopyButton value={link.copyValue} label={link.label} />
                  </li>
                );
              })}
            </ul>
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

function MetaPill({
  Icon,
  title,
  value,
}: {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-md bg-page px-3.5 py-3">
      <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-accent-soft text-accent">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-[0.06em] text-ink/55">
          {title}
        </span>
        <span className="block truncate text-[13px] font-semibold text-ink">
          {value}
        </span>
      </span>
    </div>
  );
}
