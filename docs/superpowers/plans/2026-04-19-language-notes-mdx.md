# Language Notes MDX Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add `/notes/[lang]` pages that render one free-form MDX note per language, with frontmatter-driven SEO, automatic heading navigation, and support for embedded React note components.

**Architecture:** Keep each language as a single MDX source file and treat the file as the source of truth. A small content registry will map language ids to note files and route metadata, a loader will parse frontmatter and compile MDX on the server, and a shared notes shell will render the document with sticky navigation while preserving each language's own direction and content structure.

**Tech Stack:** Next.js App Router, React, TypeScript, MDX rendering on the server, existing OpenLingo UI primitives, and the current language pack metadata for labels/direction/default ordering.

---

## File Structure

- `src/content/notes/*.mdx` owns the actual language notes. Each file is one independent, free-form document.
- `src/data/notes.ts` owns the note registry and the authoritative list of supported note languages.
- `src/lib/notes-routing.ts` owns default hrefs and language lookup helpers for `/notes/[lang]`.
- `src/lib/notes-content.ts` owns frontmatter parsing, MDX compilation, and heading extraction.
- `src/types/notes.ts` owns the shared note metadata and TOC item types.
- `src/components/notes/note-shell.tsx` owns the page frame, title/meta block, sticky table of contents, and content slot.
- `src/components/notes/note-language-nav.tsx` owns the cross-language navigation links.
- `src/components/notes/note-voice-button.tsx` and `src/components/notes/note-flashcard.tsx` own the small embedded React pieces exposed to MDX.
- `src/components/notes/mdx-components.tsx` owns the MDX component map passed into note rendering.
- `src/app/notes/page.tsx`, `src/app/notes/[lang]/layout.tsx`, and `src/app/notes/[lang]/page.tsx` own routing, redirects, metadata, and the page render.
- `package.json` owns the MDX runtime dependency addition.

### Task 1: Add the note data model and MDX loader plumbing

**Files:**
- Create: `src/types/notes.ts`
- Create: `src/data/notes.ts`
- Create: `src/lib/notes-routing.ts`
- Create: `src/lib/notes-content.ts`
- Modify: `package.json`

- [ ] **Step 1: Add the MDX runtime dependency**

Install the MDX server runtime used by the loader, plus any tiny frontmatter dependency only if the chosen runtime needs it.

Run: `pnpm add next-mdx-remote`
Expected: `package.json` and the lockfile update with the new MDX runtime.

- [ ] **Step 2: Define the shared note types**

```ts
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
```

- [ ] **Step 3: Add the note registry**

Create one registry entry per supported note language, reusing the current `languagePacks` order and labels so the notes surface stays aligned with the rest of the app.

```ts
export const noteEntries = [
  { lang: "ko", label: ..., direction: "ltr", filePath: ... },
  { lang: "en", label: ..., direction: "ltr", filePath: ... },
  ...
];
```

- [ ] **Step 4: Add route and lookup helpers**

Implement helpers for:

```ts
getDefaultNotesHref()
getNoteHref(lang)
getNoteEntry(lang)
getNoteEntries()
```

These helpers should make `/notes` and `/notes/[lang]` deterministic and keep the default note language in one place.

- [ ] **Step 5: Add the MDX loader**

The loader should:

```ts
loadNote(lang) -> { frontmatter, content, tocItems, entry }
```

It should:

- read the selected language's MDX file
- parse frontmatter
- compile MDX with the shared component map
- extract heading data for the TOC
- return `null` or throw `notFound`-friendly state when the language does not exist

- [ ] **Step 6: Run a TypeScript or lint pass for the new helpers**

Run: `pnpm lint`
Expected: no new lint or type errors from the registry and loader scaffolding.

### Task 2: Build the shared notes UI and MDX component map

**Files:**
- Create: `src/components/notes/note-shell.tsx`
- Create: `src/components/notes/note-language-nav.tsx`
- Create: `src/components/notes/note-voice-button.tsx`
- Create: `src/components/notes/note-flashcard.tsx`
- Create: `src/components/notes/mdx-components.tsx`

- [ ] **Step 1: Add the page shell**

Create a shell that receives note metadata, TOC items, language direction, and rendered MDX content, then lays them out in a readable document frame.

The shell should:

- show the title and description from frontmatter
- render a sticky or top-aligned table of contents
- preserve RTL when the note language needs it
- keep the body readable on desktop and mobile

- [ ] **Step 2: Add cross-language navigation**

Render a compact list or segmented nav that links between available note pages using the route helpers.

This should reuse the registry order and not invent a second language source of truth.

- [ ] **Step 3: Add a small voice playback component**

Create a client component that can speak a supplied string with a supplied language tag so MDX can embed a lightweight pronunciation control.

Keep it generic:

- no note-specific assumptions
- no editing UI
- no complicated voice picker unless the first note file actually needs it

- [ ] **Step 4: Add a lightweight flashcard component**

Create a simple note component that can render a term, hint, and answer or back side.

The goal is to let MDX authors drop in a reusable study card without making the notes surface depend on the practice screen components.

- [ ] **Step 5: Expose the MDX component map**

Export the components used by note MDX files, combining the new note-specific pieces with existing OpenLingo primitives such as `Card`, `Button`, or `Badge` if they simplify content authoring.

- [ ] **Step 6: Run a quick lint pass**

Run: `pnpm lint`
Expected: the new note components compile cleanly in isolation.

### Task 3: Create one MDX file per supported language

**Files:**
- Create: `src/content/notes/ko.mdx`
- Create: `src/content/notes/en.mdx`
- Create: `src/content/notes/ja.mdx`
- Create: `src/content/notes/ru.mdx`
- Create: `src/content/notes/ar.mdx`
- Create: `src/content/notes/de.mdx`
- Create: `src/content/notes/es.mdx`
- Create: `src/content/notes/fr.mdx`
- Create: `src/content/notes/pt.mdx`
- Create: `src/content/notes/it.mdx`
- Create: `src/content/notes/zh-hans.mdx`
- Create: `src/content/notes/zh-hant.mdx`

- [ ] **Step 1: Add frontmatter to every note**

Each file should declare at least:

```yaml
---
title: ...
description: ...
lang: ...
updatedAt: ...
---
```

- [ ] **Step 2: Seed each note with free-form sections**

Start each language note with a few headings that reflect that language's personal workflow rather than a shared template.

Do not force the same section names across languages.

- [ ] **Step 3: Include embedded React examples where useful**

At least one or two notes should demonstrate embedded voice playback or flashcard components so the MDX component map is proven in real content.

- [ ] **Step 4: Keep each file independently editable**

Each note should still make sense if another language note is changed later.

Avoid cross-file coupling or shared section choreography.

- [ ] **Step 5: Run a content-focused build check**

Run: `pnpm build`
Expected: MDX content files compile and the note content can be imported by the route layer.

### Task 4: Add the `/notes` routes, metadata, and note page shell

**Files:**
- Create: `src/app/notes/page.tsx`
- Create: `src/app/notes/[lang]/layout.tsx`
- Create: `src/app/notes/[lang]/page.tsx`

- [ ] **Step 1: Redirect `/notes` to the default note language**

Use the same default-language policy as the rest of the app unless the notes registry needs a different default.

- [ ] **Step 2: Generate static params from the note registry**

The dynamic route should statically enumerate the supported note languages so the note pages are stable and predictable.

- [ ] **Step 3: Load note content and metadata in the page**

The page should:

- resolve the selected note entry
- load the MDX source
- pass the frontmatter and TOC to the shared shell
- render `notFound()` for unknown languages

- [ ] **Step 4: Wire Next.js metadata from frontmatter**

Use the note frontmatter to populate:

- page title
- description
- canonical metadata
- Open Graph metadata when provided

- [ ] **Step 5: Keep the layout thin**

The layout should only handle the shared page frame and any header/navigation that is common to all note pages.

Do not move note-specific content logic into the layout.

- [ ] **Step 6: Run a final build and lint pass**

Run:

```bash
pnpm lint
pnpm build
```

Expected: the `/notes/[lang]` pages compile, metadata is generated, and the MDX notes render without route or import errors.

## Notes on Scope

- No new tests should be added unless the user explicitly asks for them.
- Do not make the notes editor editable in the UI.
- Do not force a shared outline format inside the MDX files.
- Do not try to normalize the content into a curriculum or time-ordered log.
