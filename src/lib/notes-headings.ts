import type { TocItem } from "@/types/notes";

function normalizeHeadingText(text: string) {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .trim()
    .replace(/[^\p{Letter}\p{Number}]+/gu, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

export function slugifyText(text: string) {
  const normalized = normalizeHeadingText(text);

  return normalized.length > 0 ? normalized : "section";
}

export function extractTocItems(source: string) {
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
