"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineDownload, HiMenuAlt3, HiX } from "react-icons/hi";
import { profile } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-scrolled fixed inset-x-0 top-0 z-50">
      <nav className="container-px flex min-h-[76px] items-center gap-6">
        <a
          href="#top"
          className="group mr-auto flex items-center gap-2.5 text-ink"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-accent-solid font-display text-[15px] text-onaccent transition-transform group-hover:scale-105">
            {profile.initials}
          </span>
          <span className="hidden font-display text-[19px] sm:inline-block">
            {profile.firstName}
            <span className="text-accent">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="block whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-surface hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href={profile.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary whitespace-nowrap !px-5 !py-2.5 !text-sm"
          >
            <HiOutlineDownload className="h-4 w-4" />
            Resume
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((p) => !p)}
            className="grid h-[42px] w-[42px] place-items-center rounded-xl border border-divider bg-surface text-ink"
          >
            {open ? (
              <HiX className="h-5 w-5" />
            ) : (
              <HiMenuAlt3 className="h-5 w-5" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-divider bg-page md:hidden"
          >
            <ul className="container-px flex flex-col pb-5 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    onClick={() => setOpen(false)}
                    href={link.href}
                    className="block border-b border-divider px-1.5 py-3 text-[15px] font-semibold text-ink transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="mt-3">
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  <HiOutlineDownload className="h-4 w-4" />
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
