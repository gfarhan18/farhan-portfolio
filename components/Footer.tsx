import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-divider">
      <div className="container-px flex flex-wrap items-center justify-between gap-4 py-7">
        <div className="flex items-center gap-2.5 text-[13px] text-ink/70">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-accent-solid font-display text-[11px] text-onaccent">
            {profile.initials}
          </span>
          <span>
            © {year} <strong className="text-ink">{profile.name}</strong> ·
            Crafted with Next.js &amp; Tailwind.
          </span>
        </div>

        <div className="flex items-center gap-2">
          <a
            href={profile.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-tile !h-[34px] !w-[34px] rounded-[10px]"
          >
            <FaGithub className="h-[15px] w-[15px]" />
          </a>
          <a
            href={profile.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-tile !h-[34px] !w-[34px] rounded-[10px]"
          >
            <FaLinkedin className="h-[15px] w-[15px]" />
          </a>
          <a
            href={profile.socials.email}
            aria-label="Email"
            className="social-tile !h-[34px] !w-[34px] rounded-[10px]"
          >
            <HiOutlineMail className="h-[15px] w-[15px]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
