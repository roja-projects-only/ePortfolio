/**
 * Content model for "Beyond Limitations".
 *
 * Privacy is built into the types, not bolted on: participants are only
 * ever addressed through an anonymous `id`/`alias`, children are never
 * named, and every quotation carries the context required to present it
 * responsibly. Substantial copy lives in `src/content/` modules typed
 * against these shapes rather than being scattered through JSX.
 */

/** A rich paragraph run. Kept as plain strings; rendering adds emphasis. */
export type Paragraphs = readonly string[];

/** Anonymised participant identifier used everywhere in the interface. */
export type ParticipantId = 'p01' | 'p02' | 'shared';

/* ── Cover ─────────────────────────────────────────────────────────── */
export interface CoverMeta {
  title: string;
  subtitle: string;
  members: readonly string[];
  gradeSection: string;
  subject: string;
  submission: string;
  method: string;
}

/* ── Introduction ──────────────────────────────────────────────────── */
export interface IntroSubsection {
  id: string;
  heading: string;
  body: Paragraphs;
}

export interface IntroductionContent {
  lead: Paragraphs;
  epigraph: { text: string; attribution: string };
  subsections: readonly IntroSubsection[];
}

/* ── Community engagement & ethics ─────────────────────────────────── */
export interface ProcessStep {
  label: string;
  detail: string;
}

export interface EthicPoint {
  title: string;
  detail: string;
}

export interface EngagementContent {
  lead: Paragraphs;
  interviewDate: string;
  setting: string;
  participantsNote: string;
  process: readonly ProcessStep[];
  ethics: readonly EthicPoint[];
}

/* ── Participants ──────────────────────────────────────────────────── */
export interface ParticipantProfile {
  id: Exclude<ParticipantId, 'shared'>;
  alias: string;
  summary: string;
  realities: readonly string[];
  interpretation: string;
  figureId: string;
}

/* ── Voices & quotations ───────────────────────────────────────────── */
export interface Quotation {
  /** The words as approved for public use (English rendering). */
  text: string;
  /** Optional Filipino original where it carries the participant's voice. */
  original?: string;
  speaker: Exclude<ParticipantId, 'shared'>;
  /** Context that must accompany the quote so it is never misread. */
  context: string;
}

export interface VoicesContent {
  lead: Paragraphs;
  featured: Quotation;
  featuredFraming: string;
  secondary: readonly Quotation[];
}

/* ── Thematic findings ─────────────────────────────────────────────── */
export interface ThemeEvidence {
  source: ParticipantId;
  point: string;
}

export interface Theme {
  id: string;
  number: number;
  title: string;
  interpretation: string;
  evidence: readonly ThemeEvidence[];
  socialReality: string;
}

export interface FindingsContent {
  lead: Paragraphs;
  themes: readonly Theme[];
  limitation: string;
}

/* ── Philosophical reflection ──────────────────────────────────────── */
export interface Concept {
  id: string;
  name: string;
  thesis: string;
  body: Paragraphs;
}

export interface PhilosophyContent {
  lead: Paragraphs;
  embodiedSpirit: Paragraphs;
  aristotleNote: Paragraphs;
  concepts: readonly Concept[];
  realization: string;
}

/* ── Personal reflections ──────────────────────────────────────────── */
export interface ReflectionArc {
  before: string;
  challenged: string;
  understand: string;
  action: string;
}

export interface PersonalReflection {
  id: string;
  name: string;
  standfirst: string;
  pullQuote: string;
  arc: ReflectionArc;
}

/* ── Commitments ───────────────────────────────────────────────────── */
export interface Commitment {
  title: string;
  detail: string;
}

export interface CommitmentsContent {
  lead: Paragraphs;
  turningStatement: string;
  commitments: readonly Commitment[];
  caveat: string;
}

/* ── Conclusion ────────────────────────────────────────────────────── */
export interface ConclusionContent {
  body: Paragraphs;
  finalStatement: string;
}

/* ── References & documentation ────────────────────────────────────── */
export interface Reference {
  citation: string;
  type: 'personalCommunication' | 'philosophical' | 'academic';
}

export interface Contribution {
  name: string;
  role: string;
}

export interface DocumentationFigure {
  id: string;
  /** Path under the public base, or undefined until real photos are added. */
  src?: string;
  alt: string;
  caption: string;
}

export interface ReferencesContent {
  intro: string;
  references: readonly Reference[];
  documentation: readonly DocumentationFigure[];
  contributions: readonly Contribution[];
  confidentiality: string;
  methodology: Paragraphs;
}

/* ── Section registry (drives routing + navigation) ────────────────── */
export interface SectionEntry {
  /** Route path, e.g. "/introduction" ("" for the index/cover). */
  path: string;
  /** Stable key. */
  key: string;
  /** Full label for the drawer / sidebar. */
  label: string;
  /** Short label for the top bar's current-section indicator. */
  shortLabel: string;
}
