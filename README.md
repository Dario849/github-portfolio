# GitHub Portfolio

Astro-based personal portfolio for **Darío**, built as an editorial single-page site with localized routes, theme settings, balanced display typography, and optimized placeholder media.


## Current implemented state

The active app lives in `frontend/` and currently includes:

- a long-form portfolio homepage
- English and Spanish routes: `/` and `/es/`
- `i18next`-backed site copy in `frontend/src/i18n/site.ts`
- a persisted language setting
- a persisted light/dark theme toggle
- Pretext-powered balanced hero and quote typography
- hobby and project placeholder artwork optimized through Astro image handling
- Tailwind CSS styling, including `tailwindcss-animated` entrance motion

## Project structure

| Path | Purpose |
| --- | --- |
| `frontend/src/pages/index.astro` | English route |
| `frontend/src/pages/es/index.astro` | Spanish route |
| `frontend/src/components/PortfolioPage.astro` | Shared localized page template |
| `frontend/src/i18n/site.ts` | Translation resources and language helpers |
| `frontend/src/assets/placeholders/` | Local placeholder source images |
| `frontend/src/styles/global.css` | Global visual system and custom classes |

## Tech stack

- **Astro 6**
- **Tailwind CSS 4**
- **tailwindcss-animated**
- **i18next**
- **@chenglou/pretext**
- **Astro image pipeline / sharp**
- **pnpm workspaces**

## Development

Install dependencies from the repo root:

```bash
pnpm install
```

Run the Astro app:

```bash
pnpm --filter frontend dev
```
  - Or just use in root directory: 
    ```bash 
    pnpm run dev
    ```
    (Shorthand for: `pnpm --filter ** dev`)

Build the Astro app:

```bash
pnpm --filter frontend build
```
  - Or from the root directory:
    ```bash
    pnpm run build
    ```
    (Shorthand for: `pnpm --filter ** build`)
Preview the production build:

```bash
pnpm --filter frontend preview
```

Run Astro checks:

```bash
pnpm --filter frontend astro check
```

## Deployment
_Intended only for GitHub Pages_

Deployment is handled by **GitHub Actions**.

1. In repository **Settings -> Pages**, set **Source** to **GitHub Actions**.
2. Push to `main`.
3. The workflow in `.github/workflows/deploy.yml` builds `frontend/dist` and publishes it to GitHub Pages.

For local validation before pushing:

```bash
pnpm --filter frontend astro check
pnpm --filter frontend build
pnpm --filter frontend preview
```

## Notes

- The repository is a pnpm workspace, but `frontend/` is the only implemented application right now.
- Placeholder images are stored locally so Astro can optimize them during build output.
