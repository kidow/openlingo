import { PrototypePracticeSheet } from "@/components/practice/prototype-practice-sheet";
import { getDictionary } from "@/i18n/dictionaries";

export default async function PracticeLanguagePage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = getDictionary();

  return <PrototypePracticeSheet dictionary={dictionary} selectedLanguageId={lang} />;
}
