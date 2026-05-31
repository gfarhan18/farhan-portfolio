import fs from "fs/promises";
import path from "path";
import type { Project } from "@/lib/project-types";
import { slugify } from "@/lib/project-types";

const PROJECTS_JSON_PATH = path.join(process.cwd(), "data", "projects.json");
const PROJECTS_IMAGE_DIR = path.join(process.cwd(), "public", "projects");

export async function readProjectsFile(): Promise<Project[]> {
  const raw = await fs.readFile(PROJECTS_JSON_PATH, "utf-8");
  return JSON.parse(raw) as Project[];
}

export async function writeProjectsFile(projects: Project[]): Promise<void> {
  await fs.writeFile(
    PROJECTS_JSON_PATH,
    JSON.stringify(projects, null, 2) + "\n",
    "utf-8"
  );
}

export async function saveProjectImage(
  id: string,
  file: File
): Promise<string> {
  await fs.mkdir(PROJECTS_IMAGE_DIR, { recursive: true });

  const ext = path.extname(file.name).toLowerCase() || ".png";
  const allowed = [".jpg", ".jpeg", ".png", ".webp"];
  if (!allowed.includes(ext)) {
    throw new Error("Image must be jpg, png, or webp");
  }

  const filename = `${id}${ext}`;
  const buffer = Buffer.from(await file.arrayBuffer());
  await fs.writeFile(path.join(PROJECTS_IMAGE_DIR, filename), buffer);

  return `/projects/${filename}`;
}

export async function addProject(
  project: Omit<Project, "id"> & { id?: string },
  imageFile?: File | null
): Promise<Project> {
  const projects = await readProjectsFile();
  const id = project.id ?? slugify(project.name);

  if (projects.some((p) => p.id === id)) {
    throw new Error(`A project with id "${id}" already exists`);
  }

  let image = project.image ?? "";
  if (imageFile && imageFile.size > 0) {
    image = await saveProjectImage(id, imageFile);
  }

  const entry: Project = {
    id,
    name: project.name,
    tagline: project.tagline,
    description: project.description,
    category: project.category,
    tech: project.tech,
    highlights: project.highlights.filter(Boolean),
    accent: project.accent,
    image,
    liveUrl: project.liveUrl ?? "",
    githubUrl: project.githubUrl ?? "",
    featured: project.featured ?? false,
  };

  projects.push(entry);
  await writeProjectsFile(projects);
  return entry;
}
