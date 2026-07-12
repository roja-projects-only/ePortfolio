import { concisePhilosophy } from '../content';
import { Page } from '../components/page/Page';
import { Prose } from '../components/page/Prose';
import { cn } from '../lib/cn';

const sectionNumbers = ['01', '02', '03', '04', '05'] as const;

export function PhilosophyPage() {
  return (
    <Page labelledBy="page-title" width="full" currentKey="philosophy">
      <header className="border-b border-hairline pb-12 lg:pb-16">
        <div className="max-w-4xl">
          <p className="font-sans text-label font-semibold text-accent-gold">Reflection chapter</p>
          <h1 id="page-title" className="mt-4 max-w-[12ch] text-display-2xl text-ink">
            Philosophical Reflection
          </h1>
          <div aria-hidden="true" className="mt-8 flex items-center gap-4">
            <span className="h-px w-24 bg-accent-gold" />
            <span className="h-2 w-2 rounded-full bg-accent-gold" />
          </div>
        </div>
      </header>

      <div>
        {concisePhilosophy.sections.map((section, index) => {
          return (
            <section
              key={section.id}
              aria-labelledby={`${section.id}-heading`}
              className={cn(
                'border-b border-hairline py-16 sm:py-20 lg:py-24',
                index === 3 && '-mx-5 bg-accent-gold-soft px-5 sm:-mx-8 sm:px-8',
              )}
            >
              <div
                className="grid gap-10 md:grid-cols-[minmax(13rem,0.76fr)_minmax(0,1.45fr)] md:gap-12 xl:gap-24"
              >
                <header
                  className={cn(
                    'self-start md:sticky md:top-20 md:z-raised md:-my-4 md:py-4 lg:top-6',
                    index === 3 ? 'md:bg-[rgb(245_237_215)]' : 'md:bg-canvas',
                  )}
                >
                  <span
                    aria-hidden="true"
                    className="font-sans text-[clamp(3.5rem,6vw,5.75rem)] font-light leading-none tracking-[-0.035em] text-accent-gold/30"
                  >
                    {sectionNumbers[index]}
                  </span>
                  <div className="mt-5">
                    <div aria-hidden="true" className="h-px w-16 bg-accent-gold" />
                    <h2
                      id={`${section.id}-heading`}
                      className={cn(
                        'mt-6 text-display-lg text-ink',
                      )}
                    >
                      {section.heading}
                    </h2>
                  </div>
                </header>

                <div
                  className={cn(
                    'min-w-0',
                    index === 2 && 'rounded-lg bg-surface-1 px-5 py-8 sm:px-8 sm:py-10',
                    index === 4 && 'border-t border-accent-gold/40 pt-8',
                  )}
                >
                  <Prose
                    paragraphs={section.body}
                    measure="wide"
                    className="text-[1.125rem] leading-[1.78]"
                    variant={index === 0 ? 'lead' : 'default'}
                  />
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </Page>
  );
}
