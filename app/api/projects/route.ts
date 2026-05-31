import { NextResponse } from "next/server";
import {
  isAdminAuthenticated,
  isDevEnvironment,
} from "@/lib/admin-auth";
import {
  addProject,
  readProjectsFile,
} from "@/lib/projects-server";
import { getProjects, type ProjectCategory } from "@/lib/project-types";

export async function GET() {
  try {
    const projects =
      process.env.NODE_ENV === "development"
        ? await readProjectsFile()
        : getProjects();
    return NextResponse.json(projects);
  } catch {
    return NextResponse.json(getProjects());
  }
}

export async function POST(request: Request) {
  if (!isDevEnvironment()) {
    return NextResponse.json(
      {
        error:
          "Project form only works in local dev. Edit data/projects.json and commit.",
      },
      { status: 403 }
    );
  }

  if (!(await isAdminAuthenticated())) {
    return NextResponse.json({ error: "Unauthorized." }, { status: 401 });
  }

  try {
    const formData = await request.formData();

    const name = String(formData.get("name") ?? "").trim();
    const tagline = String(formData.get("tagline") ?? "").trim();
    const description = String(formData.get("description") ?? "").trim();
    const category = String(formData.get("category") ?? "") as ProjectCategory;
    const accent = String(formData.get("accent") ?? "from-brand-500 to-accent-500");
    const liveUrl = String(formData.get("liveUrl") ?? "").trim();
    const githubUrl = String(formData.get("githubUrl") ?? "").trim();
    const techRaw = String(formData.get("tech") ?? "");
    const highlightsRaw = formData.getAll("highlights");
    const imageFile = formData.get("image");

    if (!name || !tagline || !description) {
      return NextResponse.json(
        { error: "Name, tagline, and description are required." },
        { status: 400 }
      );
    }

    if (!["frontend", "fullstack", "backend"].includes(category)) {
      return NextResponse.json(
        { error: "Invalid category." },
        { status: 400 }
      );
    }

    const tech = techRaw
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const highlights = highlightsRaw
      .map((h) => String(h).trim())
      .filter(Boolean);

    const project = await addProject(
      {
        name,
        tagline,
        description,
        category,
        tech,
        highlights,
        accent,
        image: "",
        liveUrl,
        githubUrl,
      },
      imageFile instanceof File && imageFile.size > 0 ? imageFile : null
    );

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Failed to save project.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
