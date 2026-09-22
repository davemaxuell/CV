# Dave Maxuell — CV & Portfolio

Interactive portfolio: [dave-maxuell-cv.vercel.app](https://dave-maxuell-cv.vercel.app).

Academic profile: [davemaxuell.github.io](https://davemaxuell.github.io/). Its [publishing repository](https://github.com/davemaxuell/davemaxuell.github.io) uses `npm run build:academic` on this repository's `fix/official-organization-logos` branch and checks for new revisions every 15 minutes. After pushing CV changes, publish immediately with `gh workflow run publish.yml --repo davemaxuell/davemaxuell.github.io`. Update the publishing workflow's `CV_REF` if the source branch changes; scheduling details are documented in that repository.

Two React/Vite presentations share `src/data/portfolioData.ts`, verified organization logos, and Dave's photograph. The Vercel portfolio follows [MonoCV](https://monocv.framer.website/) with profile cards, expandable résumé entries, a project grid, and an interactive Rive companion. The GitHub Pages academic profile follows the user-selected [Hoyeon Chang reference](https://hoyeonchang.github.io/): white canvas, Roboto, a portrait beside the biography, date-aligned entries, and open publication lists. Detailed evidence is accessible through native disclosures.

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

With Python Playwright installed and Microsoft Edge available, run `py -3.13 scripts/verify_ui.py` in another terminal. The check covers 320, 390, 810, 1000, and 1440px layouts, fonts, images, accordions, project navigation, dialogs, Google Docs CV link, and reduced motion. Screenshots go to `.artifacts/ui/` (ignored by Git). Set `CV_TEST_URL` to check a deployed URL.

To check the academic version separately:

```sh
npm run build:academic -- --outDir .artifacts/academic-dist
npm run preview -- --host 127.0.0.1 --port 4174 --outDir .artifacts/academic-dist
```

Then run `py -3.13 scripts/verify_academic.py`. It checks six widths from 320 to 1440px, publication and project evidence, image loading, keyboard disclosures, mobile navigation, anchor positions, and reduced motion. Screenshots go to `.artifacts/academic/`. The academic design and content constraints are recorded in `src/academic/DESIGN.md` and `src/academic/PRODUCT.md`. The normal `npm run build` still produces the interactive portfolio for Vercel.

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
- View CV opens the owner-provided Google Doc in a new tab. Project dialogs support Escape, focus containment, and focus restoration.
- `DESIGN.md` records measured typography, layout, breakpoints, and motion. `PRODUCT.md` records content constraints.
