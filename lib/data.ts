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
  title: "Full Stack & AI-Enabled Developer",
  tagline: "5+ years shipping web products — amplified with modern AI workflows",
  description:
    "I'm a Full Stack Engineer who builds production-grade apps with React, Next.js, Vue and Nest.js — and I use AI daily to ship faster, prototype smarter, and deliver features like intelligent document processing. I've helped teams across the US, EU and APAC launch platforms clients rely on every day.",
  location: "Lahore, Pakistan",
  availability: "Available for freelance & remote roles worldwide",
  email: "gfarhan18@gmail.com",
  resumeUrl: "/Farhan-resume-latest.pdf",
  socials: {
    github: "https://github.com/gfarhan18",
    linkedin: "https://www.linkedin.com/in/muhammad-farhan-16033019b/",
    upwork: "https://www.upwork.com/",
    email: "mailto:gfarhan18@gmail.com",
  },
  stats: [
    { label: "Years Experience", value: "5+" },
    { label: "Projects Delivered", value: "40+" },
    { label: "International Clients", value: "15+" },
    { label: "Tech Stacks Mastered", value: "10+" },
    { label: "AI-Enhanced Delivery", value: "Daily" },
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
      "Delivered end-to-end web solutions for international clients including Acudocx, Xcore and Matrix Hub.",
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
    title: "AI Features & Workflows",
    description:
      "Intelligent document extraction, AI-assisted product features, and modern dev workflows that boost velocity without sacrificing quality.",
    icon: "perf",
  },
];
