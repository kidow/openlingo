import type { HTMLAttributes, ReactNode } from "react";

import { NoteFlashcard } from "@/components/notes/note-flashcard";
import { NoteVoiceButton } from "@/components/notes/note-voice-button";
import type { NoteSlugger } from "@/lib/note-slugs";
import { cn } from "@/lib/utils";

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  children?: ReactNode;
};

function createHeadingComponent(level: 2 | 3 | 4 | 5 | 6, slugger: NoteSlugger) {
  const baseClasses = {
    2: "mt-12 text-[1.6rem] leading-tight sm:text-[1.9rem]",
    3: "mt-9 text-[1.25rem] leading-tight sm:text-[1.4rem]",
    4: "mt-7 text-[1.05rem] leading-tight sm:text-[1.1rem]",
    5: "mt-6 text-[0.95rem] leading-tight",
    6: "mt-5 text-[0.92rem] leading-tight uppercase tracking-[0.12em]",
  }[level];

  const Tag = `h${level}` as const;

  return function NoteHeading({ children, className, ...props }: HeadingProps) {
    const id = slugger.next(children ?? "");

    return (
      <Tag
        id={id}
        className={cn(
          "scroll-mt-28 font-[family-name:var(--font-display)] font-semibold text-[color:var(--foreground)]",
          baseClasses,
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  };
}

export function createNoteMdxComponents(slugger: NoteSlugger) {
  return {
    h2: createHeadingComponent(2, slugger),
    h3: createHeadingComponent(3, slugger),
    h4: createHeadingComponent(4, slugger),
    h5: createHeadingComponent(5, slugger),
    h6: createHeadingComponent(6, slugger),
    NoteVoiceButton,
    NoteFlashcard,
  };
}
