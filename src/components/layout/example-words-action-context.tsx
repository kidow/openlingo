"use client";

import { createContext, useContext, useState } from "react";

type ExampleWordsAction = {
  label: string;
  onOpen: () => void;
};

type ExampleWordsActionContextValue = {
  action: ExampleWordsAction | null;
  setAction: (action: ExampleWordsAction | null) => void;
};

const ExampleWordsActionContext = createContext<ExampleWordsActionContextValue | null>(null);

export function ExampleWordsActionProvider({ children }: { children: React.ReactNode }) {
  const [action, setAction] = useState<ExampleWordsAction | null>(null);

  return <ExampleWordsActionContext.Provider value={{ action, setAction }}>{children}</ExampleWordsActionContext.Provider>;
}

export function useExampleWordsAction() {
  const context = useContext(ExampleWordsActionContext);

  if (!context) {
    throw new Error("useExampleWordsAction must be used within ExampleWordsActionProvider");
  }

  return context;
}
