export function isSpeechSynthesisSupported() {
  return typeof window !== "undefined" && "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
}

export function getSpeechSynthesisVoices() {
  if (!isSpeechSynthesisSupported()) {
    return [];
  }

  return window.speechSynthesis.getVoices();
}

export const DEFAULT_JAPANESE_VOICE_NAME = "Google 日本語";

function normalizeVoiceName(value: string) {
  return value.trim().toLowerCase();
}

export function getDefaultJapaneseVoice(voices: SpeechSynthesisVoice[]) {
  const googleJapaneseVoice = voices.find((voice) => normalizeVoiceName(voice.name) === normalizeVoiceName(DEFAULT_JAPANESE_VOICE_NAME));

  if (googleJapaneseVoice) {
    return googleJapaneseVoice;
  }

  const japaneseVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("ja"));

  if (japaneseVoice) {
    return japaneseVoice;
  }

  return voices.find((voice) => voice.default) ?? null;
}

export function getJapaneseVoiceOptions(voices: SpeechSynthesisVoice[]) {
  return voices
    .filter((voice) => voice.lang.toLowerCase().startsWith("ja") || normalizeVoiceName(voice.name) === normalizeVoiceName(DEFAULT_JAPANESE_VOICE_NAME))
    .sort((left, right) => {
      const leftIsDefault = normalizeVoiceName(left.name) === normalizeVoiceName(DEFAULT_JAPANESE_VOICE_NAME);
      const rightIsDefault = normalizeVoiceName(right.name) === normalizeVoiceName(DEFAULT_JAPANESE_VOICE_NAME);

      if (leftIsDefault && !rightIsDefault) {
        return -1;
      }

      if (!leftIsDefault && rightIsDefault) {
        return 1;
      }

      return left.name.localeCompare(right.name);
    });
}

export function getDisplayVoiceName(name: string) {
  const trimmed = name.trim();

  if (!trimmed.includes("(")) {
    return trimmed;
  }

  const localeSuffixPatterns = ["일본", "Japanese", "Japan", "ja-"];
  const firstParenIndex = trimmed.indexOf("(");
  const suffix = trimmed.slice(firstParenIndex);

  if (localeSuffixPatterns.some((pattern) => suffix.toLowerCase().includes(pattern.toLowerCase()))) {
    return trimmed.slice(0, firstParenIndex).trim();
  }

  return trimmed.replace(/\s*\([^()]*\)\s*$/, "").trim();
}

export function speakJapaneseText(text: string, voice?: SpeechSynthesisVoice | null) {
  if (!isSpeechSynthesisSupported()) {
    return false;
  }

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
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
