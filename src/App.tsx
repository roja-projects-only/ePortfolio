import { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import { useReducedMotion } from './hooks/useReducedMotion';
import { sections, sectionIndexByPath } from './content/sections';
import { SkipLink } from './components/shell/SkipLink';
import { Sidebar } from './components/shell/Sidebar';
import { MobileShell } from './components/shell/MobileShell';
import { RouteAnnouncer } from './components/shell/RouteAnnouncer';

import { CoverPage } from './pages/CoverPage';
import { IntroductionPage } from './pages/IntroductionPage';
import { EngagementPage } from './pages/EngagementPage';
import { HighlightsPage } from './pages/HighlightsPage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { PersonalPage } from './pages/PersonalPage';
import { ConclusionPage } from './pages/ConclusionPage';
import { ReferencesPage } from './pages/ReferencesPage';
import { NotFoundPage } from './pages/NotFoundPage';

const routeElements = [
  { path: '/', element: <CoverPage /> },
  { path: '/introduction', element: <IntroductionPage /> },
  { path: '/engagement', element: <EngagementPage /> },
  { path: '/interview-highlights', element: <HighlightsPage /> },
  { path: '/philosophical-reflection', element: <PhilosophyPage /> },
  { path: '/personal-reflections', element: <PersonalPage /> },
  { path: '/conclusion', element: <ConclusionPage /> },
  { path: '/references', element: <ReferencesPage /> },
];

const COLLAPSE_KEY = 'bl-nav-collapsed';

export function App() {
  const location = useLocation();
  const reducedMotion = useReducedMotion();
  const [collapsed, setCollapsed] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.localStorage.getItem(COLLAPSE_KEY) === '1';
  });
  const mainRef = useRef<HTMLElement>(null);
  const isFirstRender = useRef(true);

  const activeIndex = sectionIndexByPath(location.pathname, '');
  const activeSection = sections[activeIndex];

  const toggleCollapsed = () => {
    setCollapsed((c) => {
      const next = !c;
      window.localStorage.setItem(COLLAPSE_KEY, next ? '1' : '0');
      return next;
    });
  };

  // On route change: reset scroll and move focus to the main region so
  // keyboard and screen-reader users start at the new content, not where
  // the previous page left them. Skip the very first render.
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    mainRef.current?.focus({ preventScroll: true });
  }, [location.pathname]);

  const navWidth = collapsed ? '4.75rem' : 'var(--spacing-sidebar)';

  return (
    <div
      className="min-h-dvh lg:pl-(--nav-w)"
      style={{ ['--nav-w' as string]: navWidth }}
    >
      <SkipLink />

      {/* Desktop: persistent table-of-contents spine */}
      <Sidebar
        activeKey={activeSection.key}
        activeIndex={activeIndex}
        collapsed={collapsed}
        onToggleCollapsed={toggleCollapsed}
      />

      {/* Tablet / mobile: top bar + drawer */}
      <MobileShell />

      <RouteAnnouncer label={activeSection.label} />

      <main
        id="main-content"
        ref={mainRef}
        tabIndex={-1}
        className="relative pt-(--topbar-h) lg:pt-0 outline-none"
        style={{ ['--topbar-h' as string]: '3.5rem' }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={location.pathname}
            initial={reducedMotion ? false : { opacity: 0, y: 8 }}
            animate={reducedMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reducedMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          >
            <Routes location={location}>
              {routeElements.map((r) => (
                <Route key={r.path} path={r.path} element={r.element} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
