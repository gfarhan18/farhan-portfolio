# M. Farhan — Portfolio

A modern, responsive, animated portfolio website for **M. Farhan**, Full Stack Developer with 5+ years of experience. Built with **Next.js 14**, **TypeScript**, **Tailwind CSS** and **Framer Motion**, designed to win the trust of international clients at first glance.

## Highlights

- Beautiful dark UI with aurora gradients, glassmorphism cards and a subtle grid background
- Smooth scroll, fully responsive layout (mobile → 4K)
- Animated hero with floating tech chips and live availability indicator
- Sections: Hero, Marquee, About, Skills, Experience timeline, Projects, Contact, Footer
- Project category filters (All / Frontend / Full Stack / Backend) with tech icon tags
- Dev-only admin form at `/project-form` to add projects locally
- CTAs everywhere — Download Resume, Email, GitHub, LinkedIn
- SEO meta tags, Open Graph and Twitter cards out of the box
- 100% typed (TypeScript)

## Tech Stack

| Layer        | Tech                                              |
| ------------ | ------------------------------------------------- |
| Framework    | [Next.js 14](https://nextjs.org/) (App Router)    |
| Language     | TypeScript                                        |
| Styling      | Tailwind CSS                                      |
| Animations   | Framer Motion                                     |
| Icons        | react-icons (Simple Icons, Heroicons, Font Awesome) |
| Fonts        | Inter + Space Grotesk + JetBrains Mono (Google Fonts) |

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure admin form (optional, for local dev)

Copy `.env.local.example` to `.env.local` and set:

```env
ADMIN_PASSWORD=your-secure-password
ADMIN_SESSION_SECRET=any-long-random-string
```

### 3. Run the dev server

```bash
npm run dev
```

Open <http://localhost:3000> to see the site.

### 4. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── api/
│   │   ├── admin/login/   # Password login (dev only)
│   │   └── projects/      # GET projects, POST new (dev only)
│   ├── project-form/      # Admin UI to add projects locally
│   ├── opengraph-image.tsx
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── not-found.tsx
├── components/
│   ├── ProjectCard.tsx
│   ├── ProjectCategoryFilter.tsx
│   ├── ProjectForm.tsx
│   ├── Projects.tsx
│   └── …
├── data/
│   └── projects.json      # All portfolio projects
├── lib/
│   ├── data.ts            # Profile, skills, experience, services
│   ├── project-types.ts   # Project types and JSON reader
│   └── projects-server.ts # File writes (API routes only)
│   └── tech-icons.ts      # Tech name → SVG icon map
├── public/
│   ├── projects/          # Project screenshots
│   └── Farhan-resume-latest.pdf
└── …
```

## Adding Projects

### Option A — Local admin form (recommended)

1. Run `npm run dev`
2. Open <http://localhost:3000/project-form>
3. Sign in with `ADMIN_PASSWORD`
4. Fill in project details and upload a screenshot
5. Commit and push to deploy:

```bash
git add data/projects.json public/projects/
git commit -m "Add project: My App"
git push
```

The form **only works in local dev** — production hosts cannot write to the filesystem.

### Option B — Edit JSON manually

1. Add an entry to `data/projects.json`
2. Drop a screenshot in `public/projects/` and set `"image": "/projects/your-file.png"`
3. Commit and push

### Project JSON fields

| Field | Type | Notes |
|-------|------|-------|
| `id` | string | URL slug, e.g. `"my-app"` |
| `name` | string | Display name |
| `tagline` | string | Short subtitle |
| `description` | string | Card description |
| `category` | string | `"frontend"`, `"fullstack"`, or `"backend"` |
| `tech` | string[] | Tech stack labels (matched to icons in `lib/tech-icons.ts`) |
| `highlights` | string[] | Bullet points |
| `accent` | string | Tailwind gradient classes |
| `image` | string | Path under `public/`, e.g. `"/projects/my-app.png"` |
| `liveUrl` | string | Optional live demo link |
| `githubUrl` | string | Optional GitHub link |

## Editing Other Content

Profile, skills, experience and services live in **`lib/data.ts`**.

The resume PDF should live at `public/Farhan-resume-latest.pdf`.

## Deployment

Deploy to **[Vercel](https://vercel.com/)**:

1. Push this repo to GitHub
2. Import on Vercel — defaults work out of the box
3. Projects and images deploy from `data/projects.json` and `public/projects/`

## License

Personal portfolio — feel free to use the design as inspiration for your own.

---

**Built by [M. Farhan](https://github.com/gfarhan18) — open to remote roles & freelance projects worldwide.**
