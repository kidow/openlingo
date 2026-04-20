import type { Metadata } from "next";

import { PrototypePracticeSheet } from "@/components/practice/prototype-practice-sheet";
import { getDictionary } from "@/i18n/dictionaries";
import { getPracticePageMetadata } from "@/lib/practice-seo";

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>): Promise<Metadata> {
  const { lang } = await params;
  return getPracticePageMetadata(lang);
}

export default async function PracticeLanguagePage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = getDictionary();

  return <PrototypePracticeSheet dictionary={dictionary} selectedLanguageId={lang} />;
}
