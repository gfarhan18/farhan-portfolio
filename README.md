# M. Farhan — Portfolio

A modern, responsive, animated portfolio website for **M. Farhan**, Full Stack Developer with 5+ years of experience. Built with **Next.js 14**, **TypeScript**, **Tailwind CSS** and **Framer Motion**, designed to win the trust of international clients at first glance.

## Highlights

- Beautiful dark UI with aurora gradients, glassmorphism cards and a subtle grid background
- Smooth scroll, fully responsive layout (mobile → 4K)
- Animated hero with floating tech chips and live availability indicator
- Sections: Hero, Marquee, About, Skills, Experience timeline, Projects, Contact, Footer
- CTAs everywhere — Download Resume, Email, GitHub, LinkedIn
- SEO meta tags, Open Graph and Twitter cards out of the box
- 100% typed (TypeScript) and easy to update — all content lives in `lib/data.ts`

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

### 2. Run the dev server

```bash
npm run dev
```

Open <http://localhost:3000> to see the site.

### 3. Build for production

```bash
npm run build
npm start
```

## Project Structure

```
.
├── app/
│   ├── globals.css        # Tailwind layers + custom utilities
│   ├── layout.tsx         # Root layout, fonts, SEO metadata
│   ├── page.tsx           # Composes all sections
│   └── not-found.tsx      # Custom 404
├── components/
│   ├── Navbar.tsx
│   ├── Background.tsx
│   ├── Hero.tsx
│   ├── Marquee.tsx
│   ├── SectionHeader.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── lib/
│   └── data.ts            # All content (profile, skills, projects, experience)
├── public/
│   └── Farhan-resume-latest.pdf
├── tailwind.config.ts
├── next.config.mjs
├── tsconfig.json
└── package.json
```

## Editing Content

All copy, links and lists live in **`lib/data.ts`**:

- `profile` — name, tagline, description, contact links, hero stats
- `skillCategories` — tech stack grouped by Frontend / Backend / Cloud & DevOps / Databases & Tools
- `experiences` — companies, roles, bullets, tech used
- `projects` — featured work with descriptions, highlights and tech
- `services` — what you offer to clients

Update those arrays and the UI updates everywhere automatically. The resume PDF should live at `public/Farhan-resume-latest.pdf` (already in place).

## Customization Tips

- **Theme colors**: edit `tailwind.config.ts` → `colors.brand` / `colors.accent`
- **Fonts**: swap in `app/layout.tsx`
- **Add a project**: append to the `projects` array in `lib/data.ts`
- **Add a section**: create a component in `components/` and import it in `app/page.tsx`

## Deployment

The simplest path is **[Vercel](https://vercel.com/)** (built by the Next.js team):

1. Push this repo to GitHub
2. Import it on Vercel — defaults work out of the box
3. Done. You get a global CDN, HTTPS and instant deploys on every push.

It also deploys cleanly to **Netlify**, **Render** or any Node host that supports Next.js.

## License

Personal portfolio — feel free to use the design as inspiration for your own.

---

**Built by [M. Farhan](https://github.com/gfarhan18) — open to remote roles & freelance projects worldwide.**
