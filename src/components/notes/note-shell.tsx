import { ReactNode } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { getLocalizedText } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { NoteHeadingProvider } from "@/components/notes/mdx-components";
import { NoteLanguageNav } from "@/components/notes/note-language-nav";
import type { NoteEntry, NoteFrontmatter, TocItem } from "@/types/notes";

type NoteShellProps = {
  entry: NoteEntry;
  frontmatter: NoteFrontmatter;
  tocItems: TocItem[];
  children: ReactNode;
};

function formatUpdatedAt(value: string) {
  return value;
}

export function NoteShell({ entry, frontmatter, tocItems, children }: NoteShellProps) {
  const isRtl = entry.direction === "rtl";

  return (
    <main className="mx-auto w-full max-w-[1440px] px-4 pb-12 pt-5 md:px-6 lg:px-8">
      <div className="grid gap-5">
        <NoteLanguageNav currentLang={entry.lang} />

        <Card className="overflow-hidden rounded-[30px] border-[color:var(--border-soft)] bg-[linear-gradient(180deg,rgba(252,249,241,0.96),rgba(246,240,231,0.92))] shadow-[0_18px_48px_rgba(69,48,20,0.08)]">
          <CardContent className={cn("grid gap-5 p-5 md:p-7 lg:p-8", isRtl && "text-right")}>
            <div className={cn("flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]", isRtl && "justify-end")}>
              <span>{getLocalizedText(entry.label)}</span>
              <span className="rounded-full border border-[color:var(--border-soft)] bg-white/60 px-2.5 py-1 text-[10px]">
                {entry.lang}
              </span>
              <span className="rounded-full border border-[color:var(--border-soft)] bg-white/60 px-2.5 py-1 text-[10px]">
                {formatUpdatedAt(frontmatter.updatedAt)}
              </span>
            </div>

            <div className="grid gap-3">
              <h1 className="font-[family-name:var(--font-display)] text-4xl leading-tight text-[color:var(--foreground)] md:text-5xl">
                {frontmatter.title}
              </h1>
              <p className="max-w-4xl text-base leading-7 text-[color:var(--muted-foreground)] md:text-lg">
                {frontmatter.description}
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <article dir={entry.direction} className={cn("grid gap-8", isRtl && "text-right")}>
            <NoteHeadingProvider>{children}</NoteHeadingProvider>
          </article>

          <aside className="lg:sticky lg:top-6">
            <Card className="rounded-[24px] border-[color:var(--border-soft)] bg-[color:rgba(252,249,241,0.72)] shadow-none">
              <CardContent className="grid gap-4 p-4 md:p-5">
                <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[color:var(--muted-foreground)]">
                  Table of contents
                </div>

                {tocItems.length > 0 ? (
                  <nav aria-label="Table of contents" className="grid gap-2">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={cn(
                          "rounded-lg border border-transparent px-2 py-1 text-sm text-[color:var(--foreground)] transition-colors hover:border-[color:var(--border-soft)] hover:bg-white/60",
                          item.level >= 4 && "pl-4 text-[0.92rem] text-[color:var(--muted-foreground)]"
                        )}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                ) : (
                  <div className="text-sm leading-6 text-[color:var(--muted-foreground)]">
                    No section headings yet.
                  </div>
                )}
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </main>
  );
}
