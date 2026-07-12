import { useState, useEffect, useRef } from 'react';

export function useScrollSpy(
  sectionIds: string[],
  options?: { enabled?: boolean; offset?: number }
): string | null {
  const [activeId, setActiveId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const enabled = options?.enabled ?? true;
  const offset = options?.offset ?? 100;

  useEffect(() => {
    if (!enabled) return;
    if (observerRef.current) observerRef.current.disconnect();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -${offset}px 0px`,
        threshold: 0,
      }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observerRef.current.observe(el);
    }

    return () => observerRef.current?.disconnect();
  }, [sectionIds, offset, enabled]);

  return activeId;
}
