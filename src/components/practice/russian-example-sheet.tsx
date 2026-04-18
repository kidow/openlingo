"use client";

import { useEffect, useMemo, useState } from "react";
import { Play, X } from "lucide-react";

import { AppDictionary } from "@/i18n/dictionaries";
import { Button } from "@/components/ui/button";
import { Sheet, SheetBody, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import {
  DEFAULT_RUSSIAN_VOICE_NAME,
  getDisplayVoiceName,
  getDefaultRussianVoice,
  getRussianVoiceOptions,
  loadSpeechSynthesisVoices,
  isSpeechSynthesisSupported,
  speakText,
} from "@/lib/speech-synthesis";
import { russianExampleWordsByTemplateId } from "@/data/templates/ru/examples";

type RussianExampleSheetProps = {
  dictionary: AppDictionary;
  selectedTemplateId: string;
  selectedTemplateLabel: string;
  selectedTemplateNativeLabel: string;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export function RussianExampleSheet({
  dictionary,
  selectedTemplateId,
  selectedTemplateLabel,
  selectedTemplateNativeLabel,
  open,
  onOpenChange,
}: RussianExampleSheetProps) {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoiceName, setSelectedVoiceName] = useState<string | null>(null);
  const isSpeechSupported = isSpeechSynthesisSupported();

  useEffect(() => {
    if (!isSpeechSupported) {
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
  }, [isSpeechSupported]);

  const exampleWords = russianExampleWordsByTemplateId[selectedTemplateId] ?? [];
  const voiceOptions = useMemo(() => getRussianVoiceOptions(voices), [voices]);
  const defaultVoice = useMemo(() => getDefaultRussianVoice(voices), [voices]);
  const activeVoice =
    voiceOptions.find((voice) => voice.name === selectedVoiceName) ?? defaultVoice ?? voiceOptions[0] ?? null;

  function handleSpeak(word: string) {
    speakText(word, "ru-RU", activeVoice);
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent aria-describedby={undefined} className="h-[min(86dvh,44rem)]">
        <SheetHeader className="border-b border-[color:var(--border-soft)] pb-4">
          <div className="flex items-start justify-between gap-4">
            <div className="grid gap-1">
              <SheetTitle className="font-[family-name:var(--font-display)] text-2xl text-[color:var(--foreground)]">
                {dictionary.sections.exampleWordsTitle}
              </SheetTitle>
              <SheetDescription className="max-w-2xl text-sm leading-6 text-[color:var(--muted-foreground)]">
                {dictionary.sections.exampleWordsDescription}
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
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">Русский</div>
            <div className="font-[family-name:var(--font-display)] text-5xl leading-none text-[color:var(--foreground)]">
              {selectedTemplateNativeLabel}
            </div>
            <div className="text-sm text-[color:var(--muted-foreground)]">{selectedTemplateLabel}</div>
          </div>

          <div className="grid gap-3">
            <div className="flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                {dictionary.sections.exampleVoiceSelectorTitle}
              </div>
              <div className="text-xs text-[color:var(--muted-foreground)]">
                {activeVoice ? getDisplayVoiceName(activeVoice.name) : DEFAULT_RUSSIAN_VOICE_NAME}
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
                      {voice.name === DEFAULT_RUSSIAN_VOICE_NAME ? (
                        <span className="rounded-full border border-[color:var(--border-soft)] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">
                          default
                        </span>
                      ) : null}
                    </button>
                  );
                })
              ) : (
                <div className="text-sm text-[color:var(--muted-foreground)]">
                  {dictionary.sections.exampleWordsSpeechUnavailable}
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
              {dictionary.sections.exampleWordsUnavailable}
            </div>
          )}
        </SheetBody>

      </SheetContent>
    </Sheet>
  );
}
