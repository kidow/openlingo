import "server-only";

import fs from "node:fs/promises";
import path from "node:path";

import { cache } from "react";
import { compileMDX } from "next-mdx-remote/rsc";
import type { ReactNode } from "react";

import { getNoteEntry } from "@/data/notes";
import { mdxComponents } from "@/components/notes/mdx-components";
import type { NoteFrontmatter, TocItem } from "@/types/notes";

type LoadedNote = {
  entry: NonNullable<ReturnType<typeof getNoteEntry>>;
  frontmatter: NoteFrontmatter;
  content: ReactNode;
  tocItems: TocItem[];
};

function getNoteFilePath(lang: string) {
  return path.join(process.cwd(), "src/content/notes", `${lang}.mdx`);
}

export const loadNote = cache(async (lang: string): Promise<LoadedNote | null> => {
  const entry = getNoteEntry(lang);

  if (!entry) {
    return null;
  }

  const source = await fs.readFile(getNoteFilePath(lang), "utf8");
  const tocItems = extractTocItems(source);
  const { content, frontmatter } = await compileMDX<NoteFrontmatter>({
    source,
    components: mdxComponents,
    options: {
      parseFrontmatter: true,
    },
  });

  return {
    entry,
    frontmatter,
    content,
    tocItems,
  };
});

function extractTocItems(source: string) {
  const tocItems: TocItem[] = [];
  const slugCounts = new Map<string, number>();
  let inCodeBlock = false;

  for (const rawLine of source.split("\n")) {
    const line = rawLine.trimEnd();

    if (/^```/.test(line) || /^~~~/.test(line)) {
      inCodeBlock = !inCodeBlock;
      continue;
    }

    if (inCodeBlock) {
      continue;
    }

    const match = /^(#{2,4})\s+(.+)$/.exec(line);

    if (!match) {
      continue;
    }

    const level = match[1].length;
    const label = match[2].replace(/\[(.*?)\]\((.*?)\)/g, "$1");
    const baseId = slugifyText(label);
    const count = slugCounts.get(baseId) ?? 0;
    const id = count === 0 ? baseId : `${baseId}-${count + 1}`;

    slugCounts.set(baseId, count + 1);
    tocItems.push({ id, label, level });
  }

  return tocItems;
}

function slugifyText(text: string) {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .trim()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "") || "section";
}
