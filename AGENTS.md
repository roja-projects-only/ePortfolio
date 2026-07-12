## Project Identity

This repository is a static React ePortfolio for the Philosophy of the Human Person performance task:

> **Beyond Limitations: A Philosophical Reflection on the Lived Experiences of Persons with Disability**

The final output is a polished, responsive, GitHub Pages-hosted ePortfolio website.

This is not a backend application, dashboard, CMS, or form-based system. Keep it static, lightweight, and easy for a student to edit after completing the interview.

---

## Primary Source of Truth

`DESIGN.md` is the mandatory visual and UX source of truth.

Before changing or implementing UI:

1. Read `DESIGN.md` completely.
2. Follow its visual direction, layout rules, components, spacing, typography, colors, animation rules, and responsive guidance.
3. Do not replace its design direction with generic dashboard UI, default Tailwind styling, or personal preferences.
4. When implementation details are unclear, preserve the intent of `DESIGN.md` and choose the simplest maintainable solution.

Do not modify `DESIGN.md` unless explicitly instructed.

---

## Required Portfolio Structure

The website must include these sections in this exact order.

Do not rename, merge, remove, reorder, or add replacement sections.

1. **Cover Page**
   - Project title
   - Student name
   - Grade and Section
   - Subject
   - Date

2. **Introduction**
   - Purpose of the activity
   - Brief explanation of phenomenology
   - Why listening to lived experiences matters

3. **Community Engagement**
   - Brief participant description without revealing confidential information
   - Date and place of interview
   - Ethical-conduct reflection

4. **Interview Highlights**
   - Summary of the participant's responses
   - Significant quotations, only with permission
   - Important insights gained

5. **Philosophical Reflection**
   - What was learned about being human
   - Social realities revealed
   - Previous beliefs challenged
   - Human dignity
   - Freedom
   - Empathy
   - Transcendence
   - How society can become more inclusive

6. **Personal Reflection**
   - Limitations, biases, or assumptions before the interview
   - How the interview transformed understanding
   - Concrete actions to promote inclusion

7. **Conclusion**
   - Summary of learning
   - Why philosophical reflection matters in understanding persons and communities

8. **References**
   - Interview as personal communication
   - Other references, if applicable

---

## Content Integrity Rules

This project is a real template, not a generator of fake schoolwork.

Never create or insert:

- invented interview answers
- fabricated participant stories
- fake quotations
- AI-written philosophical reflections
- AI-written personal reflections
- made-up interview dates, locations, names, or references
- placeholder content that looks like a completed student response

Use intentional, clearly editable placeholders only.

Examples:

```txt
[Student Name]
[Interview Date]
[Write your response here.]
[Insert approved quotation here.]
[Add reference]
````

The UI must already look complete and premium even while placeholders are present.

---

## Privacy and Ethics Requirements

The portfolio discusses the lived experiences of a Person with Disability or a related participant. Treat all content with respect.

* Do not require real names.
* Use participant aliases by default.
* Do not expose exact addresses, private medical details, phone numbers, or other identifying information.
* Quotes must support a permission flag.
* Participant photos must be optional and disabled by default.
* Do not use pity-based, stereotypical, exploitative, or overly medical disability imagery.
* Do not assume a participant’s feelings, challenges, abilities, or lived experience.

Privacy must be handled through the content model, not only through written reminders in the UI.

---

## Technical Scope

### Required Stack

* React
* Vite
* TypeScript
* Tailwind CSS
* Static deployment only
* GitHub Pages compatible

### Explicitly Out of Scope

Do not add:

* backend services
* authentication
* databases
* API routes
* CMS integration
* payment systems
* analytics unless explicitly requested
* unnecessary state-management libraries
* unnecessary UI libraries
* heavy animation packages

Use Lucide React only when icons are genuinely needed.

---

## Content Architecture

All editable portfolio content must be centralized.

Preferred location:

```txt
src/content/portfolioData.ts
```

Components must render content from this file rather than hardcoding text inside JSX.

The data model should support:

* student metadata
* participant alias
* general participant description
* optional interview date
* optional interview location
* privacy visibility controls
* ethical-conduct items
* multiple interview highlights
* optional quotations
* quote permission state
* philosophical reflection categories
* personal reflection categories
* multiple concrete action items
* references
* optional image fields disabled by default

Keep content types explicit and easy to understand.

---

## Preferred Project Structure

Use a maintainable structure close to this:

```txt
src/
  components/
    layout/
    navigation/
    portfolio/
    ui/
  content/
    portfolioData.ts
  hooks/
  lib/
  styles/
  types/
  App.tsx
  main.tsx
```

Suggested reusable components:

```txt
PortfolioNavigation
PortfolioSection
SectionHeading
ContentPlaceholder
QuoteCard
InsightCard
ReflectionPanel
ReferenceList
PrintHeader
Footer
```

Do not over-engineer. Prefer small, reusable components with clear responsibilities.

---

## UX Requirements

The portfolio must feel like a designed ePortfolio, not a sequence of plain text fields.

Required behavior:

* One-page scroll experience
* Clear section progression
* Desktop navigation
* Mobile navigation
* Smooth scrolling
* Reduced-motion support
* Keyboard-accessible navigation
* Semantic heading hierarchy
* Good color contrast
* Readable text width
* Responsive layouts for mobile, tablet, laptop, and desktop
* No horizontal overflow
* Clear focus states
* Respectful, calm visual tone
* Print-friendly styles for PDF export

Each section should have a distinct layout purpose while remaining visually consistent.

Examples:

* Cover Page: immersive introduction with metadata
* Introduction: guided editorial reading layout
* Community Engagement: participant context and ethics cards
* Interview Highlights: summaries, insights, and permission-aware quote cards
* Philosophical Reflection: structured concept panels
* Personal Reflection: before → interview → after progression
* Conclusion: focused closing layout
* References: clean academic citation layout

---

## Styling Rules

* Follow `DESIGN.md` first.
* Avoid generic SaaS dashboard styling.
* Avoid excessive gradients.
* Avoid visual clutter.
* Avoid random decorative elements.
* Avoid large blocks of dense text.
* Avoid browser-default controls when custom accessible components are appropriate.
* Do not add animations unless they support hierarchy, comprehension, or polish.
* Respect `prefers-reduced-motion`.
* Keep the experience professional, reflective, human-centered, and accessible.

---

## Installed Skills

Skills are located under:

```txt
.agents/skills/
```

Before UI, architecture, or implementation work:

1. Inspect the available skill folders.
2. Read the relevant `SKILL.md` files completely.
3. Apply their rules during implementation.
4. Do not assume a skill’s instructions based only on its folder name.

Known skills visible in this workspace:

| Skill                         | Intended Use                                                                                                                       |
| ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `frontend-design`             | Frontend visual design, layout quality, component presentation, responsive implementation, and polished UI decisions.              |
| `ui-ux-pro-max`               | Higher-level UI/UX planning, interaction quality, usability, hierarchy, accessibility, and premium product experience.             |
| `vercel-react-best-practices` | React and Vite implementation quality, performance, maintainability, component patterns, and deployment-friendly practices.        |
| `vercel-react-native-skills`  | React Native guidance. This project is web-only, so do not use this skill unless a task specifically introduces React Native work. |

The actual `SKILL.md` contents are authoritative. Re-scan `.agents/skills/` before work because the visible list may not be complete.

---

## GitHub Pages Requirements

The project must be ready for GitHub Pages deployment.

* Keep the app fully static.
* Ensure the Vite `base` path is simple to configure for repository deployment.
* Include a GitHub Actions deployment workflow under:

```txt
.github/workflows/deploy.yml
```

* Build output must deploy from `dist`.
* Do not hardcode a repository name.
* Document how to update the Vite base path before deployment.
* Include concise setup and deployment instructions in `README.md`.

---

## Validation Checklist

Before considering work complete, verify:

1. TypeScript has no errors.
2. Production build succeeds.
3. All eight required sections exist in the required order.
4. No AI-generated student content was inserted.
5. The content file controls all editable portfolio data.
6. The website works after build without network access.
7. Mobile layout has no horizontal overflow.
8. Navigation works with keyboard.
9. Reduced-motion behavior is respected.
10. Print output is readable and organized.
11. Privacy-sensitive content is optional and protected by default.
12. `DESIGN.md` and applicable skills were followed.

---

## Working Rules

* Inspect before changing.
* Keep changes scoped.
* Prefer simple, maintainable solutions.
* Do not silently change project requirements.
* Do not introduce dependencies without clear benefit.
* Do not modify unrelated files.
* Explain important assumptions in the final report.
* Do not commit unless explicitly requested.
