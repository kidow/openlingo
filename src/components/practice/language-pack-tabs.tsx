"use client";

import { cn } from "@/lib/utils";

type LanguagePackTabItem = {
  id: string;
  nativeLabel: string;
  secondaryLabel?: string;
  badgeLabel?: string;
};

type LanguagePackTabsProps = {
  ariaLabel: string;
  items: LanguagePackTabItem[];
  selectedId: string;
  onSelect: (id: string) => void;
};

export function LanguagePackTabs({ ariaLabel, items, selectedId, onSelect }: LanguagePackTabsProps) {
  return (
    <div
      data-testid="language-pack-tabs-band"
      className="border-b border-[color:var(--border-soft)] bg-[linear-gradient(180deg,rgba(252,249,241,0.98),rgba(248,244,236,0.94))]"
    >
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex gap-1 overflow-x-auto px-4 pb-0 pt-3 md:px-6 lg:px-8"
      >
        {items.map((item) => {
          const active = item.id === selectedId;

          return (
            <button
              key={item.id}
              id={`language-pack-tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={active}
              aria-controls={`language-pack-panel-${item.id}`}
              tabIndex={active ? 0 : -1}
              onClick={() => onSelect(item.id)}
              className={cn(
                "relative min-w-fit border-b-2 px-4 py-3 text-left transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--border-strong)] focus-visible:ring-offset-2",
                active
                  ? "border-[color:var(--foreground)] text-[color:var(--foreground)]"
                  : "border-transparent text-[color:var(--muted-foreground)] hover:text-[color:var(--foreground)]"
              )}
            >
              <span className="block font-[family-name:var(--font-display)] text-lg leading-none">{item.nativeLabel}</span>
              {item.secondaryLabel ? (
                <span className="mt-1 block text-[11px] uppercase tracking-[0.18em]">{item.secondaryLabel}</span>
              ) : null}
              {item.badgeLabel ? (
                <span className="mt-2 inline-flex rounded-full border border-[color:var(--border-soft)] bg-[color:var(--paper)] px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[color:var(--muted-foreground)]">
                  {item.badgeLabel}
                </span>
              ) : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
