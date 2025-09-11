# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview
- Framework: Next.js (App Router) with TypeScript
- Package manager: pnpm (pnpm-lock.yaml present)
- Styling: Tailwind CSS v4 via @tailwindcss/postcss
- UI: shadcn-inspired components using class-variance-authority, Radix Slot, tailwind-merge
- Animations: framer-motion
- Lint/format: Biome

Common commands
- Install deps: pnpm install
- Dev server (Turbopack): pnpm dev
  - URL: http://localhost:3000
- Build (Turbopack): pnpm build
- Start production server: pnpm start
- Lint (Biome): pnpm lint
- Format (Biome): pnpm format

Notes
- Scripts are defined in package.json and assume pnpm. If using npm/yarn/bun, substitute the runner accordingly.
- Turbopack is enabled for both dev and build via the --turbopack flag.

Tests
- There is no test setup or test script configured in package.json. If tests are added later (e.g., Vitest/Jest/Playwright), document the commands here including how to run a single test.

Architecture and code structure
- App Router
  - src/app/layout.tsx defines the RootLayout, global font (Inter), and imports global styles (src/app/globals.css). It also exports Metadata.
  - src/app/page.tsx composes the landing page from feature components (Navbar, Hero, LogoTicker, Introduction, Integrations, Faqs, CTA) inside MaxWidthWrapper.
- Components
  - src/components contains page sections and shared UI.
  - src/components/ui contains reusable primitives (e.g., button.tsx) implemented with class-variance-authority variants and Radix Slot for asChild composition.
  - Styling relies on Tailwind utility classes. Variants are built with cva and merged via cn from src/lib/utils.ts (tailwind-merge + clsx).
  - Motion and overlays use framer-motion (e.g., Navbar mobile menu via AnimatePresence/motion).
- Assets
  - Images and icons live under src/assets/images and are imported directly (Next Image used where appropriate).
- Styling foundation
  - src/app/globals.css uses Tailwind v4 @import syntax, tw-animate-css, CSS custom properties for the design system (colors, radius), and Tailwind @layer base for global styles. PostCSS is configured with @tailwindcss/postcss in postcss.config.mjs.
- Configuration
  - next.config.ts currently has an empty nextConfig object (extend here if needed for images, headers, etc.).
  - tsconfig.json defines strict TS settings, path alias @/* -> ./src/*, Next plugin, bundler moduleResolution.
  - biome.json enables the formatter and linter with recommended rules and Next/React domains; it honors VCS ignore files and ignores common build folders.
  - components.json (shadcn) sets style preset, RSC enabled, Tailwind paths, and path aliases for components/utils/ui/lib/hooks.

Conventions and helpers
- Path aliases
  - Use @/* from tsconfig.json to import from src. Examples: "@/components/Component", "@/lib/utils".
- Styling helpers
  - Use cn(...) from src/lib/utils.ts to compose class names; it merges Tailwind classes correctly.
- UI variants
  - For component variants, prefer class-variance-authority (see src/components/ui/button.tsx) and expose VariantProps in component types.

Key files to know
- package.json: scripts for dev/build/start/lint/format.
- src/app/globals.css: Tailwind and design tokens.
- src/components/ui/button.tsx: example of cva pattern and asChild composition with Radix Slot.
- src/components/Navbar.tsx: example of framer-motion usage and responsive menu.
- biome.json: lint/format policy used by scripts.

Readme highlights
- README.md includes the standard Next.js getting-started instructions (dev server on :3000). Refer here for a quick start.

When adding or adjusting tooling
- If you add a test runner or Storybook, add corresponding scripts to package.json and update the Tests section above.
- If you introduce image domains, headers, or redirects, extend next.config.ts accordingly.

