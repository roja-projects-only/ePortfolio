import { useState, useCallback } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { DesktopNav } from './DesktopNav';
import { MobileDrawer } from './MobileDrawer';

interface PortfolioNavigationProps {
  sectionIds: string[];
  activeId: string | null;
}

const sectionLabels: Record<string, string> = {
  cover: 'Cover',
  introduction: 'Introduction',
  'community-engagement': 'Community',
  'interview-highlights': 'Interview',
  'philosophical-reflection': 'Philosophy',
  'personal-reflection': 'Personal',
  conclusion: 'Conclusion',
  references: 'References',
};

const sectionChapters: Record<string, string> = {
  cover: '•',
  introduction: 'I',
  'community-engagement': 'II',
  'interview-highlights': 'III',
  'philosophical-reflection': 'IV',
  'personal-reflection': 'V',
  conclusion: 'VI',
  references: 'VII',
};

export function PortfolioNavigation({
  sectionIds,
  activeId,
}: PortfolioNavigationProps) {
  const reducedMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleOpen = useCallback(() => setMobileOpen(true), []);
  const handleClose = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      {/* Desktop floating rail: visible on xl screens and above, where the
          centered max-w-4xl content column leaves enough margin to avoid
          ever overlapping the rail. */}
      <div className="hidden xl:block fixed left-6 top-1/2 z-30 -translate-y-1/2">
        <DesktopNav
          sectionIds={sectionIds}
          activeId={activeId}
          reducedMotion={reducedMotion}
          sectionLabels={sectionLabels}
          sectionChapters={sectionChapters}
        />
      </div>

      {/* Mobile / tablet: floating trigger + glass sheet */}
      <div className="xl:hidden">
        <MobileDrawer
          isOpen={mobileOpen}
          onOpen={handleOpen}
          onClose={handleClose}
          sectionIds={sectionIds}
          activeId={activeId}
          reducedMotion={reducedMotion}
          sectionLabels={sectionLabels}
          sectionChapters={sectionChapters}
        />
      </div>
    </>
  );
}
