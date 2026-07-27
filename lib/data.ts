import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
  SiChakraui,
  SiStyledcomponents,
  SiFramer,
  SiRedux,
  SiReactquery,
  SiJquery,
  SiVite,
  SiWebpack,
  SiBabel,
  SiEslint,
  SiNodedotjs,
  SiNestjs,
  SiExpress,
  SiLaravel,
  SiCodeigniter,
  SiRubyonrails,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiStrapi,
  SiWordpress,
  SiDotnet,
  SiMongoose,
  SiPrisma,
  SiGraphql,
  SiServerless,
  SiAwslambda,
  SiJson,
  SiJsonwebtokens,
  SiPostgresql,
  SiMysql,
  SiMicrosoftsqlserver,
  SiMongodb,
  SiRedis,
  SiElasticsearch,
  SiFirebase,
  SiAmazondynamodb,
  SiSupabase,
  SiAmazon,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiDigitalocean,
  SiCloudflare,
  SiHostinger,
  SiDocker,
  SiTerraform,
  SiNuget,
  SiComposer,
  SiNpm,
  SiGit,
  SiGithub,
  SiGitlab,
  SiBitbucket,
  SiJira,
  SiTrello,
  SiFigma,
  SiWebflow,
  SiPlaywright,
  SiSentry,
  SiPwa,
  SiStripe,
  SiBitcoin,
  SiOpenai,
  SiHtml5,
  SiCss3,
  SiPython,
  SiPhp,
  SiGnubash,
  SiPowershell,
} from "react-icons/si";
import {
  FaDatabase,
  FaTerminal,
  FaCode,
  FaPuzzlePiece,
  FaServer,
  FaFileCode,
  FaPlug,
  FaLink,
  FaCubes,
  FaNetworkWired,
  FaSitemap,
  FaKey,
  FaLock,
  FaChartLine,
  FaInfinity,
  FaArrowsSpin,
  FaTableColumns,
  FaVialCircleCheck,
  FaMobileScreen,
  FaRobot,
  FaLayerGroup,
  FaWindowMaximize,
  FaCartShopping,
  FaCreditCard,
  FaShieldHalved,
} from "react-icons/fa6";

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
    title: "Languages",
    description: "The core languages I reach for across the stack.",
    skills: [
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "PHP", Icon: SiPhp, color: "#777BB4" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss3, color: "#1572B6" },
      { name: "SQL", Icon: FaDatabase, color: "#4479A1" },
      { name: "Bash", Icon: SiGnubash, color: "#4EAA25" },
      { name: "Shell", Icon: FaTerminal, color: "#89E051" },
      { name: "PowerShell", Icon: SiPowershell, color: "#5391FE" },
    ],
  },
  {
    title: "Frontend",
    description:
      "Crafting polished, accessible, conversion-focused interfaces.",
    skills: [
      { name: "React.js", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "Vue.js", Icon: SiVuedotjs, color: "#42B883" },
      { name: "Nuxt.js", Icon: SiNuxtdotjs, color: "#00DC82" },
      { name: "Redux.js", Icon: SiRedux, color: "#764ABC" },
      { name: "Vuex", Icon: FaLayerGroup, color: "#42B883" },
      { name: "React Query", Icon: SiReactquery, color: "#FF4154" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Material UI", Icon: SiMui, color: "#007FFF" },
      { name: "Chakra UI", Icon: SiChakraui, color: "#319795" },
      { name: "Bootstrap", Icon: SiBootstrap, color: "#7952B3" },
      { name: "Styled Components", Icon: SiStyledcomponents, color: "#DB7093" },
      { name: "Framer Motion", Icon: SiFramer, color: "#0055FF" },
      { name: "jQuery", Icon: SiJquery, color: "#0769AD" },
      { name: "JSX", Icon: FaCode, color: "#61DAFB" },
      { name: "Web Components", Icon: FaPuzzlePiece, color: "#29ABE2" },
    ],
  },
  {
    title: "Build & Tooling",
    description: "Fast, modern build pipelines and code-quality tooling.",
    skills: [
      { name: "Vite.js", Icon: SiVite, color: "#646CFF" },
      { name: "Webpack", Icon: SiWebpack, color: "#8DD6F9" },
      { name: "Babel", Icon: SiBabel, color: "#F9DC3E" },
      { name: "ESLint", Icon: SiEslint, color: "#4B32C3" },
      { name: "npm", Icon: SiNpm, color: "#CB3837" },
      { name: "NuGet", Icon: SiNuget, color: "#004880" },
      { name: "Composer", Icon: SiComposer, color: "#885630" },
    ],
  },
  {
    title: "Backend & Frameworks",
    description:
      "Designing scalable APIs and services with strong fundamentals.",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs, color: "#3C873A" },
      { name: "Express.js", Icon: SiExpress, color: "#FFFFFF" },
      { name: "NestJS", Icon: SiNestjs, color: "#E0234E" },
      { name: "Laravel", Icon: SiLaravel, color: "#FF2D20" },
      { name: "CodeIgniter", Icon: SiCodeigniter, color: "#EF4223" },
      { name: "Ruby on Rails", Icon: SiRubyonrails, color: "#CC0000" },
      { name: "Django", Icon: SiDjango, color: "#0C9D58" },
      { name: "Flask", Icon: SiFlask, color: "#9CA3AF" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Strapi.js", Icon: SiStrapi, color: "#4945FF" },
      { name: "Headless CMS", Icon: FaServer, color: "#FF9900" },
      { name: "WordPress", Icon: SiWordpress, color: "#21759B" },
      { name: "ASP.NET", Icon: SiDotnet, color: "#512BD4" },
      { name: "Mongoose", Icon: SiMongoose, color: "#B33A3A" },
      { name: "Prisma", Icon: SiPrisma, color: "#5A67D8" },
      { name: "TypeORM", Icon: FaDatabase, color: "#FE0803" },
    ],
  },
  {
    title: "APIs & Architecture",
    description: "Connecting systems with clean, reliable contracts.",
    skills: [
      { name: "REST", Icon: FaServer, color: "#009688" },
      { name: "GraphQL", Icon: SiGraphql, color: "#E10098" },
      { name: "SOAP", Icon: FaFileCode, color: "#8A2BE2" },
      { name: "Web Sockets", Icon: FaPlug, color: "#4353FF" },
      { name: "Webhook", Icon: FaLink, color: "#635BFF" },
      { name: "Microservices", Icon: FaCubes, color: "#0EA5E9" },
      { name: "Web Services", Icon: FaNetworkWired, color: "#6366F1" },
      { name: "Serverless", Icon: SiServerless, color: "#FD5750" },
      { name: "Lambda", Icon: SiAwslambda, color: "#FF9900" },
      { name: "MVC", Icon: FaSitemap, color: "#14B8A6" },
      { name: "JSON", Icon: SiJson, color: "#9CA3AF" },
      { name: "JWT", Icon: SiJsonwebtokens, color: "#FB015B" },
      { name: "OAuth", Icon: FaKey, color: "#2F8B4C" },
      { name: "NextAuth", Icon: FaLock, color: "#9333EA" },
    ],
  },
  {
    title: "Databases & Data",
    description: "Reliable data layers — relational, document and in-memory.",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#336791" },
      { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
      { name: "MS SQL Server", Icon: SiMicrosoftsqlserver, color: "#CC2927" },
      { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
      { name: "NoSQL", Icon: FaDatabase, color: "#4DB33D" },
      { name: "Redis", Icon: SiRedis, color: "#DC382D" },
      { name: "Elasticsearch", Icon: SiElasticsearch, color: "#00BFB3" },
      { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
      { name: "Firestore", Icon: SiFirebase, color: "#FFA000" },
      { name: "DynamoDB", Icon: SiAmazondynamodb, color: "#4053D6" },
      { name: "Supabase", Icon: SiSupabase, color: "#3FCF8E" },
    ],
  },
  {
    title: "Cloud, DevOps & Infra",
    description:
      "Shipping with confidence — automated, containerized, observable.",
    skills: [
      { name: "AWS", Icon: SiAmazon, color: "#FF9900" },
      { name: "CloudWatch", Icon: FaChartLine, color: "#FF4F8B" },
      { name: "Vercel", Icon: SiVercel, color: "#FFFFFF" },
      { name: "Netlify", Icon: SiNetlify, color: "#00C7B7" },
      { name: "Heroku", Icon: SiHeroku, color: "#7056BF" },
      { name: "Digital Ocean", Icon: SiDigitalocean, color: "#0080FF" },
      { name: "Cloudflare", Icon: SiCloudflare, color: "#F38020" },
      { name: "Hostinger", Icon: SiHostinger, color: "#673DE6" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Terraform", Icon: SiTerraform, color: "#7B42BC" },
      { name: "CI/CD", Icon: FaInfinity, color: "#2088FF" },
    ],
  },
  {
    title: "Tools & Workflow",
    description: "The tools and practices that keep teams shipping fast.",
    skills: [
      { name: "Git", Icon: SiGit, color: "#F1502F" },
      { name: "GitHub", Icon: SiGithub, color: "#FFFFFF" },
      { name: "GitLab", Icon: SiGitlab, color: "#FC6D26" },
      { name: "Bitbucket", Icon: SiBitbucket, color: "#2684FF" },
      { name: "JIRA", Icon: SiJira, color: "#0052CC" },
      { name: "Trello", Icon: SiTrello, color: "#0079BF" },
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Webflow", Icon: SiWebflow, color: "#146EF5" },
      { name: "Playwright", Icon: SiPlaywright, color: "#2EAD33" },
      { name: "Sentry", Icon: SiSentry, color: "#B14FFF" },
      { name: "Agile", Icon: FaArrowsSpin, color: "#1ABC9C" },
      { name: "Kanban", Icon: FaTableColumns, color: "#0079BF" },
      { name: "Test Driven Development", Icon: FaVialCircleCheck, color: "#25A162" },
      { name: "Responsive Design", Icon: FaMobileScreen, color: "#38BDF8" },
      { name: "Mobile-first Design", Icon: FaMobileScreen, color: "#22C55E" },
    ],
  },
  {
    title: "AI & Specialties",
    description: "Modern AI workflows and product-focused specialties.",
    skills: [
      { name: "OpenAI", Icon: SiOpenai, color: "#74AA9C" },
      { name: "ChatGPT", Icon: SiOpenai, color: "#19C37D" },
      { name: "Generative AI", Icon: FaRobot, color: "#10A37F" },
      { name: "MERN Stack", Icon: FaLayerGroup, color: "#61DAFB" },
      { name: "MEAN Stack", Icon: FaLayerGroup, color: "#42B883" },
      { name: "LAMP Stack", Icon: FaLayerGroup, color: "#777BB4" },
      { name: "Single Page Application", Icon: FaWindowMaximize, color: "#61DAFB" },
      { name: "Server Side Rendering", Icon: FaServer, color: "#38BDF8" },
      { name: "Server Side Generation", Icon: FaServer, color: "#22C55E" },
      { name: "Progressive Web Apps", Icon: SiPwa, color: "#7C3AED" },
      { name: "E-commerce", Icon: FaCartShopping, color: "#FF9900" },
      { name: "Payment Gateways", Icon: FaCreditCard, color: "#635BFF" },
      { name: "Stripe", Icon: SiStripe, color: "#635BFF" },
      { name: "Crypto", Icon: SiBitcoin, color: "#F7931A" },
      { name: "Web Security", Icon: FaShieldHalved, color: "#2F8B4C" },
      { name: "MSVC", Icon: FaCode, color: "#5C2D91" },
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

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
};

// NOTE: Replace these sample testimonials with real client quotes.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Farhan took our document-processing idea and turned it into a production platform our clinical teams now rely on daily. He owns problems end to end and ships with a level of polish that's rare in contractors.",
    name: "Sarah Whitfield",
    role: "Product Lead",
    company: "Acudocx",
    initials: "SW",
  },
  {
    quote:
      "We brought Farhan on to rebuild our IoT operations portal and he delivered a fast, reliable Vue + Nest.js app ahead of schedule. Clear communication, great architecture decisions, zero hand-holding.",
    name: "Daniel Roberts",
    role: "Engineering Manager",
    company: "MatrixHub",
    initials: "DR",
  },
  {
    quote:
      "One of the most dependable full-stack engineers we've worked with on Upwork. He scoped the work honestly, integrated our payment and CRM stack flawlessly, and stayed responsive long after launch.",
    name: "Emily Carter",
    role: "Founder",
    company: "Xcore",
    initials: "EC",
  },
  {
    quote:
      "Farhan's serverless work on AWS Lambda cut our infrastructure costs noticeably while improving reliability. He pairs strong engineering with a real product mindset.",
    name: "Michael Chen",
    role: "CTO",
    company: "Fluencr",
    initials: "MC",
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
