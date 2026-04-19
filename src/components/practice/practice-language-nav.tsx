"use client";

import Link from "next/link";

import { languagePacks } from "@/data/practice-content";
import { getLocalizedText } from "@/i18n/config";
import { cn } from "@/lib/utils";
import { getPracticeLanguageHref } from "@/lib/practice-routing";

type PracticeLanguageNavProps = {
  ariaLabel: string;
  selectedLanguageId: string;
};

export function PracticeLanguageNav({ ariaLabel, selectedLanguageId }: PracticeLanguageNavProps) {
  return (
    <div
      data-testid="practice-language-nav-band"
      className="border-y border-[color:var(--border-soft)] bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(248,244,236,0.94))]"
    >
      <nav aria-label={ariaLabel} className="flex gap-1 overflow-x-auto px-4 pb-0 pt-3 md:px-6 lg:px-8">
        {languagePacks.map((pack) => {
          const active = pack.id === selectedLanguageId;
          const packLabel = getLocalizedText(pack.label);

          return (
            <Link
              key={pack.id}
              href={getPracticeLanguageHref(pack.id)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "relative min-w-fit border-b-2 px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--border-strong)] focus-visible:ring-offset-2",
                active
                  ? "border-[color:var(--foreground)] text-[color:var(--foreground)]"
                  : "border-transparent text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
              )}
            >
              <span className="block font-[family-name:var(--font-display)] text-lg leading-none">{pack.nativeLabel}</span>
              {pack.nativeLabel === packLabel ? null : (
                <span className="mt-1 block text-[11px] uppercase tracking-[0.18em]">{packLabel}</span>
              )}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
