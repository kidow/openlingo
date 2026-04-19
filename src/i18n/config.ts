export type AppLocale = "ko" | "en";

export type LocalizedText = Record<AppLocale, string>;

export const DEFAULT_LOCALE: AppLocale = "ko";

export function getLocalizedText(text: LocalizedText) {
  return text[DEFAULT_LOCALE];
}
