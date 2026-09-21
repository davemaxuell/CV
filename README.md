# Dave Maxuell — CV & Portfolio

Live website: [dave-maxuell-cv.vercel.app](https://dave-maxuell-cv.vercel.app).

A React/Vite CV with a visual system measured against [MonoCV](https://monocv.framer.website/): General Sans headings, Inter Display body text, compact profile cards, expandable résumé entries, a tech-logo marquee, and a horizontal project carousel. Dave's original CV content, verified organization logos, and attributed Rive companion are retained.

## Run locally

```sh
npm ci
npm run dev
```

## Production check

```sh
npm run lint
npm run build
npm run preview -- --host 127.0.0.1 --port 4173
```

With Python Playwright installed and Microsoft Edge available, run `py -3.13 scripts/verify_ui.py` in another terminal. The check covers 320, 390, 810, 1000, and 1440px layouts, fonts, images, accordions, project navigation, dialogs, Markdown export, and reduced motion. Screenshots go to `.artifacts/ui/` (ignored by Git). Set `CV_TEST_URL` to check a deployed URL.

## Vercel

Import `davemaxuell/CV` into Vercel after merging the design changes, or deploy the current branch with the CLI:

```sh
vercel login
vercel --prod
```

Settings are included in `vercel.json`: Vite, `npm ci`, `npm run build`, output `dist`. The Git repository root is the project root. No environment variables are required for the CV. The contact form opens an email draft; it does not use a mail-delivery backend or claim a message was delivered.

## Assets and behavior

- CV data: `src/data/portfolioData.ts`.
- Organization logos, tech marks, fonts, and Rive attribution: `public/*/SOURCES.md`.
- Rive runtime loads when the visible pet is allowed to animate. Reduced motion uses a still preview with explicit Play. Offscreen/background animation is paused.
- The tech strip moves at 30px/second, pauses on hover/focus and when offscreen, and has a pause control. Reduced motion shows a static list.
- CV supports Markdown export and browser print/save-to-PDF. Dialogs support Escape, focus containment, and focus restoration.
- `DESIGN.md` records measured typography, layout, breakpoints, and motion. `PRODUCT.md` records content constraints.
