# Single-Canvas Practice Layout Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Refactor the practice screen so the writing canvas becomes the dominant surface, with lightweight language tabs, canvas-attached controls, overlay preview, and a fully expanded template grid below.

**Architecture:** Keep the existing practice data, stroke capture, and scoring logic, but split the current monolithic `PrototypePracticeSheet` layout into smaller focused UI units. Replace the current card-heavy composition with a `PracticeWorkspace` orchestration component, a canvas-centered control surface, and a flat template grid that preserves full visibility of the active language pack. Drive the refactor with tests that lock in the new layout behavior and state transitions before reshaping the UI.

**Tech Stack:** Next.js App Router, React 19, TypeScript, Tailwind CSS v4, Vitest, Testing Library, lucide-react

---

## File Structure

### Existing files to modify

- Modify: `src/components/practice/prototype-practice-sheet.tsx`
  Current monolithic practice UI. Keep stateful orchestration here initially, then slim it down or turn it into a thin wrapper around new subcomponents.

- Modify: `src/components/practice/prototype-practice-sheet.test.tsx`
  Replace the old sidebar-oriented assertions with tests for the single-canvas layout, canvas overlay preview, and full template grid behavior.

- Modify: `src/components/practice/stroke-preview.tsx`
  Reuse this for the canvas overlay preview mode if practical. Adjust API only if required by the new embedding model.

- Modify: `src/app/globals.css`
  Add any shared layout-level styling only if the new design cannot be expressed cleanly with existing utility classes.

### New files to create

- Create: `src/components/practice/practice-workspace.tsx`
  Top-level layout container for the language tabs band, canvas region, and template grid.

- Create: `src/components/practice/language-pack-tabs.tsx`
  Underline-tab selector for the active language pack.

- Create: `src/components/practice/practice-canvas.tsx`
  Main canvas surface with glyph metadata, score, clear action, previous/next chevrons, drawing surface, and preview overlay toggle/state rendering.

- Create: `src/components/practice/template-grid.tsx`
  Fully expanded grid of templates for the active language pack, with active item emphasis and direct selection.

### Optional file to create only if needed

- Create: `src/components/practice/canvas-overlay-preview.tsx`
  Use only if embedding preview markup directly into `practice-canvas.tsx` becomes too dense.

## Implementation Notes

- Follow existing repo patterns and avoid broad app-level refactors.
- Do not touch unrelated user changes such as the current `.gitignore` modification.
- Prefer removing old card wrappers instead of piling new layout containers on top.
- Keep data models stable. This work is a UI and interaction refactor, not a data rewrite.
- Use frequent, focused commits with Conventional Commits messages.

## Task 1: Rewrite tests around the new single-canvas contract

**Files:**
- Modify: `src/components/practice/prototype-practice-sheet.test.tsx`
- Reference: `docs/superpowers/specs/2026-04-11-single-canvas-practice-layout-design.md`

- [ ] **Step 1: Replace sidebar-era assertions with failing tests for the new layout**

Add or rewrite tests to cover:

```tsx
it("renders language packs as tabs instead of a scrollable list", () => {
  render(<PrototypePracticeSheet locale="ko" dictionary={getDictionary("ko")} />);

  expect(screen.getByRole("tab", { name: /English/i })).toBeInTheDocument();
  expect(screen.queryByRole("tablist")).toBeInTheDocument();
});

it("renders the full template list below the canvas", () => {
  render(<PrototypePracticeSheet locale="ko" dictionary={getDictionary("ko")} />);

  expect(screen.getByTestId("template-grid")).toBeInTheDocument();
  expect(screen.getByTestId("template-grid")).toHaveTextContent("ㄱ");
});

it("shows preview inside the canvas workflow instead of a separate tab panel", async () => {
  const user = userEvent.setup();
  render(<PrototypePracticeSheet locale="ko" dictionary={getDictionary("ko")} />);

  await user.click(screen.getByRole("button", { name: /획 미리보기|stroke preview/i }));

  expect(screen.getByTestId("canvas-preview-overlay")).toBeInTheDocument();
  expect(screen.queryByRole("tabpanel")).not.toBeInTheDocument();
});
```

- [ ] **Step 2: Run the focused test file and confirm it fails for the expected reasons**

Run: `pnpm test -- --run src/components/practice/prototype-practice-sheet.test.tsx`

Expected:
- FAIL because `tablist`, `template-grid`, and `canvas-preview-overlay` do not exist yet
- Existing tests tied to the old layout are removed or replaced

- [ ] **Step 3: Commit the failing-test rewrite**

```bash
git add src/components/practice/prototype-practice-sheet.test.tsx
git commit -m "test: redefine practice layout behavior"
```

## Task 2: Extract the workspace shell and language tab band

**Files:**
- Create: `src/components/practice/practice-workspace.tsx`
- Create: `src/components/practice/language-pack-tabs.tsx`
- Modify: `src/components/practice/prototype-practice-sheet.tsx`
- Test: `src/components/practice/prototype-practice-sheet.test.tsx`

- [ ] **Step 1: Create `language-pack-tabs.tsx` with an underline-tab API**

Start with a small controlled component:

```tsx
type LanguagePackTabsProps = {
  packs: typeof languagePacks;
  locale: AppLocale;
  selectedLanguageId: string;
  onSelect: (languageId: string) => void;
};
```

Render a semantic `tablist` and `tab` buttons with lightweight underline styling. Do not wrap the tab band in `Card`.

- [ ] **Step 2: Create `practice-workspace.tsx` as a layout shell**

Move page-level layout into a new component that accepts:

```tsx
type PracticeWorkspaceProps = {
  languageTabs: React.ReactNode;
  canvas: React.ReactNode;
  templateGrid: React.ReactNode;
};
```

Keep the structure simple:
- top band for tabs
- dominant middle region for canvas
- lower region for grid

- [ ] **Step 3: Wire the new shell into `prototype-practice-sheet.tsx`**

Keep existing state in `PrototypePracticeSheet`, but replace the old hero card and right sidebar structure with the new shell. Leave temporary placeholders for the old canvas and card list if needed while the next tasks land.

- [ ] **Step 4: Run the focused test file and make the new tab-based assertions pass**

Run: `pnpm test -- --run src/components/practice/prototype-practice-sheet.test.tsx`

Expected:
- PASS for language-tab presence assertions
- FAIL for canvas overlay and final grid behavior until later tasks are completed

- [ ] **Step 5: Commit the workspace shell extraction**

```bash
git add src/components/practice/prototype-practice-sheet.tsx src/components/practice/practice-workspace.tsx src/components/practice/language-pack-tabs.tsx src/components/practice/prototype-practice-sheet.test.tsx
git commit -m "refactor: extract practice workspace shell"
```

## Task 3: Build the canvas-centered control surface

**Files:**
- Create: `src/components/practice/practice-canvas.tsx`
- Modify: `src/components/practice/prototype-practice-sheet.tsx`
- Reference: `src/components/practice/template-glyph.tsx`
- Reference: `src/lib/similarity.ts`
- Test: `src/components/practice/prototype-practice-sheet.test.tsx`

- [ ] **Step 1: Write or extend failing tests for canvas-attached controls**

Add expectations for:

```tsx
expect(screen.getByRole("button", { name: /previous/i })).toBeInTheDocument();
expect(screen.getByRole("button", { name: /next/i })).toBeInTheDocument();
expect(screen.getByRole("button", { name: /clear/i })).toBeInTheDocument();
expect(screen.getByText(/%|--/)).toBeInTheDocument();
```

And add an interaction test that chevron navigation changes the active template selection state.

- [ ] **Step 2: Create `practice-canvas.tsx`**

Move these responsibilities out of `prototype-practice-sheet.tsx`:
- current glyph header
- score and score status
- clear button
- previous/next navigation
- SVG drawing surface
- guide glyph rendering
- user stroke rendering

Expose explicit props rather than re-reading global data:

```tsx
type PracticeCanvasProps = {
  template: PracticeTemplate;
  locale: AppLocale;
  dictionary: AppDictionary;
  strokes: Stroke[];
  score: number | null;
  scoreStatusLabel: string;
  onClear: () => void;
  onPrevious: () => void;
  onNext: () => void;
  onPointerDown: ...
  onPointerMove: ...
  onPointerUp: ...
};
```

- [ ] **Step 3: Hook chevron navigation into the selected template state**

Implement helper functions in `prototype-practice-sheet.tsx` to move to the previous or next template within the currently selected language pack. Reset strokes, score, and preview state on change.

- [ ] **Step 4: Run the focused tests and make canvas control assertions pass**

Run: `pnpm test -- --run src/components/practice/prototype-practice-sheet.test.tsx`

Expected:
- PASS for tabs
- PASS for clear/score/chevron presence
- FAIL for preview overlay and final grid behavior if not yet implemented

- [ ] **Step 5: Commit the canvas surface extraction**

```bash
git add src/components/practice/prototype-practice-sheet.tsx src/components/practice/practice-canvas.tsx src/components/practice/prototype-practice-sheet.test.tsx
git commit -m "refactor: extract canvas-centered practice surface"
```

## Task 4: Convert preview into an in-canvas overlay mode

**Files:**
- Modify: `src/components/practice/practice-canvas.tsx`
- Modify: `src/components/practice/prototype-practice-sheet.tsx`
- Modify: `src/components/practice/stroke-preview.tsx`
- Optional Create: `src/components/practice/canvas-overlay-preview.tsx`
- Test: `src/components/practice/prototype-practice-sheet.test.tsx`

- [ ] **Step 1: Add failing tests for preview overlay behavior**

Cover two cases:

```tsx
it("opens preview as an overlay inside the canvas", async () => {
  const user = userEvent.setup();
  render(<PrototypePracticeSheet locale="ko" dictionary={getDictionary("ko")} />);

  await user.click(screen.getByRole("button", { name: /획 미리보기|stroke preview/i }));
  expect(screen.getByTestId("canvas-preview-overlay")).toBeInTheDocument();
});

it("closes preview when drawing begins", async () => {
  // trigger preview on, then fire pointer down on the svg canvas
  // expect overlay to disappear
});
```

- [ ] **Step 2: Remove the old auxiliary tab-panel model**

Delete the old `activeToolTab` tablist and right-side tool-card rendering from `prototype-practice-sheet.tsx`.

- [ ] **Step 3: Embed preview into the canvas surface**

Add a preview toggle near the canvas controls and render the preview as an absolute-positioned overlay inside the canvas region. Reuse `StrokePreview` if possible; otherwise add a thin wrapper component with `data-testid="canvas-preview-overlay"`.

- [ ] **Step 4: Ensure drawing auto-dismisses preview**

Inside `beginStroke`, close preview before creating the new stroke so the canvas immediately returns to writing mode.

- [ ] **Step 5: Run the focused tests until preview behavior passes**

Run: `pnpm test -- --run src/components/practice/prototype-practice-sheet.test.tsx`

Expected:
- PASS for preview opening in the canvas
- PASS for preview closing on pointer interaction

- [ ] **Step 6: Commit the overlay preview conversion**

```bash
git add src/components/practice/prototype-practice-sheet.tsx src/components/practice/practice-canvas.tsx src/components/practice/stroke-preview.tsx src/components/practice/prototype-practice-sheet.test.tsx
git commit -m "refactor: move stroke preview into canvas overlay"
```

## Task 5: Replace the old card panels with a flat template grid

**Files:**
- Create: `src/components/practice/template-grid.tsx`
- Modify: `src/components/practice/prototype-practice-sheet.tsx`
- Test: `src/components/practice/prototype-practice-sheet.test.tsx`

- [ ] **Step 1: Add failing tests for the fully expanded template grid**

Add assertions for:
- `data-testid="template-grid"`
- all templates for the active language pack are rendered
- the active template is visually distinguishable, for example via `aria-pressed="true"` or `data-active="true"`

Example:

```tsx
const buttons = screen.getAllByRole("button", { name: /glyph/i });
expect(buttons.length).toBeGreaterThan(1);
expect(screen.getByTestId("template-grid")).toBeInTheDocument();
```

- [ ] **Step 2: Create `template-grid.tsx`**

Implement a responsive grid that:
- renders all templates for the active language pack
- uses a flat, low-framing visual treatment
- keeps active state clear
- avoids wrapping the whole region in `Card`

- [ ] **Step 3: Remove the old practice-card panel copies**

Delete both old template-card regions from `prototype-practice-sheet.tsx` so there is only one canonical template chooser below the canvas.

- [ ] **Step 4: Run the focused tests and make the grid behavior pass**

Run: `pnpm test -- --run src/components/practice/prototype-practice-sheet.test.tsx`

Expected:
- PASS for grid rendering
- PASS for active template visibility
- PASS for no old tabpanel dependencies

- [ ] **Step 5: Commit the flat template grid**

```bash
git add src/components/practice/prototype-practice-sheet.tsx src/components/practice/template-grid.tsx src/components/practice/prototype-practice-sheet.test.tsx
git commit -m "feat: add expanded template grid below practice canvas"
```

## Task 6: Remove leftover card-heavy layout code and polish responsive behavior

**Files:**
- Modify: `src/components/practice/prototype-practice-sheet.tsx`
- Modify: `src/components/practice/practice-workspace.tsx`
- Modify: `src/components/practice/practice-canvas.tsx`
- Modify: `src/app/globals.css` (only if necessary)
- Test: `src/components/practice/prototype-practice-sheet.test.tsx`

- [ ] **Step 1: Remove dead layout branches and obsolete imports**

Delete:
- old hero/summary cards
- old right sidebar tools card
- old duplicated template chooser sections
- old `Badge`, `Card`, or icon imports no longer used

- [ ] **Step 2: Flatten spacing and framing**

Audit for nested padding shells. Replace repeated `rounded + border + p-*` wrappers with lighter spacing and separators. Keep only the minimum framing needed around the actual canvas surface.

- [ ] **Step 3: Verify small-screen stacking still honors the same hierarchy**

Check class names so the mobile layout still reads:
- tabs
- canvas controls and canvas
- full template grid

No side-panel fallback should reappear at smaller widths.

- [ ] **Step 4: Run all relevant tests**

Run:
- `pnpm test -- --run src/components/practice/prototype-practice-sheet.test.tsx`
- `pnpm test -- --run src/data/practice-content.test.ts`

Expected:
- PASS for all targeted tests
- No regressions in data-level tests

- [ ] **Step 5: Run lint**

Run: `pnpm lint`

Expected:
- PASS with no new errors

- [ ] **Step 6: Commit the final layout cleanup**

```bash
git add src/components/practice/prototype-practice-sheet.tsx src/components/practice/practice-workspace.tsx src/components/practice/practice-canvas.tsx src/components/practice/template-grid.tsx src/app/globals.css src/components/practice/prototype-practice-sheet.test.tsx
git commit -m "refactor: simplify practice layout framing"
```

## Final Verification Checklist

- [ ] The first visible focal point is the practice canvas, not a hero card or sidebar.
- [ ] Language packs render as underline tabs in a lightweight top band.
- [ ] Previous and next template buttons are attached to the canvas workflow.
- [ ] Score and clear remain near the canvas.
- [ ] Stroke preview renders over the canvas instead of in a side panel.
- [ ] Starting a stroke closes preview.
- [ ] Template cards render once, below the canvas, as a fully expanded grid.
- [ ] No major nested card stacks remain in the practice screen.
- [ ] `pnpm test -- --run src/components/practice/prototype-practice-sheet.test.tsx` passes.
- [ ] `pnpm test -- --run src/data/practice-content.test.ts` passes.
- [ ] `pnpm lint` passes.
