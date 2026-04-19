# Practice Language Route Refactor Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Move the practice experience from a single tabbed page to language-specific routes under `/practice/[lang]`, so each language can grow its own subpages without sharing one monolithic screen.

**Architecture:** Keep the existing handwriting workspace and template data, but replace language tab state with route-driven selection. Add a language-aware route shell under `app/practice/[lang]`, a reusable language navigation component that links between packs, and a small routing helper for default language handling and route lookup. Root routes should redirect to the default practice language.

**Tech Stack:** Next.js App Router, React client components, TypeScript, existing practice data/components.

---

### Task 1: Add practice routing helpers and default language handling

**Files:**
- Create: `src/lib/practice-routing.ts`
- Modify: `src/data/practice-content.ts`

- [ ] **Step 1: Add helper functions for language lookup and route generation**
- [ ] **Step 2: Expose a default practice language id**
- [ ] **Step 3: Keep helpers aligned with the current `languagePacks` data**

### Task 2: Move the practice surface to `/practice/[lang]`

**Files:**
- Create: `src/app/practice/[lang]/layout.tsx`
- Create: `src/app/practice/[lang]/page.tsx`
- Create: `src/app/practice/page.tsx`
- Modify: `src/app/page.tsx`
- Modify: `src/components/layout/app-header.tsx`
- Modify: `src/components/practice/prototype-practice-sheet.tsx`
- Modify: `src/components/practice/practice-workspace.tsx`
- Create: `src/components/practice/practice-language-nav.tsx`

- [ ] **Step 1: Replace the tab band with route links for language switching**
- [ ] **Step 2: Refactor the practice sheet to read the active language from the route**
- [ ] **Step 3: Add app-router pages that redirect or render the correct language pack**
- [ ] **Step 4: Make the app header home link point at the default practice route**
- [ ] **Step 5: Generalize the workspace top band so it no longer assumes tabs**

### Task 3: Update the existing practice expectations to match route-based navigation

**Files:**
- Modify: `src/components/practice/prototype-practice-sheet.test.tsx`

- [ ] **Step 1: Replace tab assertions with route-link assertions**
- [ ] **Step 2: Verify the rendered language page still anchors the canvas and template grid correctly**
- [ ] **Step 3: Keep the rest of the practice interaction coverage intact**

### Task 4: Verify the route refactor

**Files:**
- None

- [ ] **Step 1: Run a targeted build or lint pass**
- [ ] **Step 2: Run the relevant practice tests if they were adjusted**
- [ ] **Step 3: Check the diff for route and import consistency**
