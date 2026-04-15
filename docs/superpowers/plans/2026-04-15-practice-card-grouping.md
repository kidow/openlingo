# Practice Card Grouping Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the flat practice-card list with language-specific grouped sections so every language pack is shown through its own meaningful classification system.

**Architecture:** Add an explicit `templateGroups` model to language packs, keep grouping metadata in the content layer, and let the practice grid render sections generically. This keeps UI code unaware of language-specific rules while allowing each pack to define its own categories.

**Tech Stack:** TypeScript, React, Next.js App Router, existing OpenLingo practice components.

---

### Task 1: Extend the writing data model

**Files:**
- Modify: `src/types/writing.ts`

- [ ] **Step 1: Add a grouped-card type**

```ts
export type PracticeTemplateGroup = {
  id: string;
  label: LocalizedText;
  description?: LocalizedText;
  templateIds: string[];
};
```

- [ ] **Step 2: Attach grouped templates to language packs**

```ts
export type LanguagePack = {
  ...
  templateGroups: PracticeTemplateGroup[];
};
```

- [ ] **Step 3: Run a TypeScript check for the affected file**

Run: `pnpm exec tsc --noEmit`
Expected: no type errors from the new shape.

### Task 2: Define language-specific group metadata

**Files:**
- Modify: `src/data/practice-content.ts`

- [ ] **Step 1: Add reusable helpers for group creation**

```ts
function createTemplateGroups(...) { ... }
function splitTemplatesByIndex(...) { ... }
```

- [ ] **Step 2: Add explicit group definitions for each pack**

```ts
templateGroups: [
  { id: "consonants", label: ..., templateIds: [...] },
  { id: "vowels", label: ..., templateIds: [...] },
]
```

- [ ] **Step 3: Keep template ordering stable inside each group**

Sort or preserve order so the current navigation behavior does not change.

### Task 3: Render grouped sections in the practice grid

**Files:**
- Modify: `src/components/practice/template-grid.tsx`

- [ ] **Step 1: Build a lookup map from template id to template**

```ts
const templatesById = new Map(selectedLanguage.templates.map((template) => [template.id, template]));
```

- [ ] **Step 2: Render each group as a labeled section**

```tsx
{selectedLanguage.templateGroups.map((group) => (
  <section key={group.id}>...</section>
))}
```

- [ ] **Step 3: Preserve active-card styling and selection behavior**

Keep the existing button behavior and visual states intact.

### Task 4: Verify the UI still behaves correctly

**Files:**
- Inspect: `src/components/practice/prototype-practice-sheet.tsx`
- Inspect: `src/components/practice/practice-workspace.tsx`

- [ ] **Step 1: Confirm language switching still resets the selected template**
- [ ] **Step 2: Confirm template selection still works across grouped sections**
- [ ] **Step 3: Run a focused TypeScript/build check if needed**

Run: `pnpm exec tsc --noEmit`
Expected: clean typecheck for the updated data model and renderer.
