"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { BookOpenText, RotateCcw, Undo2 } from "lucide-react";

import { languagePacks } from "@/data/practice-content";
import { AppDictionary } from "@/i18n/dictionaries";
import { AppLocale, getLocalizedText } from "@/i18n/config";
import { calculatePrototypeSimilarity } from "@/lib/similarity";
import { cn } from "@/lib/utils";
import { Stroke, StrokePoint } from "@/types/writing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LanguagePackTabs } from "@/components/practice/language-pack-tabs";
import { PracticeWorkspace } from "@/components/practice/practice-workspace";
import { StrokePreview } from "@/components/practice/stroke-preview";
import { TemplateGlyphLayer, TemplateGlyphMark } from "@/components/practice/template-glyph";

function createStrokePoint(event: PointerEvent | React.PointerEvent<SVGSVGElement>, bounds: DOMRect): StrokePoint {
  return {
    x: ((event.clientX - bounds.left) / bounds.width) * 100,
    y: ((event.clientY - bounds.top) / bounds.height) * 100,
    t: Date.now(),
  };
}

function strokesToPath(stroke: Stroke) {
  return stroke.points.map((point) => `${point.x},${point.y}`).join(" ");
}

function getScoreTone(dictionary: AppDictionary, score: number | null) {
  if (score === null) {
    return dictionary.score.tones.ready;
  }

  if (score >= 85) {
    return dictionary.score.tones.strong;
  }

  if (score >= 65) {
    return dictionary.score.tones.good;
  }

  return dictionary.score.tones.practice;
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
  const [previewAutoplay, setPreviewAutoplay] = useState(true);
  const [previewOverlayOpen, setPreviewOverlayOpen] = useState(false);
  const activeStrokeIdRef = useRef<string | null>(null);
  const activePointerIdRef = useRef<number | null>(null);

  const selectedLanguage = languagePacks.find((pack) => pack.id === selectedLanguageId) ?? languagePacks[0];
  const selectedTemplate =
    selectedLanguage.templates.find((template) => template.id === selectedTemplateId) ?? selectedLanguage.templates[0];

  useEffect(() => {
    if (!selectedLanguage.templates.some((template) => template.id === selectedTemplateId)) {
      setSelectedTemplateId(selectedLanguage.templates[0].id);
      setStrokes([]);
      setScore(null);
      setScoreState("idle");
      setPreviewAutoplay(true);
      setPreviewOverlayOpen(false);
    }
  }, [selectedLanguage, selectedTemplateId]);

  const scoreTone = getScoreTone(dictionary, score);
  const renderedStrokeCount = strokes.length;
  const currentPackLabel = getLocalizedText(selectedLanguage.label, locale);
  const currentPackShowsSecondaryLabel = selectedLanguage.nativeLabel !== currentPackLabel;
  const quickScoreLabel = score === null ? "--" : `${score}%`;

  useEffect(() => {
    if (strokes.length === 0) {
      setScore(null);
      setScoreState("idle");
      setPreviewAutoplay(true);
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

  function handleLanguageSelect(languageId: string) {
    startTransition(() => {
      setSelectedLanguageId(languageId);
      setStrokes([]);
      setScore(null);
      setScoreState("idle");
      setPreviewAutoplay(true);
      setPreviewOverlayOpen(false);
    });
  }

  function handleTemplateSelect(templateId: string) {
    startTransition(() => {
      setSelectedTemplateId(templateId);
      setStrokes([]);
      setScore(null);
      setScoreState("idle");
      setPreviewAutoplay(true);
      setPreviewOverlayOpen(false);
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

    setPreviewAutoplay(false);

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
    activeStrokeIdRef.current = null;
    activePointerIdRef.current = null;
    setStrokes([]);
    setScore(null);
    setScoreState("idle");
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
          <Card className="overflow-hidden border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(248,244,236,0.99))]">
            <CardHeader className="gap-4 border-b border-[color:var(--border-soft)]">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div className="space-y-3">
                  <Badge className="w-fit">{dictionary.hero.badge}</Badge>
                  <div className="space-y-2">
                    <CardTitle className="text-4xl leading-none md:text-5xl">{selectedTemplate.nativeLabel}</CardTitle>
                    <CardDescription className="max-w-3xl">
                      {getLocalizedText(selectedTemplate.description, locale)} {dictionary.sections.worksheetScoringNote}
                    </CardDescription>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <div className="rounded-[22px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-4 py-3">
                    <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
                      {dictionary.sections.scoreTitle}
                    </div>
                    <div className="mt-1 font-[family-name:var(--font-display)] text-3xl leading-none text-[color:var(--foreground)]">
                      {quickScoreLabel}
                    </div>
                  </div>
                  <Button variant="ghost" onClick={undoStroke} disabled={strokes.length === 0}>
                    <Undo2 className="size-4" />
                    {dictionary.buttons.undoStroke}
                  </Button>
                  <Button variant="ghost" onClick={clearCanvas} disabled={strokes.length === 0}>
                    <RotateCcw className="size-4" />
                    {dictionary.buttons.clearPage}
                  </Button>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                    {dictionary.sections.languagePacksTitle}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <span className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--foreground)]">
                      {selectedLanguage.nativeLabel}
                    </span>
                    {currentPackShowsSecondaryLabel ? (
                      <span className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                        {currentPackLabel}
                      </span>
                    ) : null}
                    <Badge>{dictionary.stages[selectedLanguage.stage]}</Badge>
                  </div>
                  <p className="mt-3 max-w-2xl text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {getLocalizedText(selectedLanguage.summary, locale)}
                  </p>
                </div>

                <Button
                  variant="outline"
                  type="button"
                  onClick={() => setPreviewOverlayOpen((current) => !current)}
                  aria-pressed={previewOverlayOpen}
                >
                  {dictionary.sections.strokePreviewTitle}
                </Button>
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] md:p-6">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,transparent_31px,rgba(134,111,81,0.12)_32px),linear-gradient(90deg,transparent_31px,rgba(134,111,81,0.12)_32px)] bg-[size:32px_32px] opacity-70" />
                <div className="pointer-events-none absolute inset-x-0 top-[18%] border-t border-dashed border-[color:var(--border-soft)]" />
                <div className="pointer-events-none absolute inset-x-0 top-[50%] border-t border-[color:rgba(153,98,46,0.18)]" />
                <div className="pointer-events-none absolute inset-x-0 top-[82%] border-t border-dashed border-[color:var(--border-soft)]" />
                <svg
                  viewBox="0 0 100 100"
                  className="relative aspect-square w-full touch-none rounded-[24px] bg-transparent"
                  onPointerDown={beginStroke}
                  onPointerMove={moveStroke}
                  onPointerUp={endStroke}
                  onPointerCancel={endStroke}
                  onLostPointerCapture={endStroke}
                >
                  <rect
                    x="6"
                    y="6"
                    width="88"
                    height="88"
                    rx="18"
                    pointerEvents="none"
                    className="fill-[color:rgba(255,255,255,0.15)] stroke-[color:var(--border-soft)]"
                  />
                  {selectedTemplate.glyph ? (
                    <TemplateGlyphLayer
                      template={selectedTemplate}
                      fill="rgba(146,122,90,0.4)"
                      testId={`practice-guide-glyph-${selectedTemplate.id}`}
                    />
                  ) : (
                    <path
                      d={selectedTemplate.guidePathD}
                      pointerEvents="none"
                      className="fill-none stroke-[color:rgba(146,122,90,0.45)]"
                      strokeWidth="5.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  )}
                  {strokes.map((stroke) => (
                    <polyline
                      key={stroke.id}
                      points={strokesToPath(stroke)}
                      pointerEvents="none"
                      fill="none"
                      stroke="var(--ink)"
                      strokeWidth="4.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  ))}
                </svg>

                {previewOverlayOpen ? (
                  <div
                    data-testid="canvas-preview-overlay"
                    className="absolute inset-x-4 top-4 z-10 rounded-[24px] border border-[color:var(--border-soft)] bg-[color:var(--paper)]/96 p-4 shadow-[0_16px_40px_rgba(88,63,30,0.14)] backdrop-blur"
                  >
                    {selectedTemplate.strokeGuides?.length ? (
                      <StrokePreview template={selectedTemplate} dictionary={dictionary} autoplay={previewAutoplay} />
                    ) : (
                      <div className="rounded-[20px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-5 py-6">
                        <div className="font-[family-name:var(--font-display)] text-xl text-[color:var(--foreground)]">
                          {dictionary.sections.strokePreviewUnavailableTitle}
                        </div>
                        <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                          {dictionary.sections.strokePreviewUnavailableDescription}
                        </p>
                      </div>
                    )}
                  </div>
                ) : null}

                <div className="mt-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  <span>{getLocalizedText(selectedTemplate.gridLabel, locale)}</span>
                  <span>{scoreStatusLabel}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-4">
            <Card className="border-[color:var(--border-soft)] bg-[color:var(--paper)]/88">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{dictionary.sections.scoreTitle}</CardTitle>
                <CardDescription>{dictionary.sections.scoreDescription}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="font-[family-name:var(--font-display)] text-6xl leading-none text-[color:var(--foreground)]">
                  {score === null ? "--" : score}
                  {score === null ? "" : "%"}
                </div>
                <div className="rounded-[24px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-4 py-3">
                  <div className="text-sm font-semibold text-[color:var(--foreground)]">{scoreTone.label}</div>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">{scoreTone.description}</p>
                </div>
                <div className="text-xs uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">{scoreStatusLabel}</div>
              </CardContent>
            </Card>

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
        <section
          data-testid="template-grid"
          aria-label={dictionary.sections.practiceCardsTitle}
          className="rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--paper)]/72 p-4 md:p-5"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]">
                <BookOpenText className="size-4" />
                {dictionary.sections.practiceCardsTitle}
              </div>
              <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                {getLocalizedText(selectedTemplate.cue, locale)}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Badge>{selectedLanguage.templates.length}</Badge>
            </div>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
            {selectedLanguage.templates.map((template) => {
              const active = template.id === selectedTemplate.id;

              return (
                <button
                  key={`worksheet-${template.id}`}
                  type="button"
                  onClick={() => handleTemplateSelect(template.id)}
                  className={cn(
                    "rounded-[22px] border px-4 py-3 text-left transition-colors",
                    active
                      ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                      : "border-[color:var(--border-soft)] bg-white/40 hover:bg-[color:var(--paper-strong)]"
                  )}
                >
                  <TemplateGlyphMark
                    template={template}
                    label={`${getLocalizedText(template.label, locale)} glyph`}
                    testId={`worksheet-template-card-glyph-${template.id}`}
                    className="h-10 w-10"
                  />
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                    {getLocalizedText(template.label, locale)}
                  </div>
                </button>
              );
            })}
          </div>
        </section>
      }
    />
  );
}
