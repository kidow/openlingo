# Arabic Example Sheet RTL Adjustment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Keep the Arabic example sheet's play button on the left while aligning the example text block to the right.

**Architecture:** Reuse the shared `ExampleWordsSheet` component and add a narrow RTL-specific layout branch for Arabic cards only. Preserve the existing RTL text order for the Arabic word, reading, and meaning, but stop reversing the entire card row so the control stays anchored on the left.

**Tech Stack:** React, TypeScript, Tailwind CSS

---

### Task 1: Adjust the shared example card layout

**Files:**
- Modify: `src/components/practice/example-words-sheet.tsx`

- [ ] **Step 1: Update the RTL branch so only the text block is right-aligned**

- [ ] **Step 2: Keep the play button position stable on the left**

- [ ] **Step 3: Verify the Arabic sheet still renders the same data and voice controls**

- [ ] **Step 4: Confirm formatting and type safety**

