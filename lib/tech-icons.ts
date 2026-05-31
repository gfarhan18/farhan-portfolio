import type { IconType } from "react-icons";
import { HiOutlineCodeBracket } from "react-icons/hi2";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiLaravel,
  SiRubyonrails,
  SiDotnet,
  SiAmazon,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiPostgresql,
  SiMysql,
  SiPhp,
  SiVuetify,
} from "react-icons/si";

export type TechMeta = {
  Icon: IconType;
  color: string;
};

const TECH_MAP: Record<string, TechMeta> = {
  "React.js": { Icon: SiReact, color: "#61DAFB" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Next.js": { Icon: SiNextdotjs, color: "#FFFFFF" },
  "Vue.js": { Icon: SiVuedotjs, color: "#42B883" },
  Vue: { Icon: SiVuedotjs, color: "#42B883" },
  Vuetify: { Icon: SiVuetify, color: "#1867C0" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#38BDF8" },
  Tailwind: { Icon: SiTailwindcss, color: "#38BDF8" },
  "Material UI": { Icon: SiMui, color: "#007FFF" },
  MUI: { Icon: SiMui, color: "#007FFF" },
  Bootstrap: { Icon: SiBootstrap, color: "#7952B3" },
  "Node.js": { Icon: SiNodedotjs, color: "#3C873A" },
  "Nest.js": { Icon: SiNestjs, color: "#E0234E" },
  "Express.js": { Icon: SiExpress, color: "#FFFFFF" },
  Express: { Icon: SiExpress, color: "#FFFFFF" },
  Laravel: { Icon: SiLaravel, color: "#FF2D20" },
  "Ruby on Rails": { Icon: SiRubyonrails, color: "#CC0000" },
  "ASP.NET": { Icon: SiDotnet, color: "#512BD4" },
  PHP: { Icon: SiPhp, color: "#777BB4" },
  "AWS Lambda": { Icon: SiAmazon, color: "#FF9900" },
  AWS: { Icon: SiAmazon, color: "#FF9900" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  Vercel: { Icon: SiVercel, color: "#FFFFFF" },
  Netlify: { Icon: SiNetlify, color: "#00C7B7" },
  Heroku: { Icon: SiHeroku, color: "#430098" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  MySQL: { Icon: SiMysql, color: "#4479A1" },
};

const FALLBACK: TechMeta = {
  Icon: HiOutlineCodeBracket,
  color: "#94A3B8",
};

export function getTechMeta(name: string): TechMeta {
  return TECH_MAP[name] ?? FALLBACK;
}

export const ACCENT_PRESETS = [
  { label: "Brand → Accent", value: "from-brand-500 to-accent-500" },
  { label: "Emerald → Brand", value: "from-emerald-400 to-brand-500" },
  { label: "Amber → Pink", value: "from-amber-400 to-pink-500" },
  { label: "Cyan → Blue", value: "from-cyan-400 to-blue-500" },
  { label: "Violet → Purple", value: "from-violet-400 to-purple-500" },
  { label: "Rose → Orange", value: "from-rose-400 to-orange-500" },
] as const;
