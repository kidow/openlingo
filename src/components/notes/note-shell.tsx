import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NoteLanguageNav } from "@/components/notes/note-language-nav";
import { cn } from "@/lib/utils";
import type { NoteFrontmatter, TocItem } from "@/types/notes";
import type { NoteEntry } from "@/data/notes";

type NoteShellProps = {
  entry: NoteEntry;
  frontmatter: NoteFrontmatter;
  tocItems: TocItem[];
  content: ReactNode;
};

function formatUpdatedAt(value: string) {
  const date = new Date(value);

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function NoteShell({ entry, frontmatter, tocItems, content }: NoteShellProps) {
  const isRtl = entry.direction === "rtl";
  const updatedAt = formatUpdatedAt(frontmatter.updatedAt);

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(235,223,201,0.85),transparent_30%),linear-gradient(180deg,var(--background),var(--paper))] px-4 py-6 md:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4">
        <NoteLanguageNav selectedLanguageId={entry.lang} />

        <section className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-start">
          <article
            lang={entry.lang}
            dir={entry.direction}
            className={cn("min-w-0", isRtl && "lg:order-2")}
          >
            <Card className="overflow-hidden">
              <CardHeader className="space-y-4 border-b border-[color:var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,251,244,1),rgba(248,242,230,1))]">
                <div className={cn("flex flex-wrap gap-2", isRtl && "justify-end")}>
                  <Badge>{entry.nativeLabel}</Badge>
                  <Badge>{entry.label}</Badge>
                  <Badge>{updatedAt}</Badge>
                </div>
                <CardTitle className={cn("text-3xl leading-tight md:text-4xl", isRtl && "text-right")}>
                  {frontmatter.title}
                </CardTitle>
                <CardDescription className={cn("max-w-3xl text-base leading-7", isRtl && "text-right")}>
                  {frontmatter.description}
                </CardDescription>
              </CardHeader>

              <CardContent className={cn("space-y-8 pt-8", isRtl && "text-right")}>
                <div className="space-y-8">{content}</div>
              </CardContent>
            </Card>
          </article>

          <aside className={cn("space-y-4", isRtl && "lg:order-1")}>
            <Card className="sticky top-4 overflow-hidden">
              <CardHeader className="border-b border-[color:var(--border-soft)] bg-[color:var(--paper-strong)]">
                <CardTitle className="text-lg">목차</CardTitle>
                <CardDescription>시험 스펙 순서에 맞춰 섹션을 바로 이동할 수 있습니다.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 pt-4">
                {tocItems.length > 0 ? (
                  <nav aria-label="문서 목차" className="space-y-1">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className={cn(
                          "block rounded-xl px-3 py-2 text-sm leading-6 text-[color:var(--muted-foreground)] transition-colors hover:bg-[color:var(--paper-strong)] hover:text-[color:var(--foreground)]",
                          item.level === 3 && "ps-6",
                          item.level === 4 && "ps-9"
                        )}
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                ) : (
                  <p className="text-sm leading-7 text-[color:var(--muted-foreground)]">헤딩이 있는 경우 자동으로 표시됩니다.</p>
                )}
              </CardContent>
            </Card>
          </aside>
        </section>
      </div>
    </main>
  );
}
