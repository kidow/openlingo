import type { ReactNode } from "react";

import type { LocalizedText } from "@/i18n/config";
import type { WritingDirection } from "@/types/writing";

export type NoteFrontmatter = {
  title: string;
  description: string;
  lang: string;
  updatedAt: string;
  seoTitle?: string;
  seoDescription?: string;
  ogImage?: string;
};

export type TocItem = {
  id: string;
  label: string;
  level: number;
};

export type NoteEntry = {
  lang: string;
  label: LocalizedText;
  nativeLabel: string;
  direction: WritingDirection;
  summary: LocalizedText;
  filePath: string;
};

export type LoadedNote = {
  entry: NoteEntry;
  frontmatter: NoteFrontmatter;
  content: ReactNode;
  tocItems: TocItem[];
};
