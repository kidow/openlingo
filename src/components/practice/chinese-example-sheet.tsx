"use client";

import { useEffect, useMemo, useState } from "react";

import { AppDictionary } from "@/i18n/dictionaries";
import { ExampleWordsSheet } from "@/components/practice/example-words-sheet";
import {
  DEFAULT_CHINESE_SIMPLIFIED_VOICE_NAME,
  DEFAULT_CHINESE_TRADITIONAL_VOICE_NAME,
  getChineseVoiceOptions,
  getDefaultChineseVoice,
  getDisplayVoiceName,
  isSpeechSynthesisSupported,
  loadSpeechSynthesisVoices,
  speakText,
} from "@/lib/speech-synthesis";
import { chineseExampleWordsByTemplateId } from "@/data/templates/zh/examples";

type ChineseExampleSheetProps = {
  dictionary: AppDictionary;
  languageId: "zh-hans" | "zh-hant";
  selectedTemplateId: string;
  selectedTemplateLabel: string;
  selectedTemplateNativeLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function ChineseExampleSheet({
  dictionary,
  languageId,
  selectedTemplateId,
  selectedTemplateLabel,
  selectedTemplateNativeLabel,
  open,
  onOpenChange,
}: ChineseExampleSheetProps) {
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

  const voiceVariant = languageId === "zh-hans" ? "simplified" : "traditional";
  const exampleWords = chineseExampleWordsByTemplateId[selectedTemplateId] ?? [];
  const voiceOptions = useMemo(() => getChineseVoiceOptions(voices, voiceVariant), [voiceVariant, voices]);
  const defaultVoice = useMemo(() => getDefaultChineseVoice(voices, voiceVariant), [voiceVariant, voices]);
  const activeVoice =
    voiceOptions.find((voice) => voice.name === selectedVoiceName) ?? defaultVoice ?? voiceOptions[0] ?? null;
  const activeVoiceLabel = activeVoice
    ? getDisplayVoiceName(activeVoice.name)
    : voiceVariant === "simplified"
      ? DEFAULT_CHINESE_SIMPLIFIED_VOICE_NAME
      : DEFAULT_CHINESE_TRADITIONAL_VOICE_NAME;
  const speechLanguageTag = voiceVariant === "simplified" ? "zh-CN" : "zh-TW";

  function handleSpeak(word: string) {
    speakText(word, speechLanguageTag, activeVoice);
  }

  return (
    <ExampleWordsSheet
      dictionary={dictionary}
      title={dictionary.sections.exampleWordsTitle}
      description={dictionary.sections.exampleWordsDescription}
      languageLabel={languageId === "zh-hans" ? "简体中文" : "繁體中文"}
      selectedTemplateLabel={selectedTemplateLabel}
      selectedTemplateNativeLabel={selectedTemplateNativeLabel}
      open={open}
      onOpenChange={onOpenChange}
      voiceSelectorTitle={dictionary.sections.exampleVoiceSelectorTitle}
      voiceOptions={voiceOptions}
      activeVoiceName={activeVoice?.name ?? null}
      activeVoiceLabel={activeVoiceLabel}
      defaultVoiceName={voiceVariant === "simplified" ? DEFAULT_CHINESE_SIMPLIFIED_VOICE_NAME : DEFAULT_CHINESE_TRADITIONAL_VOICE_NAME}
      isSpeechSupported={isSpeechSupported}
      speechUnavailableText={dictionary.sections.exampleWordsSpeechUnavailable}
      exampleWordsUnavailableText={dictionary.sections.exampleWordsUnavailable}
      exampleWords={exampleWords}
      onSelectVoiceName={setSelectedVoiceName}
      onSpeak={handleSpeak}
    />
  );
}
