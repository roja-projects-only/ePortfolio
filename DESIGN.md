---
version: 1.0
name: beyond-limitations-reading-room
description: "A warm, light editorial monograph for a Philosophy of the Human Person ePortfolio. A warm off-white canvas, a serif reading voice (Source Serif 4) paired with a sans chrome voice (Inter), and a restrained three-hue accent system — blue for interaction, green for insight, gold for the turning point. Each hue is scarce, semantic, and darkened for legibility as ink on the light surface. The only saturated colour in the whole read appears in exactly two soft gradient spotlight panels: one green (the participants' featured quotation) and one gold (the closing commitments). Light is the single primary screen theme; it does not follow the OS dark-mode preference."

colors:
  canvas: "#f7f6f2"
  canvas-subtle: "#f1efe9"
  surface-1: "#ffffff"
  surface-2: "#f0eee8"
  surface-3: "#e7e4dc"
  hairline: "#d8d4ca"
  hairline-soft: "#e8e5de"
  ink: "#181817"
  ink-muted: "#5f5d58"
  ink-faint: "#85817a"
  accent: "#256fbd"
  accent-hover: "#1e5e9f"
  accent-soft: "rgb(37 111 189 / 0.10)"
  accent-ring: "rgb(37 111 189 / 0.28)"
  accent-green: "#2f7d52"
  accent-green-soft: "rgb(47 125 82 / 0.11)"
  accent-green-ring: "rgb(47 125 82 / 0.26)"
  accent-gold: "#9a6b13"
  accent-gold-soft: "rgb(154 107 19 / 0.12)"
  accent-gold-ring: "rgb(154 107 19 / 0.25)"
  insight-from: "#dff5e7"
  insight-via: "#c9ebd7"
  insight-to: "#a9d8bd"
  turning-from: "#f7edcd"
  turning-via: "#eddb9f"
  turning-to: "#d9bd6d"
  spotlight-ink: "#181817"
  spotlight-ink-soft: "rgb(24 24 23 / 0.66)"
  shadow-sm: "0 1px 2px rgb(24 24 23 / 0.05)"
  shadow-md: "0 8px 24px rgb(24 24 23 / 0.07)"
  shadow-lg: "0 18px 50px rgb(24 24 23 / 0.09)"

fonts:
  serif: "Source Serif 4 Variable"   # reading prose, headings, epigraphs, pull-quotes
  sans: "Inter Variable"             # navigation, labels, metadata, numerals, buttons

typography:
  display-2xl:
    fontFamily: serif
    fontSize: "clamp(2.6rem, 1.7rem + 3.8vw, 4.5rem)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.02em"
    use: Cover title, deepest section opener
  display-xl:
    fontFamily: serif
    fontSize: "clamp(2.1rem, 1.5rem + 2.6vw, 3.25rem)"
    fontWeight: 520
    lineHeight: 1.05
    letterSpacing: "-0.018em"
    use: Section (h1) titles
  display-lg:
    fontFamily: serif
    fontSize: "clamp(1.65rem, 1.35rem + 1.4vw, 2.25rem)"
    fontWeight: 560
    lineHeight: 1.14
    letterSpacing: "-0.015em"
    use: Sub-section headings, concept/theme titles
  display-md:
    fontFamily: serif
    fontSize: "clamp(1.3rem, 1.15rem + 0.7vw, 1.6rem)"
    fontWeight: 600
    lineHeight: 1.22
    letterSpacing: "-0.01em"
    use: Card titles, small headings, pull-quotes
  lead:
    fontFamily: serif
    fontSize: 1.2rem
    lineHeight: 1.6
    use: Standfirsts, lead paragraphs
  reading:
    fontFamily: serif
    fontSize: 1.0625rem
    lineHeight: 1.72
    use: Default long-form reading prose
  label:
    fontFamily: sans
    fontSize: 0.78rem
    letterSpacing: "0.02em"
    use: Nav labels, captions, metadata values
  kicker:
    fontFamily: sans
    fontSize: 0.72rem
    letterSpacing: "0.16em"
    transform: uppercase
    use: Chapter marks, over-line labels, eyebrows

radius:
  xs: 4px
  sm: 6px
  md: 10px
  lg: 14px
  xl: 20px
  2xl: 28px
  pill: 999px

spacing:
  measure: 66ch          # reading column
  measure-tight: 54ch
  sidebar: 17rem
---

## Overview

The portfolio is a warm, light editorial monograph rendered for screen — a
university-press reading surface, not a dashboard or a marketing page. The
canvas is a warm off-white `{colors.canvas}` throughout on every route (print
gets its own, still-distinct black-on-white sheet). White and warm-neutral
panels sit on the canvas; on top of it sits a serif reading voice for the
writing itself and a sans voice for the interface chrome. Light is the single
primary screen theme — it does not follow the OS dark-mode preference.

The whole experience is **routed**, not a single scroll: eleven sections, each
its own URL and its own composition, joined by a persistent numbered table of
contents (a left sidebar on desktop; a top bar plus a focus-trapped drawer on
tablet and mobile). Reading happens *inside* a chosen section; navigation moves
between them.

**Key characteristics**

- Warm light editorial canvas — `{colors.canvas}` on every route; print excepted.
  Depth comes from surface tone and hairlines, not heavy shadow.
- Two type voices on a contrast axis: **serif** (`{fonts.serif}`) for reading,
  **sans** (`{fonts.sans}`) for chrome. No same-genre font pairing.
- Accent triad, each scoped to one role: **blue** interaction, **green**
  insight, **gold** turning point. Never mixed for decoration; no fourth hue.
- Exactly **two gradient spotlight panels** in the entire portfolio — one green
  (the participants' featured quotation, in Voices) and one gold (the closing
  commitments). A third would flatten the device into decoration.
- No side-stripe borders; variant identity is carried by icon/glyph colour,
  surface elevation, or a leading numeral — never a coloured `border-left`.

## Colors

> Source of truth: `src/index.css` `@theme` tokens.

### Accent triad (scarce, semantic)

- **Blue** (`{colors.accent}`) — interaction only: links, focus rings, the
  active table-of-contents entry (blue text on a pale-blue `accent-soft` pill),
  progress fill, and the one sanctioned decorative use — the quotation glyph on
  secondary quotes. ~4.8:1 as text on canvas (AA). Never a saturated background
  fill; `accent-soft` is the only blue *tint*.
- **Green** (`{colors.accent-green}`) — insight / participant voice: darkened
  to `#2f7d52` for the light surface; carries the single `insight` gradient
  spotlight (`-soft`/`-ring` are available for a future insight indicator).
  ~4.7:1 as text on canvas.
- **Gold** (`{colors.accent-gold}`) — reflection / commitment: darkened to
  `#9a6b13` for the light surface; carries the single `turning` gradient
  spotlight. ~4.7:1 as text on white; use on a panel surface rather than tiny
  text on the raw canvas, where it measures ~4.3:1.

If a fourth chromatic accent starts to feel necessary, that is a sign the system
is drifting, not an opportunity.

### Surface & ink

Hierarchy on the light canvas is carried by **surface tone**
(`canvas → surface-1 (white) → surface-2 → surface-3`), **hairline borders**,
and **ink value** (`ink → ink-muted → ink-faint`) — not by heavy shadow. Cards
are generally white (`surface-1`) against the warm canvas, defined by a
`hairline` border; shadow is reserved for genuinely floating chrome (the drawer,
dialogs) and the two spotlights. `{colors.ink-muted}` (~6:1 on canvas) is a real
dark grey — never "light grey" — and carries all reading prose and secondary
labels, clearing AA comfortably. `{colors.ink-faint}` (~3.6:1) is reserved for
**tertiary, non-essential** marks only — large section numerals and quiet
decorative labels — never reading body or essential small copy.

### Gradient spotlights (signature, exactly two)

The two gradients are the only saturated fills in the read, and the only
gradients anywhere (navigation, cards, buttons, headings, and image frames stay
flat). Both are **soft, light** sweeps set with **near-black text**
(`{colors.spotlight-ink}`, the same `ink`) — white text would be unreadable on
these pale fields, whereas near-black clears ≥9:1 on every stop. The green sweep
(`insight-from → insight-via → insight-to`, a 135° soft mint) wraps the
participants' featured quotation in Voices; the gold sweep (`turning-*`, a 135°
soft wheat) wraps the closing commitments. Each carries a subtle `shadow-md`
and a `hairline` ring for definition against the canvas. Nothing else in the
portfolio may introduce a third gradient.

## Typography

Two families on a genuine contrast axis:

- **`{fonts.serif}`** — the reading voice. Warm, serious, optically sized;
  carries the long-form philosophical writing, the display headings, epigraphs,
  and pull-quotes. Reading prose runs at `{typography.reading}` with a generous
  1.72 line-height — the extra air suits long reflective passages.
- **`{fonts.sans}`** — the chrome voice. Navigation labels, chapter numerals,
  metadata, captions, and buttons. Kept small and quiet so it never competes
  with the reading.

Both are self-hosted, open-source variable fonts (via `@fontsource-variable`).
The DESIGN.md that shipped earlier documented a proprietary display face
(GT Walsheim) that was never in the project; that has been replaced with this
real, legally usable stack.

Display letter-spacing stays gentle (≥ -0.02em) because serifs break up under
the aggressive negative tracking a geometric sans can take.

## Layout & spacing

- One reading column per route, held to `{spacing.measure}` for prose; composed
  sections (participants, findings, references) widen to a 5xl container while
  the prose within stays at measure.
- Vertical rhythm is generous and fluid; **no section is forced to a fixed
  viewport height**. Pages scroll naturally when content needs the room.
- Desktop reserves `{spacing.sidebar}` on the left for the table of contents
  (collapsible to a compact numeral rail). Below `lg`, the sidebar is replaced
  by a top bar and a drawer.

## Components

- **Sidebar / MobileTopBar / NavDrawer** — the routed table of contents, all on
  light surfaces. Active entry: blue text on a pale-blue `accent-soft` pill
  (colour *and* tint, since "current section" must be unambiguous). The drawer
  is a white panel with a subtle `shadow-lg` over a light `ink/25` scrim; it
  traps focus, closes on Escape, locks background scroll, and restores focus to
  its trigger.
- **SectionHeader** — one `h1` per route, with a `kicker` chapter mark and an
  optional serif standfirst.
- **Prose / PullQuote / Figure** — reading primitives. Figure degrades to an
  accessible placeholder until a real, permission-approved photograph is added;
  alt text and captions never disclose an identity.
- **Spotlight** — the two-instance gradient device (above).
- **QuoteBlock, ParticipantCard, ProcessTimeline, ThemeEntry, ConceptPanel,
  ReflectionArcView** — section-specific content components, each avoiding the
  uniform-card reflex.

## Responsive

Breakpoint switch at `lg` (1024px): persistent sidebar above, top bar + drawer
below. Everything is rem/`clamp()`-based and reflows to 200% zoom without
horizontal overflow or clipping. Reduced motion is honoured everywhere (a global
media query plus per-component fallbacks).

## Print

Screen chrome (`[data-chrome]`, nav, buttons, dialogs) is dropped; the reading
content reflows as a clean black-on-white document with visible link URLs and
sensible page breaks. Even though the screen theme is now light, print remains a
**dedicated sheet** — pure white, `#111` ink, no canvas tint, no shadows or
gradients — tuned for paper rather than a screenshot of the interface.

## Do / Don't

**Do** — keep the warm light canvas consistent on every route; prefer borders and
surface tone over shadow; scope each accent to one meaning; keep the two
spotlights scarce; carry variant identity through glyph colour or surface tone;
hold prose to measure; keep AA+ contrast on any accent used as text.

**Don't** — reintroduce a dark canvas or alternate dark/light chapters; follow
the OS dark-mode preference; add a fourth accent; use any accent as a saturated
section/card fill outside the two spotlights; put a dark overlay on a photograph;
scatter drop-shadows to make a dashboard; add a `border-left` stripe; drop
contrast below AA to "calm" a colour (darken/desaturate the token instead).
