# MultiPlatform architecture

## Purpose

This branch hosts a single-page portfolio designed to adapt its presentation to mobile and desktop users without turning the whole page into a client-rendered SPA.

## Stack

- **Astro** for server-first rendering, layouts, routes, and middleware
- **TypeScript** for typed content models, device context, stores, and UI contracts
- **Tailwind CSS v4** for design tokens and layout styling
- **React islands** for focused interactivity only
- **shadcn-style UI primitives** built from Radix + CVA utilities
- **Nanostores** for tiny shared client state between React islands
- **Node SSR adapter** so middleware can detect device class at request time
- **Cookie-backed preferences** for locale and theme SSR seeding

## Rendering model

1. `src/middleware.ts` inspects `user-agent` per request.
2. Middleware stores device, locale, and theme seed values in `Astro.locals`.
3. `src/pages/index.astro` reads those server values and chooses mobile or desktop feature variants plus localized content before HTML is sent.
4. Small React islands hydrate only where interaction matters:
   - scroll-linked tab navigation
   - device status pill
   - language toggle
   - theme toggle
5. Nanostores keep device, locale, theme, and active section state in sync across those islands.

This keeps initial render mostly HTML/CSS while still allowing enhanced interactions after load.

## Folder strategy

`src/features/*` is organized by product area instead of by framework:

- `hero`
- `navigation`
- `about`
- `projects`
- `stack`
- `contact`
- `portfolio` for shared content models

Each feature can contain Astro components, React components, and local helpers. Cross-feature primitives live in:

- `src/components/` for shared Astro building blocks
- `src/components/ui/` for shadcn-style React UI primitives
- `src/lib/` for device, locale, theme, and utility helpers
- `src/stores/` for Nanostores atoms

## Device strategy

- Middleware returns coarse classes: `mobile` or `desktop`
- Tablet is folded into desktop for now to keep split simple
- Astro chooses the initial feature variant on server
- Client store can update on resize after hydration, but first render always uses server result

## Locale and theme strategy

- Live page stays single-route; locale switch uses query param + cookie persistence instead of route duplication
- Middleware seeds locale from request query or cookie
- Layout sets `<html lang>` from server locale
- Theme uses cookie seed on server and an inline no-flash script in `<head>` to honor localStorage or system preference before paint
- React controls update cookies/localStorage so future SSR renders match user preference

## PDF strategy

- PDF export uses dedicated `/portfolio-print` route
- Route reuses same localized content source as live page
- Export path is browser-native Save as PDF through print dialog, not server-generated PDF
- Print route can auto-open `window.print()` and falls back to visible print button
- Print CSS removes glassmorphism-heavy presentation and locks output to print-safe light styling
- Direct file download also exists via `/portfolio-download.pdf`
- Direct route renders same content source through `@react-pdf/renderer`, so PDF output does not depend on browser print styling

## Interaction model

- Navigation remains anchor-link based so it still works without JavaScript
- React enhancement adds active-tab state, smooth scroll behavior, horizontal trigger scrolling, and preference controls
- All sections preserve semantic IDs for deep linking and accessibility
