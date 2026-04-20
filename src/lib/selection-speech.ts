const ROUTE_LANGUAGE_TAGS: Record<string, string> = {
  ko: "ko-KR",
  ja: "ja-JP",
  ru: "ru-RU",
  ar: "ar-SA",
  de: "de-DE",
  es: "es-ES",
  fr: "fr-FR",
  pt: "pt-BR",
  it: "it-IT",
  en: "en-US",
  "zh-hans": "zh-CN",
  "zh-hant": "zh-TW",
};

const ROUTE_LANGUAGE_PATTERN = /^\/(?:practice|notes)\/([^/?#]+)/i;

function normalizeSelectedText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function getRouteLanguageId(pathname: string) {
  const match = pathname.match(ROUTE_LANGUAGE_PATTERN);

  if (!match) {
    return null;
  }

  return match[1].toLowerCase();
}

function hasScript(text: string, script: string) {
  return new RegExp(`\\p{Script=${script}}`, "u").test(text);
}

function hasAnyCharacter(text: string, characters: string) {
  return new RegExp(`[${characters}]`, "u").test(text);
}

function detectLanguageFromText(text: string, pathname: string) {
  if (hasScript(text, "Hangul")) {
    return "ko";
  }

  if (hasScript(text, "Hiragana") || hasScript(text, "Katakana")) {
    return "ja";
  }

  if (hasScript(text, "Arabic")) {
    return "ar";
  }

  if (hasScript(text, "Cyrillic")) {
    return "ru";
  }

  if (hasScript(text, "Han")) {
    const routeLanguageId = getRouteLanguageId(pathname);

    if (routeLanguageId === "ja") {
      return "ja";
    }

    if (routeLanguageId === "zh-hant") {
      return "zh-hant";
    }

    if (routeLanguageId === "zh-hans") {
      return "zh-hans";
    }

    return "zh-hans";
  }

  if (hasAnyCharacter(text, "äöüßÄÖÜ")) {
    return "de";
  }

  if (hasAnyCharacter(text, "ñÑ¿¡")) {
    return "es";
  }

  if (hasAnyCharacter(text, "ãõÃÕ")) {
    return "pt";
  }

  if (hasAnyCharacter(text, "œæŒÆ")) {
    return "fr";
  }

  if (/[A-Za-z]/.test(text)) {
    const routeLanguageId = getRouteLanguageId(pathname);

    if (
      routeLanguageId === "de" ||
      routeLanguageId === "es" ||
      routeLanguageId === "fr" ||
      routeLanguageId === "pt" ||
      routeLanguageId === "it" ||
      routeLanguageId === "en"
    ) {
      return routeLanguageId;
    }

    return "en";
  }

  return null;
}

export function resolveSelectionSpeechLanguageTag(text: string, pathname: string) {
  const normalizedText = normalizeSelectedText(text);

  if (!normalizedText) {
    return null;
  }

  const languageId = detectLanguageFromText(normalizedText, pathname);

  if (!languageId) {
    return null;
  }

  return ROUTE_LANGUAGE_TAGS[languageId] ?? null;
}
