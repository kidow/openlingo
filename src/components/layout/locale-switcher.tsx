"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { AppLocale, isAppLocale, LOCALES } from "@/i18n/config";
import { cn } from "@/lib/utils";

type LocaleSwitcherProps = {
  currentLocale: AppLocale;
  label: string;
  localeLabels: Record<AppLocale, string>;
};

function getLocaleHref(pathname: string, nextLocale: AppLocale, search: string) {
  const segments = pathname.split("/");

  if (segments[1] && isAppLocale(segments[1])) {
    segments[1] = nextLocale;
  } else {
    segments.splice(1, 0, nextLocale);
  }

  const nextPathname = segments.join("/") || `/${nextLocale}`;

  return search ? `${nextPathname}?${search}` : nextPathname;
}

export function LocaleSwitcher({ currentLocale, label, localeLabels }: LocaleSwitcherProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const search = searchParams.toString();

  return (
    <div className="flex items-center gap-3">
      <span className="sr-only">{label}</span>
      <div
        aria-label={label}
        className="inline-flex items-center rounded-full border border-[color:var(--border-soft)] bg-[color:var(--paper)] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]"
        role="group"
      >
        {LOCALES.map((locale) => {
          const active = locale === currentLocale;

          return (
            <Link
              key={locale}
              href={getLocaleHref(pathname, locale, search)}
              aria-current={active ? "page" : undefined}
              className={cn(
                "rounded-full px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
                active
                  ? "bg-[color:var(--accent)] text-[color:var(--accent-foreground)] shadow-[0_8px_20px_rgba(88,63,30,0.12)]"
                  : "text-[color:var(--muted-foreground)] hover:bg-[color:var(--paper-strong)]"
              )}
            >
              {localeLabels[locale]}
            </Link>
          );
        })}
      </div>
    </div>
  );
}

