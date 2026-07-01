<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Danish Raimi

Next.js 16 App Router portfolio. Source of truth for the visual design is `docs/index.html`, an HTML mockup built with the Tailwind v3 CDN. Translate that design into the project's real stack — do not copy the CDN approach.

## Commands

- `npm run dev` — dev server on :3000
- `npm run build` — production build
- `npm run lint` — ESLint (flat config in `eslint.config.mjs`)
- No test framework is configured. `lint` is the only verification step.

## Stack specifics

- **Tailwind v4, not v3.** No `tailwind.config.js`. Config is CSS-first via `@theme` in `src/app/globals.css`. `docs/index.html` defines a full Material Design 3 color palette + custom fonts/sizes via a JS `tailwind.config` (v3 style) — these must be ported into `@theme` blocks, not copied verbatim.
- **Fonts:** `docs/index.html` uses Inter + JetBrains Mono. The scaffold uses Geist/Geist Mono via `next/font/google`. Swap to match the design using `next/font/google` (self-hosted) — do not add `<link>` tags or Google Fonts CDN.
- **Path alias:** `@/*` → `./src/*` (tsconfig). App code lives under `src/app/`.
- **Material Symbols icons** are referenced in the mockup via Google Fonts CDN. If needed, load via `next/font/google` or a `<link>` in the layout, not the Tailwind script.

## Conventions

- App Router (`src/app/`), TypeScript strict mode.
- Edit `src/app/layout.tsx` and `src/app/page.tsx` to build the portfolio; the scaffold content is placeholder.
- Remote images (e.g. the `lh3.googleusercontent.com` placeholders in the mockup) are stock stand-ins the user will replace later. Prefer plain `<img>` or `next/image` with `remotePatterns` in `next.config.ts` if optimizing.
