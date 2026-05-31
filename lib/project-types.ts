import projectsData from "@/data/projects.json";

export type ProjectCategory = "frontend" | "fullstack" | "backend";

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  highlights: string[];
  accent: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
};

export function sortProjects(projects: Project[]): Project[] {
  return [...projects].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
  });
}

export const PROJECT_CATEGORIES: {
  id: ProjectCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "frontend", label: "Frontend" },
  { id: "fullstack", label: "Full Stack" },
  { id: "backend", label: "Backend" },
];

export function getProjects(): Project[] {
  return projectsData as Project[];
}

export function slugify(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function categoryLabel(category: ProjectCategory): string {
  const map: Record<ProjectCategory, string> = {
    frontend: "Frontend",
    fullstack: "Full Stack",
    backend: "Backend",
  };
  return map[category];
}
