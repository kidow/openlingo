"use client";

import { useEffect, useMemo, useState } from "react";

import { AppDictionary } from "@/i18n/dictionaries";
import { ExampleWordsSheet } from "@/components/practice/example-words-sheet";
import {
  DEFAULT_SPANISH_VOICE_NAME,
  getDisplayVoiceName,
  getDefaultSpanishVoice,
  getSpanishVoiceOptions,
  loadSpeechSynthesisVoices,
  isSpeechSynthesisSupported,
  speakText,
} from "@/lib/speech-synthesis";
import { spanishExampleWordsByTemplateId } from "@/data/templates/es/examples";

type SpanishExampleSheetProps = {
  dictionary: AppDictionary;
  selectedTemplateId: string;
  selectedTemplateLabel: string;
  selectedTemplateNativeLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function SpanishExampleSheet({
  dictionary,
  selectedTemplateId,
  selectedTemplateLabel,
  selectedTemplateNativeLabel,
  open,
  onOpenChange,
}: SpanishExampleSheetProps) {
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

  const exampleWords = spanishExampleWordsByTemplateId[selectedTemplateId] ?? [];
  const voiceOptions = useMemo(() => getSpanishVoiceOptions(voices), [voices]);
  const defaultVoice = useMemo(() => getDefaultSpanishVoice(voices), [voices]);
  const activeVoice =
    voiceOptions.find((voice) => voice.name === selectedVoiceName) ?? defaultVoice ?? voiceOptions[0] ?? null;
  const activeVoiceLabel = activeVoice ? getDisplayVoiceName(activeVoice.name) : DEFAULT_SPANISH_VOICE_NAME;

  function handleSpeak(word: string) {
    speakText(word, "es-ES", activeVoice);
  }

  return (
    <ExampleWordsSheet
      dictionary={dictionary}
      title={dictionary.sections.exampleWordsTitle}
      description={dictionary.sections.exampleWordsDescription}
      languageLabel="Español"
      selectedTemplateLabel={selectedTemplateLabel}
      selectedTemplateNativeLabel={selectedTemplateNativeLabel}
      open={open}
      onOpenChange={onOpenChange}
      voiceSelectorTitle={dictionary.sections.exampleVoiceSelectorTitle}
      voiceOptions={voiceOptions}
      activeVoiceName={activeVoice?.name ?? null}
      activeVoiceLabel={activeVoiceLabel}
      defaultVoiceName={DEFAULT_SPANISH_VOICE_NAME}
      isSpeechSupported={isSpeechSupported}
      speechUnavailableText={dictionary.sections.exampleWordsSpeechUnavailable}
      exampleWordsUnavailableText={dictionary.sections.exampleWordsUnavailable}
      exampleWords={exampleWords}
      onSelectVoiceName={setSelectedVoiceName}
      onSpeak={handleSpeak}
    />
  );
}
