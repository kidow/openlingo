"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";

import { AppDictionary } from "@/i18n/dictionaries";
import { cn } from "@/lib/utils";
import { WritingTemplate } from "@/types/writing";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TemplateGlyphLayer } from "@/components/practice/template-glyph";

const BASE_STROKE_DURATION = 10;
const MIN_STROKE_DURATION = 320;
const MAX_STROKE_DURATION = 680;
const DEFAULT_HOLD_MS = 120;

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

type StrokePreviewProps = {
  template: WritingTemplate;
  dictionary: AppDictionary;
  autoplay?: boolean;
  loop?: boolean;
  className?: string;
};

export function StrokePreview({ template, dictionary, autoplay = true, loop = false, className }: StrokePreviewProps) {
  const sortedStrokes = useMemo(() => {
    return [...(template.strokeGuides ?? [])].sort((a, b) => a.order - b.order);
  }, [template.strokeGuides]);
  const usesGlyphReveal = Boolean(template.glyph);
  const revealMaskId = useId().replace(/:/g, "");

  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlayEnabled, setAutoPlayEnabled] = useState(autoplay);
  const [speed, setSpeed] = useState(1);
  const [currentStrokeOrder, setCurrentStrokeOrder] = useState<number | null>(null);

  const pathRefs = useRef<(SVGPathElement | null)[]>([]);
  const animationsRef = useRef<Animation[]>([]);
  const playbackTokenRef = useRef(0);
  const reducedMotionRef = useRef(false);

  useEffect(() => {
    setAutoPlayEnabled(autoplay);
  }, [autoplay]);

  const resetStyles = useCallback(() => {
    pathRefs.current.forEach((path) => {
      if (!path) {
        return;
      }

      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      path.style.opacity = usesGlyphReveal ? "1" : "0.35";
    });
  }, [usesGlyphReveal]);

  const stopPlayback = useCallback(() => {
    playbackTokenRef.current += 1;
    animationsRef.current.forEach((animation) => animation.cancel());
    animationsRef.current = [];
    setIsPlaying(false);
    setCurrentStrokeOrder(null);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotionRef.current = mediaQuery.matches;

    const handleChange = (event: MediaQueryListEvent) => {
      reducedMotionRef.current = event.matches;
      if (event.matches) {
        stopPlayback();
        resetStyles();
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [resetStyles, stopPlayback]);

  const runPlayback = useCallback(async () => {
    if (!sortedStrokes.length || reducedMotionRef.current) {
      return;
    }

    stopPlayback();
    resetStyles();

    const token = playbackTokenRef.current;
    setIsPlaying(true);

    do {
      for (let index = 0; index < sortedStrokes.length; index += 1) {
        if (token !== playbackTokenRef.current) {
          return;
        }

        const stroke = sortedStrokes[index];
        const path = pathRefs.current[index];

        if (!path) {
          continue;
        }

        const length = path.getTotalLength();
        const duration = Math.round(
          (stroke.durationMs ?? clamp(length * BASE_STROKE_DURATION, MIN_STROKE_DURATION, MAX_STROKE_DURATION)) / speed
        );

        setCurrentStrokeOrder(stroke.order);
        const animation = path.animate(
          [
            { strokeDashoffset: `${length}`, opacity: 1 },
            { strokeDashoffset: "0", opacity: 1 },
          ],
          {
            duration,
            easing: "ease-in-out",
            fill: "forwards",
          }
        );

        animationsRef.current.push(animation);

        try {
          await animation.finished;
        } catch {
          return;
        }

        if (token !== playbackTokenRef.current) {
          return;
        }

        const holdMs = stroke.holdMs ?? DEFAULT_HOLD_MS;
        await new Promise((resolve) => {
          window.setTimeout(resolve, holdMs);
        });
      }

      if (loop && token === playbackTokenRef.current) {
        resetStyles();
      }
    } while (loop && token === playbackTokenRef.current);

    if (token === playbackTokenRef.current) {
      setIsPlaying(false);
      setCurrentStrokeOrder(null);
    }
  }, [loop, resetStyles, sortedStrokes, speed, stopPlayback]);

  useEffect(() => {
    pathRefs.current = pathRefs.current.slice(0, sortedStrokes.length);
    resetStyles();
    setCurrentStrokeOrder(null);

    if (autoPlayEnabled) {
      void runPlayback();
    } else {
      stopPlayback();
    }

    return () => {
      stopPlayback();
    };
  }, [autoPlayEnabled, resetStyles, runPlayback, sortedStrokes.length, stopPlayback, template.id]);

  if (!sortedStrokes.length) {
    return null;
  }

  const previewTitle = dictionary.sections.strokePreviewTitle;
  const previewDescription = dictionary.sections.strokePreviewDescription;

  return (
    <Card className={cn("border-[color:var(--border-soft)] bg-white/50", className)}>
      <CardHeader className="pb-3">
        <CardTitle className="text-lg">{previewTitle}</CardTitle>
        <CardDescription>{previewDescription}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative overflow-hidden rounded-[24px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] p-4">
          <svg viewBox={template.viewBox.join(" ")} className="aspect-square w-full">
            <rect
              x="6"
              y="6"
              width="88"
              height="88"
              rx="18"
              pointerEvents="none"
              className="fill-[color:rgba(255,255,255,0.15)] stroke-[color:var(--border-soft)]"
            />
            {usesGlyphReveal ? (
              <>
                <TemplateGlyphLayer template={template} fill="rgba(146,122,90,0.25)" />
                <defs>
                  <mask id={revealMaskId} maskUnits="userSpaceOnUse">
                    <rect x="0" y="0" width="100" height="100" fill="black" />
                    {sortedStrokes.map((stroke, index) => (
                      <path
                        key={`mask-${stroke.id}`}
                        d={stroke.pathD}
                        fill="none"
                        stroke="white"
                        strokeWidth={template.glyph?.maskStrokeWidth ?? 14}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        ref={(node) => {
                          pathRefs.current[index] = node;
                        }}
                      />
                    ))}
                  </mask>
                </defs>
                <TemplateGlyphLayer
                  template={template}
                  fill="rgba(79,54,24,0.9)"
                  maskId={revealMaskId}
                  testId={`stroke-preview-glyph-${template.id}`}
                />
              </>
            ) : (
              <>
                {sortedStrokes.map((stroke) => (
                  <path
                    key={`guide-${stroke.id}`}
                    d={stroke.pathD}
                    fill="none"
                    stroke="rgba(146,122,90,0.25)"
                    strokeWidth="5.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ))}
                {sortedStrokes.map((stroke, index) => (
                  <path
                    key={stroke.id}
                    d={stroke.pathD}
                    fill="none"
                    stroke="rgba(79,54,24,0.9)"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    ref={(node) => {
                      pathRefs.current[index] = node;
                    }}
                  />
                ))}
              </>
            )}
          </svg>
        </div>

        <div className="rounded-[20px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-4 py-3 text-xs uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
          {currentStrokeOrder === null
            ? dictionary.sections.strokePreviewIdle
            : dictionary.sections.strokePreviewPlaying.replace("{order}", String(currentStrokeOrder))}
        </div>

        <div className="flex flex-wrap gap-2">
          <Button variant="ghost" onClick={() => void runPlayback()} disabled={isPlaying}>
            {dictionary.buttons.replayStrokePreview}
          </Button>
          <button
            type="button"
            onClick={() => setAutoPlayEnabled((current) => !current)}
            className="rounded-full border border-[color:var(--border-soft)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[color:var(--muted-foreground)]"
          >
            {dictionary.buttons.toggleStrokeAutoplay}: {autoPlayEnabled ? dictionary.common.on : dictionary.common.off}
          </button>
        </div>

        <div className="flex flex-wrap gap-2">
          {[0.75, 1, 1.25].map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setSpeed(option)}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em]",
                speed === option
                  ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)] text-[color:var(--foreground)]"
                  : "border-[color:var(--border-soft)] bg-white/60 text-[color:var(--muted-foreground)]"
              )}
            >
              {option}x
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
