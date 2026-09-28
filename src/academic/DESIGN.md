---
name: Dave Maxuell academic profile
description: Research profile following the user-selected Hoyeon Chang reference
colors:
  page: '#ffffff'
  ink: '#202020'
  body: '#363636'
  muted: '#626262'
  accent: '#a7430b'
  line: '#e8e8e8'
typography:
  display:
    fontFamily: Roboto
    fontSize: 40px
    fontWeight: 700
  body:
    fontFamily: Roboto
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.6
---

## Overview

Read mode: an academic record in an ordinary desktop or mobile browser. White paper, dark text, and quiet orange links provide legibility. The user-pinned reference https://hoyeonchang.github.io/ supplies the composition and typography; Dave's content supplies every fact.

## Colors

White canvas, charcoal text, accessible gray metadata, orange links and achievements. No gradients, card backgrounds, shadows on content, or decorative section rules. Organization and technology logos keep their original colors.

## Typography

Self-hosted Roboto variable font. Name 40px/1.2 bold, section headings 30px/1.3 light, entry titles 16px/1.5 medium, body 16px/1.6 regular, supporting text 14px/1.6. Body weight is slightly stronger than the reference for legibility. The name drops to 34px on phones.

## Layout

Centered 960px reading column with 24px minimum side gutters. A 60px fixed white navigation bar has social/CV links at left and in-page navigation at right. The introduction has a 250px square portrait floating right, with prose beside and below it. On phones the portrait becomes a centered block before the biography; the navigation collapses behind an accessible menu button.

Education and experience use a 180px date column and a flexible text column. Below 600px dates move above the entry, stay on one line, and content uses the full width. Key roles, publication titles, awards, acceptance status, project summaries, and source links remain visible. Detailed evidence uses plain native disclosures. Section gaps are 44px; entry gaps are 22px.

## Elevation & Depth

The navigation has a light bottom border. No content cards or modal layers. The portrait has 3px corners.

## Components

- Publications appear newest year first and show title, author role, venue, acceptance/award, contribution, and source links. Abstracts and detailed results remain in a disclosure.
- Organization marks are 22px inline with their names.
- Projects form a vertical list, with app, repository, and leaderboard links.
- Skills use simple disclosures; curated brand logos form a static labeled row.
- Contact uses email/phone links, the Google Doc CV, and interactive portfolio.
- The existing Lenis hook handles smooth scrolling, reduced motion, and native touch scrolling. Content appears immediately.

## Do's and Don'ts

Keep facts shared with the portfolio. Preserve substantive details in entries or disclosures. Never borrow the reference author's biography or achievements. The avatar and animated tech strip belong to the interactive portfolio; this academic surface uses a quiet reading layout.
