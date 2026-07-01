# MirrorFlow Suite Website

Professional marketing website for MirrorFlow Suite, a connected set of tools
for MirrorCXT, MirrorCTT, Email Template Builder, and ClickAi. The site focuses
on lead reflection, credit tracking, callbacks, email templates, and AI-assisted
workflow support.

## Pages

- Home
- Tools
- About
- One page per tool

## Content Model

All tool names, badges, descriptions, tags, features, best-for details, and
why-it-matters copy live in `app/data/tools.ts`.

## Local Development

```bash
npm ci
npm run dev
```

Open `http://localhost:3000/`.

## Production Validation

```bash
npm run build
```

## Project Notes

This site publishes through GitHub Pages from the static Vite app under `src/`.
The GitHub Actions workflow in `.github/workflows/deploy-pages.yml` builds the
site and deploys the `dist/` artifact whenever `main` is pushed.
