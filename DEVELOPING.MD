# Developing Log

## Purpose

This file tracks the current implemented baseline so the repository docs stay aligned with the real app.

## Current app baseline

The repository currently ships one implemented application:

- `frontend/` Astro app

That app now includes:

- editorial one-page portfolio layout
- English and Spanish localized routes
- `i18next` translation resources in `frontend/src/i18n/site.ts`
- persisted language and theme settings
- Pretext-balanced display text for key headings
- hobby and project image placeholders rendered through Astro assets
- Tailwind CSS 4 styling with `tailwindcss-animated` motion utilities

## Recent work completed

### Internationalization

- added `i18next`
- split the site into `/` and `/es/`
- moved page copy into a shared translation source
- added header language settings with localStorage persistence

### Visual updates

- added placeholder artwork for hobbies and projects
- integrated those images into the shared portfolio layout
- used `tailwindcss-animated` utilities for section and card entrance motion
- improved card presentation for media-heavy sections

### Performance improvements

- switched hobby and project visuals to local source assets handled by Astro
- enabled build-time image optimization through Astro/sharp
- added responsive image sizing and lazy loading for below-the-fold media
- added `content-visibility: auto` for lower sections to reduce initial rendering work
- kept motion CSS-first instead of adding a framework runtime

Observed during build:

- the largest JavaScript asset remains the Astro client bundle
- the Pretext balancing script is the main custom JavaScript cost
- optimized hobby/project images are emitted in small compressed variants instead of shipping raw PNGs

### Documentation alignment

- updated `README.md` to match the actual localized Astro app
- removed outdated notes that implied the frontend still had no i18n integration

## Validation commands

Use package-scoped frontend commands:

```bash
pnpm --filter frontend build
pnpm --filter frontend astro check
```

## Current follow-up areas

- replace placeholder copy with real portfolio content
- replace placeholder visuals with real project and hobby imagery
- refine metadata and social preview assets
