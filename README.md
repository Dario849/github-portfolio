# MultiPlatform Portfolio

Single-page portfolio built on Astro with server-first device detection, EN/ES language support, theme switching, and printable PDF export.

## Purpose

This branch explores a multi-platform portfolio layout that renders distinct mobile and desktop presentations from one content source and one route.

## Stack

- Astro
- TypeScript
- Tailwind CSS v4
- React islands
- Radix/shadcn-style UI primitives
- Nanostores
- Node SSR adapter
- Cookie-seeded locale and theme preferences
- Printable portfolio export route for browser Save as PDF flow
- Direct PDF download route powered by `@react-pdf/renderer`

## Commands

| Command | Action |
| :------ | :----- |
| `npm run dev` | Start local dev server |
| `npm run build` | Build production output |
| `npm run preview` | Preview built output |
| `npm run check` | Run Astro type/config checks |
| `npm run astro -- --help` | Astro CLI help |

## Structure

```text
src/
├── components/       shared Astro and UI primitives
├── features/         feature-based sections and interactive islands
├── layouts/          page shell and global imports
├── lib/              device, locale, theme, and utility helpers
├── pages/            Astro routes
├── stores/           Nanostores atoms for device / locale / theme / nav
└── styles/           Tailwind v4 theme + global CSS
```

## Feature notes

- Language switch uses same route with query + cookie persistence, keeping SSR-first localized render
- Theme toggle uses no-flash head script plus localStorage/cookie persistence
- PDF export opens `/portfolio-print` in new tab and triggers browser print dialog for Save as PDF
- Direct PDF download uses `/portfolio-download.pdf` and server-side React PDF rendering

More detail: [`docs/architecture.md`](docs/architecture.md)
