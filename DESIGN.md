---
name: Reports Analyzer
description: Turns a patient's own medical report into a plain-language explanation, term by term.
colors:
  ink-navy: "#0b1526"
  ink-navy-deep: "#060a14"
  ink-navy-tint: "#e7ecf5"
  teal-accent: "#0d84c4"
  teal-accent-hover: "#0a6a9d"
  teal-accent-tint: "#e2f2fa"
  ember-orange: "#f0740c"
  ember-orange-hover: "#d0620a"
  ember-orange-tint: "#fef0e2"
  ok-green: "#15803d"
  warn-amber: "#b3540a"
  alert-red: "#b3261e"
  info-blue: "#095e8a"
  paper-bg: "#f6f8fb"
  surface-white: "#ffffff"
  surface-inset: "#eef2f9"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(2.15rem, 1.55rem + 2.7vw, 4.2rem)"
    fontWeight: 700
    lineHeight: 1.18
    letterSpacing: "-0.01em"
  h1:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "clamp(1.9rem, 1.4rem + 2.0vw, 2.85rem)"
    fontWeight: 700
    lineHeight: 1.18
  body:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 600
    letterSpacing: "0.04em"
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  pill: "999px"
spacing:
  1: "4px"
  2: "8px"
  3: "12px"
  4: "16px"
  5: "24px"
  6: "32px"
  7: "48px"
  8: "64px"
components:
  button-primary:
    backgroundColor: "{colors.teal-accent}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.teal-accent-hover}"
  card:
    backgroundColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
---

# Design System: Reports Analyzer

## Overview

**Creative North Star: "The Clinical Instrument Panel"**

Reports Analyzer reads like a precise, trustworthy piece of medical instrumentation rather than a consumer wellness app: deep ink-navy grounds carry authority, a single teal accent marks the one next step on any given screen, and a warm ember-orange highlight is reserved for drawing the eye to a flagged value or a secondary point of emphasis. The palette is adapted from the parent brand (beyondchats.com) — colour only, not layout or composition, which were deliberately built independent of that reference. One grotesk sans (Plus Jakarta Sans) carries both display and body type; there is no serif anywhere in the system. Corners are mostly small and precise (8–16px) except where a control benefits from a fully pill-shaped edge (buttons, status flags, chips) — the pill is a control affordance, not a decorative default applied to cards or sections.

**Key Characteristics:**
- Deep navy ground for chrome and hero surfaces; warm paper-white for content surfaces — never a single ground colour sitewide.
- One accent (teal) for actions, kept strictly separable from the semantic "ok" green and the secondary ember-orange highlight.
- Real data encoded visually (range-bars with a marker dot, colour-coded status dots) rather than decorative gauges or sparklines standing in for content.
- No serif, no mixed type families, no lifestyle photography — geometry, real UI, and one authored motion sequence carry the polish.

## Colors

The palette reads as instrument-panel navy warmed by one confident teal accent, with ember-orange held in reserve for a single flagged emphasis.

### Primary
- **Ink Navy** (`#0b1526`): the chrome colour — header, footer, and the hero section's dark ground. Carries authority; used for large fields, never as a small accent.

### Secondary
- **Teal Accent** (`#0d84c4`): the only "next step" colour on the page — primary buttons, links inside body copy, the primary flag-marker colour. Hover state `#0a6a9d`.
- **Ember Orange** (`#f0740c`): a clearly-distinct secondary highlight, reserved for a single flagged/notable value (e.g. a "HIGH" range-bar marker) so it never competes with the teal accent for the visitor's attention.

### Neutral
- **Paper Bg** (`#f6f8fb`): the page ground for light sections — a cool off-white, never pure white.
- **Surface White** (`#ffffff`): cards and panels floating on the paper ground.
- **Surface Inset** (`#eef2f9`): subtle alternating-section ground, zebra rows.
- **Ink** (`#0f1b2d` on light / `#f5f9fc` inverted on dark): body text.
- **Muted** (`#5b6a80` on light / `#a7b6cc` inverted on dark): secondary text, captions.

### Named Rules
**The One Accent Rule.** Teal is the only colour that means "do this." Ember-orange marks emphasis or a flagged value, never an action; if both appear on a control, the interface has stopped meaning anything.

## Typography

**Display Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)
**Body Font:** Plus Jakarta Sans (with system-ui, sans-serif fallback)

**Character:** One grotesk sans, deployed at very different weights and scales rather than paired with a second family — headline weight (700) carries the authority a serif would elsewhere, while body stays at regular weight and a comfortable 1.65 line-height for scanability.

### Hierarchy
- **Display** (700, `clamp(2.15rem, 1.55rem + 2.7vw, 4.2rem)`, 1.18): the home hero headline only.
- **H1/H2/H3**: `clamp(1.9rem…2.85rem)` / `clamp(1.5rem…2.05rem)` / `clamp(1.2rem…1.45rem)`, all 700 weight, 1.18–1.24 line-height. One `<h1>` per page.
- **Body** (400, 1rem, 1.65 line-height): capped at a 64ch reading measure. Full-width paragraphs are a bug.
- **Label** (600, 0.8125rem, 0.04em tracking, uppercase): section eyebrows and table column headers only — at most one per section.

### Named Rules
**The No-Serif Rule.** Nothing in this system loads a second (serif) family. Authority comes from weight and scale within the one grotesk, not from a second voice.

## Layout

Section rhythm uses `--section-y` (`clamp(48px, 7vw, 96px)`) between bands, inner content capped at `--maxw` (1180px), page padding fluid via `--pad-x` (`clamp(18px, 4vw, 42px)`). Sections alternate ground colour (paper / inset / navy) — never more than two consecutive sections share a ground. Mobile-first: single column below the `--maxw` breakpoint, cards and grids collapse to stacked blocks. Tap targets stay at a 44px minimum (`--tap-min`).

## Elevation & Depth

Hybrid: flat surfaces at rest, real layered shadow on floating cards that need to visually separate from a section ground (the hero's report-preview card, the sample-analysis card). Shadows are never decorative on inline elements — no glow, no zero-offset halo.

### Shadow Vocabulary
- **`--shadow-sm`** (`0 1px 2px rgba(11,21,38,.06), 0 2px 6px rgba(11,21,38,.05)`): subtle separation, small controls.
- **`--shadow-md`** (`0 4px 14px rgba(11,21,38,.08), 0 12px 34px rgba(11,21,38,.09)`): standard card elevation.
- **`--shadow-lg`** (`0 12px 34px rgba(11,21,38,.12), 0 34px 74px rgba(11,21,38,.16)`): the hero card and sample-analysis card — surfaces floating over the dark or inset ground that need to read as clearly foreground.

### Named Rules
**The Earned Shadow Rule.** `--shadow-lg` is reserved for the one or two surfaces per page that are genuinely the focal object floating over a different-coloured ground; using it on every card flattens the hierarchy it exists to create.

## Shapes

Two distinct corner languages by role: content surfaces (cards, panels, table cells) use `--r-md`/`--r-lg` (12–16px) — precise, not toy-like; interactive controls that benefit from a fully rounded edge (buttons, status/flag chips) use `--r-btn` (999px, true pill). A card is never itself pill-shaped; a button is never merely `--r-lg`-rounded.

## Components

### Buttons
- **Shape:** full pill (`999px`).
- **Primary:** teal fill (`#0d84c4`), white text, generous horizontal padding.
- **Hover:** darkens to `#0a6a9d`, small `translateY(-2px)` lift with matching shadow — the one authored micro-interaction on this control.
- **Secondary / Ghost:** outline or text-only in ink-navy or teal, same pill shape, no fill.

### Cards / Containers
- **Corner style:** `--r-lg` (16px).
- **Background:** `--surface` (white) on light or inset grounds.
- **Shadow strategy:** `--shadow-lg` when floating over a contrasting ground (hero, sample analysis); `--shadow-md` or flat otherwise.
- **Border:** none by default — elevation carries separation, not a border-plus-shadow combination ("the ghost card").

### Range Bar (signature component)
A horizontal track with a low/normal/high zone and a coloured marker dot positioned by the real computed value — genuine data encoding, not a decorative gauge. Marker colour follows the semantic/accent set (teal/green for in-range, ember-orange for a flagged value). Used in the hero card and the sample-analysis section wherever a lab value needs to show its position in range at a glance.

### Status Chip
A small pill carrying a coloured dot plus a short label (test name or flag word). Colour is semantic (ok/warn/info), never decorative. Wraps freely on narrow widths.

### Navigation
Focused header only: brand mark + name, one link ("Talk to us" as a filled pill button), no full site navigation. Sticky, `--header-h` (64px).

## Do's and Don'ts

### Do:
- **Do** keep teal as the only action colour; ember-orange marks emphasis, never a clickable action.
- **Do** use the range-bar / status-chip pattern for any new lab-value display — it is this system's answer to "how do we show a number visually" and should not be reinvented per-section.
- **Do** alternate section grounds (paper / inset / navy) and cap at two consecutive sections sharing a ground.
- **Do** keep body copy short — this system favours visual encoding (bars, chips, colour) over paragraphs wherever the two can carry the same information.

### Don't:
- **Don't** introduce a second typeface, serif or otherwise.
- **Don't** use a progress ring or sparkline as decoration — only the range-bar's real marker-at-a-real-value pattern is sanctioned for encoding a number visually.
- **Don't** apply `--r-btn` (pill) to a card, panel, or table cell — pill shape is reserved for controls and chips.
- **Don't** use em-dashes or hedged AI-writing patterns in reader-facing copy.
