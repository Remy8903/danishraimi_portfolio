<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

Next.js 16 has breaking changes — APIs, conventions, and file structure may differ from earlier versions. Read the relevant guide in `node_modules/next/dist/docs/` before writing code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Portfolio — Danish Raimi

Next.js 16 App Router portfolio. Visual-design source of truth is `docs/index.html` (a Tailwind v3 CDN mockup). Translate that design into the project's real stack; do not copy the CDN approach.

## Commands

- `npm run dev` — dev server on `:3000` (Turbopack)
- `npm run build` — production build
- `npm run lint` — ESLint via flat config in `eslint.config.mjs`
- No test framework is configured. `lint` is the only verification step.

## Stack specifics

- **Next.js 16.2.9 + React 19.2.4**, TypeScript strict mode.
- **Tailwind v4**, CSS-first config via `@theme inline` in `src/app/globals.css`. No `tailwind.config.js`. `docs/index.html` defines a Material Design 3 palette and custom font/sizes in v3 JS form — port those into `@theme` blocks, not verbatim.
- **Fonts:** `Inter` and `JetBrains Mono` are loaded via `next/font/google` in `src/app/layout.tsx`. `Material Symbols Outlined` is the one exception and is loaded via a `<link>` tag (with `// eslint-disable-next-line @next/next/no-page-custom-font`).
- **Path alias:** `@/*` → `./src/*` (tsconfig). App code lives under `src/app/`.
- **next.config.ts** is currently empty. Local images in `public/` work with `next/image` as-is; add `remotePatterns` only if you switch to remote assets.

## Conventions

- App Router (`src/app/`). Edit `src/app/layout.tsx` and `src/app/page.tsx`; reusable UI goes in `src/app/_components/`.
- Content source of truth for projects, experience, etc. is now in `src/app/page.tsx` and `src/app/_components/ProjectsSection.tsx`, not the mockup.
- `public/` contains the real local assets (resume PDF, `me.jpg`, project screenshots). The `lh3.googleusercontent.com` URLs in `docs/index.html` were placeholders.
