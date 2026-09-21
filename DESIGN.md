---
name: Dave Maxuell CV
description: MonoCV reference adapted to Dave's research portfolio
colors:
  page: '#f6f6f6'
  surface: '#fefefe'
  ink: 'rgba(0,0,0,.94)'
  body: 'rgba(0,0,0,.74)'
  line: 'rgba(0,0,0,.12)'
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

User-pinned reference: https://monocv.framer.website/. Measured in Playwright on 2026-09-21. Dave's content, portrait, official organization logos, and requested Rive pet are retained. The reference is the visual authority, not the prior oversized dashboard styling.

## Colors

Page #f6f6f6, surfaces #fefefe, primary text black at 94%, secondary text black at 74%, rules black at 12%. Restrained green marks availability and recognition. Original organization artwork keeps its own colors.

## Typography

General Sans 500: name 24px/1.2 (22px mobile), badges 14px/1.2 with .02em tracking, entry titles 16px/1.2. Inter Display 400: body 16px/1.6 with .02em tracking, secondary text 14px/1.4, dates 12px/1.3. Controls use Inter Display 500/600. Actual webfonts are hosted locally with source/license records in public/fonts. Mobile retains the reference's body, badge, and row-title sizes. Font synthesis is disabled.

## Layout

Desktop at 1200px and above: max-width 1200px outer grid, 40% profile and 60% content columns. A 200px profile sits 30px before the reading column, starting 42px down. Main content is 500px wide and starts 56px down. At 1440px, profile x370 and content x600 match the reference. Sections have 56px gaps; badges precede content by 32px.

Tablet 810–1199px: a centered 570px horizontal profile/contact header, columns 380px/180px with a 10px gap, 28px top inset. Centered 550px content begins 34px below the header. At 810px, content x130 matches the reference.

Mobile below 810px: horizontal portrait/name card with a menu for contact links and actions. Single-column content with 14px gutters. Pet appears after the contact section on every screen size, without a surrounding card. At 320px, row dates move below titles when necessary.

## Elevation & Depth

Small surfaces use 0 2px 8px 1px rgba(0,0,0,.04). Expandable rows have a 1px dashed outline. No large dashboard cards or floating deployment instructions. Dialog depth is a plain dark overlay and restrained shadow.

## Shapes

8px card corners and outlined, unfilled section badges. Profile portrait is 180×193.55px desktop, 134×164px tablet, and 126×154px mobile. Project cards are 230px wide with a 10px carousel gap.

## Components

- Experience/education rows start closed, with an organization logo, title, role, date, and rotating chevron. Long names truncate only when closed; opening reveals the full name and all details.
- Skills are simple white chips; selecting one expands the original category details.
- Tech stack uses standalone real marks and moves at 30px/second, with hover/focus, visibility, and manual pause. Reduced motion shows a static list.
- Projects use plain text cards with dates, titles, descriptions, and a detail link. They scroll with touch or previous/next controls. No invented preview artwork or placeholder tiles. Details use a plain document layout with bullet lists, not icon boxes and tag pills.
- Publications use the same expandable vocabulary; recognition has a thin green rule and dotted leaders.
- Contact is an unboxed form that opens an email draft, explicitly avoiding a false delivery claim.
- Page entrance is an opacity-only 400ms reveal with the reference's measured spring curve. Accordion height uses a 400ms spring; chevron rotation shares that curve. Hover changes stay small. Reduced motion suppresses nonessential animation.
- Rive keeps attribution, Play/Pause, reduced-motion preview, and offscreen/background suspension. Dialogs trap focus, close on Escape, and restore focus.

## Do's and Don'ts

Preserve all substantive CV data and keep it discoverable through expansions, dialogs, and CV export. Match the reference's exact typefaces and three responsive arrangements. Do not introduce fabricated testimonials, backend delivery confirmations, large highlight grids, or unrelated decorative animation.

The mechanical detector's generic warnings about Inter and spring easing are intentional exceptions: both are explicitly required by the user's reference and verified from its live styles/animation frames.
