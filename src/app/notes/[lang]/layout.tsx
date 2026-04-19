import type { ReactNode } from "react";

import { AppHeader } from "@/components/layout/app-header";
import { ExampleWordsActionProvider } from "@/components/layout/example-words-action-context";
import { getDictionary } from "@/i18n/dictionaries";
import { getDefaultNotesHref, getNoteEntries } from "@/lib/notes-routing";

export function generateStaticParams() {
  return getNoteEntries().map((entry) => ({ lang: entry.lang }));
}

export default function NotesLanguageLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const dictionary = getDictionary();

  return (
    <ExampleWordsActionProvider>
      <div className="min-h-screen">
        <AppHeader dictionary={dictionary.header} homeHref={getDefaultNotesHref()} activeSection="notes" />
        {children}
      </div>
    </ExampleWordsActionProvider>
  );
}
