import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { AppHeader } from "@/components/layout/app-header";
import { ExampleWordsActionProvider } from "@/components/layout/example-words-action-context";
import { getDictionary } from "@/i18n/dictionaries";
import { getNoteEntries, getNoteEntry, getNoteHref } from "@/lib/notes-routing";

export function generateStaticParams() {
  return getNoteEntries().map((entry) => ({ lang: entry.lang }));
}

export default async function NotesLanguageLayout({
  children,
  params,
}: Readonly<{
  children: ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!getNoteEntry(lang)) {
    notFound();
  }

  const dictionary = getDictionary();
  const currentHref = getNoteHref(lang);

  return (
    <ExampleWordsActionProvider>
      <div className="min-h-screen">
        <AppHeader
          dictionary={dictionary.header}
          homeHref={currentHref}
          practiceHref={`/practice/${lang}`}
          notesHref={currentHref}
          activeSection="notes"
        />
        {children}
      </div>
    </ExampleWordsActionProvider>
  );
}
