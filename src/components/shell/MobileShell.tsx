import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { MobileTopBar } from './MobileTopBar';
import { NavDrawer } from './NavDrawer';
import { sections, sectionIndexByPath } from '../../content/sections';

/**
 * Encapsulates the mobile/tablet navigation chrome — the fixed top bar
 * (with hamburger button) and the slide-in drawer — so that toggling
 * the drawer does NOT re-render the application's page content.
 *
 * Drawer state is local; it closes automatically on route change.
 */
export function MobileShell() {
  const location = useLocation();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Close the drawer on any navigation.
  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  const activeIndex = sectionIndexByPath(location.pathname, '');
  const activeSection = sections[activeIndex];

  return (
    <>
      <MobileTopBar
        currentLabel={activeSection.shortLabel}
        activeIndex={activeIndex}
        total={sections.length}
        onOpenMenu={() => setDrawerOpen(true)}
        menuOpen={drawerOpen}
      />
      <NavDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        activeKey={activeSection.key}
      />
    </>
  );
}
