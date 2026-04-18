"use client";

import { startTransition, useEffect, useRef, useState } from "react";

import { languagePacks } from "@/data/practice-content";
import { AppDictionary } from "@/i18n/dictionaries";
import { AppLocale, getLocalizedText } from "@/i18n/config";
import { calculatePrototypeSimilarity } from "@/lib/similarity";
import { Stroke, StrokePoint } from "@/types/writing";
import { LanguagePackTabs } from "@/components/practice/language-pack-tabs";
import { PracticeCanvas } from "@/components/practice/practice-canvas";
import { TemplateGrid } from "@/components/practice/template-grid";
import { JapaneseExampleSheet } from "@/components/practice/japanese-example-sheet";
import { RussianExampleSheet } from "@/components/practice/russian-example-sheet";
import { ArabicExampleSheet } from "@/components/practice/arabic-example-sheet";
import { PracticeWorkspace } from "@/components/practice/practice-workspace";

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
  const [selectedLanguageId, setSelectedLanguageId] = useState(languagePacks[0].id);
  const [selectedTemplateId, setSelectedTemplateId] = useState(DEFAULT_TEMPLATE.id);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [score, setScore] = useState<number | null>(null);
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const [isExampleSheetOpen, setIsExampleSheetOpen] = useState(false);
  const activeStrokeIdRef = useRef<string | null>(null);
  const activePointerIdRef = useRef<number | null>(null);

  const selectedLanguage = languagePacks.find((pack) => pack.id === selectedLanguageId) ?? languagePacks[0];
  const selectedTemplate =
    selectedLanguage.templates.find((template) => template.id === selectedTemplateId) ?? selectedLanguage.templates[0];

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

  const selectedTemplateIndex = selectedLanguage.templates.findIndex((template) => template.id === selectedTemplate.id);
  const canGoPrevious = selectedTemplateIndex > 0;
  const canGoNext = selectedTemplateIndex < selectedLanguage.templates.length - 1;

  useEffect(() => {
    if (strokes.length === 0) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      const nextScore = calculatePrototypeSimilarity(selectedTemplate, strokes);
      setScore(nextScore);
    }, 480);

    return () => window.clearTimeout(timeoutId);
  }, [selectedTemplate, strokes]);

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
            onPreviousTemplate={handlePreviousTemplate}
            onNextTemplate={handleNextTemplate}
            onClearCanvas={clearCanvas}
            onTogglePreview={() => setIsPreviewVisible((current) => !current)}
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
            onOpenExampleWords={() => setIsExampleSheetOpen(true)}
          />
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
        </div>
      }
    />
  );
}
