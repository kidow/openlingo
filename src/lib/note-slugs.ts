import { isValidElement, type ReactNode } from "react";

function flattenNodeText(node: ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }

  if (Array.isArray(node)) {
    return node.map(flattenNodeText).join(" ");
  }

  if (isValidElement(node)) {
    const props = node.props as { children?: ReactNode };
    return flattenNodeText(props.children);
  }

  return "";
}

function normalizeSlugBase(text: string) {
  return text
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/^-+|-+$/g, "");
}

export function slugifyText(text: string) {
  return normalizeSlugBase(text) || "section";
}

export function toPlainText(node: ReactNode) {
  return flattenNodeText(node);
}

export function createNoteSlugger() {
  const counts = new Map<string, number>();

  return {
    next(value: ReactNode | string) {
      const text = typeof value === "string" ? value : flattenNodeText(value);
      const baseSlug = slugifyText(text);
      const nextCount = (counts.get(baseSlug) ?? 0) + 1;
      counts.set(baseSlug, nextCount);

      return nextCount === 1 ? baseSlug : `${baseSlug}-${nextCount}`;
    },
  };
}

export type NoteSlugger = ReturnType<typeof createNoteSlugger>;
