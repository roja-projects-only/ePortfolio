import { CircleAlert } from 'lucide-react';
import { findings } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { ThemeEntry } from '../components/portfolio/ThemeEntry';

export function FindingsPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="findings">
      <SectionHeader
        chapter="Chapter V"
        title="Thematic Findings & Social Realities"
        id="page-title"
        standfirst="Eight themes emerged across the two interviews. For each, we separate our interpretation from the participants' evidence, and name the broader social reality it reveals."
      />

      <div className="mt-10 max-w-(--spacing-measure)">
        <Prose paragraphs={findings.lead} />
      </div>

      {/* Theme index — wayfinding for a long analytical section. */}
      <nav aria-label="Themes" className="mt-10 rounded-2xl border border-hairline bg-surface-1 p-6">
        <h2 className="font-sans text-kicker uppercase text-ink-faint">The eight themes</h2>
        <ol className="mt-4 grid gap-x-8 gap-y-2 sm:grid-cols-2">
          {findings.themes.map((theme) => (
            <li key={theme.id}>
              <a
                href={`#${theme.id}`}
                className="group flex items-baseline gap-3 py-1 font-serif text-reading text-ink-muted transition-colors hover:text-ink focus-visible:outline-none focus-visible:text-ink"
              >
                <span className="font-sans text-kicker tabular-nums text-ink-faint">
                  {String(theme.number).padStart(2, '0')}
                </span>
                <span className="underline decoration-transparent underline-offset-4 transition-colors group-hover:decoration-hairline">
                  {theme.title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-16 space-y-14">
        {findings.themes.map((theme) => (
          <ThemeEntry key={theme.id} theme={theme} />
        ))}
      </div>

      <aside
        aria-label="Limitation of this study"
        className="mt-16 flex flex-col gap-4 rounded-2xl border border-hairline bg-surface-2 p-7 sm:flex-row sm:gap-6 sm:p-9"
      >
        <CircleAlert size={24} aria-hidden="true" className="shrink-0 text-ink-muted" />
        <div>
          <h2 className="font-serif text-display-md text-ink">A necessary limitation</h2>
          <p className="mt-3 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
            {findings.limitation}
          </p>
        </div>
      </aside>
    </Page>
  );
}
