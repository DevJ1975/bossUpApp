# BossUp — Monorepo

This repository is a **pnpm + Turborepo monorepo**. Each deployable product lives in
`apps/*`; shared code (when it appears) lives in `packages/*`.

## Apps

| App | Path | Description | Deploy |
| --- | --- | --- | --- |
| `web` | [`apps/web`](./apps/web) | BossUp marketing site — an animated, single-page scroll story (Storydoc-style) pitching the BossUp workforce-development app, built for Hartsfield-Jackson Atlanta International Airport (ATL). | Vercel (Root Directory = `apps/web`) |

## Getting started

```bash
# install everything (single lockfile at the repo root)
pnpm install

# run the marketing site in dev
pnpm dev            # turbo runs every app's dev task
# or just the web app
pnpm --filter web dev

# production build / typecheck / lint (all apps)
pnpm build
pnpm typecheck
pnpm lint
```

## Tech

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS v4** (CSS-first `@theme` tokens)
- **Framer Motion** + **Lenis** + **GSAP/ScrollTrigger** — smooth scroll, parallax, scrollytelling
- **three.js** via **@react-three/fiber** + **@react-three/drei** — animated 3D background
- **@react-pdf/renderer** — generates the downloadable sales brochure

## Deployment (Vercel — separate site)

The `web` app deploys as its own Vercel project. In Vercel project settings set
**Root Directory** to `apps/web`; Vercel auto-detects pnpm + Turborepo and builds only that app.
