# Yulia Obshansky — Portfolio

Single-page portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS v4, with dedicated case-study pages at `/projects/[slug]`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

Other scripts:

```bash
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run build      # production build
```

## Replacing the old repo contents

This project moves everything under `src/`. When copying these files into the existing repo, delete the following leftovers from the previous version:

- `app/` at the repository root (replaced by `src/app/`)
- `tailwind.config.js` — Tailwind v4 is configured from CSS, in `src/app/globals.css`
- `app/providers.tsx` and `app/components/ThemeToggle.tsx` — the dark-mode toggle was removed (see below)
- `public/next.svg`, `public/vercel.svg`, `public/file.svg`, `public/globe.svg`, `public/window.svg` — unused starter assets

`next-themes`, `autoprefixer`, and `@tailwindcss/cli` were removed from `package.json`; run `npm install` after copying to prune them.

## Structure

```
src/
├── app/
│   ├── projects/[slug]/page.tsx   Case study pages (statically generated)
│   ├── globals.css                Design tokens, base styles, animations
│   ├── layout.tsx                 Fonts, metadata, navbar/footer shell
│   ├── not-found.tsx
│   └── page.tsx                   Home page — composes all sections
├── components/
│   ├── layout/                    Navbar, Footer
│   ├── sections/                  Hero, About, Work, Experience, Skills,
│   │                              Education, Beyond, Contact
│   ├── ui/                        Container, SectionHeading, ButtonLink,
│   │                              ProjectCard, Reveal, icons
│   └── visuals/                   SVG charts and per-case-study diagrams
├── data/                          All site content (typed)
├── lib/                           Metadata builder, small helpers
└── types/                         Project type
```

## Editing content

All copy lives in `src/data/`:

| File            | Contains                                       |
| --------------- | ---------------------------------------------- |
| `site.ts`       | Name, email, location, social links, nav items |
| `projects.ts`   | The four case studies, front to back           |
| `experience.ts` | Roles timeline, education, recognition         |
| `skills.ts`     | Skill groups and languages                     |

Adding a case study means adding one object to `projects.ts` — the card, the page, the static route, and the metadata all follow from it. New entries need a `visual` key that matches one of the diagrams in `src/components/visuals/ProjectVisual.tsx`.

## Design tokens

Defined once in `src/app/globals.css` under `@theme`, then used as normal Tailwind classes (`bg-paper`, `text-ink`, `border-line`, `text-accent`):

| Token                   | Value     | Use                                |
| ----------------------- | --------- | ---------------------------------- |
| `paper`                 | `#F7F5F0` | Page background                    |
| `surface`               | `#FFFFFF` | Cards, alternating sections        |
| `ink` / `ink-soft`      | `#1C1917` | Headings, dark section background  |
| `muted`                 | `#78716C` | Body copy                          |
| `line`                  | `#E3DED5` | Borders, grid lines                |
| `accent`                | `#1B48CC` | Primary actions, active nav        |
| `teal`/`violet`/`ember` | —         | Per-case-study differentiation     |

Type: Sora (display), Manrope (body), DM Mono (labels and data).

## Notes and follow-ups

- `public/resume.pdf` is carried over from the previous version — **confirm it is the current résumé**, since the site links to it in three places.
- `public/profile.png` is unused. The design uses an illustrative dashboard rather than a portrait, but the file is kept in case a photo is wanted in the About section.
- Dark mode was removed. The prototype design is light-only and there was no dark palette to implement; the token setup in `globals.css` makes it straightforward to add later.
- `site.url` in `src/data/site.ts` is used for canonical and Open Graph URLs — update it if a custom domain is added.
- No Open Graph image is set. Adding `src/app/opengraph-image.png` (1200×630) would improve link previews.

## Deployment

Zero-config on Vercel. No environment variables are required.
