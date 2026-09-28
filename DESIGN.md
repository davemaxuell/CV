---
name: Dave Maxuell CV
description: MonoCV reference adapted to Dave's research portfolio
colors:
  page: '#faf7f4'
  surface: '#ffffff'
  ink: '#332a24'
  body: '#51483f'
  line: '#e5dcd4'
  accent: '#b3470b'
  accentHover: '#913707'
  accentSoft: '#fff0e3'
  awardInk: '#745923'
  awardSurface: '#fff5d6'
typography:
  display:
    fontFamily: General Sans
    fontSize: 24px
    fontWeight: 500
    lineHeight: 1.2
  body:
    fontFamily: Inter Display
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: .02em
rounded:
  card: 8px
spacing:
  section: 56px
  heading: 32px
---

## Overview

This file describes the interactive portfolio (default build). The separate GitHub Pages academic build follows `src/academic/DESIGN.md` and the user's newer reference, https://hoyeonchang.github.io/.

User-pinned reference: https://monocv.framer.website/. Measured in Playwright on 2026-09-21. Dave's content, portrait, official organization logos, and requested Rive pet are retained. The reference is the visual authority, not the prior oversized dashboard styling.

## Colors

User-requested restrained color palette: warm off-white canvas #faf7f4, white surfaces, warm charcoal ink #332a24 and body #51483f. Burnt orange #b3470b owns primary actions, focus, section labels, and recognition rules; #913707 is its hover shade and #fff0e3 its light selection surface. Paper awards use muted gold #745923 on #fff5d6. Borders are #e5dcd4. Original organization artwork keeps its own colors.

Orange explicitly selected by the user, replacing the previous green palette. This color request supersedes the reference's monochrome palette while retaining its type, layout, and motion.

## Typography

General Sans 500 for headings: profile name 28px desktop, 24px tablet, 22px mobile; entry titles 18px/1.35 (16px on small screens). Inter Display for reading: introductory prose 17px/1.75 desktop and 16px/1.75 mobile, capped at 68ch; expanded details 16px/1.7 capped at 70ch; supporting copy 15px/1.55; dates and metadata 13px/1.5. Body tracking is normal. Dates use tabular numbers and never wrap. Below 600px dates occupy their own line beneath the title and role. Skill labels use medium weight. Body text #51483f strengthens contrast. Fonts remain locally hosted with actual weights and original licenses.

## Layout

Desktop at 1200px and above: centered shell up to 1240px wide with at least 40px outer gutters. A 240px profile and 48px gap precede a flexible content column. At 1440px, the shell spans x100 to x1340, and the reading column is 952px wide. About paragraphs are limited to 75ch; resume rows fill the column. The user requested broader use of horizontal space, superseding the reference's narrow column dimensions. Sections retain 56px gaps.

Tablet 810-1199px: 32px outer gutters, full-width horizontal profile/contact header, flexible profile plus 240px contact column. Main content fills the same width beneath it.

Mobile below 810px: horizontal portrait/name card with a menu for contact links and actions. Single-column content with 14px gutters. The pet floats in a fixed bottom-right position outside the page layout, tracks pointer movement across the viewport, and scales down on mobile. Artwork lets clicks through; only its controls capture clicks. At 320px, row dates move below titles when necessary.

## Elevation & Depth

Small surfaces use 0 2px 8px 1px rgba(0,0,0,.04). Expandable rows have a 1px solid outline. All dividers and outlines use solid strokes, per the user's preference. No large dashboard cards or floating deployment instructions. Dialog depth is a plain dark overlay and restrained shadow.

## Shapes

8px card corners. Section headings use General Sans medium in title case, 24px desktop / 20px mobile, orange text and a fine solid rule filling the remaining width; no enclosing badge. Inspired by the restrained heading hierarchy of paco.me and brittanychiang.com, adapted to the existing palette. Project cards use a two-column grid, stacking below 600px, with complete descriptions and direct links where available. No horizontal browsing is required to find a project.

## Components

- Experience/education rows start closed, with an organization logo, title, role, date, and rotating chevron. Long names truncate only when closed; opening reveals the full name and all details.
- Skills use equal-width white buttons in a four-column grid when the section is at least 840px wide, and two columns on smaller screens. Each has a disclosure chevron; selecting one expands the original category details.
- Tech stack uses standalone real marks and moves at 30px/second, with hover/focus, visibility, and manual pause. Reduced motion shows a static list.
- Projects use plain text cards with dates, titles, descriptions, and a detail link. They scroll with touch or previous/next controls. No invented preview artwork or placeholder tiles. Details use a plain document layout with bullet lists, not icon boxes and tag pills.
- Publications use the same expandable vocabulary; recognition has a thin green rule and dotted leaders.
- Contact is an unboxed form that opens an email draft, explicitly avoiding a false delivery claim.
- Page entrance is an opacity-only 400ms reveal with the reference's measured spring curve. Accordion height uses a 400ms spring; chevron rotation shares that curve. Hover changes stay small. Reduced motion suppresses nonessential animation.
- Rive keeps attribution, Play/Pause, reduced-motion preview, and offscreen/background suspension. Dialogs trap focus, close on Escape, and restore focus.

## Do's and Don'ts

Preserve all substantive CV data and keep it discoverable through expansions, dialogs, and CV export. Match the reference's exact typefaces and three responsive arrangements. Do not introduce fabricated testimonials, backend delivery confirmations, large highlight grids, or unrelated decorative animation.

The mechanical detector's generic warnings about Inter and spring easing are intentional exceptions: both are explicitly required by the user's reference and verified from its live styles/animation frames.


## Motion refinement

Use 320ms deceleration (0.22, 1, 0.36, 1) for accordion and menu height changes, 180ms opacity for dialog entry/exit and control feedback. Skill content uses ResizeObserver-measured heights so switching between open categories animates as well as opening/closing. Native anchor scrolling is smooth; wheel and touch remain browser-controlled. Stable scrollbar space prevents modal scroll-lock shifts. Carousel scroll listeners are passive and frame-batched and only update React when edge availability changes. The logo marquee promotes its transform only while active. Pet gaze uses a frame-rate-independent 65ms smoothing time constant and stops requesting frames when settled; direction remains relative to the pet. Reduced motion bypasses transitions, and continuous motion retains pause/visibility controls.

Research: https://web.dev/articles/animations-guide and https://motion.dev/docs/react-animation. Layout-changing disclosures necessarily update layout, so their scope and duration are bounded; opacity/transform are used for overlays and continuous marquee movement.

Latest layout refinement: About uses one continuous column at every width. Organization logos occupy centered 48px squares (44px on mobile), inset 12px within row headers. Lenis smooths wheel and section-link scrolling with lerp 0.12; touch remains native, reduced motion destroys the instance, and dialog body locks pause it. Section offsets come from scroll-margin-top.

Background: a static warm edge wash (#f2e6d9 / #f3e9df) fades into the neutral page center. It sits behind content, ignores pointer input, reduces opacity on mobile, and is omitted in print.

The fixed avatar occasionally shares a short, first-person thought in a plain white speech bubble. Its voice is playful and conversational: small research jokes, curiosity, and the occasional nod to following the cursor. Personal AI views stay clearly framed as opinions. One line of thought at a time, no typing effect or automatic screen-reader announcement. Bubbles remain for 7.5 seconds with 18–30 seconds of quiet between them, never repeat consecutively, and stop in background tabs. A separate thoughts control remembers muting for the browser session; reduced motion starts with thoughts off. Bubble surfaces let pointer clicks through to the CV. The More About Me button and panel have been removed.
