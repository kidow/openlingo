import { notFound } from "next/navigation";

import { PrototypePracticeSheet } from "@/components/practice/prototype-practice-sheet";
import { AppLocale, isAppLocale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

type LocalePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function LocalePage({ params }: LocalePageProps) {
  const { locale: rawLocale } = await params;

  if (!isAppLocale(rawLocale)) {
    notFound();
  }

  const locale: AppLocale = rawLocale;
  const dictionary = getDictionary(locale);

  return <PrototypePracticeSheet key={locale} locale={locale} dictionary={dictionary} />;
}

