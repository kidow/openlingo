"use client";

import { ChevronLeft, ChevronRight, Eye, EyeOff, RotateCcw, Undo2 } from "lucide-react";

import { AppDictionary } from "@/i18n/dictionaries";
import { AppLocale, getLocalizedText } from "@/i18n/config";
import { LanguagePack, Stroke, WritingTemplate } from "@/types/writing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StrokePreview } from "@/components/practice/stroke-preview";
import { TemplateGlyphLayer } from "@/components/practice/template-glyph";

function strokesToPath(stroke: Stroke) {
  return stroke.points.map((point) => `${point.x},${point.y}`).join(" ");
}

type PracticeCanvasProps = {
  locale: AppLocale;
  dictionary: AppDictionary;
  selectedLanguage: LanguagePack;
  selectedTemplate: WritingTemplate;
  currentPackLabel: string;
  currentPackShowsSecondaryLabel: boolean;
  score: number | null;
  scoreStatusLabel: string;
  strokes: Stroke[];
  canGoPrevious: boolean;
  canGoNext: boolean;
  isPreviewVisible: boolean;
  onPreviousTemplate: () => void;
  onNextTemplate: () => void;
  onUndoStroke: () => void;
  onClearCanvas: () => void;
  onTogglePreview: () => void;
  onBeginStroke: (event: React.PointerEvent<SVGSVGElement>) => void;
  onMoveStroke: (event: React.PointerEvent<SVGSVGElement>) => void;
  onEndStroke: (event: React.PointerEvent<SVGSVGElement>) => void;
};

export function PracticeCanvas({
  locale,
  dictionary,
  selectedLanguage,
  selectedTemplate,
  currentPackLabel,
  currentPackShowsSecondaryLabel,
  score,
  scoreStatusLabel,
  strokes,
  canGoPrevious,
  canGoNext,
  isPreviewVisible,
  onPreviousTemplate,
  onNextTemplate,
  onUndoStroke,
  onClearCanvas,
  onTogglePreview,
  onBeginStroke,
  onMoveStroke,
  onEndStroke,
}: PracticeCanvasProps) {
  const quickScoreLabel = score === null ? "--" : `${score}%`;

  return (
    <Card className="overflow-hidden rounded-none border-x-0 border-t-0 border-b-[color:var(--border-strong)] shadow-none bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(248,244,236,0.99))]">
      <CardHeader className="gap-4 border-b border-[color:var(--border-soft)]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="space-y-3">
            <Badge className="w-fit rounded-none">{dictionary.hero.badge}</Badge>
            <CardTitle className="text-4xl leading-none md:text-5xl">{selectedTemplate.nativeLabel}</CardTitle>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-4 py-3">
              <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
                {dictionary.sections.scoreTitle}
              </div>
              <div className="mt-1 font-[family-name:var(--font-display)] text-3xl leading-none text-[color:var(--foreground)]">
                {quickScoreLabel}
              </div>
            </div>
            <Button
              variant={isPreviewVisible ? "default" : "ghost"}
              onClick={onTogglePreview}
              aria-pressed={isPreviewVisible}
            >
              {isPreviewVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              {dictionary.sections.strokePreviewTitle}
            </Button>
            <Button variant="ghost" onClick={onUndoStroke} disabled={strokes.length === 0}>
              <Undo2 className="size-4" />
              {dictionary.buttons.undoStroke}
            </Button>
            <Button variant="ghost" onClick={onClearCanvas} disabled={strokes.length === 0}>
              <RotateCcw className="size-4" />
              {dictionary.buttons.clearPage}
            </Button>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
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
              <Badge className="rounded-none">{dictionary.stages[selectedLanguage.stage]}</Badge>
            </div>
          </div>

          <div className="flex items-center gap-2 self-start border border-[color:var(--border-soft)] bg-[color:var(--paper)] p-1">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              data-testid="practice-template-previous"
              aria-label="Previous template"
              onClick={onPreviousTemplate}
              disabled={!canGoPrevious}
            >
              <ChevronLeft className="size-4" />
            </Button>
            <div className="min-w-[5.5rem] px-2 text-center text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
              {selectedTemplate.nativeLabel}
            </div>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              data-testid="practice-template-next"
              aria-label="Next template"
              onClick={onNextTemplate}
              disabled={!canGoNext}
            >
              <ChevronRight className="size-4" />
            </Button>
          </div>
        </div>

        <div className="relative overflow-hidden border border-[color:var(--border-soft)] bg-[color:var(--paper)] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] md:p-6">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,transparent_31px,rgba(134,111,81,0.12)_32px),linear-gradient(90deg,transparent_31px,rgba(134,111,81,0.12)_32px)] bg-[size:32px_32px] opacity-70" />
          <div className="pointer-events-none absolute inset-x-0 top-[18%] border-t border-dashed border-[color:var(--border-soft)]" />
          <div className="pointer-events-none absolute inset-x-0 top-[50%] border-t border-[color:rgba(153,98,46,0.18)]" />
          <div className="pointer-events-none absolute inset-x-0 top-[82%] border-t border-dashed border-[color:var(--border-soft)]" />
          {isPreviewVisible ? (
            <div
              data-testid="canvas-preview-overlay"
              className="absolute inset-x-4 top-4 z-10 md:inset-x-6"
            >
              <StrokePreview
                template={selectedTemplate}
                dictionary={dictionary}
                autoplay
                mode="overlay"
              />
            </div>
          ) : null}
          <svg
            viewBox="0 0 100 100"
            data-testid="practice-canvas-surface"
            className="relative z-0 aspect-square w-full touch-none bg-transparent"
            onPointerDown={onBeginStroke}
            onPointerMove={onMoveStroke}
            onPointerUp={onEndStroke}
            onPointerCancel={onEndStroke}
            onLostPointerCapture={onEndStroke}
          >
            <rect
              x="6"
              y="6"
              width="88"
              height="88"
              rx="0"
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

          <div className="mt-4 flex items-center justify-between gap-3 text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
            <span>{getLocalizedText(selectedTemplate.gridLabel, locale)}</span>
            <span>{scoreStatusLabel}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
