<div align="center">

# Mattia Cucuzza · Portfolio

**Personal portfolio and frontend showcase built around code, motion and digital product design.**

[Live website](https://mattiacucuzzacom.vercel.app) · [Report an issue](https://github.com/Mattia471/mattiacucuzza.com/issues)

![CI](https://github.com/Mattia471/mattiacucuzza.com/actions/workflows/ci.yml/badge.svg?branch=develop)
![React](https://img.shields.io/badge/React-19-20232a?logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

</div>

---

## Overview

This repository contains the official source code for **Mattia Cucuzza's personal portfolio**.

The site is designed as a single-page digital experience rather than a traditional résumé: oversized editorial typography, motion-driven interactions, project media, multilingual content and a lightweight project brief flow all live inside a static React application.

The public portfolio includes both launched work and intentionally obscured previews for projects that are not ready to be announced yet.

## Highlights

- **React 19 + TypeScript** frontend
- **Vite 8** build pipeline
- **Tailwind CSS 4** with a custom visual system
- **Italian / English** localization with i18next
- **Responsive navigation** with a portal-based fullscreen mobile menu
- **Custom cursor** and scroll reveal interactions
- **Video-enabled project showcase** with poster fallbacks
- **Private project previews** for unreleased work
- **Referral/reference context** persisted for the current session
- **Project brief** that prepares a pre-filled email without storing form data
- **Vercel Analytics**
- Mobile-first and responsive across desktop, tablet and phone

## Tech stack

| Area | Technology |
| --- | --- |
| UI | React 19 |
| Language | TypeScript 6 |
| Tooling | Vite 8 |
| Styling | Tailwind CSS 4 + custom CSS |
| Localization | i18next + react-i18next |
| Icons | lucide-react |
| Analytics | Vercel Analytics |
| Hosting | Vercel |
| Package manager | pnpm |

## Project structure

```text
.
├── public/
│   ├── previews/              # blurred / unreleased project artwork
│   ├── videos/                # optional project preview videos
│   ├── logo-light.png
│   ├── logo-dark.png
│   ├── favicon.png
│   └── ...
├── src/
│   ├── components/
│   │   ├── layout/            # navbar, footer, referral banner
│   │   ├── sections/          # homepage sections
│   │   └── ui/                # cursor, reveal, project media, primitives
│   ├── context/
│   │   └── ReferralContext.tsx
│   ├── data/
│   │   └── projects.ts        # portfolio project registry
│   ├── App.tsx
│   ├── i18n.ts
│   ├── index.css
│   └── main.tsx
├── docs/
│   ├── ARCHITECTURE.md
│   └── BRANDING.md
└── .github/
    ├── workflows/ci.yml
    ├── CODEOWNERS
    └── pull_request_template.md
```

## Getting started

### Requirements

Vite 8 requires Node.js **20.19+ or 22.12+**. This repository uses Node 22 for local version pinning and CI.

### Install

```bash
git clone https://github.com/Mattia471/mattiacucuzza.com.git
cd mattiacucuzza.com
pnpm install
```

### Development

```bash
pnpm dev
```

### Quality checks

```bash
pnpm check
```

This runs linting, TypeScript validation and a production build.

### Production build

```bash
pnpm build
pnpm preview
```

## Available scripts

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the Vite development server |
| `pnpm lint` | Run ESLint |
| `pnpm typecheck` | Run the TypeScript project build as a type check |
| `pnpm build` | Type-check and create the production bundle |
| `pnpm check` | Run the complete local quality gate |
| `pnpm preview` | Preview the production build locally |

## Adding or updating projects

Portfolio entries are centralized in `src/data/projects.ts`.

A public project can define:

```ts
{
  id: 'projectId',
  title: 'Project name',
  year: '2026',
  image: '/project-cover.png',
  video: '/videos/project-preview.mp4',
  link: 'https://example.com',
  tags: ['React', 'TypeScript']
}
```

Unreleased work can instead use `comingSoon: true`. The UI will automatically switch to the private-preview presentation.

Translated project descriptions live in `src/i18n.ts`.

## Localization

The site supports:

- Italian (`it`)
- English (`en`)

Language detection uses query string, cookie, local storage, browser language and the HTML language tag. English is the fallback language.

## Project brief and privacy

The brief form is intentionally client-side only.

The website **does not submit or persist the form contents**. On submit, the browser opens the user's email client with a formatted message generated from the entered fields.

The referral/reference feature uses browser session storage only.

## Deployment

The production site is deployed on **Vercel**.

The repository's default branch is `develop`, and every push or pull request targeting it is validated by GitHub Actions before the change should be considered production-ready.

## Documentation

- [Architecture](./docs/ARCHITECTURE.md)
- [Branding](./docs/BRANDING.md)
- [Contributing](./CONTRIBUTING.md)
- [Security policy](./SECURITY.md)

## Repository policy

This is a personal portfolio repository. The source is publicly visible for transparency and technical showcase purposes.

**No open-source license is currently granted.** Unless a license is added later, standard copyright rules apply to the source code, design, branding and visual assets.

## Author

**Mattia Cucuzza**

- Portfolio: https://mattiacucuzzacom.vercel.app
- GitHub: https://github.com/Mattia471
- LinkedIn: https://www.linkedin.com/in/mattia-cucuzza/
- Instagram: https://www.instagram.com/mattiacucuzza_/

---

<div align="center">
  <sub>Designed and developed by Mattia Cucuzza.</sub>
</div>
