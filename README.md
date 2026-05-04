# Oikos by Angelina

Marketing site for Oikos — biophilic design, conscious gifting, and an eco-friendly workplace concierge.

## Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4 (custom brand tokens via `@theme inline`)
- Google Fonts: EB Garamond (display, italic), Inter (utility), Poppins (body)

## Project layout

```
Oikos/
  README.md                  — this file
  assets/brand/
    brand-spec.md            — extracted palette, type, anti-slop guards
  web/                       — the Next.js app (deploy this on Vercel)
    src/app/                 — page.tsx, layout.tsx, globals.css
    src/components/          — Nav, Hero, Etymology, Services, WhyOikos, Closing, Footer, Reveal
    public/photos/           — biophilic.jpg, gifting.jpg, concierge.jpg
```

## Run locally

```bash
cd web
npm install
npm run dev
```

Opens on http://localhost:3000 (or 3001 if 3000 is taken).

## Deploy to Vercel

Two ways:

**A. CLI** (one-time setup, then `git push` deploys automatically):
```bash
cd web
npx vercel
# follow prompts; "What's your project's name?" → oikos-by-angelina
```

**B. Dashboard**:
1. Push `web/` (or push the whole `Oikos/` folder and set root directory to `web` in Vercel project settings) to GitHub.
2. New Project on vercel.com → import the repo → set Root Directory to `web` if needed → deploy.

Build command: `npm run build` (default).
Output: `.next/` (Vercel auto-detects).

## Design notes

- Brand colors come from Angelina's existing Wix theme — extracted from `static.wixstatic.com` CSS variables, not invented.
- Primary palette: warm cream (`#FFF8EB`) ground, deep forest green (`#0B3910`) ink, terracotta (`#B46A2C`) accent.
- All photographs are placeholders from Unsplash. Swap in Angelina's real work as it becomes available — drop files into `web/public/photos/` keeping the same filenames (`biophilic.jpg`, `gifting.jpg`, `concierge.jpg`).
- "Get in touch" buttons all link to `mailto:oikosbyangelina@gmail.com` — change in `Closing.tsx`, `Nav.tsx` if a different email/Calendly is preferred.
- See `assets/brand/brand-spec.md` for the full brand reference.
