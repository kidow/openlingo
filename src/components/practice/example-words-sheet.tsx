"use client";

import { Play, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetBody, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { AppDictionary } from "@/i18n/dictionaries";
import { getDisplayVoiceName } from "@/lib/speech-synthesis";
import { cn } from "@/lib/utils";
import { ExampleWord } from "@/data/templates/example-words";

type ExampleWordsSheetProps = {
  dictionary: AppDictionary;
  title: string;
  description: string;
  languageLabel: string;
  selectedTemplateLabel: string;
  selectedTemplateNativeLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  voiceSelectorTitle: string;
  voiceOptions: SpeechSynthesisVoice[];
  activeVoiceName: string | null;
  activeVoiceLabel: string;
  defaultVoiceName?: string | null;
  isSpeechSupported: boolean;
  speechUnavailableText: string;
  exampleWordsUnavailableText: string;
  exampleWords: ExampleWord[];
  onSelectVoiceName: (voiceName: string) => void;
  onSpeak: (word: string) => void;
  layoutDirection?: "ltr" | "rtl";
};

export function ExampleWordsSheet({
  dictionary,
  title,
  description,
  languageLabel,
  selectedTemplateLabel,
  selectedTemplateNativeLabel,
  open,
  onOpenChange,
  voiceSelectorTitle,
  voiceOptions,
  activeVoiceName,
  activeVoiceLabel,
  defaultVoiceName,
  isSpeechSupported,
  speechUnavailableText,
  exampleWordsUnavailableText,
  exampleWords,
  onSelectVoiceName,
  onSpeak,
  layoutDirection = "ltr",
}: ExampleWordsSheetProps) {
  const isRtlLayout = layoutDirection === "rtl";

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent aria-describedby={undefined} className="h-[min(86dvh,44rem)]">
        <SheetHeader className="border-b border-[color:var(--border-soft)] pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="grid gap-1">
              <SheetTitle className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--foreground)]">
                {title}
              </SheetTitle>
              <SheetDescription className="max-w-2xl text-sm leading-6 text-[color:var(--muted-foreground)]">
                {description}
              </SheetDescription>
            </div>
            <SheetClose asChild>
              <Button type="button" variant="subtle" size="icon" aria-label={dictionary.buttons.closePanel} className="shrink-0">
                <X className="size-4" />
              </Button>
            </SheetClose>
          </div>
        </SheetHeader>

        <SheetBody className="grid gap-5">
          <div className="grid gap-2 rounded-[24px] border border-[color:var(--border-soft)] bg-[color:rgba(252,249,241,0.55)] p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              {languageLabel}
            </div>
            <div className="font-[family-name:var(--font-display)] text-5xl leading-none text-[color:var(--foreground)]">
              {selectedTemplateNativeLabel}
            </div>
            <div className="text-sm text-[color:var(--muted-foreground)]">{selectedTemplateLabel}</div>
          </div>

          <div className="grid gap-3">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                {voiceSelectorTitle}
              </div>
              <div className="text-xs text-[color:var(--muted-foreground)]">{activeVoiceLabel}</div>
            </div>
            <div className="flex flex-wrap gap-2">
              {voiceOptions.length > 0 ? (
                voiceOptions.map((voice) => {
                  const active = activeVoiceName === voice.name;

                  return (
                    <button
                      key={`${voice.name}-${voice.lang}`}
                      type="button"
                      onClick={() => onSelectVoiceName(voice.name)}
                      className={[
                        "inline-flex items-center gap-2 border px-3 py-2 text-left text-xs transition-colors",
                        active
                          ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                          : "border-[color:var(--border-soft)] bg-white/60 hover:bg-[color:var(--paper-strong)]",
                      ].join(" ")}
                    >
                      <span className="max-w-[16rem] truncate">{getDisplayVoiceName(voice.name)}</span>
                      {defaultVoiceName && voice.name === defaultVoiceName ? (
                        <span className="rounded-full border border-[color:var(--border-soft)] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">
                          default
                        </span>
                      ) : null}
                    </button>
                  );
                })
              ) : (
                <div className="text-sm text-[color:var(--muted-foreground)]">{speechUnavailableText}</div>
              )}
            </div>
          </div>

          {exampleWords.length > 0 ? (
            <div className="grid gap-3">
              {exampleWords.map((item, index) => (
                <div
                  key={`${selectedTemplateNativeLabel}-${item.word}-${index}`}
                  className={cn(
                    "flex items-center gap-3 rounded-[20px] border border-[color:var(--border-soft)] bg-white/70 px-4 py-3",
                    isRtlLayout && "flex-row-reverse"
                  )}
                >
                  <div className={cn("min-w-0 flex-1", isRtlLayout && "text-right")}>
                    <div
                      className={cn(
                        "flex flex-wrap items-center gap-x-3 gap-y-1",
                        isRtlLayout && "flex-row-reverse justify-end"
                      )}
                    >
                      {isRtlLayout ? (
                        <>
                          <span className="text-sm text-[color:var(--foreground)]">{item.meaning}</span>
                          <span className="text-sm text-[color:var(--muted-foreground)]">{item.reading}</span>
                          <span className="font-[family-name:var(--font-display)] text-2xl leading-none text-[color:var(--foreground)]">
                            {item.word}
                          </span>
                        </>
                      ) : (
                        <>
                          <span className="font-[family-name:var(--font-display)] text-2xl leading-none text-[color:var(--foreground)]">
                            {item.word}
                          </span>
                          <span className="text-sm text-[color:var(--muted-foreground)]">{item.reading}</span>
                          <span className="text-sm text-[color:var(--foreground)]">{item.meaning}</span>
                        </>
                      )}
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`${dictionary.buttons.playPronunciation}: ${item.word}`}
                    onClick={() => onSpeak(item.word)}
                    disabled={!isSpeechSupported}
                    className="shrink-0 rounded-full"
                  >
                    <Play className="size-4" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-[20px] border border-dashed border-[color:var(--border-soft)] bg-white/50 p-5 text-sm leading-6 text-[color:var(--muted-foreground)]">
              {exampleWordsUnavailableText}
            </div>
          )}
        </SheetBody>
      </SheetContent>
    </Sheet>
  );
}
