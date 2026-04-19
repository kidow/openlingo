import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { getNoteEntries, getNoteHref } from "@/lib/notes-routing";
import { loadNote } from "@/lib/notes-content";
import { NoteShell } from "@/components/notes/note-shell";

type NotePageProps = {
  params: Promise<{
    lang: string;
  }>;
};

export function generateStaticParams() {
  return getNoteEntries().map((entry) => ({
    lang: entry.lang,
  }));
}

export async function generateMetadata({ params }: NotePageProps): Promise<Metadata> {
  const { lang } = await params;
  const note = await loadNote(lang);

  if (!note) {
    return {};
  }

  const title = note.frontmatter.seoTitle ?? note.frontmatter.title;
  const description = note.frontmatter.seoDescription ?? note.frontmatter.description;

  return {
    title,
    description,
    alternates: {
      canonical: getNoteHref(lang),
    },
    openGraph: note.frontmatter.ogImage
      ? {
          title,
          description,
          images: [note.frontmatter.ogImage],
        }
      : {
          title,
          description,
        },
  };
}

export default async function NotePage({ params }: NotePageProps) {
  const { lang } = await params;
  const note = await loadNote(lang);

  if (!note) {
    notFound();
  }

  return (
    <NoteShell
      entry={note.entry}
      frontmatter={note.frontmatter}
      tocItems={note.tocItems}
      content={note.content}
    />
  );
}
