import Link from "next/link";
import Background from "@/components/Background";
import ProjectForm from "@/components/ProjectForm";
import ThemeToggle from "@/components/ThemeToggle";

export const metadata = {
  title: "Add Project",
  robots: { index: false, follow: false },
};

export default function ProjectFormPage() {
  const isDev = process.env.NODE_ENV === "development";

  return (
    <>
      <Background />
      <div className="relative min-h-screen px-4 py-28">
        <div className="container-px">
          <div className="mb-8 flex items-center justify-between gap-4">
            <Link
              href="/"
              className="text-muted inline-flex text-sm transition-colors hover:text-slate-900 dark:hover:text-white"
            >
              ← Back to portfolio
            </Link>
            <ThemeToggle />
          </div>
          <ProjectForm isDev={isDev} />
        </div>
      </div>
    </>
  );
}
