import { personalReflections } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { ReflectionArcView } from '../components/portfolio/ReflectionArcView';

export function PersonalPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="personal">
      <SectionHeader
        title="Personal Reflection"
        id="page-title"
        standfirst="Three researchers, three distinct transformations. Each reflection follows its own arc — and ends with concrete commitments to action."
      />

      {/* In-page selector for the three reflections. */}
      <nav aria-label="Reflections" className="mt-10 flex flex-wrap gap-2">
        {personalReflections.map((r) => (
          <a
            key={r.id}
            href={`#${r.id}`}
            className="rounded-lg border border-hairline bg-surface-1 px-4 py-2 font-sans text-label text-ink-muted transition-colors hover:bg-surface-2 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {r.name}
          </a>
        ))}
      </nav>

      <div className="mt-14 space-y-16">
        {personalReflections.map((reflection, i) => (
          <div key={reflection.id} className={i > 0 ? 'border-t border-hairline pt-16' : undefined}>
            <ReflectionArcView reflection={reflection} index={i} />
          </div>
        ))}
      </div>
    </Page>
  );
}
