import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

import { serialize } from "next-mdx-remote/serialize";

import { getNoteEntry } from "@/lib/notes-routing";
import { createNoteSlugger } from "@/lib/note-slugs";
import type { LoadedNote, NoteFrontmatter, TocItem } from "@/types/notes";

function getNoteSourcePath(lang: string) {
  const entry = getNoteEntry(lang);

  if (!entry) {
    return null;
  }

  return path.join(process.cwd(), "src/content/notes", `${entry.lang}.mdx`);
}

function stripFrontmatter(source: string) {
  if (!source.startsWith("---")) {
    return source;
  }

  const closingIndex = source.indexOf("\n---");

  if (closingIndex === -1) {
    return source;
  }

  const bodyStart = source.indexOf("\n", closingIndex + 1);

  return bodyStart === -1 ? "" : source.slice(bodyStart + 1);
}

function normalizeHeadingLabel(label: string) {
  return label
    .replace(/\[(.*?)\]\((.*?)\)/g, "$1")
    .replace(/[*_`~]/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTocItems(source: string): TocItem[] {
  const body = stripFrontmatter(source);
  const slugger = createNoteSlugger();
  const items: TocItem[] = [];
  const lines = body.split("\n");
  let inCodeFence = false;

  for (const line of lines) {
    const trimmed = line.trim();

    if (trimmed.startsWith("```") || trimmed.startsWith("~~~")) {
      inCodeFence = !inCodeFence;
      continue;
    }

    if (inCodeFence) {
      continue;
    }

    const match = trimmed.match(/^(#{2,6})\s+(.+?)\s*$/);

    if (!match) {
      continue;
    }

    const level = match[1].length;
    const label = normalizeHeadingLabel(match[2]);
    const id = slugger.next(label);

    items.push({
      id,
      label,
      level,
    });
  }

  return items;
}

export async function loadNote(lang: string): Promise<LoadedNote | null> {
  const sourcePath = getNoteSourcePath(lang);

  if (!sourcePath) {
    return null;
  }

  let source = "";

  try {
    source = await readFile(sourcePath, "utf8");
  } catch {
    return null;
  }

  const mdxSource = await serialize<NoteFrontmatter>(source, {
    parseFrontmatter: true,
  });
  const parsedFrontmatter = mdxSource.frontmatter as Partial<NoteFrontmatter>;
  const frontmatter: NoteFrontmatter = {
    title: parsedFrontmatter.title ?? "",
    description: parsedFrontmatter.description ?? "",
    lang: parsedFrontmatter.lang ?? lang,
    updatedAt: parsedFrontmatter.updatedAt ?? "",
    seoTitle: parsedFrontmatter.seoTitle,
    seoDescription: parsedFrontmatter.seoDescription,
    ogImage: parsedFrontmatter.ogImage,
  };

  return {
    entry: getNoteEntry(lang)!,
    frontmatter,
    mdxSource,
    tocItems: extractTocItems(source),
  };
}

export function resolveNoteMetadata(frontmatter: NoteFrontmatter, lang: string) {
  return {
    title: frontmatter.seoTitle ?? frontmatter.title,
    description: frontmatter.seoDescription ?? frontmatter.description,
    lang: frontmatter.lang ?? lang,
    ogImage: frontmatter.ogImage ?? null,
  };
}
