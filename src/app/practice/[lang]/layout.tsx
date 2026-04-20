import { notFound } from "next/navigation";

import { AppHeader } from "@/components/layout/app-header";
import { ExampleWordsActionProvider } from "@/components/layout/example-words-action-context";
import { languagePacks } from "@/data/practice-content";
import { getDictionary } from "@/i18n/dictionaries";
import { getPracticeLanguagePack, getPracticeLanguageHref } from "@/lib/practice-routing";
import { getNoteHref } from "@/lib/notes-routing";

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
  const currentHref = getPracticeLanguageHref(lang);

  return (
    <ExampleWordsActionProvider>
      <div className="min-h-screen">
        <AppHeader
          dictionary={dictionary.header}
          homeHref={currentHref}
          practiceHref={currentHref}
          notesHref={getNoteHref(lang)}
          activeSection="practice"
        />
        {children}
      </div>
    </ExampleWordsActionProvider>
  );
}
