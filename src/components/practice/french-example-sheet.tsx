"use client";

import { useEffect, useMemo, useState } from "react";

import { ExampleWordsSheet } from "@/components/practice/example-words-sheet";
import { AppDictionary } from "@/i18n/dictionaries";
import {
  DEFAULT_FRENCH_VOICE_NAME,
  getDisplayVoiceName,
  getDefaultVoiceForProfile,
  isSpeechSynthesisSupported,
  loadSpeechSynthesisVoices,
  getVoiceOptionsForProfile,
  FRENCH_VOICE_PROFILE,
  speakText,
} from "@/lib/speech-synthesis";
import { frenchExampleWordsByTemplateId } from "@/data/templates/fr/examples";

type FrenchExampleSheetProps = {
  dictionary: AppDictionary;
  selectedTemplateId: string;
  selectedTemplateLabel: string;
  selectedTemplateNativeLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function FrenchExampleSheet({
  dictionary,
  selectedTemplateId,
  selectedTemplateLabel,
  selectedTemplateNativeLabel,
  open,
  onOpenChange,
}: FrenchExampleSheetProps) {
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

  const exampleWords = frenchExampleWordsByTemplateId[selectedTemplateId] ?? [];
  const voiceOptions = useMemo(
    () => getVoiceOptionsForProfile(voices, { languagePrefix: "fr", voiceNames: FRENCH_VOICE_PROFILE }),
    [voices]
  );
  const defaultVoice = useMemo(
    () => getDefaultVoiceForProfile(voices, { languagePrefix: "fr", voiceNames: FRENCH_VOICE_PROFILE }),
    [voices]
  );
  const activeVoice =
    voiceOptions.find((voice) => voice.name === selectedVoiceName) ?? defaultVoice ?? voiceOptions[0] ?? null;
  const activeVoiceLabel = activeVoice ? getDisplayVoiceName(activeVoice.name) : DEFAULT_FRENCH_VOICE_NAME;

  function handleSpeak(word: string) {
    speakText(word, "fr-FR", activeVoice);
  }

  return (
    <ExampleWordsSheet
      dictionary={dictionary}
      title={dictionary.sections.exampleWordsTitle}
      description={dictionary.sections.exampleWordsDescription}
      languageLabel="Français"
      selectedTemplateLabel={selectedTemplateLabel}
      selectedTemplateNativeLabel={selectedTemplateNativeLabel}
      open={open}
      onOpenChange={onOpenChange}
      voiceSelectorTitle={dictionary.sections.exampleVoiceSelectorTitle}
      voiceOptions={voiceOptions}
      activeVoiceName={activeVoice?.name ?? null}
      activeVoiceLabel={activeVoiceLabel}
      defaultVoiceName={DEFAULT_FRENCH_VOICE_NAME}
      isSpeechSupported={isSpeechSupported}
      speechUnavailableText={dictionary.sections.exampleWordsSpeechUnavailable}
      exampleWordsUnavailableText={dictionary.sections.exampleWordsUnavailable}
      exampleWords={exampleWords}
      onSelectVoiceName={setSelectedVoiceName}
      onSpeak={handleSpeak}
    />
  );
}
