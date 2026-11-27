# screentime-cheddar-web

Homepage web app built with React + Vite and themed with `@screentime/cheddar-ds`.

## Getting started

### Prerequisites

- Node.js 20+ (or current LTS)
- npm 10+

### Install dependencies

```bash
npm ci
```

### Run locally

```bash
npm run dev
```

Then open the local URL shown by Vite (typically `http://localhost:5173`).

### Build for production

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Scripts

- `npm run dev` - start Vite dev server
- `npm run build` - type-check (`tsc --noEmit`) and build
- `npm run preview` - serve the production build locally

## Notes

- Design system styles are imported in `src/main.tsx` via `@screentime/cheddar-ds/styles.css`.
- If your port is already in use, Vite will automatically select the next available port.
## Design system dependency

The app uses the bundled `vendor/screentime-cheddar-ds-1.1.0.tgz` package. It contains the prebuilt design system, styles, and fonts from version 1.1.0 (source commit `764ba2a25310377bd1858e93804355b3625af181`). No private GitHub repository access or registry token is required to install it, including in Figma Code Layers.

To update the design system, build and pack the desired version, add its archive to `vendor/`, update the dependency path and `.gitignore` exception, then run `npm install` and commit the updated lockfile.
