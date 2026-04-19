import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { NoteShell } from "@/components/notes/note-shell";
import { getNoteHref } from "@/lib/notes-routing";
import { loadNote, resolveNoteMetadata } from "@/lib/notes-content";

export async function generateMetadata({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>): Promise<Metadata> {
  const { lang } = await params;
  const note = await loadNote(lang);

  if (!note) {
    return {};
  }

  const metadata = resolveNoteMetadata(note.frontmatter, lang);
  const canonicalHref = getNoteHref(lang);

  return {
    title: metadata.title,
    description: metadata.description,
    alternates: {
      canonical: canonicalHref,
    },
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      url: canonicalHref,
      images: metadata.ogImage ? [metadata.ogImage] : undefined,
    },
    twitter: {
      title: metadata.title,
      description: metadata.description,
      images: metadata.ogImage ? [metadata.ogImage] : undefined,
    },
  };
}

export default async function NotesLanguagePage({
  params,
}: Readonly<{
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const note = await loadNote(lang);

  if (!note) {
    notFound();
  }

  return (
    <NoteShell entry={note.entry} frontmatter={note.frontmatter} tocItems={note.tocItems} content={note.content} />
  );
}
