import { EyeOff, Users, Sparkles, Compass } from 'lucide-react';
import { Reveal } from '../motion/Reveal';
import { GradientSpotlightCard } from '../decorative/GradientSpotlightCard';

interface JourneyStageProps {
  icon: React.ReactNode;
  title: string;
  isLast?: boolean;
  children?: React.ReactNode;
}

function JourneyStage({ icon, title, isLast = false, children }: JourneyStageProps) {
  return (
    <Reveal className="flex gap-5 sm:gap-6">
      <div className="flex flex-col items-center">
        <span
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-surface-2 text-ink"
          aria-hidden="true"
        >
          {icon}
        </span>
        {!isLast && <div className="my-2 w-px flex-1 bg-hairline" />}
      </div>
      <div className={`flex-1 ${isLast ? '' : 'pb-10'}`}>
        <h3 className="mb-2 text-lg font-medium text-ink">{title}</h3>
        {children}
      </div>
    </Reveal>
  );
}

interface ConcreteActionItem {
  description: string;
}

function isPlaceholder(text: string): boolean {
  return text.startsWith('[');
}

interface PersonalJourneyProps {
  beforePrompt: string;
  beforeChildren: React.ReactNode;
  afterPrompt: string;
  afterChildren: React.ReactNode;
  actionsPrompt: string;
  actions: ConcreteActionItem[];
}

/**
 * PersonalJourney renders the personal-reflection arc as an explicit
 * four-stage progression — Before -> Encounter -> After -> Action — rather
 * than a set of unrelated stacked fields. The Action stage carries the
 * site's second (and final) gradient-spotlight-card, marking the pivot
 * from reflection to commitment.
 */
export function PersonalJourney({
  beforePrompt,
  beforeChildren,
  afterPrompt,
  afterChildren,
  actionsPrompt,
  actions,
}: PersonalJourneyProps) {
  return (
    <div>
      <JourneyStage icon={<EyeOff size={18} />} title="Before the Interview">
        <p className="mb-4 font-serif italic leading-relaxed text-ink-muted">{beforePrompt}</p>
        {beforeChildren}
      </JourneyStage>

      <JourneyStage icon={<Users size={18} />} title="The Encounter">
        <p className="text-sm text-ink-muted">
          Documented in{' '}
          <a
            href="#community-engagement"
            className="text-accent underline underline-offset-2 hover:text-ink"
          >
            Community Engagement
          </a>
          .
        </p>
      </JourneyStage>

      <JourneyStage icon={<Sparkles size={18} />} title="After — Transformation">
        <p className="mb-4 font-serif italic leading-relaxed text-ink-muted">{afterPrompt}</p>
        {afterChildren}
      </JourneyStage>

      <JourneyStage icon={<Compass size={18} />} title="Action" isLast>
        <GradientSpotlightCard variant="sunset">
          <p className="mb-5 font-serif text-lg italic leading-relaxed text-ink/90">
            {actionsPrompt}
          </p>
          <ul className="space-y-3">
            {actions.map((action, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-ink/15 text-sm font-medium text-ink">
                  {index + 1}
                </span>
                {isPlaceholder(action.description) ? (
                  <span
                    role="status"
                    aria-label="Placeholder content — needs to be replaced"
                    className="flex-1 rounded-lg border border-dashed border-ink/30 bg-ink/5 px-3 py-2 text-sm italic text-ink/70"
                  >
                    {action.description}
                  </span>
                ) : (
                  <span className="text-ink/90">{action.description}</span>
                )}
              </li>
            ))}
          </ul>
        </GradientSpotlightCard>
      </JourneyStage>
    </div>
  );
}
