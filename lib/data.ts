import type { IconType } from "react-icons";
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
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiJira,
  SiTrello,
  SiPhp,
} from "react-icons/si";

export const profile = {
  name: "M. Farhan",
  firstName: "Farhan",
  initials: "MF",
  title: "Full Stack Developer",
  tagline: "5+ years building scalable web products for global clients",
  description:
    "I'm a Full Stack Software Engineer who helps founders and growing teams ship production-grade web applications — from elegant React & Next.js interfaces to scalable Nest.js APIs deployed on AWS. I've delivered work for international clients across the US, EU and APAC, and I love turning complex problems into clean, performant products.",
  location: "Lahore, Pakistan",
  availability: "Available for freelance & remote roles worldwide",
  email: "gfarhan18@gmail.com",
  resumeUrl: "/Farhan-resume-latest.pdf",
  socials: {
    github: "https://github.com/gfarhan18",
    linkedin: "https://www.linkedin.com/in/farhan",
    upwork: "https://www.upwork.com/",
    email: "mailto:gfarhan18@gmail.com",
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "40+" },
    { label: "International Clients", value: "15+" },
    { label: "Tech Stacks Mastered", value: "10+" },
  ],
};

export type Skill = {
  name: string;
  Icon: IconType;
  color: string;
};

export type SkillCategory = {
  title: string;
  description: string;
  skills: Skill[];
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    description:
      "Crafting polished, accessible, conversion-focused interfaces.",
    skills: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Vue.js", Icon: SiVuedotjs, color: "#42B883" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Material UI", Icon: SiMui, color: "#007FFF" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
    ],
  },
  {
    title: "Backend",
    description:
      "Designing scalable APIs and services with strong fundamentals.",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
      { name: "Nest.js", Icon: SiNestjs, color: "#E0234E" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "Ruby on Rails", Icon: SiRubyonrails, color: "#CC0000" },
      { name: "ASP.NET", Icon: SiDotnet, color: "#512BD4" },
      { name: "PHP", Icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    title: "Cloud & DevOps",
    description:
      "Shipping with confidence — automated, containerized, observable.",
    skills: [
      { name: "AWS Lambda / S3 / EC2", Icon: SiAmazon, color: "#FF9900" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
      { name: "Heroku", Icon: SiHeroku, color: "#430098" },
    ],
  },
  {
    title: "Databases & Tools",
    description:
      "Reliable data layers and the tools that keep teams moving fast.",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "Git", Icon: SiGit, color: "#F1502F" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
      { name: "GitLab", Icon: SiGitlab, color: "#FC6D26" },
      { name: "Bitbucket", Icon: SiBitbucket, color: "#2684FF" },
      { name: "Jira", Icon: SiJira, color: "#0052CC" },
      { name: "Trello", Icon: SiTrello, color: "#0079BF" },
    ],
  },
];

export type Experience = {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  tech: string[];
};

export const experiences: Experience[] = [
  {
    company: "Fluencr",
    role: "Software Engineer",
    location: "Remote",
    period: "Dec 2023 — Feb 2026",
    highlights: [
      "Integrated third-party APIs that cut engineering costs and noticeably boosted product efficiency.",
      "Built responsive UIs with React.js & Material UI focused on usability and aesthetics.",
      "Engineered scalable RESTful APIs in Nest.js with an emphasis on performance, security and maintainability.",
      "Deployed serverless functions with AWS Lambda to reduce infrastructure overhead.",
      "Containerized applications with Docker to keep dev, staging and prod environments consistent.",
      "Shipped a Freshdesk-powered ticketing system, streamlining customer support workflows.",
    ],
    tech: ["React.js", "Nest.js", "PostgreSQL", "AWS Lambda", "Docker", "MUI"],
  },
  {
    company: "Freelance — Upwork & Direct Clients",
    role: "Full Stack Developer",
    location: "Remote · Global",
    period: "Dec 2023 — Feb 2026",
    highlights: [
      "Delivered end-to-end web solutions for international clients including Accudox, Xcore and Matrix Hub.",
      "Built full-stack apps across React.js, Vue.js, Nest.js and Node.js — often on overlapping timelines.",
      "Architected serverless backends on AWS Lambda and containerized deployments with Docker.",
      "Integrated payment gateways, CRMs and third-party APIs to automate operations and reduce costs.",
    ],
    tech: ["React.js", "Vue.js", "Node.js", "Nest.js", "AWS", "Docker"],
  },
  {
    company: "Foomotion HQ",
    role: "Software Engineer",
    location: "Lahore, Pakistan",
    period: "Oct 2020 — Nov 2023",
    highlights: [
      "Designed responsive UIs with Vue.js, Vuetify and Tailwind CSS — improved user satisfaction by 15%.",
      "Containerized dev environments with Docker, standardizing setup across the engineering team.",
      "Contributed to agile workflows in Jira and Basecamp, improving team productivity by 15%.",
      "Led cross-platform website development with WordPress and PHP customizations.",
      "Built and maintained RESTful APIs backed by MySQL and PostgreSQL with optimized queries.",
    ],
    tech: ["Vue.js", "Vuetify", "Tailwind", "PHP", "MySQL", "PostgreSQL"],
  },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  accent: string;
};

export const projects: Project[] = [
  {
    name: "Fluencr",
    tagline: "Creator-economy platform · Production at scale",
    description:
      "A high-concurrency platform serving the creator economy, with a polished React frontend and a Nest.js backend deployed across AWS Lambda and Docker.",
    tech: [
      "React.js",
      "Nest.js",
      "PostgreSQL",
      "AWS Lambda",
      "Docker",
      "Freshdesk API",
    ],
    highlights: [
      "Designed RESTful APIs in Nest.js that gracefully handle high-concurrency traffic.",
      "Integrated AWS Lambda for serverless processing — reduced infra cost & improved scalability.",
      "Containerized the full stack with Docker for consistent multi-env deployments.",
      "Shipped a Freshdesk-powered ticketing system to automate support workflows.",
    ],
    accent: "from-brand-500 to-accent-500",
  },
  {
    name: "ScheduaPay",
    tagline: "Scheduling & payments SaaS",
    description:
      "A feature-rich scheduling and payments product with a clean Vue.js + Vuetify frontend and a performant Nest.js + PostgreSQL backend.",
    tech: ["Vue.js", "Vuetify", "Nest.js", "PostgreSQL"],
    highlights: [
      "Built a responsive Vue.js + Vuetify frontend optimized for daily power users.",
      "Developed a scalable Nest.js backend with efficient data handling and clean API design.",
      "Optimized query patterns and PostgreSQL schemas for predictable performance under load.",
    ],
    accent: "from-emerald-400 to-brand-500",
  },
  {
    name: "Dualnet",
    tagline: "Real-time analytics & automated reporting",
    description:
      "A real-time data visualization dashboard with automated government-format PDF generation, deployed via Docker on Plesk-managed servers.",
    tech: ["React.js", "Node.js", "Express", "MySQL", "Docker", "Plesk"],
    highlights: [
      "Built a real-time analytics dashboard delivering actionable business insights.",
      "Automated government-format PDF generation — eliminated manual data entry.",
      "Containerized the full stack with Docker for reliable Plesk-based deployments.",
    ],
    accent: "from-amber-400 to-pink-500",
  },
];

export const services = [
  {
    title: "Full-Stack Web Apps",
    description:
      "End-to-end product development with React/Next.js + Nest.js — from idea to production-ready release.",
    icon: "code",
  },
  {
    title: "API Design & Integration",
    description:
      "Scalable REST APIs, third-party integrations (payments, CRMs, support), and clean documentation.",
    icon: "api",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Serverless backends on AWS Lambda, Dockerized deployments, CI/CD and cost-optimized infrastructure.",
    icon: "cloud",
  },
  {
    title: "Performance & Refactors",
    description:
      "Audit existing codebases, fix bottlenecks, modernize architecture and improve developer experience.",
    icon: "perf",
  },
];
