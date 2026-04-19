"use client";

import { createContext, type HTMLAttributes, useContext, useMemo, type ReactNode } from "react";

import { NoteFlashcard } from "@/components/notes/note-flashcard";
import { NoteVoiceButton } from "@/components/notes/note-voice-button";
import { createNoteSlugger, type NoteSlugger } from "@/lib/note-slugs";
import { cn } from "@/lib/utils";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children?: ReactNode;
};

const NoteHeadingContext = createContext<NoteSlugger | null>(null);

function useNoteHeadingSlugger() {
  return useContext(NoteHeadingContext);
}

export function NoteHeadingProvider({ children }: { children: ReactNode }) {
  const slugger = useMemo(() => createNoteSlugger(), []);

  return <NoteHeadingContext.Provider value={slugger}>{children}</NoteHeadingContext.Provider>;
}

function createHeadingComponent(level: 2 | 3 | 4 | 5 | 6) {
  const baseClasses = {
    2: "mt-12 text-[1.6rem] leading-tight sm:text-[1.9rem]",
    3: "mt-9 text-[1.25rem] leading-tight sm:text-[1.4rem]",
    4: "mt-7 text-[1.05rem] leading-tight sm:text-[1.1rem]",
    5: "mt-6 text-[0.95rem] leading-tight",
    6: "mt-5 text-[0.92rem] leading-tight uppercase tracking-[0.12em]",
  }[level];

  const Tag = `h${level}` as const;

  return function NoteHeading({ children, className, ...props }: HeadingProps) {
    const slugger = useNoteHeadingSlugger();
    const id = slugger?.next(children ?? "") ?? createNoteSlugger().next(children ?? "");

    return (
      <Tag
        id={id}
        {...props}
        className={cn(
          "scroll-mt-28 font-[family-name:var(--font-display)] font-semibold text-[color:var(--foreground)]",
          baseClasses,
          className
        )}
      >
        {children}
      </Tag>
    );
  };
}

export const noteMdxComponents = {
  h2: createHeadingComponent(2),
  h3: createHeadingComponent(3),
  h4: createHeadingComponent(4),
  h5: createHeadingComponent(5),
  h6: createHeadingComponent(6),
  NoteVoiceButton,
  NoteFlashcard,
};
