import { philosophy } from '../content';
import { Page } from '../components/page/Page';
import { SectionHeader } from '../components/page/SectionHeader';
import { Prose } from '../components/page/Prose';
import { ConceptPanel } from '../components/portfolio/ConceptPanel';

export function PhilosophyPage() {
  return (
    <Page labelledBy="page-title" width="wide" currentKey="philosophy">
      <SectionHeader
        chapter="Chapter VI"
        title="Philosophical Reflection"
        id="page-title"
        size="2xl"
        standfirst="The interviews pressed us toward a claim about what a human person is — and toward the conviction that dignity does not depend on ability."
      />

      <div className="mt-12 max-w-(--spacing-measure)">
        <Prose paragraphs={philosophy.lead} variant="lead" />
      </div>

      <section aria-labelledby="embodied-heading" className="mt-16 border-t border-hairline pt-12">
        <h2 id="embodied-heading" className="max-w-3xl text-display-lg text-ink">
          The human person as an embodied spirit
        </h2>
        <div className="mt-6 max-w-(--spacing-measure)">
          <Prose paragraphs={philosophy.embodiedSpirit} />
        </div>
      </section>

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

      <section aria-labelledby="concepts-heading" className="mt-16">
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

      {/* The group's central realisation — typographic emphasis, deliberately
          NOT a gradient spotlight (those are reserved for Voices and
          Commitments). */}
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
