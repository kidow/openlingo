import { DEFAULT_NOTE_LANG, getNoteEntry, getNoteEntries } from "@/data/notes";

export function getNoteHref(lang: string) {
  return `/notes/${lang}`;
}

export function getDefaultNotesHref() {
  return getNoteHref(DEFAULT_NOTE_LANG);
}

export { getNoteEntry, getNoteEntries };
