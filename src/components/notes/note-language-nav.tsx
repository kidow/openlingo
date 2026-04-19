import Link from "next/link";

import { getNoteEntries } from "@/lib/notes-routing";
import { cn } from "@/lib/utils";

type NoteLanguageNavProps = {
  selectedLanguageId: string;
};

export function NoteLanguageNav({ selectedLanguageId }: NoteLanguageNavProps) {
  const entries = getNoteEntries();

  return (
    <nav
      aria-label="언어별 연습장"
      className="flex gap-2 overflow-x-auto rounded-[28px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] p-2 shadow-[0_12px_36px_rgba(88,63,30,0.06)]"
    >
      {entries.map((entry) => {
        const active = entry.lang === selectedLanguageId;

        return (
          <Link
            key={entry.lang}
            href={entry.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex min-w-fit items-center gap-3 rounded-[20px] px-4 py-3 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--ring)] focus-visible:ring-offset-2",
              active
                ? "bg-[color:var(--accent)] text-[color:var(--accent-foreground)]"
                : "bg-[color:var(--paper-strong)] text-[color:var(--muted-foreground)] hover:bg-[color:var(--paper-deep)] hover:text-[color:var(--foreground)]"
            )}
          >
            <span className="font-[family-name:var(--font-display)] text-base leading-none">{entry.nativeLabel}</span>
            <span className="text-[11px] uppercase tracking-[0.18em]">{entry.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
