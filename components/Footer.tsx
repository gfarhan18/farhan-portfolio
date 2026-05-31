import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-subtle bg-white/60 dark:bg-ink-950/60">
      <div className="container-px flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="text-muted flex items-center gap-3 text-sm">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-xs font-bold text-white">
            {profile.initials}
          </span>
          <span>
            © {year}{" "}
            <span className="text-secondary font-medium">{profile.name}</span> ·
            Crafted with Next.js & Tailwind.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-secondary grid h-9 w-9 place-items-center rounded-lg border border-subtle surface-faint transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-secondary grid h-9 w-9 place-items-center rounded-lg border border-subtle surface-faint transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="text-secondary grid h-9 w-9 place-items-center rounded-lg border border-subtle surface-faint transition-colors hover:text-slate-900 dark:hover:text-white"
          >
            <HiOutlineMail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
