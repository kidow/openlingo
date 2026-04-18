# Japanese Example Sheet Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a Japanese-only bottom sheet that shows five example words per character and can read each word aloud with the browser's Web Speech API.

**Architecture:** Keep the worksheet canvas unchanged and attach the new learning aid to the Japanese practice-card area. Store example-word data separately from stroke templates, expose a small speech-synthesis helper for browser TTS, and render the sheet through a reusable Vaul-based UI wrapper so mobile and desktop share the same interaction model.

**Tech Stack:** Next.js App Router, React client components, TypeScript, Vaul, Web Speech API, existing Tailwind utility patterns.

---

### Task 1: Add the reusable Sheet wrapper

**Files:**
- Create: `src/components/ui/sheet.tsx`
- Modify: `package.json`
- Modify: `package-lock.json`

- [ ] **Step 1: Add the Vaul dependency**

Run: `pnpm add vaul`
Expected: `package.json` and lockfile include `vaul`

- [ ] **Step 2: Implement the wrapper**

```tsx
// Expose Drawer.Root, Trigger, Portal, Overlay, Content, Title, Description
```

- [ ] **Step 3: Verify the project still type-checks after the wrapper lands**

Run: `pnpm lint`
Expected: no lint errors from the new wrapper

### Task 2: Add Japanese example-word content and speech helper

**Files:**
- Create: `src/data/templates/ja/examples.ts`
- Create: `src/lib/speech-synthesis.ts`

- [ ] **Step 1: Model five example words for each kana card**

```ts
// Map templateId -> examples with word, reading, meaning
```

- [ ] **Step 2: Add a browser-only speech helper**

```ts
// Resolve a Japanese voice when available, otherwise fall back to default speechSynthesis
```

- [ ] **Step 3: Verify the module compiles with the rest of the app**

Run: `pnpm lint`
Expected: no import or typing errors

### Task 3: Build the Japanese example sheet UI

**Files:**
- Create: `src/components/practice/japanese-example-sheet.tsx`
- Modify: `src/i18n/dictionaries.ts`

- [ ] **Step 1: Add localized labels for the sheet and play controls**

```ts
// Add titles, open button label, and fallback copy for unsupported speech
```

- [ ] **Step 2: Render the selected kana header plus five example rows**

```tsx
// Each row shows word, reading, meaning, and a play button
```

- [ ] **Step 3: Wire each play button to the speech helper**

```ts
// Use SpeechSynthesisUtterance with lang=ja-JP
```

- [ ] **Step 4: Make the sheet usable on mobile and desktop**

```tsx
// Use a bottom-drawer layout with a handle, overlay, and scrollable content
```

### Task 4: Connect the sheet to the practice workspace

**Files:**
- Modify: `src/components/practice/prototype-practice-sheet.tsx`
- Modify: `src/components/practice/template-grid.tsx`
- Modify: `src/components/practice/practice-workspace.tsx` if layout spacing needs adjustment

- [ ] **Step 1: Track the sheet open state and selected Japanese template**

```ts
// Open the sheet when a Japanese template is selected
```

- [ ] **Step 2: Keep non-Japanese packs unchanged**

```tsx
// Only render the open button / sheet for the Japanese pack
```

- [ ] **Step 3: Ensure the sheet closes cleanly when switching language packs**

```ts
// Reset the sheet when leaving Japanese or changing the selected kana
```

- [ ] **Step 4: Reuse the existing template grid without turning it into a second panel**

```tsx
// Leave template selection behavior intact
```

### Task 5: Verify the integration

**Files:**
- None

- [ ] **Step 1: Run lint**

Run: `pnpm lint`
Expected: passes

- [ ] **Step 2: Run the build**

Run: `pnpm build`
Expected: passes

