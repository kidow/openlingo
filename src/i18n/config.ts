export const LOCALES = ["ko", "en"] as const;

export type AppLocale = (typeof LOCALES)[number];

export type LocalizedText = Record<AppLocale, string>;

export const DEFAULT_LOCALE: AppLocale = "ko";
export const LOCALE_HEADER = "x-openlingo-locale";

export function isAppLocale(value: string | null | undefined): value is AppLocale {
  return typeof value === "string" && LOCALES.includes(value as AppLocale);
}

export function resolveLocale(value: string | null | undefined) {
  return isAppLocale(value) ? value : DEFAULT_LOCALE;
}

export function getLocalizedText(text: LocalizedText, locale: AppLocale) {
  return text[locale] ?? text[DEFAULT_LOCALE];
}

