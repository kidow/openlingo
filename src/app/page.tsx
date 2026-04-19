import { AppHeader } from "@/components/layout/app-header";
import { ExampleWordsActionProvider } from "@/components/layout/example-words-action-context";
import { PrototypePracticeSheet } from "@/components/practice/prototype-practice-sheet";
import { getDictionary } from "@/i18n/dictionaries";

const dictionary = getDictionary();

export default function HomePage() {
  return (
    <ExampleWordsActionProvider>
      <div className="min-h-screen">
        <AppHeader dictionary={dictionary.header} />
        <PrototypePracticeSheet dictionary={dictionary} />
      </div>
    </ExampleWordsActionProvider>
  );
}
