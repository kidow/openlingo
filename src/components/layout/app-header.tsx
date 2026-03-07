import Image from "next/image";
import Link from "next/link";

import { AppLocale } from "@/i18n/config";
import { AppDictionary } from "@/i18n/dictionaries";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

type AppHeaderProps = {
  locale: AppLocale;
  dictionary: AppDictionary["header"];
};

export function AppHeader({ locale, dictionary }: AppHeaderProps) {
  return (
    <header className="border-b border-[color:var(--border-soft)] bg-[color:rgba(252,248,241,0.82)]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-4 py-3 md:px-6 lg:px-8">
        <Link
          href={`/${locale}`}
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

        <LocaleSwitcher currentLocale={locale} label={dictionary.localeLabel} localeLabels={dictionary.locales} />
      </div>
    </header>
  );
}

