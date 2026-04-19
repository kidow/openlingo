import "server-only";

import { DEFAULT_NOTE_LANGUAGE_ID, noteEntries } from "@/data/notes";

export function getNoteEntries() {
  return noteEntries;
}

export function getNoteEntry(lang: string) {
  return noteEntries.find((entry) => entry.lang === lang) ?? null;
}

export function getNoteHref(lang: string) {
  return `/notes/${lang}`;
}

export function getDefaultNotesHref() {
  return getNoteHref(DEFAULT_NOTE_LANGUAGE_ID);
}

export function isNoteLanguage(lang: string) {
  return getNoteEntry(lang) !== null;
}
