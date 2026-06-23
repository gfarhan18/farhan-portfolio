"use client";

import { useState } from "react";
import Link from "next/link";
import { ACCENT_PRESETS } from "@/lib/tech-icons";
import type { ProjectCategory } from "@/lib/project-types";

type Props = {
  isDev: boolean;
};

export default function ProjectForm({ isDev }: Props) {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [name, setName] = useState("");
  const [tagline, setTagline] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<ProjectCategory>("fullstack");
  const [tech, setTech] = useState("");
  const [highlights, setHighlights] = useState(["", "", ""]);
  const [accent, setAccent] = useState<string>(ACCENT_PRESETS[0].value);
  const [liveUrl, setLiveUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [image, setImage] = useState<File | null>(null);

  const [submitLoading, setSubmitLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [submitSuccess, setSubmitSuccess] = useState(false);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "Login failed");
      }

      setAuthenticated(true);
    } catch (err) {
      setLoginError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitLoading(true);
    setSubmitError("");
    setSubmitSuccess(false);

    const formData = new FormData();
    formData.set("name", name);
    formData.set("tagline", tagline);
    formData.set("description", description);
    formData.set("category", category);
    formData.set("tech", tech);
    formData.set("accent", accent);
    formData.set("liveUrl", liveUrl);
    formData.set("githubUrl", githubUrl);
    for (const h of highlights) {
      if (h.trim()) formData.append("highlights", h.trim());
    }
    if (image) formData.set("image", image);

    try {
      const res = await fetch("/api/projects", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error ?? "Failed to save project");
      }

      setSubmitSuccess(true);
      setName("");
      setTagline("");
      setDescription("");
      setCategory("fullstack");
      setTech("");
      setHighlights(["", "", ""]);
      setAccent(ACCENT_PRESETS[0].value);
      setLiveUrl("");
      setGithubUrl("");
      setImage(null);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to save");
    } finally {
      setSubmitLoading(false);
    }
  }

  function updateHighlight(index: number, value: string) {
    setHighlights((prev) => prev.map((h, i) => (i === index ? value : h)));
  }

  if (!isDev) {
    return (
      <div className="glass mx-auto max-w-lg p-8 text-center">
        <h1 className="text-primary font-display text-2xl font-bold">
          Dev only
        </h1>
        <p className="text-muted mt-4">
          The project form only works during local development. Edit{" "}
          <code className="text-brand-600 dark:text-brand-300">data/projects.json</code> and add
          images to <code className="text-brand-600 dark:text-brand-300">public/projects/</code>,
          then commit and push to deploy.
        </p>
        <Link href="/" className="btn-primary mt-6 inline-flex">
          Back to portfolio
        </Link>
      </div>
    );
  }

  if (!authenticated) {
    return (
      <div className="glass mx-auto max-w-md p-8">
        <h1 className="text-primary font-display text-2xl font-bold">
          Admin login
        </h1>
        <p className="text-muted mt-2 text-sm">
          Enter your admin password to add projects locally.
        </p>
        <form onSubmit={handleLogin} className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="password"
              className="text-muted mb-1.5 block text-xs font-medium uppercase tracking-wider"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
          </div>
          {loginError && (
            <p className="text-sm text-rose-400">{loginError}</p>
          )}
          <button
            type="submit"
            disabled={loginLoading}
            className="btn-primary w-full justify-center"
          >
            {loginLoading ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="glass mx-auto max-w-2xl p-8 lg:p-10">
      <div className="mb-6 rounded-xl border border-amber-400/40 bg-amber-50 px-4 py-3 text-sm text-amber-900 dark:border-amber-400/30 dark:bg-amber-400/10 dark:text-amber-200">
        Local dev only. After saving, run{" "}
        <code className="text-amber-950 dark:text-amber-100">
          git add data/projects.json public/projects/
        </code>{" "}
        and push to publish.
      </div>

      <h1 className="text-primary font-display text-3xl font-bold">
        Add project
      </h1>
      <p className="text-muted mt-2">
        New projects are saved to{" "}
        <code className="text-brand-600 dark:text-brand-300">data/projects.json</code>.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
        <Field label="Name" required>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input-field"
            required
          />
        </Field>

        <Field label="Tagline" required>
          <input
            value={tagline}
            onChange={(e) => setTagline(e.target.value)}
            className="input-field"
            required
          />
        </Field>

        <Field label="Description" required>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
            className="input-field"
            required
          />
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Category" required>
            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as ProjectCategory)
              }
              className="input-field"
            >
              <option value="frontend">Frontend</option>
              <option value="fullstack">Full Stack</option>
              <option value="backend">Backend</option>
            </select>
          </Field>

          <Field label="Accent gradient">
            <select
              value={accent}
              onChange={(e) => setAccent(e.target.value)}
              className="input-field"
            >
              {ACCENT_PRESETS.map((p) => (
                <option key={p.value} value={p.value}>
                  {p.label}
                </option>
              ))}
            </select>
          </Field>
        </div>

        <Field label="Tech stack" hint="Comma-separated, e.g. React.js, Nest.js">
          <input
            value={tech}
            onChange={(e) => setTech(e.target.value)}
            className="input-field"
            placeholder="React.js, Next.js, PostgreSQL"
          />
        </Field>

        <Field label="Highlights">
          <div className="space-y-2">
            {highlights.map((h, i) => (
              <input
                key={i}
                value={h}
                onChange={(e) => updateHighlight(i, e.target.value)}
                className="input-field"
                placeholder={`Highlight ${i + 1}`}
              />
            ))}
            <button
              type="button"
              onClick={() => setHighlights((prev) => [...prev, ""])}
              className="text-sm text-brand-600 hover:text-brand-500 dark:text-brand-300 dark:hover:text-brand-200"
            >
              + Add highlight
            </button>
          </div>
        </Field>

        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Live URL">
            <input
              type="url"
              value={liveUrl}
              onChange={(e) => setLiveUrl(e.target.value)}
              className="input-field"
              placeholder="https://"
            />
          </Field>
          <Field label="GitHub URL">
            <input
              type="url"
              value={githubUrl}
              onChange={(e) => setGithubUrl(e.target.value)}
              className="input-field"
              placeholder="https://github.com/..."
            />
          </Field>
        </div>

        <Field label="Project image" hint="JPG, PNG, or WebP">
          <input
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onChange={(e) => setImage(e.target.files?.[0] ?? null)}
            className="text-muted w-full text-sm file:mr-4 file:rounded-lg file:border-0 file:bg-brand-500/15 file:px-4 file:py-2 file:text-sm file:font-medium file:text-brand-700 hover:file:bg-brand-500/25 dark:file:bg-brand-500/20 dark:file:text-brand-200 dark:hover:file:bg-brand-500/30"
          />
        </Field>

        {submitError && (
          <p className="text-sm text-rose-400">{submitError}</p>
        )}
        {submitSuccess && (
          <p className="rounded-xl border border-emerald-500/30 bg-emerald-50 px-4 py-3 text-sm text-emerald-800 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-200">
            Project saved. Run git add, commit, and push to publish.
          </p>
        )}

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            type="submit"
            disabled={submitLoading}
            className="btn-primary"
          >
            {submitLoading ? "Saving…" : "Save project"}
          </button>
          <Link href="/#projects" className="btn-ghost">
            View portfolio
          </Link>
        </div>
      </form>
    </div>
  );
}

function Field({
  label,
  hint,
  required,
  children,
}: {
  label: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-muted mb-1.5 block text-xs font-medium uppercase tracking-wider">
        {label}
        {required && <span className="text-brand-600 dark:text-brand-400"> *</span>}
      </label>
      {hint && <p className="mb-2 text-xs text-stone-500">{hint}</p>}
      {children}
    </div>
  );
}
