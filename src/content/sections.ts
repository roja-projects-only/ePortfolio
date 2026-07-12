import type { SectionEntry } from '../types/portfolio';

/**
 * The ordered spine of the portfolio. Each entry is one route and one
 * stop in the table of contents. Order here IS the reading order
 * shown in the sidebar, the drawer, and the prev/next controls.
 */
export const sections: readonly SectionEntry[] = [
  { path: '', key: 'cover', label: 'Cover', shortLabel: 'Cover' },
  { path: '/introduction', key: 'introduction', label: 'Introduction', shortLabel: 'Introduction' },
  { path: '/engagement', key: 'engagement', label: 'Community Engagement', shortLabel: 'Engagement' },
  { path: '/interview-highlights', key: 'highlights', label: 'Interview Highlights', shortLabel: 'Highlights' },
  { path: '/philosophical-reflection', key: 'philosophy', label: 'Philosophical Reflection', shortLabel: 'Philosophy' },
  { path: '/personal-reflections', key: 'personal', label: 'Personal Reflection', shortLabel: 'Personal' },
  { path: '/conclusion', key: 'conclusion', label: 'Conclusion', shortLabel: 'Conclusion' },
  { path: '/references', key: 'references', label: 'References', shortLabel: 'References' },
] as const;

export function sectionIndexByPath(pathname: string, basename: string): number {
  // Normalise away the router basename and any trailing slash.
  let p = pathname;
  if (basename && basename !== '/' && p.startsWith(basename)) {
    p = p.slice(basename.length);
  }
  if (!p.startsWith('/')) p = '/' + p;
  if (p.length > 1 && p.endsWith('/')) p = p.slice(0, -1);
  const normalized = p === '/' ? '' : p;
  const idx = sections.findIndex((s) => s.path === normalized);
  return idx === -1 ? 0 : idx;
}
