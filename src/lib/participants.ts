import type { ParticipantId } from '../types/portfolio';

/** Human-readable, privacy-safe labels for the anonymised participant ids. */
const labels: Record<ParticipantId, string> = {
  p01: 'Parent Participant 01',
  p02: 'Parent Participant 02',
  shared: 'Both participants',
};

export function aliasFor(id: ParticipantId): string {
  return labels[id];
}
