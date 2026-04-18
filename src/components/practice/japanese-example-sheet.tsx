"use client";

import { useMemo, useEffect, useState } from "react";
import { ChevronDown, Play, X } from "lucide-react";

import { AppDictionary } from "@/i18n/dictionaries";
import { Button } from "@/components/ui/button";
import { Sheet, SheetBody, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  DEFAULT_JAPANESE_VOICE_NAME,
  getDisplayVoiceName,
  getDefaultJapaneseVoice,
  getJapaneseVoiceOptions,
  getSpeechSynthesisVoices,
  isSpeechSynthesisSupported,
  speakJapaneseText,
} from "@/lib/speech-synthesis";
import { japaneseExampleWordsByTemplateId } from "@/data/templates/ja/examples";

type JapaneseExampleSheetProps = {
  dictionary: AppDictionary;
  selectedTemplateId: string;
  selectedTemplateLabel: string;
  selectedTemplateNativeLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function JapaneseExampleSheet({
  dictionary,
  selectedTemplateId,
  selectedTemplateLabel,
  selectedTemplateNativeLabel,
  open,
  onOpenChange,
}: JapaneseExampleSheetProps) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string | null>(null);
  const isSpeechSupported = isSpeechSynthesisSupported();

  useEffect(() => {
    if (!isSpeechSupported) {
      return;
    }

    const syncVoices = () => {
      setVoices(getSpeechSynthesisVoices());
    };

    const initialLoadId = window.setTimeout(syncVoices, 0);
    window.speechSynthesis.addEventListener("voiceschanged", syncVoices);

    return () => {
      window.clearTimeout(initialLoadId);
      window.speechSynthesis.removeEventListener("voiceschanged", syncVoices);
    };
  }, [isSpeechSupported]);

  const exampleWords = japaneseExampleWordsByTemplateId[selectedTemplateId] ?? [];
  const voiceOptions = useMemo(() => getJapaneseVoiceOptions(voices), [voices]);
  const defaultVoice = useMemo(() => getDefaultJapaneseVoice(voices), [voices]);
  const activeVoice =
    voiceOptions.find((voice) => voice.name === selectedVoiceName) ?? defaultVoice ?? voiceOptions[0] ?? null;

  function handleSpeak(word: string) {
    speakJapaneseText(word, activeVoice);
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent aria-describedby={undefined} className="h-[min(86dvh,44rem)]">
        <SheetHeader className="border-b border-[color:var(--border-soft)] pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="grid gap-1">
              <SheetTitle className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--foreground)]">
                {dictionary.sections.japaneseExamplesTitle}
              </SheetTitle>
              <SheetDescription className="max-w-2xl text-sm leading-6 text-[color:var(--muted-foreground)]">
                {dictionary.sections.japaneseExamplesDescription}
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
              日本語
            </div>
            <div className="font-[family-name:var(--font-display)] text-5xl leading-none text-[color:var(--foreground)]">
              {selectedTemplateNativeLabel}
            </div>
            <div className="text-sm text-[color:var(--muted-foreground)]">{selectedTemplateLabel}</div>
          </div>

          <div className="grid gap-3">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                {dictionary.sections.japaneseVoiceSelectorTitle}
              </div>
              <div className="text-xs text-[color:var(--muted-foreground)]">
                {activeVoice ? getDisplayVoiceName(activeVoice.name) : DEFAULT_JAPANESE_VOICE_NAME}
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {voiceOptions.length > 0 ? (
                voiceOptions.map((voice) => {
                  const active = activeVoice?.name === voice.name;

                  return (
                    <button
                      key={`${voice.name}-${voice.lang}`}
                      type="button"
                      onClick={() => setSelectedVoiceName(voice.name)}
                      className={[
                        "inline-flex items-center gap-2 border px-3 py-2 text-left text-xs transition-colors",
                        active
                          ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)]"
                          : "border-[color:var(--border-soft)] bg-white/60 hover:bg-[color:var(--paper-strong)]",
                      ].join(" ")}
                    >
                      <span className="max-w-[16rem] truncate">{getDisplayVoiceName(voice.name)}</span>
                      {voice.name === DEFAULT_JAPANESE_VOICE_NAME ? (
                        <span className="rounded-full border border-[color:var(--border-soft)] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">
                          default
                        </span>
                      ) : null}
                    </button>
                  );
                })
              ) : (
                <div className="text-sm text-[color:var(--muted-foreground)]">
                  {dictionary.sections.japaneseExamplesSpeechUnavailable}
                </div>
              )}
            </div>
          </div>

          {exampleWords.length > 0 ? (
            <div className="grid gap-3">
              {exampleWords.map((item, index) => (
                <div
                  key={`${selectedTemplateId}-${item.word}-${index}`}
                  className="flex items-center gap-3 rounded-[20px] border border-[color:var(--border-soft)] bg-white/70 px-4 py-3"
                >
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="font-[family-name:var(--font-display)] text-2xl leading-none text-[color:var(--foreground)]">
                        {item.word}
                      </span>
                      <span className="text-sm text-[color:var(--muted-foreground)]">{item.reading}</span>
                      <span className="text-sm text-[color:var(--foreground)]">{item.meaning}</span>
                    </div>
                  </div>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    aria-label={`${dictionary.buttons.playPronunciation}: ${item.word}`}
                    onClick={() => handleSpeak(item.word)}
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
              {dictionary.sections.japaneseExamplesUnavailable}
            </div>
          )}
        </SheetBody>

        <SheetFooter className="border-t border-[color:var(--border-soft)] pt-4">
          <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
            <ChevronDown className="size-3.5" />
            {isSpeechSupported
              ? dictionary.sections.japaneseExamplesSpeechReady
              : dictionary.sections.japaneseExamplesSpeechUnavailable}
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
