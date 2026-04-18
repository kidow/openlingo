"use client";

import { useEffect, useMemo, useState } from "react";

import { AppDictionary } from "@/i18n/dictionaries";
import { ExampleWordsSheet } from "@/components/practice/example-words-sheet";
import {
  DEFAULT_GERMAN_VOICE_NAME,
  getDisplayVoiceName,
  getDefaultGermanVoice,
  getGermanVoiceOptions,
  loadSpeechSynthesisVoices,
  isSpeechSynthesisSupported,
  speakText,
} from "@/lib/speech-synthesis";
import { germanExampleWordsByTemplateId } from "@/data/templates/de/examples";

type GermanExampleSheetProps = {
  dictionary: AppDictionary;
  selectedTemplateId: string;
  selectedTemplateLabel: string;
  selectedTemplateNativeLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function GermanExampleSheet({
  dictionary,
  selectedTemplateId,
  selectedTemplateLabel,
  selectedTemplateNativeLabel,
  open,
  onOpenChange,
}: GermanExampleSheetProps) {
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

  const exampleWords = germanExampleWordsByTemplateId[selectedTemplateId] ?? [];
  const voiceOptions = useMemo(() => getGermanVoiceOptions(voices), [voices]);
  const defaultVoice = useMemo(() => getDefaultGermanVoice(voices), [voices]);
  const activeVoice =
    voiceOptions.find((voice) => voice.name === selectedVoiceName) ?? defaultVoice ?? voiceOptions[0] ?? null;
  const activeVoiceLabel = activeVoice ? getDisplayVoiceName(activeVoice.name) : DEFAULT_GERMAN_VOICE_NAME;

  function handleSpeak(word: string) {
    speakText(word, "de-DE", activeVoice);
  }

  return (
    <ExampleWordsSheet
      dictionary={dictionary}
      title={dictionary.sections.exampleWordsTitle}
      description={dictionary.sections.exampleWordsDescription}
      languageLabel="Deutsch"
      selectedTemplateLabel={selectedTemplateLabel}
      selectedTemplateNativeLabel={selectedTemplateNativeLabel}
      open={open}
      onOpenChange={onOpenChange}
      voiceSelectorTitle={dictionary.sections.exampleVoiceSelectorTitle}
      voiceOptions={voiceOptions}
      activeVoiceName={activeVoice?.name ?? null}
      activeVoiceLabel={activeVoiceLabel}
      defaultVoiceName={DEFAULT_GERMAN_VOICE_NAME}
      isSpeechSupported={isSpeechSupported}
      speechUnavailableText={dictionary.sections.exampleWordsSpeechUnavailable}
      exampleWordsUnavailableText={dictionary.sections.exampleWordsUnavailable}
      exampleWords={exampleWords}
      onSelectVoiceName={setSelectedVoiceName}
      onSpeak={handleSpeak}
    />
  );
}
