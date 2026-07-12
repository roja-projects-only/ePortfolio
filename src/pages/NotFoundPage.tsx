import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60dvh] w-full max-w-2xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="font-sans text-kicker uppercase text-ink-faint">Page not found</p>
      <h1 className="mt-5 text-display-xl text-ink">This section doesn&rsquo;t exist.</h1>
      <p className="mt-4 max-w-(--spacing-measure-tight) font-serif text-lead leading-relaxed text-ink-muted">
        The page you were looking for isn&rsquo;t part of this portfolio. You can
        return to the cover and explore from there.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex w-fit items-center gap-2 rounded-lg bg-ink px-5 py-3 font-sans text-label font-medium text-canvas transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to the cover
      </Link>
    </div>
  );
}
