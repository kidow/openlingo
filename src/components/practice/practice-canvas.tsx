"use client";

import { ChevronLeft, ChevronRight, Eye, EyeOff, RotateCcw, Volume2 } from "lucide-react";

import { AppDictionary } from "@/i18n/dictionaries";
import { Stroke, WritingTemplate } from "@/types/writing";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { StrokePreview } from "@/components/practice/stroke-preview";
import { TemplateGlyphLayer } from "@/components/practice/template-glyph";

function strokesToPath(stroke: Stroke) {
  return stroke.points.map((point) => `${point.x},${point.y}`).join(" ");
}

type PracticeCanvasProps = {
  dictionary: AppDictionary;
  selectedTemplate: WritingTemplate;
  score: number | null;
  strokes: Stroke[];
  canGoPrevious: boolean;
  canGoNext: boolean;
  isPreviewVisible: boolean;
  pronunciationButtonLabel?: string;
  pronunciationButtonDisabled?: boolean;
  onPreviousTemplate: () => void;
  onNextTemplate: () => void;
  onClearCanvas: () => void;
  onTogglePreview: () => void;
  onPlayPronunciation?: () => void;
  onBeginStroke: (event: React.PointerEvent<SVGSVGElement>) => void;
  onMoveStroke: (event: React.PointerEvent<SVGSVGElement>) => void;
  onEndStroke: (event: React.PointerEvent<SVGSVGElement>) => void;
};

export function PracticeCanvas({
  dictionary,
  selectedTemplate,
  score,
  strokes,
  canGoPrevious,
  canGoNext,
  isPreviewVisible,
  pronunciationButtonLabel,
  pronunciationButtonDisabled = false,
  onPreviousTemplate,
  onNextTemplate,
  onClearCanvas,
  onTogglePreview,
  onPlayPronunciation,
  onBeginStroke,
  onMoveStroke,
  onEndStroke,
}: PracticeCanvasProps) {
  const isWordTemplate = selectedTemplate.mode === "word";
  const wordStrokeCountLabel = selectedTemplate.strokeCountText
    ? `${selectedTemplate.strokeCountText}획`
    : `${selectedTemplate.strokeCount ?? 0}획`;

  if (isWordTemplate) {
    return (
      <Card className="overflow-hidden rounded-none border-x-0 border-t-0 border-b-[color:var(--border-strong)] shadow-none bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(248,244,236,0.99))]">
        <CardContent className="p-0">
          <div className="relative overflow-hidden bg-[color:var(--paper)] p-4 pb-24 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] md:p-6 md:pb-28">
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,transparent_31px,rgba(134,111,81,0.12)_32px),linear-gradient(90deg,transparent_31px,rgba(134,111,81,0.12)_32px)] bg-[size:32px_32px] opacity-70" />
            <div className="pointer-events-none absolute inset-x-0 top-[18%] border-t border-dashed border-[color:var(--border-soft)]" />
            <div className="pointer-events-none absolute inset-x-0 top-[50%] border-t border-[color:rgba(153,98,46,0.18)]" />
            <div className="pointer-events-none absolute inset-x-0 top-[82%] border-t border-dashed border-[color:var(--border-soft)]" />

            <div className="relative z-10 flex min-h-[min(64vh,38rem)] items-center justify-center">
              <div className="grid gap-4 rounded-[28px] border border-[color:var(--border-strong)] bg-[color:rgba(252,249,241,0.92)] px-6 py-7 text-center shadow-[0_18px_40px_rgba(69,48,20,0.12)] backdrop-blur-sm md:px-8 md:py-9">
                <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
                  HSK CHARACTER CARD
                </div>
                <div className="font-[family-name:var(--font-display)] text-5xl leading-none text-[color:var(--foreground)] md:text-6xl">
                  {selectedTemplate.nativeLabel}
                </div>
                <div className="text-sm font-medium text-[color:var(--foreground)]">{selectedTemplate.label.ko}</div>
                <div className="text-sm leading-6 text-[color:var(--muted-foreground)]">{selectedTemplate.description.ko}</div>
                <div className="inline-flex items-center justify-center gap-2">
                  <span className="rounded-full border border-[color:var(--border-soft)] px-3 py-1 text-xs font-medium text-[color:var(--foreground)]">
                    {wordStrokeCountLabel}
                  </span>
                </div>
                <div className="text-xs text-[color:var(--muted-foreground)]">획순 연습은 나중에 추가됩니다.</div>
              </div>
            </div>

            <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center md:bottom-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:rgba(252,249,241,0.96)] p-2 shadow-[0_14px_30px_rgba(88,63,30,0.14)] backdrop-blur-sm">
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  data-testid="practice-template-previous"
                  aria-label="Previous template"
                  onClick={onPreviousTemplate}
                  disabled={!canGoPrevious}
                  className="rounded-full"
                >
                  <ChevronLeft className="size-4" />
                </Button>
                {onPlayPronunciation ? (
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={onPlayPronunciation}
                    disabled={pronunciationButtonDisabled}
                    aria-label={pronunciationButtonLabel ?? dictionary.buttons.playPronunciation}
                    data-testid="practice-template-pronunciation"
                    className="rounded-full"
                  >
                    <Volume2 className="size-4" />
                  </Button>
                ) : null}
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  data-testid="practice-template-next"
                  aria-label="Next template"
                  onClick={onNextTemplate}
                  disabled={!canGoNext}
                  className="rounded-full"
                >
                  <ChevronRight className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="overflow-hidden rounded-none border-x-0 border-t-0 border-b-[color:var(--border-strong)] shadow-none bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(248,244,236,0.99))]">
      <CardContent className="p-0">
        <div className="relative overflow-hidden bg-[color:var(--paper)] p-4 pb-24 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] md:p-6 md:pb-28">
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,transparent_31px,rgba(134,111,81,0.12)_32px),linear-gradient(90deg,transparent_31px,rgba(134,111,81,0.12)_32px)] bg-[size:32px_32px] opacity-70" />
          <div className="pointer-events-none absolute inset-x-0 top-[18%] border-t border-dashed border-[color:var(--border-soft)]" />
          <div className="pointer-events-none absolute inset-x-0 top-[50%] border-t border-[color:rgba(153,98,46,0.18)]" />
          <div className="pointer-events-none absolute inset-x-0 top-[82%] border-t border-dashed border-[color:var(--border-soft)]" />
          {score !== null ? (
            <div className="absolute inset-x-0 top-4 z-20 flex justify-center md:top-6">
              <div
                data-testid="practice-canvas-score"
                className="border border-[color:var(--border-strong)] bg-[color:rgba(252,249,241,0.96)] px-4 py-3 text-center shadow-[0_14px_30px_rgba(88,63,30,0.14)] backdrop-blur-sm"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
                  {dictionary.sections.scoreTitle}
                </div>
                <div className="mt-1 font-[family-name:var(--font-display)] text-3xl leading-none text-[color:var(--foreground)]">
                  {score}%
                </div>
              </div>
            </div>
          ) : null}
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
            {selectedTemplate.glyph || selectedTemplate.glyphAsset ? (
              <TemplateGlyphLayer
                template={selectedTemplate}
                fill="rgba(146,122,90,0.4)"
                opacity={selectedTemplate.glyphAsset ? 0.18 : 1}
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

          <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center md:bottom-6">
            <div
              data-testid="practice-canvas-floating-controls"
              className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-strong)] bg-[color:rgba(252,249,241,0.96)] p-2 shadow-[0_14px_30px_rgba(88,63,30,0.14)] backdrop-blur-sm"
            >
              <Button
                type="button"
                size="icon"
                variant="ghost"
                data-testid="practice-template-previous"
                aria-label="Previous template"
                onClick={onPreviousTemplate}
                disabled={!canGoPrevious}
                className="rounded-full"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant={isPreviewVisible ? "default" : "ghost"}
                onClick={onTogglePreview}
                aria-label={dictionary.sections.strokePreviewTitle}
                aria-pressed={isPreviewVisible}
                className="rounded-full"
              >
                {isPreviewVisible ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </Button>
              {onPlayPronunciation ? (
                <Button
                  type="button"
                  size="icon"
                  variant="ghost"
                  onClick={onPlayPronunciation}
                  disabled={pronunciationButtonDisabled}
                  aria-label={pronunciationButtonLabel ?? dictionary.buttons.playPronunciation}
                  data-testid="practice-template-pronunciation"
                  className="rounded-full"
                >
                  <Volume2 className="size-4" />
                </Button>
              ) : null}
              <Button
                type="button"
                size="icon"
                variant="ghost"
                onClick={onClearCanvas}
                disabled={strokes.length === 0}
                aria-label={dictionary.buttons.clearPage}
                className="rounded-full"
              >
                <RotateCcw className="size-4" />
              </Button>
              <Button
                type="button"
                size="icon"
                variant="ghost"
                data-testid="practice-template-next"
                aria-label="Next template"
                onClick={onNextTemplate}
                disabled={!canGoNext}
                className="rounded-full"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
