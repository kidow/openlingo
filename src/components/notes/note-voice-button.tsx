"use client";

import { useState } from "react";
import { Volume2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { speakText } from "@/lib/speech-synthesis";
import { cn } from "@/lib/utils";

type NoteVoiceButtonProps = {
  text: string;
  languageTag: string;
  label?: string;
  className?: string;
  voice?: SpeechSynthesisVoice | null;
};

export function NoteVoiceButton({
  text,
  languageTag,
  label = "Play pronunciation",
  className,
  voice = null,
}: NoteVoiceButtonProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  function handleSpeak() {
    setIsPlaying(true);
    speakText(text, languageTag, voice);

    window.setTimeout(() => {
      setIsPlaying(false);
    }, 350);
  }

  return (
    <Button
      type="button"
      variant="subtle"
      onClick={handleSpeak}
      className={cn("gap-2 rounded-full px-4", className)}
      aria-pressed={isPlaying}
    >
      <Volume2 className="size-4" />
      <span>{label}</span>
    </Button>
  );
}
