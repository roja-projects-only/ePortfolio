import { ArrowDown } from 'lucide-react';
import portfolioData from '../../content/portfolioData';
import { AtmosphereVignette } from '../decorative/AtmosphereVignette';
import { Reveal, RevealHeading } from '../motion/Reveal';

export function CoverSection() {
  const { projectTitle, studentName, gradeSection, subject, date } =
    portfolioData.cover;

  const metadata = [
    { label: 'Student', value: studentName },
    { label: 'Grade & Section', value: gradeSection },
    { label: 'Subject', value: subject },
    { label: 'Date', value: date },
  ];

  return (
    <section
      id="cover"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 py-28 text-center"
    >
      <AtmosphereVignette />

      <div className="relative flex flex-col items-center">
        <Reveal>
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.3em] text-accent">
            {subject}
          </p>
        </Reveal>

        <RevealHeading as="h1" className="max-w-4xl px-2 text-ink" delay={0.1}>
          <span className="block text-display-2xl">{projectTitle}</span>
        </RevealHeading>

        <Reveal delay={0.35}>
          <div className="mt-10 h-px w-16 bg-hairline" />
        </Reveal>

        <Reveal delay={0.4}>
          <dl className="mt-10 grid w-full max-w-2xl grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline text-left sm:grid-cols-2 lg:grid-cols-4">
            {metadata.map(({ label, value }) => (
              <div key={label} className="bg-surface-1/80 p-5 backdrop-blur-sm">
                <dt className="text-[11px] font-medium uppercase tracking-[0.15em] text-ink-faint">
                  {label}
                </dt>
                <dd className="mt-1.5 text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.55}>
          <a
            href="#introduction"
            className="group mt-16 inline-flex items-center gap-2.5 rounded-pill bg-ink px-5 py-3 text-sm font-medium text-canvas transition-transform hover:scale-[1.03] focus-visible:scale-[1.03]"
          >
            Begin Reading
            <ArrowDown
              size={16}
              aria-hidden="true"
              className="motion-safe:animate-bounce motion-reduce:animate-none"
            />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
