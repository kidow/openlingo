import { languagePacks } from "@/data/practice-content";

export const DEFAULT_PRACTICE_LANGUAGE_ID = languagePacks[0]?.id ?? "ko";

export function getPracticeLanguageHref(languageId: string) {
  return `/practice/${languageId}`;
}

export function getDefaultPracticeLanguageHref() {
  return getPracticeLanguageHref(DEFAULT_PRACTICE_LANGUAGE_ID);
}

export function getPracticeLanguagePack(languageId: string) {
  return languagePacks.find((pack) => pack.id === languageId) ?? null;
}
