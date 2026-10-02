# Nux — Personal Webpage

Nux is my personal website built with React, TypeScript and Vite, styled with Tailwind CSS and using a small component system (shadcn-inspired components + Radix primitives). This repository contains the configuration, site shell and UI components used to build and iterate on the site.

## Tech stack

- **Languages:** TypeScript, HTML
- **Framework / runtime:** React + Vite
- **Notable libraries:** Tailwind CSS, Radix UI primitives, GSAP (animations), react-hook-form, Zod

## What I changed
- Replaced the default template README text with a focused, project-specific README describing what the site is, how to run it locally, and how the repo is organized.
- Added notes about missing source files referenced by info.md and recommended next steps.

## How to run (local development)

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run the linter:

```bash
npm run lint
```

These scripts are defined in package.json.

## Project structure (top-level)

```
README.md               <-- This file
components.json         <-- Component metadata used by the site generator
index.html              <-- Site HTML shell
vite.config.ts          <-- Vite configuration
tailwind.config.js      <-- Tailwind CSS configuration
postcss.config.js       <-- PostCSS config
eslint.config.js        <-- ESLint setup
package.json            <-- Scripts & dependencies
package-lock.json       <-- Exact dependency tree
tsconfig*.json          <-- TypeScript configuration
info.md                 <-- Generated site/info notes (contains expected src layout)
```

Note: info.md documents a typical `src/` layout (App.tsx, main.tsx, sections/, components/) but this repository currently does not contain a `src/` directory with those files. If your site code lives elsewhere or is generated at build time, keep it; otherwise you should add your source files under `src/` (see Recommended next steps).

## Deployment

This project builds to static assets using Vite. You can deploy the contents of the production build (`dist/` after `npm run build`) to any static-hosting provider:

- Vercel — recommended for React + Vite projects (connect repo and it will pick up the `vite build` step)
- Netlify — drag-and-drop or connect the repo and configure the build command `npm run build`
- GitHub Pages — use `gh-pages` or a static exporter to publish `dist/`

If you use environment variables for production (API keys, analytics), set them in your hosting provider rather than committing them to the repo.

## Recommended next steps

1. Add your source files if they are missing. Minimal `src/` layout:

```
src/
  main.tsx        # React entry (render to #root)
  App.tsx         # Root app component
  index.css        # Tailwind + global styles
  components/      # Reusable UI components
  sections/        # Page sections used by routes or index
```

2. If you want the site to be easily previewable, commit a minimal `src/main.tsx` and `src/App.tsx` that render a placeholder page.
3. If this repo is intended to be a template or component library, add a CONTRIBUTING.md and LICENSE.
4. Add badges (CI, build, license) and a screenshot or GIF in the README to make the site more visible on GitHub.

## Troubleshooting

- If `npm run dev` fails, ensure you are using Node.js 20 (info.md indicates Node.js 20) and a recent npm version.
- If lint errors block you, run `npm run lint` and fix or relax rules in `eslint.config.js`.

## License & contact

If you'd like this repository to have a license, add a LICENSE file (for example MIT). Questions? Contact me at the email address or profile attached to this GitHub account.
