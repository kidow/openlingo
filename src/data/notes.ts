import "server-only";

import { languagePacks } from "@/data/practice-content";
import { getLocalizedText } from "@/i18n/config";
import type { NoteEntry } from "@/types/notes";

export const DEFAULT_NOTE_LANGUAGE_ID = "ko";

export const noteEntries: NoteEntry[] = languagePacks.map((pack) => ({
  lang: pack.id,
  label: pack.label,
  nativeLabel: pack.nativeLabel,
  direction: pack.direction,
  summary: pack.summary,
  filePath: `src/content/notes/${pack.id}.mdx`,
}));

export function getDefaultNoteEntry() {
  return noteEntries.find((entry) => entry.lang === DEFAULT_NOTE_LANGUAGE_ID) ?? noteEntries[0] ?? null;
}

export function getDefaultNoteLabel() {
  return getLocalizedText(getDefaultNoteEntry()?.label ?? languagePacks[0].label);
}
