export function isSpeechSynthesisSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

export function getSpeechSynthesisVoices(): SpeechSynthesisVoice[] {
  if (!isSpeechSynthesisSupported()) {
    return [];
  }

  return window.speechSynthesis.getVoices();
}

export function loadSpeechSynthesisVoices(timeoutMs = 1500): Promise<SpeechSynthesisVoice[]> {
  if (!isSpeechSynthesisSupported()) {
    return Promise.resolve([]);
  }

  const voices = window.speechSynthesis.getVoices();

  if (voices.length > 0) {
    return Promise.resolve(voices);
  }

  return new Promise((resolve) => {
    const timeoutId = window.setTimeout(() => {
      window.speechSynthesis.removeEventListener("voiceschanged", onVoicesChanged);
      resolve(window.speechSynthesis.getVoices());
    }, timeoutMs);

    function onVoicesChanged() {
      window.clearTimeout(timeoutId);
      resolve(window.speechSynthesis.getVoices());
    }

    window.speechSynthesis.addEventListener("voiceschanged", onVoicesChanged, {
      once: true,
    });
  });
}

export const DEFAULT_JAPANESE_VOICE_NAME = "Google 日本語";
export const JAPANESE_VOICE_PROFILE = [
  DEFAULT_JAPANESE_VOICE_NAME,
  "Kyoko",
  "Otoya",
  "Microsoft Nanami Online (Natural) - Japanese (Japan)",
];

function normalizeVoiceName(value: string) {
  return value.trim().toLowerCase();
}

function matchesVoiceName(voice: SpeechSynthesisVoice, candidateName: string) {
  return normalizeVoiceName(voice.name) === normalizeVoiceName(candidateName);
}

function matchesAnyVoiceName(voice: SpeechSynthesisVoice, candidateNames: string[]) {
  return candidateNames.some((candidateName) => matchesVoiceName(voice, candidateName));
}

type VoiceSelectionOptions = {
  languagePrefix: string;
  preferredVoiceNames?: string[];
  allowedVoiceNames?: string[];
};

type VoiceProfileOptions = {
  languagePrefix: string;
  voiceNames: string[];
};

export function getVoiceOptionsForLanguage(
  voices: SpeechSynthesisVoice[],
  { languagePrefix, preferredVoiceNames = [], allowedVoiceNames = [] }: VoiceSelectionOptions
) {
  return voices
    .filter((voice) => {
      const isAllowed = allowedVoiceNames.length > 0 ? matchesAnyVoiceName(voice, allowedVoiceNames) : true;
      const isPreferred = preferredVoiceNames.length > 0 ? matchesAnyVoiceName(voice, preferredVoiceNames) : false;

      return isAllowed && (voice.lang.toLowerCase().startsWith(languagePrefix) || isPreferred || isAllowed);
    })
    .sort((left, right) => {
      const leftIsPreferred = preferredVoiceNames.length > 0 ? matchesAnyVoiceName(left, preferredVoiceNames) : false;
      const rightIsPreferred = preferredVoiceNames.length > 0 ? matchesAnyVoiceName(right, preferredVoiceNames) : false;

      if (leftIsPreferred && !rightIsPreferred) {
        return -1;
      }

      if (!leftIsPreferred && rightIsPreferred) {
        return 1;
      }

      return left.name.localeCompare(right.name);
    });
}

export function getDefaultVoiceForLanguage(
  voices: SpeechSynthesisVoice[],
  { languagePrefix, preferredVoiceNames = [], allowedVoiceNames = [] }: VoiceSelectionOptions
) {
  for (const preferredName of preferredVoiceNames) {
    const matchedVoice = voices.find((voice) => matchesVoiceName(voice, preferredName));

    if (matchedVoice && (allowedVoiceNames.length === 0 || matchesAnyVoiceName(matchedVoice, allowedVoiceNames))) {
      return matchedVoice;
    }
  }

  const languageVoice = voices.find((voice) => {
    const isAllowed = allowedVoiceNames.length > 0 ? matchesAnyVoiceName(voice, allowedVoiceNames) : true;

    return isAllowed && voice.lang.toLowerCase().startsWith(languagePrefix);
  });

  if (languageVoice) {
    return languageVoice;
  }

  return voices.find((voice) => voice.default) ?? null;
}

export function getJapaneseVoiceOptions(voices: SpeechSynthesisVoice[]) {
  return getVoiceOptionsForLanguage(voices, {
    languagePrefix: "ja",
    preferredVoiceNames: [DEFAULT_JAPANESE_VOICE_NAME],
    allowedVoiceNames: JAPANESE_VOICE_PROFILE,
  });
}

export function getDefaultJapaneseVoice(voices: SpeechSynthesisVoice[]) {
  return getDefaultVoiceForLanguage(voices, {
    languagePrefix: "ja",
    preferredVoiceNames: [DEFAULT_JAPANESE_VOICE_NAME],
    allowedVoiceNames: JAPANESE_VOICE_PROFILE,
  });
}

export function getDisplayVoiceName(name: string) {
  const trimmed = name.trim();

  if (!trimmed.includes("(")) {
    return trimmed;
  }

  const localeSuffixPatterns = ["일본", "Japanese", "Japan", "러시아", "Russian", "Russia", "ru-", "рус"];
  const firstParenIndex = trimmed.indexOf("(");
  const suffix = trimmed.slice(firstParenIndex);

  if (localeSuffixPatterns.some((pattern) => suffix.toLowerCase().includes(pattern.toLowerCase()))) {
    return trimmed.slice(0, firstParenIndex).trim();
  }

  return trimmed.replace(/\s*\([^()]*\)\s*$/, "").trim();
}

export const DEFAULT_RUSSIAN_VOICE_NAME = "Google русский";
export const RUSSIAN_VOICE_PROFILE = [
  DEFAULT_RUSSIAN_VOICE_NAME,
  "Milena",
  "Microsoft Svetlana Online (Natural) - Russian (Russia)",
];

export function getRussianVoiceOptions(voices: SpeechSynthesisVoice[]) {
  return getVoiceOptionsForLanguage(voices, {
    languagePrefix: "ru",
    preferredVoiceNames: [DEFAULT_RUSSIAN_VOICE_NAME],
    allowedVoiceNames: RUSSIAN_VOICE_PROFILE,
  });
}

export function getDefaultRussianVoice(voices: SpeechSynthesisVoice[]) {
  return getDefaultVoiceForLanguage(voices, {
    languagePrefix: "ru",
    preferredVoiceNames: [DEFAULT_RUSSIAN_VOICE_NAME],
    allowedVoiceNames: RUSSIAN_VOICE_PROFILE,
  });
}

export const DEFAULT_ARABIC_VOICE_NAME = "Google العربية";
export const ARABIC_VOICE_PROFILE = [
  DEFAULT_ARABIC_VOICE_NAME,
  "Maged",
  "Microsoft Hamed Online (Natural) - Arabic (Saudi Arabia)",
];

export function getArabicVoiceOptions(voices: SpeechSynthesisVoice[]) {
  return getVoiceOptionsForLanguage(voices, {
    languagePrefix: "ar",
    preferredVoiceNames: [DEFAULT_ARABIC_VOICE_NAME],
    allowedVoiceNames: ARABIC_VOICE_PROFILE,
  });
}

export function getDefaultArabicVoice(voices: SpeechSynthesisVoice[]) {
  return getDefaultVoiceForLanguage(voices, {
    languagePrefix: "ar",
    preferredVoiceNames: [DEFAULT_ARABIC_VOICE_NAME],
    allowedVoiceNames: ARABIC_VOICE_PROFILE,
  });
}

export const DEFAULT_FRENCH_VOICE_NAME = "Google français";
export const FRENCH_VOICE_PROFILE = [
  DEFAULT_FRENCH_VOICE_NAME,
  "Thomas",
  "Amelie",
  "Microsoft Denise Online (Natural) - French (France)",
];

function getVoiceProfileIndex(voiceName: string, voiceNames: string[]) {
  const normalizedName = normalizeVoiceName(voiceName);

  return voiceNames.findIndex((candidateName) => normalizeVoiceName(candidateName) === normalizedName);
}

export function getVoiceOptionsForProfile(voices: SpeechSynthesisVoice[], { languagePrefix, voiceNames }: VoiceProfileOptions) {
  return voices
    .filter((voice) => matchesAnyVoiceName(voice, voiceNames) || voice.lang.toLowerCase().startsWith(languagePrefix))
    .filter((voice) => matchesAnyVoiceName(voice, voiceNames))
    .sort((left, right) => {
      const leftIndex = getVoiceProfileIndex(left.name, voiceNames);
      const rightIndex = getVoiceProfileIndex(right.name, voiceNames);

      if (leftIndex !== rightIndex) {
        return leftIndex - rightIndex;
      }

      return left.name.localeCompare(right.name);
    });
}

export function getDefaultVoiceForProfile(voices: SpeechSynthesisVoice[], { languagePrefix, voiceNames }: VoiceProfileOptions) {
  for (const voiceName of voiceNames) {
    const matchedVoice = voices.find((voice) => matchesVoiceName(voice, voiceName));

    if (matchedVoice) {
      return matchedVoice;
    }
  }

  return getDefaultVoiceForLanguage(voices, { languagePrefix, allowedVoiceNames: voiceNames });
}

export const DEFAULT_PORTUGUESE_VOICE_NAME = "Google português do Brasil";
export const PORTUGUESE_VOICE_PROFILE = [
  "Google português do Brasil",
  "Google português",
  "Joana",
  "Luciana",
  "Microsoft Fernanda Online (Natural) - Portuguese (Brazil)",
];

export function getPortugueseVoiceOptions(voices: SpeechSynthesisVoice[]) {
  return getVoiceOptionsForProfile(voices, {
    languagePrefix: "pt",
    voiceNames: PORTUGUESE_VOICE_PROFILE,
  });
}

export function getDefaultPortugueseVoice(voices: SpeechSynthesisVoice[]) {
  return getDefaultVoiceForProfile(voices, {
    languagePrefix: "pt",
    voiceNames: PORTUGUESE_VOICE_PROFILE,
  });
}

export const DEFAULT_ITALIAN_VOICE_NAME = "Google italiano";
export const ITALIAN_VOICE_PROFILE = [
  "Google italiano",
  "Microsoft Diego Online (Natural) - Italian (Italy)",
  "Microsoft Elsa Online (Natural) - Italian (Italy)",
  "Microsoft Isabella Online (Natural) - Italian (Italy)",
];

export function getItalianVoiceOptions(voices: SpeechSynthesisVoice[]) {
  return getVoiceOptionsForProfile(voices, {
    languagePrefix: "it",
    voiceNames: ITALIAN_VOICE_PROFILE,
  });
}

export function getDefaultItalianVoice(voices: SpeechSynthesisVoice[]) {
  return getDefaultVoiceForProfile(voices, {
    languagePrefix: "it",
    voiceNames: ITALIAN_VOICE_PROFILE,
  });
}

export const DEFAULT_GERMAN_VOICE_NAME = "Google Deutsch";
export const GERMAN_VOICE_PROFILE = [
  DEFAULT_GERMAN_VOICE_NAME,
  "Anna",
  "Markus",
  "Microsoft Katja Online (Natural) - German (Germany)",
];

export function getGermanVoiceOptions(voices: SpeechSynthesisVoice[]) {
  return getVoiceOptionsForProfile(voices, {
    languagePrefix: "de",
    voiceNames: GERMAN_VOICE_PROFILE,
  });
}

export function getDefaultGermanVoice(voices: SpeechSynthesisVoice[]) {
  return getDefaultVoiceForProfile(voices, {
    languagePrefix: "de",
    voiceNames: GERMAN_VOICE_PROFILE,
  });
}

export const DEFAULT_SPANISH_VOICE_NAME = "Google español";
export const SPANISH_VOICE_PROFILE = [
  DEFAULT_SPANISH_VOICE_NAME,
  "Jorge",
  "Monica",
  "Microsoft Elvira Online (Natural) - Spanish (Spain)",
];

export function getSpanishVoiceOptions(voices: SpeechSynthesisVoice[]) {
  return getVoiceOptionsForProfile(voices, {
    languagePrefix: "es",
    voiceNames: SPANISH_VOICE_PROFILE,
  });
}

export function getDefaultSpanishVoice(voices: SpeechSynthesisVoice[]) {
  return getDefaultVoiceForProfile(voices, {
    languagePrefix: "es",
    voiceNames: SPANISH_VOICE_PROFILE,
  });
}

export function speakText(text: string, languageTag: string, voice?: SpeechSynthesisVoice | null) {
  if (!isSpeechSynthesisSupported()) {
    return false;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = languageTag;
  utterance.rate = 0.95;
  utterance.pitch = 1;
  utterance.volume = 1;

  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);

  return true;
}

export function speakJapaneseText(text: string, voice?: SpeechSynthesisVoice | null) {
  return speakText(text, "ja-JP", voice);
}
