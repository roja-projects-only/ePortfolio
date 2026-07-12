import { philosophy } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { ConceptPanel } from '../components/portfolio/ConceptPanel';

export function PhilosophyPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="philosophy">
      <SectionHeader
        title="Philosophical Reflection"
        id="page-title"
        size="2xl"
        standfirst="The interviews pressed us toward a claim about what a human person is — and toward the conviction that dignity does not depend on ability."
      />

      <div className="mt-12 max-w-(--spacing-measure)">
        <Prose paragraphs={philosophy.lead} variant="lead" />
      </div>

      {/* The human person as embodied spirit */}
      <section aria-labelledby="embodied-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="embodied-heading" className="max-w-3xl text-display-lg text-ink">
          The human person as an embodied spirit
        </h2>
        <div className="mt-6 max-w-(--spacing-measure)">
          <Prose paragraphs={philosophy.embodiedSpirit} />
        </div>
      </section>

      {/* Aristotle note */}
      <aside
        aria-labelledby="aristotle-heading"
        className="mt-12 rounded-2xl border border-hairline bg-surface-1 p-7 sm:p-9"
      >
        <h2 id="aristotle-heading" className="font-sans text-kicker uppercase text-ink-faint">
          A careful note on Aristotle
        </h2>
        <div className="mt-4 max-w-(--spacing-measure)">
          <Prose paragraphs={philosophy.aristotleNote} />
        </div>
      </aside>

      {/* Philosophical questions */}
      <section aria-labelledby="questions-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="questions-heading" className="text-display-lg text-ink">
          What the interviews revealed
        </h2>
        <div className="mt-8 space-y-12">
          {philosophy.questions.map((q, i) => (
            <article key={i} className="grid gap-4 lg:grid-cols-[minmax(0,16rem)_1fr] lg:gap-12">
              <h3 className="text-display-md text-ink lg:sticky lg:top-8 lg:self-start">{q.question}</h3>
              <Prose paragraphs={q.answer} />
            </article>
          ))}
        </div>
      </section>

      {/* Four concepts */}
      <section aria-labelledby="concepts-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="concepts-heading" className="text-display-lg text-ink">
          Four concepts
        </h2>
        <p className="mt-4 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
          Dignity, freedom, empathy, and transcendence — each drawn out of what
          the parents described, and each reframed by it.
        </p>
        <div className="mt-9 space-y-6">
          {philosophy.concepts.map((concept, i) => (
            <ConceptPanel key={concept.id} concept={concept} index={i} />
          ))}
        </div>
      </section>

      {/* Thematic findings — integrated here instead of a separate page */}
      <section aria-labelledby="themes-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="themes-heading" className="text-display-lg text-ink">
          Thematic findings
        </h2>
        <p className="mt-4 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
          Six themes emerged across both interviews. Each points to a broader social reality.
        </p>
        <div className="mt-10 space-y-10">
          {philosophy.themes.map((theme) => (
            <article key={theme.id} className="border-t border-hairline pt-8 first:border-t-0 first:pt-0">
              <h3 className="text-display-md text-ink">{theme.title}</h3>
              <p className="mt-4 max-w-(--spacing-measure) font-serif text-reading leading-relaxed text-ink-muted">
                {theme.interpretation}
              </p>
              <div className="mt-4 rounded-xl border border-hairline bg-surface-1 p-5">
                <p className="font-sans text-kicker uppercase text-ink-faint">Social reality</p>
                <p className="mt-2 font-serif text-reading leading-relaxed text-ink">
                  {theme.socialReality}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Central realisation */}
      <section aria-labelledby="realization-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="realization-heading" className="font-sans text-kicker uppercase text-ink-faint">
          Our central realisation
        </h2>
        <p className="mt-6 max-w-4xl font-serif text-display-lg italic leading-tight text-ink">
          {philosophy.realization}
        </p>
      </section>
    </Page>
  );
}
