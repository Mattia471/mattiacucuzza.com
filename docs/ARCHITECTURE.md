# Architecture

This document describes the current frontend architecture of the Mattia Cucuzza portfolio.

## Runtime model

The application is a static client-side React application built with Vite.

There is no application backend, database, authentication layer or server-side rendering in this repository. The deployed artifact is the Vite production bundle.

## Application composition

`src/App.tsx` composes the page in this order:

1. Vercel Analytics
2. Custom cursor
3. Navbar
4. Referral/reference banner
5. Hero
6. About
7. Selected work
8. Capabilities
9. Marquee
10. Project brief
11. Footer

Most navigation is anchor-based and remains within the single page.

## Component areas

### `components/layout`

Global layout and persistent UI:

- `Navbar.tsx` — fixed navigation, language control and portal-based mobile menu
- `Footer.tsx` — contact CTA, social links and local clock
- `ReferralBanner.tsx` — compact reference-code state indicator

### `components/sections`

Page-level marketing and portfolio sections:

- `Hero.tsx`
- `About.tsx`
- `Portfolio.tsx`
- `Capabilities.tsx`
- `Marquee.tsx`
- `Pricing.tsx` — historical filename; currently renders the project brief, not a public price list

### `components/ui`

Reusable interaction primitives:

- `CustomCursor.tsx`
- `Reveal.tsx`
- `ProjectVideo.tsx`
- additional small presentation primitives

## Project data

`src/data/projects.ts` is the source of truth for portfolio entries.

The project model supports two states:

- **public** — has a live external link and can optionally use a preview video
- **coming soon** — intentionally hides identity/link and uses a blurred private-preview treatment

Project descriptions are translated separately in `src/i18n.ts`.

## Media strategy

Project cards accept:

- a required static image/poster
- an optional MP4 preview

`ProjectVideo` uses the static image as a fallback and keeps moving media isolated from the project data model.

Unreleased project artwork lives under `public/previews/`. Preview videos live under `public/videos/`.

## Internationalization

Localization is configured in `src/i18n.ts` with i18next and react-i18next.

Supported locales:

- `it`
- `en`

The detector checks query string, cookie, local storage, browser language and the HTML language attribute. English is the fallback.

## Referral/reference state

`src/context/ReferralContext.tsx` reads a `?ref=` query parameter, validates supported reference codes and persists the active reference for the browser session.

The current public UI treats this as contextual/reference information. It does not expose a public price list.

## Project brief

The project brief is fully client-side.

Submitting the form:

1. validates required fields in the browser;
2. formats the entered data into a readable message;
3. opens a `mailto:` URL.

No form data is written to local storage, a database or an API.

## Styling

The project uses Tailwind CSS 4 plus custom CSS in `src/index.css`.

Core visual tokens:

- surface: `#0a0a0a`
- ink: `#f3f3ed`
- accent lime: `#c8ff3d`
- primary sans: Inter Tight
- mono: DM Mono

The CSS layer also owns page-shell sizing, motion, cursor behavior, mobile menu state and media presentation.

## Quality gate

The repository exposes:

- `pnpm lint`
- `pnpm typecheck`
- `pnpm build`
- `pnpm check`

GitHub Actions runs the full quality gate for pushes and pull requests targeting `develop`.
