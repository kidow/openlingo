"use client";

import Image from "next/image";
import Link from "next/link";

import { AppDictionary } from "@/i18n/dictionaries";
import { Button } from "@/components/ui/button";
import { useExampleWordsAction } from "@/components/layout/example-words-action-context";
import { cn } from "@/lib/utils";

type AppHeaderProps = {
  dictionary: AppDictionary["header"];
  homeHref?: string;
  activeSection?: "practice" | "notes";
};

export function AppHeader({ dictionary, homeHref = "/practice/ko", activeSection }: AppHeaderProps) {
  const { action } = useExampleWordsAction();

  return (
    <header className="border-b border-[color:var(--border-soft)] bg-[color:rgba(252,248,241,0.82)]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link
          href={homeHref}
          aria-label={dictionary.homeLabel}
          className="flex items-center gap-3 rounded-full px-1 py-1 transition-opacity hover:opacity-90"
        >
          <span className="rounded-[18px] border border-[color:var(--border-soft)] bg-[color:var(--paper)] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
            <Image src="/icon.svg" alt="" width={34} height={34} priority />
          </span>
          <span className="font-[family-name:var(--font-display)] text-xl font-semibold text-[color:var(--foreground)]">
            {dictionary.wordmark}
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Practice and notes navigation" className="flex items-center gap-2">
            <Link
              href="/practice"
              aria-current={activeSection === "practice" ? "page" : undefined}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeSection === "practice"
                  ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)] text-[color:var(--foreground)]"
                  : "border-[color:var(--border-soft)] bg-[color:var(--paper)] text-[color:var(--muted-foreground)] hover:bg-[color:var(--paper-strong)] hover:text-[color:var(--foreground)]"
              )}
            >
              Practice
            </Link>
            <Link
              href="/notes"
              aria-current={activeSection === "notes" ? "page" : undefined}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                activeSection === "notes"
                  ? "border-[color:var(--border-strong)] bg-[color:var(--paper-deep)] text-[color:var(--foreground)]"
                  : "border-[color:var(--border-soft)] bg-[color:var(--paper)] text-[color:var(--muted-foreground)] hover:bg-[color:var(--paper-strong)] hover:text-[color:var(--foreground)]"
              )}
            >
              Notes
            </Link>
          </nav>

          {action ? (
            <Button type="button" variant="ghost" size="sm" onClick={action.onOpen} className="rounded-full px-4">
              {action.label}
            </Button>
          ) : null}
        </div>
      </div>
    </header>
  );
}
