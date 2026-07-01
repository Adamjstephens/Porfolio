# CompassQA Suite Website

Professional marketing website for CompassQA Suite, a connected set of tools
for QA review, transcription, lead reflection, credit tracking, callbacks,
email templates, and AI-assisted workflow support.

## Pages

- Home
- Tools
- About
- Contact

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

This site uses the Sites-compatible vinext starter with React, Vite, and
Tailwind CSS. The app source lives under `app/` to preserve the selected Sites
starter structure.
