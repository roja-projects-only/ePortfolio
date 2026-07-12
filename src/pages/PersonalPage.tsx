import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { personalReflections } from '../content';
import { Page } from '../components/page/Page';
import { Prose } from '../components/page/Prose';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { cn } from '../lib/cn';

/**
 * Per-chapter presentation. Content lives in `personalReflections` (locked);
 * only the editorial scaffolding — monogram, numeral, ordinal, and the
 * member's scoped accent hue — is defined here. Order matches the content
 * array: Kate (gold), Jordin (blue), Rodger (green).
 */
const chapters = [
  {
    number: '01',
    monogram: 'KCD',
    ordinal: '1 of 3',
    rule: 'bg-accent-gold',
    numeral: 'text-accent-gold/22',
    monoText: 'text-accent-gold',
    monoBorder: 'border-accent-gold/45',
    rosterNum: 'text-accent-gold',
  },
  {
    number: '02',
    monogram: 'JRD',
    ordinal: '2 of 3',
    rule: 'bg-accent',
    numeral: 'text-accent/20',
    monoText: 'text-accent',
    monoBorder: 'border-accent/40',
    rosterNum: 'text-accent',
  },
  {
    number: '03',
    monogram: 'RCP',
    ordinal: '3 of 3',
    rule: 'bg-accent-green',
    numeral: 'text-accent-green/20',
    monoText: 'text-accent-green',
    monoBorder: 'border-accent-green/40',
    rosterNum: 'text-accent-green',
  },
] as const;

const group = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.04 } },
};
const rise = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] as const } },
};
const numeralIn = {
  hidden: { opacity: 0, y: 22, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

const NUMERAL = 'font-serif font-medium leading-none tracking-[-0.05em] tabular-nums';

/** Monogram set as a small bordered tile — never a soft circle avatar. */
function Monogram({ text, tone, border }: { text: string; tone: string; border: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-11 shrink-0 place-items-center rounded-md border bg-surface-1 font-sans text-kicker font-semibold tracking-[0.1em]',
        border,
        tone,
      )}
    >
      {text}
    </span>
  );
}

export function PersonalPage() {
  const reducedMotion = useReducedMotion();
  const initial = reducedMotion ? false : 'hidden';

  return (
    <Page labelledBy="page-title" width="wide" currentKey="personal" className="scroll-smooth">
      {/* ── Masthead: controlled title + a three-voices index ─────────── */}
      <motion.header
        variants={group}
        initial={initial}
        animate="show"
        className="flex flex-col gap-10 border-b border-hairline pb-9 lg:flex-row lg:items-end lg:justify-between lg:gap-16"
      >
        <div className="lg:max-w-md">
          <motion.h1 variants={rise} id="page-title" className="text-display-xl text-ink">
            Personal Reflection
          </motion.h1>
        </div>

        <motion.nav
          variants={rise}
          aria-label="Jump to a reflection"
          className="w-full shrink-0 lg:w-auto lg:min-w-[19rem]"
        >
          <ul className="divide-y divide-hairline-soft border-y border-hairline">
            {personalReflections.map((reflection, index) => {
              const c = chapters[index];
              return (
                <li key={reflection.id}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(reflection.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                    className="group flex items-center gap-4 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
                  >
                    <span className={cn('font-serif text-xl tabular-nums', c.rosterNum)}>{c.number}</span>
                    <span
                      aria-hidden="true"
                      className={cn(
                        'grid size-8 shrink-0 place-items-center rounded-[5px] border font-sans text-kicker font-semibold tracking-[0.06em]',
                        c.monoBorder,
                        c.monoText,
                      )}
                    >
                      {c.monogram}
                    </span>
                    <span className="flex-1 font-serif text-reading text-ink transition-colors group-hover:text-ink-muted">
                      {reflection.name}
                    </span>
                    <ArrowUpRight
                      size={15}
                      aria-hidden="true"
                      className="shrink-0 text-ink-faint opacity-0 transition-[opacity,transform] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100"
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </motion.nav>
      </motion.header>

      {/* ── The three reflection chapters ─────────────────────────────── */}
      {personalReflections.map((reflection, index) => {
        const c = chapters[index];
        const mirrored = index === 1;
        const closing = index === 2;

        if (closing) {
          // Chapter 03 — full-width horizontal masthead + centered finale.
          return (
            <motion.article
              key={reflection.id}
              id={reflection.id}
              variants={group}
              initial={initial}
              animate="show"
              className="scroll-mt-24 border-t border-hairline pt-14 sm:pt-16"
            >
              <div className="flex flex-col items-start gap-6 sm:flex-row sm:items-end sm:gap-10">
                <motion.span
                  variants={numeralIn}
                  aria-hidden="true"
                  className={cn(NUMERAL, 'text-[clamp(4.5rem,13vw,9.5rem)]', c.numeral)}
                >
                  {c.number}
                </motion.span>
                <motion.div variants={rise} className="pb-1">
                  <div aria-hidden="true" className={cn('mb-5 h-0.5 w-14', c.rule)} />
                  <h2 className="text-display-lg text-ink">{reflection.name}</h2>
                  <div className="mt-4 flex items-center gap-3">
                    <Monogram text={c.monogram} tone={c.monoText} border={c.monoBorder} />
                    <p className="font-sans text-kicker uppercase text-ink-faint">
                      Personal Reflection
                      <span className="mx-2 text-hairline">/</span>
                      <span className="tabular-nums">{c.ordinal}</span>
                    </p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={rise} className="mx-auto mt-10 max-w-(--spacing-measure-wide)">
                <Prose paragraphs={reflection.paragraphs} measure="wide" />
              </motion.div>

              {/* Closing mark — signals the end of the page. */}
              <div aria-hidden="true" className="mt-16 flex items-center justify-center gap-4">
                <span className="h-px w-16 bg-hairline" />
                <span className={cn('size-1.5 rotate-45', c.rule)} />
                <span className="h-px w-16 bg-hairline" />
              </div>
            </motion.article>
          );
        }

        // Chapters 01 & 02 — a compact identity rail beside a wide reading
        // column. Flex (not grid) so the text takes all remaining width and
        // the rail stays fixed and compact; `flex-row-reverse` mirrors Ch 02
        // (text left, rail right) without ever narrowing the reading column.
        return (
          <motion.article
            key={reflection.id}
            id={reflection.id}
            variants={group}
            initial={initial}
            animate="show"
            className={cn(
              'relative scroll-mt-24 border-t border-hairline py-14 sm:py-16 lg:py-20',
              mirrored &&
                'before:absolute before:inset-y-0 before:left-1/2 before:-z-10 before:w-[100dvw] before:-translate-x-1/2 before:bg-canvas-subtle',
            )}
          >
            <div
              className={cn(
                'flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14',
                mirrored && 'lg:flex-row-reverse',
              )}
            >
              {/* Identity rail — compact and fixed; DOM-first so mobile stacks
                  it above the reflection. */}
              <header
                className={cn(
                  'flex flex-col lg:w-56 lg:shrink-0',
                  mirrored && 'lg:items-end lg:text-right',
                )}
              >
                <motion.span
                  variants={numeralIn}
                  aria-hidden="true"
                  className={cn(NUMERAL, 'text-[clamp(4.5rem,10vw,9rem)]', c.numeral)}
                >
                  {c.number}
                </motion.span>
                <motion.h2 variants={rise} className="mt-4 max-w-[16rem] text-display-lg text-ink">
                  {reflection.name}
                </motion.h2>
                <motion.div
                  variants={rise}
                  aria-hidden="true"
                  className={cn('mt-6 h-0.5 w-14', c.rule)}
                />
                <motion.div
                  variants={rise}
                  className={cn(
                    'mt-6 flex items-center gap-3',
                    mirrored && 'lg:flex-row-reverse',
                  )}
                >
                  <Monogram text={c.monogram} tone={c.monoText} border={c.monoBorder} />
                  <div className={cn(mirrored && 'lg:text-right')}>
                    <p className="font-sans text-kicker uppercase text-ink-faint">Personal Reflection</p>
                    <p className="mt-1 font-sans text-kicker uppercase tabular-nums text-ink-faint">
                      {c.ordinal}
                    </p>
                  </div>
                </motion.div>
              </header>

              {/* Reading column — takes all remaining width; a hairline column
                  rule sets it off, not a card. */}
              <motion.div
                variants={rise}
                className={cn(
                  'lg:min-w-0 lg:flex-1 lg:border-hairline',
                  mirrored ? 'lg:border-r lg:pr-14' : 'lg:border-l lg:pl-14',
                )}
              >
                <Prose paragraphs={reflection.paragraphs} measure="wide" />
              </motion.div>
            </div>
          </motion.article>
        );
      })}
    </Page>
  );
}
