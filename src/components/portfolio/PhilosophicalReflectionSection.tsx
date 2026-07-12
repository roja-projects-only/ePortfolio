import {
  Fingerprint,
  Users,
  RefreshCw,
  ShieldCheck,
  Feather,
  HeartHandshake,
  Sparkles,
  Handshake,
} from 'lucide-react';
import type { PortfolioData } from '../../types/portfolio';
import { useScrollSpy } from '../../hooks/useScrollSpy';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { ReflectionPanel } from './ReflectionPanel';
import { ContentPlaceholder } from './ContentPlaceholder';
import { Reveal } from '../motion/Reveal';

interface PhilosophicalReflectionSectionProps {
  data: PortfolioData['philosophicalReflection'];
}

function renderResponse(text: string) {
  return text.startsWith('[') ? (
    <ContentPlaceholder instruction={text} />
  ) : (
    <p>{text}</p>
  );
}

export function PhilosophicalReflectionSection({ data }: PhilosophicalReflectionSectionProps) {
  const reducedMotion = useReducedMotion();

  const concepts = [
    { id: 'phil-being-human', label: 'Being Human', icon: <Fingerprint size={18} />, entry: data.beingHuman, emphasis: true },
    { id: 'phil-social-realities', label: 'Social Realities', icon: <Users size={18} />, entry: data.socialRealities },
    { id: 'phil-challenged-beliefs', label: 'Challenged Beliefs', icon: <RefreshCw size={18} />, entry: data.challengedBeliefs },
    { id: 'phil-human-dignity', label: 'Human Dignity', icon: <ShieldCheck size={18} />, entry: data.humanDignity },
    { id: 'phil-freedom', label: 'Freedom', icon: <Feather size={18} />, entry: data.freedom },
    { id: 'phil-empathy', label: 'Empathy', icon: <HeartHandshake size={18} />, entry: data.empathy },
    { id: 'phil-transcendence', label: 'Transcendence', icon: <Sparkles size={18} />, entry: data.transcendence, emphasis: true },
    { id: 'phil-inclusive-society', label: 'Toward Inclusion', icon: <Handshake size={18} />, entry: data.inclusiveSociety },
  ];

  const conceptIds = concepts.map((c) => c.id);
  const activeId = useScrollSpy(conceptIds, { offset: 160 });

  const handleJump = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({
      behavior: reducedMotion ? 'instant' : 'smooth',
      block: 'center',
    });
  };

  return (
    <div className="lg:grid lg:grid-cols-[190px_1fr] lg:gap-10">
      {/* Mobile / tablet: horizontal concept picker */}
      <nav
        aria-label="Philosophical reflection concepts"
        className="lg:hidden -mx-6 mb-8 flex gap-2 overflow-x-auto scrollbar-none px-6 pb-2"
      >
        {concepts.map((c) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            onClick={(e) => handleJump(e, c.id)}
            className={`flex shrink-0 items-center gap-1.5 rounded-pill border px-3 py-1.5 text-xs whitespace-nowrap ${
              activeId === c.id
                ? 'border-transparent bg-ink text-canvas font-medium'
                : 'border-hairline text-ink-muted'
            }`}
          >
            {c.label}
          </a>
        ))}
      </nav>

      {/* Desktop: sticky concept index / concept map */}
      <nav aria-label="Philosophical reflection concepts" className="hidden lg:block">
        <ul className="sticky top-28 space-y-1 border-l border-hairline pl-4">
          {concepts.map((c) => {
            const isActive = activeId === c.id;
            return (
              <li key={c.id}>
                <a
                  href={`#${c.id}`}
                  onClick={(e) => handleJump(e, c.id)}
                  aria-current={isActive ? 'true' : undefined}
                  className={`flex items-center gap-2 py-1.5 text-sm transition-colors ${
                    isActive ? 'font-medium text-ink' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  <span aria-hidden="true" className={isActive ? 'text-ink' : 'text-ink-faint'}>
                    {c.icon}
                  </span>
                  {c.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Concept panels */}
      <div className="space-y-6">
        {concepts.map((c, index) => (
          <div key={c.id} id={c.id} className="scroll-mt-32">
            <Reveal delay={Math.min(index, 3) * 0.05}>
              <ReflectionPanel
                icon={c.icon}
                title={c.label}
                prompt={c.entry.prompt}
                elevation={index % 2 === 0 ? 1 : 2}
                emphasis={c.emphasis}
              >
                {renderResponse(c.entry.response)}
              </ReflectionPanel>
            </Reveal>
          </div>
        ))}
      </div>
    </div>
  );
}
