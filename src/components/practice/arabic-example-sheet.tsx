"use client";

import { useEffect, useMemo, useState } from "react";

import { AppDictionary } from "@/i18n/dictionaries";
import { ExampleWordsSheet } from "@/components/practice/example-words-sheet";
import {
  getDisplayVoiceName,
  getDefaultVoiceForLanguage,
  getVoiceOptionsForLanguage,
  loadSpeechSynthesisVoices,
  isSpeechSynthesisSupported,
  speakText,
} from "@/lib/speech-synthesis";
import { arabicExampleWordsByTemplateId } from "@/data/templates/ar/examples";

type ArabicExampleSheetProps = {
  dictionary: AppDictionary;
  selectedTemplateId: string;
  selectedTemplateLabel: string;
  selectedTemplateNativeLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const DEFAULT_ARABIC_VOICE_NAME = "Arabic";

export function ArabicExampleSheet({
  dictionary,
  selectedTemplateId,
  selectedTemplateLabel,
  selectedTemplateNativeLabel,
  open,
  onOpenChange,
}: ArabicExampleSheetProps) {
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

  const exampleWords = arabicExampleWordsByTemplateId[selectedTemplateId] ?? [];
  const voiceOptions = useMemo(() => getVoiceOptionsForLanguage(voices, { languagePrefix: "ar" }), [voices]);
  const defaultVoice = useMemo(() => getDefaultVoiceForLanguage(voices, { languagePrefix: "ar" }), [voices]);
  const activeVoice =
    voiceOptions.find((voice) => voice.name === selectedVoiceName) ?? defaultVoice ?? voiceOptions[0] ?? null;
  const activeVoiceLabel = activeVoice ? getDisplayVoiceName(activeVoice.name) : DEFAULT_ARABIC_VOICE_NAME;

  function handleSpeak(word: string) {
    speakText(word, "ar-SA", activeVoice);
  }

  return (
    <ExampleWordsSheet
      dictionary={dictionary}
      title={dictionary.sections.exampleWordsTitle}
      description={dictionary.sections.exampleWordsDescription}
      languageLabel="العربية"
      selectedTemplateLabel={selectedTemplateLabel}
      selectedTemplateNativeLabel={selectedTemplateNativeLabel}
      open={open}
      onOpenChange={onOpenChange}
      voiceSelectorTitle={dictionary.sections.exampleVoiceSelectorTitle}
      voiceOptions={voiceOptions}
      activeVoiceName={activeVoice?.name ?? null}
      activeVoiceLabel={activeVoiceLabel}
      defaultVoiceName={DEFAULT_ARABIC_VOICE_NAME}
      isSpeechSupported={isSpeechSupported}
      speechUnavailableText={dictionary.sections.exampleWordsSpeechUnavailable}
      exampleWordsUnavailableText={dictionary.sections.exampleWordsUnavailable}
      exampleWords={exampleWords}
      onSelectVoiceName={setSelectedVoiceName}
      onSpeak={handleSpeak}
      layoutDirection="rtl"
    />
  );
}
