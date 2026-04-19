import Link from "next/link";

import { getLocalizedText } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { getNoteEntries, getNoteHref } from "@/lib/notes-routing";

type NoteLanguageNavProps = {
  currentLang: string;
};

export function NoteLanguageNav({ currentLang }: NoteLanguageNavProps) {
  const entries = getNoteEntries();

  return (
    <nav aria-label="Language notes navigation" className="flex flex-wrap gap-2">
      {entries.map((entry) => {
        const active = entry.lang === currentLang;

        return (
          <Link
            key={entry.lang}
            href={getNoteHref(entry.lang)}
            aria-current={active ? "page" : undefined}
            className={cn(
              "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-sm transition-colors",
              active
                ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)] text-[color:var(--foreground)]"
                : "border-[color:var(--border-soft)] bg-white/55 text-[color:var(--muted-foreground)] hover:bg-[color:var(--paper-strong)] hover:text-[color:var(--foreground)]"
            )}
          >
            <span className="font-medium">{getLocalizedText(entry.label)}</span>
            <span className="rounded-full border border-[color:var(--border-soft)] px-2 py-0.5 text-[10px] uppercase tracking-[0.16em]">
              {entry.lang}
            </span>
            <span className="text-xs opacity-80">{entry.nativeLabel}</span>
          </Link>
        );
      })}
    </nav>
  );
}
