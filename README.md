# screentime-cheddar-web

Homepage web app built with React + Vite and themed with `@screentime/cheddar-ds`.

## Getting started

### Prerequisites

- Node.js 20+ (or current LTS)
- npm 10+
- GitHub SSH access to `figma/screentime-cheddar-ds` (dependency is installed via `git+ssh`)

### Install dependencies

```bash
npm install
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