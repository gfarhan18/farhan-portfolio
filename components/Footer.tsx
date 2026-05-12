import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-ink-950/60">
      <div className="container-px flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <div className="flex items-center gap-3 text-sm text-slate-400">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-500 to-accent-500 text-xs font-bold text-white">
            {profile.initials}
          </span>
          <span>
            © {year}{" "}
            <span className="font-medium text-slate-200">{profile.name}</span> ·
            Crafted with Next.js & Tailwind.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:text-white"
          >
            <FaGithub className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:text-white"
          >
            <FaLinkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-lg border border-white/10 bg-white/[0.03] text-slate-300 transition-colors hover:text-white"
          >
            <HiOutlineMail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
