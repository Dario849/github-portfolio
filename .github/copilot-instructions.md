# Copilot Instructions

## Repository objective

This repository is the Astro portfolio project for Dario Rodriguez. Its purpose is to present one content source through a server-rendered portfolio that adapts to device class, supports English and Spanish, persists theme and locale preferences, and offers both printable and downloadable PDF output.

## Build and verification

- Start local development: `npm run dev`
- Run project checks after structural, routing, middleware, or integration changes: `npm run check`
- Build the site for delivery: `npm run build`
- Preview the production build locally: `npm run preview`

There is no dedicated test runner in this repository yet. `npm run check` is the main validation command, and `npm run build` is the final delivery check.

## Technical architecture

- Stack: Astro, TypeScript, Tailwind CSS v4, React islands, Nanostores, and the Astro Node adapter.
- `src/middleware.ts` is part of the runtime contract. It inspects the request user agent, resolves the device class, reads locale and theme preferences from query params or cookies, and seeds `Astro.locals` for server rendering.
- `src/pages/index.astro` is the main portfolio route. It is SSR-only (`prerender = false`), reads `Astro.locals`, chooses mobile or desktop section variants on the server, and pulls localized copy from `src/features/portfolio/content.ts`.
- `src/layouts/RootLayout.astro` owns global document setup: metadata, global styles, skip link, and the no-flash theme script that syncs cookie, local storage, and system preference before paint.
- Interactive behavior should remain limited to focused React islands. Current client-side enhancement areas are header controls, section navigation, and other small stateful UI elements.
- Shared client state lives in Nanostores under `src/stores`. Keep stores small and use them only for cross-island state that cannot stay local.

## Routing and export behavior

- The live portfolio stays on a single route in `src/pages/index.astro`.
- Locale switching stays route-stable by using query params plus cookie persistence instead of duplicating page routes.
- Device-specific presentation is selected on the server. Mobile and desktop variants live in feature folders and should keep drawing from the same content source.
- `src/pages/portfolio-print.astro` provides the browser print view for Save as PDF flows.
- `src/pages/portfolio-download.pdf.ts` provides direct PDF download using `@react-pdf/renderer`.
- Changes to copy structure or preferences must keep the live route, print route, and direct PDF route aligned.

## Project structure conventions

- `src/pages`: Astro routes only.
- `src/layouts`: shared page shells and document-level setup.
- `src/components`: cross-feature reusable Astro and UI primitives.
- `src/features`: feature-owned sections, device variants, and portfolio-specific modules.
- `src/lib`: request parsing, preference helpers, device utilities, and shared low-level logic.
- `src/stores`: Nanostores for device, locale, theme, and navigation state.
- `src/styles`: global styling and theme tokens.
- `public`: static assets served as-is.

## Implementation conventions

- Default to Astro-first composition. Do not turn the portfolio into a client-rendered SPA.
- Keep content centralized in `src/features/portfolio/content.ts` so localized site output and PDF output remain in sync.
- Preserve SSR behavior when editing middleware, preferences, or route-level logic. If a change depends on request data, keep it server-readable.
- Add client hydration only where interaction materially improves the experience.
- Keep mobile and desktop variants consistent in content and semantics even when layout differs.
