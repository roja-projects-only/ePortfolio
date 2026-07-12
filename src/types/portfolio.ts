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
}

/* ── Introduction ──────────────────────────────────────────────────── */
export interface IntroSubsection {
  id: string;
  heading: string;
  body: Paragraphs;
}

export interface IntroductionContent {
  lead: Paragraphs;
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

export interface ParticipantBrief {
  alias: string;
  description: string;
}

export interface EngagementContent {
  lead: Paragraphs;
  interviewDate: string;
  setting: string;
  participants: readonly ParticipantBrief[];
  process: readonly ProcessStep[];
  ethics: readonly EthicPoint[];
}

/* ── Interview Highlights ──────────────────────────────────────────── */
export interface InterviewQuotation {
  /** The actual words in the participant's original language (Filipino/Taglish). */
  text: string;
  speaker: Exclude<ParticipantId, 'shared'>;
  /** Brief English context for the quotation. */
  context: string;
  /** Brief English insight gained from this quotation. */
  insight: string;
}

export interface ParticipantHighlight {
  id: Exclude<ParticipantId, 'shared'>;
  alias: string;
  summary: Paragraphs;
  quotations: readonly InterviewQuotation[];
}

export interface HighlightsContent {
  lead: Paragraphs;
  participants: readonly ParticipantHighlight[];
  featuredQuotation: InterviewQuotation;
  featuredFraming: string;
}

/* ── Philosophical reflection ──────────────────────────────────────── */
export interface Concept {
  id: string;
  name: string;
  thesis: string;
  body: Paragraphs;
}

export interface ThemeSummary {
  id: string;
  title: string;
  interpretation: string;
  socialReality: string;
}

export interface PhilosophyContent {
  lead: Paragraphs;
  embodiedSpirit: Paragraphs;
  aristotleNote: Paragraphs;
  questions: readonly {
    question: string;
    answer: Paragraphs;
  }[];
  concepts: readonly Concept[];
  themes: readonly ThemeSummary[];
  realization: string;
}

export interface ConcisePhilosophyContent {
  sections: readonly {
    id: string;
    heading: string;
    body: Paragraphs;
  }[];
}

/* ── Personal reflections ──────────────────────────────────────────── */
export interface PersonalReflection {
  id: string;
  name: string;
  paragraphs: Paragraphs;
}

/* ── Conclusion ────────────────────────────────────────────────────── */
export interface ConclusionContent {
  body: Paragraphs;
}

/* ── References ────────────────────────────────────────────────────── */
export interface Reference {
  citation: string;
  type: 'personalCommunication' | 'philosophical' | 'academic';
}

export interface DocumentationFigure {
  id: string;
  src?: string;
  alt: string;
  caption: string;
}

export interface ReferencesContent {
  intro: string;
  references: readonly Reference[];
  documentation?: readonly DocumentationFigure[];
  confidentiality: string;
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
