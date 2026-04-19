"use client";

import { useEffect, useMemo, useState } from "react";

import { AppDictionary } from "@/i18n/dictionaries";
import { ExampleWordsSheet } from "@/components/practice/example-words-sheet";
import {
  DEFAULT_ENGLISH_VOICE_NAME,
  ENGLISH_VOICE_PROFILE,
  getDefaultVoiceForProfile,
  getDisplayVoiceName,
  getVoiceOptionsForProfile,
  isSpeechSynthesisSupported,
  loadSpeechSynthesisVoices,
  speakText,
} from "@/lib/speech-synthesis";
import { englishExampleWordsByTemplateId } from "@/data/templates/en/examples";

type EnglishExampleSheetProps = {
  dictionary: AppDictionary;
  selectedTemplateId: string;
  selectedTemplateLabel: string;
  selectedTemplateNativeLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function EnglishExampleSheet({
  dictionary,
  selectedTemplateId,
  selectedTemplateLabel,
  selectedTemplateNativeLabel,
  open,
  onOpenChange,
}: EnglishExampleSheetProps) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string | null>(null);
  const isSpeechSupported = isSpeechSynthesisSupported();

  useEffect(() => {
    if (!isSpeechSupported) {
      return;
    }

    let isActive = true;

    void loadSpeechSynthesisVoices().then((loadedVoices) => {
      if (isActive) {
        setVoices(loadedVoices);
      }
    });

    return () => {
      isActive = false;
    };
  }, [isSpeechSupported]);

  const exampleWords = englishExampleWordsByTemplateId[selectedTemplateId] ?? [];
  const voiceOptions = useMemo(
    () => getVoiceOptionsForProfile(voices, { languagePrefix: "en", voiceNames: ENGLISH_VOICE_PROFILE }),
    [voices]
  );
  const defaultVoice = useMemo(
    () => getDefaultVoiceForProfile(voices, { languagePrefix: "en", voiceNames: ENGLISH_VOICE_PROFILE }),
    [voices]
  );
  const activeVoice =
    voiceOptions.find((voice) => voice.name === selectedVoiceName) ?? defaultVoice ?? voiceOptions[0] ?? null;
  const activeVoiceLabel = activeVoice ? getDisplayVoiceName(activeVoice.name) : DEFAULT_ENGLISH_VOICE_NAME;

  function handleSpeak(word: string) {
    speakText(word, "en-US", activeVoice);
  }

  return (
    <ExampleWordsSheet
      dictionary={dictionary}
      title={dictionary.sections.exampleWordsTitle}
      description={dictionary.sections.exampleWordsDescription}
      languageLabel="English"
      selectedTemplateLabel={selectedTemplateLabel}
      selectedTemplateNativeLabel={selectedTemplateNativeLabel}
      open={open}
      onOpenChange={onOpenChange}
      voiceSelectorTitle={dictionary.sections.exampleVoiceSelectorTitle}
      voiceOptions={voiceOptions}
      activeVoiceName={activeVoice?.name ?? null}
      activeVoiceLabel={activeVoiceLabel}
      defaultVoiceName={DEFAULT_ENGLISH_VOICE_NAME}
      isSpeechSupported={isSpeechSupported}
      speechUnavailableText={dictionary.sections.exampleWordsSpeechUnavailable}
      exampleWordsUnavailableText={dictionary.sections.exampleWordsUnavailable}
      exampleWords={exampleWords}
      onSelectVoiceName={setSelectedVoiceName}
      onSpeak={handleSpeak}
    />
  );
}
