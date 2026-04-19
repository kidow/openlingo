import { notFound } from "next/navigation";

import { AppHeader } from "@/components/layout/app-header";
import { ExampleWordsActionProvider } from "@/components/layout/example-words-action-context";
import { languagePacks } from "@/data/practice-content";
import { getDictionary } from "@/i18n/dictionaries";
import { getPracticeLanguagePack, getDefaultPracticeLanguageHref } from "@/lib/practice-routing";

export function generateStaticParams() {
  return languagePacks.map((pack) => ({ lang: pack.id }));
}

export default async function PracticeLanguageLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!getPracticeLanguagePack(lang)) {
    notFound();
  }

  const dictionary = getDictionary();

  return (
    <ExampleWordsActionProvider>
      <div className="min-h-screen">
        <AppHeader dictionary={dictionary.header} homeHref={getDefaultPracticeLanguageHref()} />
        {children}
      </div>
    </ExampleWordsActionProvider>
  );
}
