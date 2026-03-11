"use client";

import { startTransition, useEffect, useRef, useState } from "react";
import { BookOpenText, Languages, PencilLine, RotateCcw, Sparkles, Undo2 } from "lucide-react";

import { languagePacks } from "@/data/practice-content";
import { AppDictionary } from "@/i18n/dictionaries";
import { AppLocale, getLocalizedText } from "@/i18n/config";
import { calculatePrototypeSimilarity } from "@/lib/similarity";
import { cn } from "@/lib/utils";
import { Stroke, StrokePoint } from "@/types/writing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { StrokePreview } from "@/components/practice/stroke-preview";

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

type AuxiliaryToolTab = "preview" | "score" | "notes";

type PrototypePracticeSheetProps = {
  locale: AppLocale;
  dictionary: AppDictionary;
};

export function PrototypePracticeSheet({ locale, dictionary }: PrototypePracticeSheetProps) {
  const [selectedLanguageId, setSelectedLanguageId] = useState(languagePacks[0].id);
  const [selectedTemplateId, setSelectedTemplateId] = useState(DEFAULT_TEMPLATE.id);
  const [activeToolTab, setActiveToolTab] = useState<AuxiliaryToolTab>("preview");
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [allowTouch, setAllowTouch] = useState(true);
  const [score, setScore] = useState<number | null>(null);
  const [scoreState, setScoreState] = useState<"idle" | "pending" | "ready">("idle");
  const [previewAutoplay, setPreviewAutoplay] = useState(true);
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
    });
  }

  function handleTemplateSelect(templateId: string) {
    startTransition(() => {
      setSelectedTemplateId(templateId);
      setStrokes([]);
      setScore(null);
      setScoreState("idle");
      setPreviewAutoplay(true);
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

  const toolTabs = [
    { id: "preview" as const, label: dictionary.sections.strokePreviewTitle },
    { id: "score" as const, label: dictionary.sections.scoreTitle },
    { id: "notes" as const, label: dictionary.sections.sessionNotesTitle },
  ];

  return (
    <main className="mx-auto flex min-h-[calc(100vh-88px)] w-full max-w-[1600px] flex-col gap-6 px-4 py-6 md:px-6 lg:px-8">
      <section className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
        <div className="grid gap-6">
          <Card className="order-2 overflow-hidden border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(246,240,231,0.96))] lg:order-1">
            <CardHeader className="gap-5 border-b border-[color:var(--border-soft)]">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="space-y-3">
                  <Badge className="w-fit">{dictionary.hero.badge}</Badge>
                  <div className="space-y-3">
                    <CardTitle className="text-3xl leading-tight text-[color:var(--foreground)] md:text-4xl">
                      {dictionary.hero.title}
                    </CardTitle>
                    <CardDescription className="max-w-3xl">{dictionary.hero.description}</CardDescription>
                  </div>
                </div>

                <div className="grid min-w-[220px] gap-3 rounded-[24px] border border-[color:var(--border-soft)] bg-[color:var(--paper)]/85 p-4">
                  <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                    {dictionary.sections.languagePacksTitle}
                  </div>
                  <div>
                    <div className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--foreground)]">
                      {selectedLanguage.nativeLabel}
                    </div>
                    {currentPackShowsSecondaryLabel ? (
                      <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">{currentPackLabel}</div>
                    ) : null}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Badge>{dictionary.stages[selectedLanguage.stage]}</Badge>
                    <Badge>{selectedLanguage.templates.length}</Badge>
                  </div>
                </div>
              </div>
            </CardHeader>

            <CardContent className="space-y-5 pt-6">
              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
                <div className="rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--paper)]/75 p-4 md:p-5">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]">
                        <Languages className="size-4" />
                        {dictionary.sections.languagePacksTitle}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                        {getLocalizedText(selectedLanguage.summary, locale)}
                      </p>
                    </div>
                    <span className="rounded-full bg-[color:var(--paper-deep)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted-foreground)]">
                      {languagePacks.length}
                    </span>
                  </div>

                  <div className="flex gap-3 overflow-x-auto pb-1">
                    {languagePacks.map((pack) => {
                      const active = pack.id === selectedLanguage.id;
                      const packLabel = getLocalizedText(pack.label, locale);
                      const showSecondaryPackLabel = pack.nativeLabel !== packLabel;

                      return (
                        <button
                          key={pack.id}
                          type="button"
                          onClick={() => handleLanguageSelect(pack.id)}
                          className={cn(
                            "min-w-[164px] shrink-0 rounded-[24px] border px-4 py-3 text-left transition-colors",
                            active
                              ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
                              : "border-[color:var(--border-soft)] bg-white/40 hover:bg-[color:var(--paper-strong)]"
                          )}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <div className="font-[family-name:var(--font-display)] text-lg text-[color:var(--foreground)]">
                                {pack.nativeLabel}
                              </div>
                              {showSecondaryPackLabel ? (
                                <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                                  {packLabel}
                                </div>
                              ) : null}
                            </div>
                            <Badge>{dictionary.stages[pack.stage]}</Badge>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--paper)]/75 p-4 md:p-5">
                  <div className="flex items-center gap-2 text-sm font-medium text-[color:var(--foreground)]">
                    <BookOpenText className="size-4" />
                    {dictionary.sections.practiceCardsTitle}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {getLocalizedText(selectedTemplate.cue, locale)}
                  </p>

                  <div className="mt-4 flex gap-3 overflow-x-auto pb-1 lg:flex-col">
                    {selectedLanguage.templates.map((template) => {
                      const active = template.id === selectedTemplate.id;

                      return (
                        <button
                          key={template.id}
                          type="button"
                          onClick={() => handleTemplateSelect(template.id)}
                          className={cn(
                            "min-w-[144px] shrink-0 rounded-[22px] border px-4 py-3 text-left transition-colors lg:min-w-0",
                            active
                              ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                              : "border-[color:var(--border-soft)] bg-white/30 hover:bg-[color:var(--paper-strong)]"
                          )}
                        >
                          <div className="flex items-center justify-between gap-3">
                            <div>
                              <div className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--foreground)]">
                                {template.nativeLabel}
                              </div>
                              <div className="text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                                {getLocalizedText(template.label, locale)}
                              </div>
                            </div>
                            <span className="rounded-full bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[color:var(--muted-foreground)]">
                              {dictionary.directions.short[template.direction]}
                            </span>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="order-1 overflow-hidden border-[color:var(--border-strong)] bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(248,244,236,0.99))] lg:order-2">
            <CardHeader className="flex flex-col gap-4 border-b border-[color:var(--border-soft)] pb-5 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                  <PencilLine className="size-4" />
                  {dictionary.sections.worksheetEyebrow}
                </div>
                <div>
                  <CardTitle className="text-4xl leading-none md:text-5xl">{selectedTemplate.nativeLabel}</CardTitle>
                  <CardDescription className="mt-3 max-w-3xl">
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
            </CardHeader>

            <CardContent className="space-y-6 pt-6">
              <div className="rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--paper)]/72 p-4 md:p-5">
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
                    <Badge>{dictionary.directions.ready[selectedTemplate.direction]}</Badge>
                    <Badge>{selectedLanguage.templates.length}</Badge>
                  </div>
                </div>

                <div className="mt-4 flex gap-3 overflow-x-auto pb-1">
                  {selectedLanguage.templates.map((template) => {
                    const active = template.id === selectedTemplate.id;

                    return (
                      <button
                        key={`worksheet-${template.id}`}
                        type="button"
                        onClick={() => handleTemplateSelect(template.id)}
                        className={cn(
                          "min-w-[176px] shrink-0 rounded-[22px] border px-4 py-3 text-left transition-colors",
                          active
                            ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                            : "border-[color:var(--border-soft)] bg-white/40 hover:bg-[color:var(--paper-strong)]"
                        )}
                      >
                        <div className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--foreground)]">
                          {template.nativeLabel}
                        </div>
                        <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                          {getLocalizedText(template.label, locale)}
                        </div>
                      </button>
                    );
                  })}
                </div>
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
                  <path
                    d={selectedTemplate.guidePathD}
                    pointerEvents="none"
                    className="fill-none stroke-[color:rgba(146,122,90,0.45)]"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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
                <div className="mt-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  <span>{getLocalizedText(selectedTemplate.gridLabel, locale)}</span>
                  <span>{scoreStatusLabel}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="h-fit border-[color:var(--border-strong)] bg-[color:var(--paper)]/92 xl:sticky xl:top-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl">{dictionary.sections.practiceToolsTitle}</CardTitle>
            <CardDescription>{dictionary.sections.practiceToolsDescription}</CardDescription>
          </CardHeader>

          <CardContent className="space-y-4">
            <div
              role="tablist"
              aria-label={dictionary.sections.practiceToolsTitle}
              className="grid grid-cols-3 gap-2 rounded-[22px] border border-[color:var(--border-soft)] bg-[color:var(--paper-strong)] p-1"
            >
              {toolTabs.map((tab) => {
                const active = activeToolTab === tab.id;

                return (
                  <button
                    key={tab.id}
                    id={`tool-tab-${tab.id}`}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls={`tool-panel-${tab.id}`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => setActiveToolTab(tab.id)}
                    className={cn(
                      "rounded-[18px] px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "bg-[color:var(--paper)] text-[color:var(--foreground)] shadow-[0_10px_24px_rgba(88,63,30,0.08)]"
                        : "text-[color:var(--muted-foreground)] hover:bg-white/70"
                    )}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {activeToolTab === "preview" ? (
              <div id="tool-panel-preview" role="tabpanel" aria-labelledby="tool-tab-preview" className="space-y-4">
                {selectedTemplate.strokeGuides?.length ? (
                  <StrokePreview
                    template={selectedTemplate}
                    dictionary={dictionary}
                    autoplay={previewAutoplay && activeToolTab === "preview"}
                  />
                ) : (
                  <div className="rounded-[24px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-5 py-6">
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

            {activeToolTab === "score" ? (
              <div id="tool-panel-score" role="tabpanel" aria-labelledby="tool-tab-score">
                <Card className="border-[color:var(--border-soft)] bg-white/50 shadow-none">
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
              </div>
            ) : null}

            {activeToolTab === "notes" ? (
              <div id="tool-panel-notes" role="tabpanel" aria-labelledby="tool-tab-notes">
                <Card className="border-[color:var(--border-soft)] bg-white/50 shadow-none">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg">{dictionary.sections.sessionNotesTitle}</CardTitle>
                    <CardDescription>{dictionary.sections.sessionNotesDescription}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3 text-sm leading-6 text-[color:var(--muted-foreground)]">
                    <div className="flex items-start gap-3 rounded-[20px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-4 py-3">
                      <Sparkles className="mt-0.5 size-4 shrink-0 text-[color:var(--accent)]" />
                      <p>{dictionary.notes.multilingual}</p>
                    </div>
                    <div className="rounded-[20px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-4 py-3">
                      <div className="text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                        {dictionary.sections.languagePacksTitle}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                        {getLocalizedText(selectedLanguage.summary, locale)}
                      </p>
                    </div>
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
            ) : null}
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
