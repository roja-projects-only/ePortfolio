import { conclusion } from '../content';
import { Page } from '../components/page/Page';
import { Prose } from '../components/page/Prose';
import { SectionHeader } from '../components/page/SectionHeader';

/**
 * The final chapter reuses the portfolio's established editorial shell while
 * giving the prose enough visual weight to read as a genuine conclusion.
 */
export function ConclusionPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="conclusion">
      <SectionHeader chapter="07 · Final reflection" title="Conclusion" id="page-title" />

      <section
        aria-label="Conclusion text"
        className="mt-12 grid gap-8 border-y border-hairline py-10 sm:mt-14 sm:gap-10 sm:py-12 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-14 lg:py-14"
      >
        <div className="flex items-center gap-4 self-start lg:flex-col lg:items-start lg:gap-5">
          <span
            aria-hidden="true"
            className="font-serif text-[clamp(3.5rem,7vw,5.5rem)] font-medium leading-none tracking-[-0.04em] text-accent-gold"
          >
            07
          </span>
          <span aria-hidden="true" className="h-px w-12 bg-accent-gold lg:w-16" />
          <p className="font-sans text-kicker uppercase text-ink-muted">Final reflection</p>
        </div>

        <Prose
          paragraphs={conclusion.body}
          measure="wide"
          className="text-[clamp(1.0625rem,1rem+0.2vw,1.1875rem)] leading-[1.78] text-ink"
        />
      </section>

      <div aria-hidden="true" className="mt-12 flex items-center justify-end gap-4 sm:mt-14">
        <span className="h-px w-16 bg-hairline sm:w-24" />
        <span className="size-2 rotate-45 bg-accent-gold" />
      </div>
    </Page>
  );
}
