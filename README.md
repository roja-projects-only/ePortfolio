# ePortfolio — Philosophy of the Human Person

> "Beyond Limitations: A Philosophical Reflection on the Lived Experiences of Persons with Disability"

A React + TypeScript digital portfolio for a Philosophy of the Human Person performance task. This project provides a polished, editorial template with editable content architecture — all student-written reflections, interview highlights, and philosophical analysis are inserted through a single content file.

## How to Run Locally

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:5173/`.

## How to Edit Content

All portfolio content lives in one file:

**`src/content/portfolioData.ts`**

1. Open the file
2. Replace every `[bracketed]` placeholder with your actual content — responses, quotations, reflections, actions, and references
3. Save — the app hot-reloads immediately

Content that starts with `[` is automatically shown as a placeholder with distinct visual styling. Once you replace it with real text, the placeholder styling disappears.

## How to Deploy to GitHub Pages

1. Push the `main` branch to your GitHub repository
2. GitHub Actions will automatically build and deploy the site
3. **Important:** Update `base` in `vite.config.ts` to match your repository name:
   - For `github.com/username/ePortfolio`, use `base: "/ePortfolio/"`
   - For a user site (`username.github.io`), use `base: "/"`
4. In your repository, go to **Settings → Pages → Build and deployment → Source** and select **"GitHub Actions"**

The site will be live at `https://username.github.io/ePortfolio/`.

## Portfolio Structure (8 Required Sections)

| # | Section | Description |
|---|---|---|
| 1 | Cover Page | Project title, student name, grade/section, subject, date |
| 2 | Introduction | Purpose of the activity, phenomenology, why listening matters |
| 3 | Community Engagement | Participant description, interview details, ethical reflection |
| 4 | Interview Highlights | Response summaries, approved quotations, key insights |
| 5 | Philosophical Reflection | Being human, social realities, dignity, freedom, empathy, transcendence, inclusion |
| 6 | Personal Reflection | Before the interview, transformation, concrete actions for inclusion |
| 7 | Conclusion | Learning summary, why philosophical reflection matters |
| 8 | References | Personal communication citations and other references |

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build tool:** Vite 8
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Fonts:** Crimson Text (serif), Inter (sans-serif)
- **Deployment:** GitHub Actions → GitHub Pages

## License

This project is provided for educational and portfolio purposes.
