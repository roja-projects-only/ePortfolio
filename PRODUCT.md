# Product

## Register

product

## Platform

web

## Users

The primary reader is a Philosophy teacher evaluating a student's performance task. They read carefully, line by line, looking for depth of reflection, evidence of genuine engagement with the participant, and clear philosophical reasoning. Reading happens on a laptop or tablet screen, likely in a grading workflow — multiple portfolios in sequence, sustained attention, content-first scanning.

The secondary user is the student author. They edit `portfolioData.ts` to insert their reflections, quotations, and analysis. The editing experience is a TypeScript file, not a CMS. The component architecture must remain predictable and easy to navigate.

## Product Purpose

A static, deployable ePortfolio template for the Philosophy of the Human Person performance task: "Beyond Limitations: A Philosophical Reflection on the Lived Experiences of Persons with Disability." The product provides a polished, editorially structured reading experience that guides the teacher through eight required sections — cover, introduction, community engagement, interview highlights, philosophical reflection, personal reflection, conclusion, and references — in a coherent narrative arc.

Success means the teacher can read the entire portfolio in one sitting without friction, the content hierarchy is self-evident, and the design never competes with the student's writing for attention.

## Positioning

Guided reflection structure. Unlike a plain essay or Google Doc, the portfolio frames the philosophical journey as a structured narrative — each section builds on the last, and the design guides the reader through a coherent arc of thought. The layout teaches the reader where they are in the progression and what kind of thinking each section invites.

## Brand Personality

Calm, thoughtful, authoritative.

The portfolio reads like a well-set university press monograph — restrained, serious, but not cold. There is no spectacle. The design disappears into the reading. Hierarchy is communicated through proportion and whitespace, not decoration. The visual tone says "this student took the work seriously" without needing to announce it.

## Anti-references

- **No startup/SaaS marketing aesthetic.** No gradient hero sections, animated counters, pricing-card layouts, pill-shaped CTAs, or "modern product" chrome.
- **No disability tropes.** No soft-focus photography, "overcoming adversity" hero imagery, sentimental color palettes, or inspiration-porn framing. The participant is not a prop.
- **No generic student-template energy.** No default academic themes, clip art, primary-colored headers, or "cute classroom project" styling.

## Design Principles

**Content guides, design follows.** Every visual decision must serve comprehension. If a design element doesn't help the reader understand the material better, it doesn't belong.

**Structure is pedagogy.** The section progression — the numbering, the spacing, the transition between reflection categories — teaches the reader how to engage with the content. The layout is part of the curriculum.

**Dignity by default.** Privacy controls (participant alias, optional location, quote permission flags) are built into the content model, not just mentioned in instructions. The design must treat the participant with respect at every layer.

**Quiet authority.** Competence is conveyed through restraint — proper measure, considered type, generous whitespace. The portfolio earns attention through clarity, not decoration.

**AAA as ambition.** Target WCAG 2.1 AAA wherever it doesn't degrade the reading experience. Higher contrast ratios (7:1+), generous line spacing, large-enough type, and unfailing keyboard access.

## Accessibility & Inclusion

Target WCAG 2.1 Level AAA where feasible. The baseline is AA across all pages, with AAA pursued for:

- Contrast: minimum 7:1 for body text against background
- Text spacing: comfortable line height (≥1.5 for body), paragraph spacing, no justified text
- Focus indicators: visible, high-contrast, never suppressed
- Reduced motion: all animations gated behind `prefers-reduced-motion`
- Print: clean, readable, with proper page breaks and visible URLs
- Keyboard: every interactive element reachable and operable without a mouse
- Screen reader: semantic heading hierarchy, aria-labelledby on sections, skip link
