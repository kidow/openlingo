"use client";

import { startTransition, useEffect, useRef, useState } from "react";

import { languagePacks } from "@/data/practice-content";
import { AppDictionary } from "@/i18n/dictionaries";
import { AppLocale, getLocalizedText } from "@/i18n/config";
import { calculatePrototypeSimilarity } from "@/lib/similarity";
import { cn } from "@/lib/utils";
import { Stroke, StrokePoint } from "@/types/writing";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguagePackTabs } from "@/components/practice/language-pack-tabs";
import { PracticeCanvas } from "@/components/practice/practice-canvas";
import { TemplateGrid } from "@/components/practice/template-grid";
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
  const [allowTouch, setAllowTouch] = useState(true);
  const [score, setScore] = useState<number | null>(null);
  const [scoreState, setScoreState] = useState<"idle" | "pending" | "ready">("idle");
  const [isPreviewVisible, setIsPreviewVisible] = useState(false);
  const activeStrokeIdRef = useRef<string | null>(null);
  const activePointerIdRef = useRef<number | null>(null);

  const selectedLanguage = languagePacks.find((pack) => pack.id === selectedLanguageId) ?? languagePacks[0];
  const selectedTemplate =
    selectedLanguage.templates.find((template) => template.id === selectedTemplateId) ?? selectedLanguage.templates[0];

  useEffect(() => {
    if (!selectedLanguage.templates.some((template) => template.id === selectedTemplateId)) {
      setSelectedTemplateId(selectedLanguage.templates[0].id);
      resetPracticeState();
    }
  }, [selectedLanguage, selectedTemplateId]);

  const renderedStrokeCount = strokes.length;
  const currentPackLabel = getLocalizedText(selectedLanguage.label, locale);
  const currentPackShowsSecondaryLabel = selectedLanguage.nativeLabel !== currentPackLabel;
  const selectedTemplateIndex = selectedLanguage.templates.findIndex((template) => template.id === selectedTemplate.id);
  const canGoPrevious = selectedTemplateIndex > 0;
  const canGoNext = selectedTemplateIndex < selectedLanguage.templates.length - 1;

  useEffect(() => {
    if (strokes.length === 0) {
      setScore(null);
      setScoreState("idle");
      return;
    }

    setScoreState("pending");

    const timeoutId = window.setTimeout(() => {
      const nextScore = calculatePrototypeSimilarity(selectedTemplate, strokes);
      setScore(nextScore);
      setScoreState("ready");
    }, 480);

    return () => window.clearTimeout(timeoutId);
  }, [selectedTemplate, strokes]);

  function resetPracticeState() {
    activeStrokeIdRef.current = null;
    activePointerIdRef.current = null;
    setStrokes([]);
    setScore(null);
    setScoreState("idle");
    setIsPreviewVisible(false);
  }

  function handleLanguageSelect(languageId: string) {
    const nextLanguage = languagePacks.find((pack) => pack.id === languageId) ?? languagePacks[0];

    startTransition(() => {
      setSelectedLanguageId(nextLanguage.id);
      setSelectedTemplateId(nextLanguage.templates[0].id);
      resetPracticeState();
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

    if (!allowTouch && event.pointerType === "touch") {
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

  function undoStroke() {
    activeStrokeIdRef.current = null;
    activePointerIdRef.current = null;
    setStrokes((current) => current.slice(0, -1));
  }

  const scoreStatusLabel =
    scoreState === "pending"
      ? dictionary.score.status.pending
      : scoreState === "ready"
        ? dictionary.score.status.ready
        : dictionary.score.status.waiting;

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
              badgeLabel: dictionary.stages[pack.stage],
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
          className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]"
        >
          <PracticeCanvas
            locale={locale}
            dictionary={dictionary}
            selectedLanguage={selectedLanguage}
            selectedTemplate={selectedTemplate}
            currentPackLabel={currentPackLabel}
            currentPackShowsSecondaryLabel={currentPackShowsSecondaryLabel}
            score={score}
            scoreStatusLabel={scoreStatusLabel}
            strokes={strokes}
            canGoPrevious={canGoPrevious}
            canGoNext={canGoNext}
            isPreviewVisible={isPreviewVisible}
            onPreviousTemplate={handlePreviousTemplate}
            onNextTemplate={handleNextTemplate}
            onUndoStroke={undoStroke}
            onClearCanvas={clearCanvas}
            onTogglePreview={() => setIsPreviewVisible((current) => !current)}
            onBeginStroke={beginStroke}
            onMoveStroke={moveStroke}
            onEndStroke={endStroke}
          />

          <div className="grid gap-4">
            <Card className="border-[color:var(--border-soft)] bg-[color:var(--paper)]/88">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{dictionary.sections.sessionNotesTitle}</CardTitle>
                <CardDescription>{dictionary.sections.sessionNotesDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm leading-6 text-[color:var(--muted-foreground)]">
                <p>{dictionary.notes.multilingual}</p>
                <div className="flex items-center justify-between rounded-[20px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-4 py-3">
                  <span>{dictionary.notes.touchInput}</span>
                  <button
                    type="button"
                    onClick={() => setAllowTouch((current) => !current)}
                    aria-pressed={allowTouch}
                    className={cn(
                      "relative inline-flex h-8 w-14 items-center rounded-full border transition-colors",
                      allowTouch
                        ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                        : "border-[color:var(--border-soft)] bg-white/70"
                    )}
                  >
                    <span
                      className={cn(
                        "inline-block size-6 rounded-full bg-[color:var(--foreground)] transition-transform",
                        allowTouch ? "translate-x-7" : "translate-x-1"
                      )}
                    />
                  </button>
                </div>
                <div className="rounded-[20px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-4 py-3">
                  <div className="text-xs uppercase tracking-[0.18em]">{dictionary.notes.currentStrokeCount}</div>
                  <div className="mt-2 font-[family-name:var(--font-display)] text-3xl text-[color:var(--foreground)]">
                    {renderedStrokeCount}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      }
      templateGrid={
        <TemplateGrid
          locale={locale}
          dictionary={dictionary}
          selectedLanguage={selectedLanguage}
          selectedTemplateId={selectedTemplate.id}
          selectedTemplateCue={getLocalizedText(selectedTemplate.cue, locale)}
          onSelectTemplate={handleTemplateSelect}
        />
      }
    />
  );
}
