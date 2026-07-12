import { ArrowUp } from 'lucide-react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import portfolioData from '../../content/portfolioData';

export function Footer() {
  const reducedMotion = useReducedMotion();

  const scrollToTop = () => {
    const el = document.getElementById('cover');
    if (el) {
      el.scrollIntoView({ behavior: reducedMotion ? 'instant' : 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-hairline-soft px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-ink-faint">
          {portfolioData.cover.studentName} &middot; Philosophy of the Human Person &middot; ePortfolio
        </p>
        <button
          type="button"
          onClick={scrollToTop}
          className="flex items-center gap-1.5 rounded-pill px-3 py-1.5 text-sm text-ink-muted transition-colors hover:bg-surface-1 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          aria-label="Back to top"
        >
          <ArrowUp size={16} aria-hidden="true" />
          Back to top
        </button>
      </div>
    </footer>
  );
}
