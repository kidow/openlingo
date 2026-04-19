import "server-only";

import { readFile } from "node:fs/promises";
import path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";

import { createNoteMdxComponents } from "@/components/notes/mdx-components";
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

  const slugger = createNoteSlugger();
  const { content, frontmatter } = await compileMDX<NoteFrontmatter>({
    source,
    components: createNoteMdxComponents(slugger),
    options: {
      parseFrontmatter: true,
    },
  });

  const normalizedFrontmatter: NoteFrontmatter = {
    title: frontmatter.title ?? "",
    description: frontmatter.description ?? "",
    lang: frontmatter.lang ?? lang,
    createdAt: frontmatter.createdAt ?? "",
    updatedAt: frontmatter.updatedAt ?? "",
    seoTitle: frontmatter.seoTitle,
    seoDescription: frontmatter.seoDescription,
    ogImage: frontmatter.ogImage,
  };

  return {
    entry: getNoteEntry(lang)!,
    frontmatter: normalizedFrontmatter,
    content,
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
