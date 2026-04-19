import { getLocalizedText } from "@/i18n/config";
import { languagePacks } from "@/data/practice-content";
import type { WritingDirection } from "@/types/writing";

export type NoteEntry = {
  lang: string;
  label: string;
  nativeLabel: string;
  direction: WritingDirection;
  href: string;
};

export const noteEntries: NoteEntry[] = languagePacks
  .filter((pack) => pack.id !== "ko")
  .map((pack) => ({
    lang: pack.id,
    label: getLocalizedText(pack.label),
    nativeLabel: pack.nativeLabel,
    direction: pack.direction,
    href: `/notes/${pack.id}`,
  }));

export function getNoteEntries() {
  return noteEntries;
}

export function getNoteEntry(lang: string) {
  return noteEntries.find((entry) => entry.lang === lang) ?? null;
}

export const DEFAULT_NOTE_LANG = noteEntries[0]?.lang ?? "en";
