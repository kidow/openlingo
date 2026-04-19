"use client";

import { useState, type ReactNode } from "react";
import { RotateCcw } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type NoteFlashcardProps = {
  front: ReactNode;
  back: ReactNode;
  label?: string;
  className?: string;
  initialRevealed?: boolean;
};

export function NoteFlashcard({
  front,
  back,
  label = "Flashcard",
  className,
  initialRevealed = false,
}: NoteFlashcardProps) {
  const [revealed, setRevealed] = useState(initialRevealed);

  return (
    <Card className={cn("overflow-hidden rounded-[24px] border-[color:var(--border-soft)] bg-[color:var(--paper)] shadow-none", className)}>
      <CardContent className="grid gap-4 p-5 md:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">{label}</div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setRevealed((current) => !current)}
            className="rounded-full px-3"
          >
            <RotateCcw className="mr-2 size-4" />
            {revealed ? "Hide answer" : "Show answer"}
          </Button>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[20px] border border-[color:var(--border-soft)] bg-white/70 p-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              Front
            </div>
            <div className="mt-2 text-base leading-7 text-[color:var(--foreground)]">{front}</div>
          </div>

          <div
            className={[
              "rounded-[20px] border p-4 transition-opacity",
              revealed
                ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)] opacity-100"
                : "border-dashed border-[color:var(--border-soft)] bg-white/55 opacity-70",
            ].join(" ")}
          >
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
              Back
            </div>
            <div className="mt-2 text-base leading-7 text-[color:var(--foreground)]">
              {revealed ? back : <span className="text-[color:var(--muted-foreground)]">Tap show answer.</span>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
