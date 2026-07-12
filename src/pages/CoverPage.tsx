import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { cover } from '../content';
import { useReducedMotion } from '../hooks/useReducedMotion';

const metadata: { label: string; value: string }[] = [
  { label: 'Grade & Section', value: cover.gradeSection },
  { label: 'Subject', value: cover.subject },
  { label: 'Submitted', value: cover.submission },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function CoverPage() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="mx-auto flex min-h-[calc(100dvh-3.5rem)] w-full max-w-5xl flex-col justify-center px-5 py-16 sm:px-8 lg:min-h-dvh lg:py-24">
      <motion.div
        variants={containerVariants}
        initial={reducedMotion ? false : 'hidden'}
        animate="show"
      >
        <motion.p variants={item} className="font-sans text-kicker uppercase text-ink-faint">
          {cover.method}
        </motion.p>

        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl text-display-2xl text-ink"
        >
          {cover.title}
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-(--spacing-measure) font-serif text-lead leading-relaxed text-ink-muted"
        >
          {cover.subtitle}
        </motion.p>

        <motion.p
          variants={item}
          className="mt-6 max-w-(--spacing-measure-tight) font-serif text-reading leading-relaxed text-ink-muted"
        >
          A student inquiry built on two interviews with parents of children with
          disabilities — an attempt to listen closely, and to reflect on what their
          experiences reveal about being human.
        </motion.p>

        <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link
            to="/introduction"
            className="group inline-flex items-center gap-2 rounded-lg bg-ink px-5 py-3 font-sans text-label font-medium text-canvas transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
          >
            Explore the portfolio
            <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5" />
          </Link>
          <Link
            to="/references"
            className="font-sans text-label text-ink-muted underline decoration-hairline underline-offset-4 transition-colors hover:text-ink hover:decoration-ink-faint"
          >
            References &amp; documentation
          </Link>
        </motion.div>

        <motion.div variants={item} className="mt-16 border-t border-hairline pt-8">
          <p className="font-sans text-kicker uppercase text-ink-faint">Researchers</p>
          <ul className="mt-3 flex flex-wrap gap-x-8 gap-y-1">
            {cover.members.map((name) => (
              <li key={name} className="font-serif text-lead text-ink">
                {name}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.dl
          variants={item}
          className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-3"
        >
          {metadata.map((m) => (
            <div key={m.label}>
              <dt className="font-sans text-kicker uppercase text-ink-faint">{m.label}</dt>
              <dd className="mt-2 font-serif text-reading leading-snug text-ink">{m.value}</dd>
            </div>
          ))}
        </motion.dl>
      </motion.div>
    </div>
  );
}
