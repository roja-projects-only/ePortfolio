/**
 * Skip-to-content link. Visually hidden until it receives keyboard focus,
 * then it appears as the first tab stop so keyboard users can bypass the
 * navigation on every route.
 */
export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="skip-link sr-only focus-visible:not-sr-only focus-visible:fixed focus-visible:left-4 focus-visible:top-4 focus-visible:z-(--z-skiplink) focus-visible:rounded-md focus-visible:bg-ink focus-visible:px-4 focus-visible:py-2 focus-visible:font-sans focus-visible:text-sm focus-visible:font-medium focus-visible:text-canvas"
    >
      Skip to content
    </a>
  );
}
