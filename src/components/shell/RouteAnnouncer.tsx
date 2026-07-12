import { useEffect, useState } from 'react';

/**
 * Announces the current section to assistive technology after each route
 * change. A visually hidden, polite live region — screen-reader users hear
 * where navigation took them without any visual noise.
 */
export function RouteAnnouncer({ label }: { label: string }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Defer a tick so the live region reliably re-announces on change.
    const id = window.setTimeout(() => setMessage(`${label} section`), 60);
    return () => window.clearTimeout(id);
  }, [label]);

  return (
    <div aria-live="polite" aria-atomic="true" className="sr-only" role="status">
      {message}
    </div>
  );
}
