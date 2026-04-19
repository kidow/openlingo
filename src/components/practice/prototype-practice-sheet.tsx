"use client";

import { startTransition, useEffect, useMemo, useRef, useState } from "react";

import { languagePacks } from "@/data/practice-content";
import { AppDictionary } from "@/i18n/dictionaries";
import { AppLocale, getLocalizedText } from "@/i18n/config";
import { calculatePrototypeSimilarity } from "@/lib/similarity";
import {
  getArabicVoiceOptions,
  getDefaultVoiceForProfile,
  getDefaultGermanVoice,
  getDefaultEnglishVoice,
  getDefaultItalianVoice,
  getDefaultPortugueseVoice,
  getDefaultRussianVoice,
  getDefaultSpanishVoice,
  getDefaultJapaneseVoice,
  getEnglishVoiceOptions,
  getGermanVoiceOptions,
  getItalianVoiceOptions,
  getJapaneseVoiceOptions,
  getPortugueseVoiceOptions,
  getRussianVoiceOptions,
  getSpanishVoiceOptions,
  getVoiceOptionsForProfile,
  FRENCH_VOICE_PROFILE,
  getDefaultArabicVoice,
  isSpeechSynthesisSupported,
  loadSpeechSynthesisVoices,
  speakJapaneseText,
  speakText,
} from "@/lib/speech-synthesis";
import { Stroke, StrokePoint } from "@/types/writing";
import { LanguagePackTabs } from "@/components/practice/language-pack-tabs";
import { PracticeCanvas } from "@/components/practice/practice-canvas";
import { TemplateGrid } from "@/components/practice/template-grid";
import { JapaneseExampleSheet } from "@/components/practice/japanese-example-sheet";
import { RussianExampleSheet } from "@/components/practice/russian-example-sheet";
import { ArabicExampleSheet } from "@/components/practice/arabic-example-sheet";
import { GermanExampleSheet } from "@/components/practice/german-example-sheet";
import { FrenchExampleSheet } from "@/components/practice/french-example-sheet";
import { SpanishExampleSheet } from "@/components/practice/spanish-example-sheet";
import { PortugueseExampleSheet } from "@/components/practice/portuguese-example-sheet";
import { ItalianExampleSheet } from "@/components/practice/italian-example-sheet";
import { ChineseExampleSheet } from "@/components/practice/chinese-example-sheet";
import { PracticeWorkspace } from "@/components/practice/practice-workspace";
import { useExampleWordsAction } from "@/components/layout/example-words-action-context";

function createStrokePoint(event: PointerEvent | React.PointerEvent<SVGSVGElement>, bounds: DOMRect): StrokePoint {
  return {
    x: ((event.clientX - bounds.left) / bounds.width) * 100,
    y: ((event.clientY - bounds.top) / bounds.height) * 100,
    t: Date.now(),
  };
}

const DEFAULT_TEMPLATE = languagePacks[0].templates[0];

type PrototypePracticeSheetProps = {
  locale: AppLocale;
  dictionary: AppDictionary;
};

export function PrototypePracticeSheet({ locale, dictionary }: PrototypePracticeSheetProps) {
  const { setAction } = useExampleWordsAction();
  const [selectedLanguageId, setSelectedLanguageId] = useState(languagePacks[0].id);
  const [selectedTemplateId, setSelectedTemplateId] = useState(DEFAULT_TEMPLATE.id);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isExampleSheetOpen, setIsExampleSheetOpen] = useState(false);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const activeStrokeIdRef = useRef<string | null>(null);
  const activePointerIdRef = useRef<number | null>(null);

  const selectedLanguage = languagePacks.find((pack) => pack.id === selectedLanguageId) ?? languagePacks[0];
  const selectedTemplate =
    selectedLanguage.templates.find((template) => template.id === selectedTemplateId) ?? selectedLanguage.templates[0];
  const isJapanesePack = selectedLanguage.id === "ja";
  const isArabicPack = selectedLanguage.id === "ar";
  const isRussianPack = selectedLanguage.id === "ru";
  const isGermanPack = selectedLanguage.id === "de";
  const isSpanishPack = selectedLanguage.id === "es";
  const isFrenchPack = selectedLanguage.id === "fr";
  const isPortuguesePack = selectedLanguage.id === "pt";
  const isItalianPack = selectedLanguage.id === "it";
  const isKoreanPack = selectedLanguage.id === "ko";
  const isEnglishPack = selectedLanguage.id === "en";
  const isCanvasPronunciationPack =
    isJapanesePack ||
    isArabicPack ||
    isRussianPack ||
    isGermanPack ||
    isSpanishPack ||
    isFrenchPack ||
    isPortuguesePack ||
    isItalianPack ||
    isKoreanPack ||
    isEnglishPack;
  const isCanvasPronunciationSupported = isCanvasPronunciationPack && isSpeechSynthesisSupported();
  const supportsExampleWords = ["ja", "ru", "ar", "de", "es", "fr", "pt", "it", "zh-hans", "zh-hant"].includes(
    selectedLanguage.id
  );

  const selectedPackVoice = useMemo(() => {
    if (!isSpeechSynthesisSupported()) {
      return null;
    }

    switch (selectedLanguage.id) {
      case "ja":
        return getDefaultJapaneseVoice(voices) ?? getJapaneseVoiceOptions(voices)[0] ?? null;
      case "ar":
        return getDefaultArabicVoice(voices) ?? getArabicVoiceOptions(voices)[0] ?? null;
      case "ru":
        return getDefaultRussianVoice(voices) ?? getRussianVoiceOptions(voices)[0] ?? null;
      case "de":
        return getDefaultGermanVoice(voices) ?? getGermanVoiceOptions(voices)[0] ?? null;
      case "es":
        return getDefaultSpanishVoice(voices) ?? getSpanishVoiceOptions(voices)[0] ?? null;
      case "fr":
        return (
          getDefaultVoiceForProfile(voices, { languagePrefix: "fr", voiceNames: FRENCH_VOICE_PROFILE }) ??
          getVoiceOptionsForProfile(voices, { languagePrefix: "fr", voiceNames: FRENCH_VOICE_PROFILE })[0] ??
          null
        );
      case "pt":
        return getDefaultPortugueseVoice(voices) ?? getPortugueseVoiceOptions(voices)[0] ?? null;
      case "it":
        return getDefaultItalianVoice(voices) ?? getItalianVoiceOptions(voices)[0] ?? null;
      case "en":
        return getDefaultEnglishVoice(voices) ?? getEnglishVoiceOptions(voices)[0] ?? null;
      case "ko":
      default:
        return null;
    }
  }, [selectedLanguage.id, voices]);

  function resetPracticeState(options?: { closeExampleSheet?: boolean }) {
    activeStrokeIdRef.current = null;
    activePointerIdRef.current = null;
    setStrokes([]);
    setScore(null);
    setIsPreviewVisible(false);
    if (options?.closeExampleSheet) {
      setIsExampleSheetOpen(false);
    }
  }

  useEffect(() => {
    if (!isSpeechSynthesisSupported()) {
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
  }, []);

  const selectedTemplateIndex = selectedLanguage.templates.findIndex((template) => template.id === selectedTemplate.id);
  const canGoPrevious = selectedTemplateIndex > 0;
  const canGoNext = selectedTemplateIndex < selectedLanguage.templates.length - 1;

  useEffect(() => {
    if (selectedTemplate.mode !== "character" || strokes.length === 0) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const nextScore = calculatePrototypeSimilarity(selectedTemplate, strokes);
      setScore(nextScore);
    }, 480);

    return () => window.clearTimeout(timeoutId);
  }, [selectedTemplate, strokes]);

  useEffect(() => {
    if (!supportsExampleWords) {
      setAction(null);
      return;
    }

    setAction({
      label: dictionary.sections.exampleWordsTitle,
      onOpen: () => setIsExampleSheetOpen(true),
    });

    return () => setAction(null);
  }, [dictionary.sections.exampleWordsTitle, selectedLanguage.id, setAction, supportsExampleWords]);

  function handleLanguageSelect(languageId: string) {
    const nextLanguage = languagePacks.find((pack) => pack.id === languageId) ?? languagePacks[0];

    startTransition(() => {
      setSelectedLanguageId(nextLanguage.id);
      setSelectedTemplateId(nextLanguage.templates[0].id);
      resetPracticeState({ closeExampleSheet: true });
    });
  }

  function handleTemplateSelect(templateId: string) {
    startTransition(() => {
      setSelectedTemplateId(templateId);
      resetPracticeState();
    });
  }

  function beginStroke(event: React.PointerEvent<SVGSVGElement>) {
    if (activeStrokeIdRef.current) {
      return;
    }

    if (event.button !== 0 && event.pointerType === "mouse") {
      return;
    }

    setIsPreviewVisible(false);

    const bounds = event.currentTarget.getBoundingClientRect();
    const point = createStrokePoint(event, bounds);
    const strokeId = crypto.randomUUID();

    activeStrokeIdRef.current = strokeId;
    activePointerIdRef.current = event.pointerId;
    setScore(null);
    event.currentTarget.setPointerCapture(event.pointerId);
    setStrokes((current) => [...current, { id: strokeId, points: [point] }]);
  }

  function moveStroke(event: React.PointerEvent<SVGSVGElement>) {
    const strokeId = activeStrokeIdRef.current;

    if (!strokeId || activePointerIdRef.current !== event.pointerId) {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const point = createStrokePoint(event, bounds);

    setStrokes((current) =>
      current.map((stroke) =>
        stroke.id === strokeId
          ? {
              ...stroke,
              points: [...stroke.points, point],
            }
          : stroke
      )
    );
  }

  function endStroke(event: React.PointerEvent<SVGSVGElement>) {
    if (!activeStrokeIdRef.current || activePointerIdRef.current !== event.pointerId) {
      return;
    }

    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    activeStrokeIdRef.current = null;
    activePointerIdRef.current = null;
  }

  function clearCanvas() {
    resetPracticeState();
  }

  function handlePreviousTemplate() {
    if (!canGoPrevious) {
      return;
    }

    handleTemplateSelect(selectedLanguage.templates[selectedTemplateIndex - 1].id);
  }

  function handleNextTemplate() {
    if (!canGoNext) {
      return;
    }

    handleTemplateSelect(selectedLanguage.templates[selectedTemplateIndex + 1].id);
  }

  function handlePlayPronunciation() {
    switch (selectedLanguage.id) {
      case "ja":
        speakJapaneseText(selectedTemplate.nativeLabel, selectedPackVoice);
        return;
      case "ar":
        speakText(selectedTemplate.nativeLabel, "ar-SA", selectedPackVoice);
        return;
      case "ru":
        speakText(selectedTemplate.nativeLabel, "ru-RU", selectedPackVoice);
        return;
      case "de":
        speakText(selectedTemplate.nativeLabel, "de-DE", selectedPackVoice);
        return;
      case "es":
        speakText(selectedTemplate.nativeLabel, "es-ES", selectedPackVoice);
        return;
      case "fr":
        speakText(selectedTemplate.nativeLabel, "fr-FR", selectedPackVoice);
        return;
      case "pt":
        speakText(selectedTemplate.nativeLabel, "pt-BR", selectedPackVoice);
        return;
      case "it":
        speakText(selectedTemplate.nativeLabel, "it-IT", selectedPackVoice);
        return;
      case "ko":
        speakText(selectedTemplate.nativeLabel, "ko-KR", selectedPackVoice);
        return;
      case "en":
        speakText(selectedTemplate.nativeLabel, "en-US", selectedPackVoice);
        return;
    }
  }

  return (
    <PracticeWorkspace
      tabsBand={
        <LanguagePackTabs
          ariaLabel={dictionary.sections.languagePacksTitle}
          selectedId={selectedLanguage.id}
          onSelect={handleLanguageSelect}
          items={languagePacks.map((pack) => {
            const packLabel = getLocalizedText(pack.label, locale);

            return {
              id: pack.id,
              nativeLabel: pack.nativeLabel,
              secondaryLabel: pack.nativeLabel === packLabel ? undefined : packLabel,
            };
          })}
        />
      }
      canvasStage={
        <section
          id={`language-pack-panel-${selectedLanguage.id}`}
          role="tabpanel"
          aria-labelledby={`language-pack-tab-${selectedLanguage.id}`}
          data-testid="practice-canvas-stage"
          className="grid gap-5"
        >
          <PracticeCanvas
            dictionary={dictionary}
            selectedTemplate={selectedTemplate}
            score={score}
            strokes={strokes}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            isPreviewVisible={isPreviewVisible}
            pronunciationButtonLabel={`${dictionary.buttons.playPronunciation}: ${selectedTemplate.nativeLabel}`}
            pronunciationButtonDisabled={!isCanvasPronunciationSupported}
            onPreviousTemplate={handlePreviousTemplate}
            onNextTemplate={handleNextTemplate}
            onClearCanvas={clearCanvas}
            onTogglePreview={() => setIsPreviewVisible((current) => !current)}
            onPlayPronunciation={isCanvasPronunciationPack ? handlePlayPronunciation : undefined}
            onBeginStroke={beginStroke}
            onMoveStroke={moveStroke}
            onEndStroke={endStroke}
          />
        </section>
      }
      templateGrid={
        <div className="grid gap-4">
          <TemplateGrid
            key={selectedLanguage.id}
            locale={locale}
            dictionary={dictionary}
            selectedLanguage={selectedLanguage}
            selectedTemplateId={selectedTemplate.id}
            onSelectTemplate={handleTemplateSelect}
          />
          {selectedLanguage.id === "zh-hans" || selectedLanguage.id === "zh-hant" ? (
            <ChineseExampleSheet
              dictionary={dictionary}
              languageId={selectedLanguage.id}
              selectedTemplateId={selectedTemplate.id}
              selectedTemplateLabel={getLocalizedText(selectedTemplate.label, locale)}
              selectedTemplateNativeLabel={selectedTemplate.nativeLabel}
              open={isExampleSheetOpen}
              onOpenChange={setIsExampleSheetOpen}
            />
          ) : null}
          {selectedLanguage.id === "ja" ? (
            <JapaneseExampleSheet
              dictionary={dictionary}
              selectedTemplateId={selectedTemplate.id}
              selectedTemplateLabel={getLocalizedText(selectedTemplate.label, locale)}
              selectedTemplateNativeLabel={selectedTemplate.nativeLabel}
              open={isExampleSheetOpen}
              onOpenChange={setIsExampleSheetOpen}
            />
          ) : null}
          {selectedLanguage.id === "ru" ? (
            <RussianExampleSheet
              dictionary={dictionary}
              selectedTemplateId={selectedTemplate.id}
              selectedTemplateLabel={getLocalizedText(selectedTemplate.label, locale)}
              selectedTemplateNativeLabel={selectedTemplate.nativeLabel}
              open={isExampleSheetOpen}
              onOpenChange={setIsExampleSheetOpen}
            />
          ) : null}
          {selectedLanguage.id === "ar" ? (
            <ArabicExampleSheet
              dictionary={dictionary}
              selectedTemplateId={selectedTemplate.id}
              selectedTemplateLabel={getLocalizedText(selectedTemplate.label, locale)}
              selectedTemplateNativeLabel={selectedTemplate.nativeLabel}
              open={isExampleSheetOpen}
              onOpenChange={setIsExampleSheetOpen}
            />
          ) : null}
          {selectedLanguage.id === "de" ? (
            <GermanExampleSheet
              dictionary={dictionary}
              selectedTemplateId={selectedTemplate.id}
              selectedTemplateLabel={getLocalizedText(selectedTemplate.label, locale)}
              selectedTemplateNativeLabel={selectedTemplate.nativeLabel}
              open={isExampleSheetOpen}
              onOpenChange={setIsExampleSheetOpen}
            />
          ) : null}
          {selectedLanguage.id === "fr" ? (
            <FrenchExampleSheet
              dictionary={dictionary}
              selectedTemplateId={selectedTemplate.id}
              selectedTemplateLabel={getLocalizedText(selectedTemplate.label, locale)}
              selectedTemplateNativeLabel={selectedTemplate.nativeLabel}
              open={isExampleSheetOpen}
              onOpenChange={setIsExampleSheetOpen}
            />
          ) : null}
          {selectedLanguage.id === "es" ? (
            <SpanishExampleSheet
              dictionary={dictionary}
              selectedTemplateId={selectedTemplate.id}
              selectedTemplateLabel={getLocalizedText(selectedTemplate.label, locale)}
              selectedTemplateNativeLabel={selectedTemplate.nativeLabel}
              open={isExampleSheetOpen}
              onOpenChange={setIsExampleSheetOpen}
            />
          ) : null}
          {selectedLanguage.id === "pt" ? (
            <PortugueseExampleSheet
              dictionary={dictionary}
              selectedTemplateId={selectedTemplate.id}
              selectedTemplateLabel={getLocalizedText(selectedTemplate.label, locale)}
              selectedTemplateNativeLabel={selectedTemplate.nativeLabel}
              open={isExampleSheetOpen}
              onOpenChange={setIsExampleSheetOpen}
            />
          ) : null}
          {selectedLanguage.id === "it" ? (
            <ItalianExampleSheet
              dictionary={dictionary}
              selectedTemplateId={selectedTemplate.id}
              selectedTemplateLabel={getLocalizedText(selectedTemplate.label, locale)}
              selectedTemplateNativeLabel={selectedTemplate.nativeLabel}
              open={isExampleSheetOpen}
              onOpenChange={setIsExampleSheetOpen}
            />
          ) : null}
        </div>
      }
    />
  );
}
