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
  });
}

export function getDefaultJapaneseVoice(voices: SpeechSynthesisVoice[]) {
  return getDefaultVoiceForLanguage(voices, {
    languagePrefix: "ja",
    preferredVoiceNames: [DEFAULT_JAPANESE_VOICE_NAME],
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
