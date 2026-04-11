# Single-Canvas Practice Layout Design

Date: 2026-04-11
Status: Approved for planning

## Summary

Redesign the current practice screen so the writing canvas becomes the primary surface. Remove the current card-within-card layout and repeated padding shells. Selection tools should become lightweight controls around the canvas instead of separate visual regions competing for attention.

## Problem Statement

The current screen gives similar visual weight to language selection, template selection, worksheet controls, score, preview, and notes. This creates two issues:

- The user cannot immediately tell where to focus first.
- Nested cards and repeated internal padding create a boxed-in layout that feels visually heavy.

The redesign should make the practice area feel like the product, with all other controls clearly subordinate to it.

## Goals

- Make the practice canvas the dominant element on first view.
- Remove the nested padding and nested card feeling.
- Keep language switching, card switching, score, and clear actions accessible without creating side panels.
- Keep the full card list visible at once for the active language pack.
- Treat stroke preview as a mode of the canvas, not a separate panel.

## Non-Goals

- No new learning features or scoring logic changes.
- No drawer, carousel, or sidebar-based navigation for template cards.
- No new persistent notes or inspector panel.
- No redesign of app-wide header or locale switcher beyond what is necessary for layout harmony.

## Recommended Approach

Use a `single-canvas + flat control bands` layout.

This approach preserves all required functionality while removing heavy visual framing. It is the strongest match for the desired direction:

- the canvas is the main object on the page
- controls are visually light
- preview is integrated into the canvas
- template selection remains fully visible without becoming another large panel

## Layout Structure

The page should be reorganized into three primary vertical regions beneath the global header.

### 1. Language Pack Band

A thin top band uses underline-style tabs for the active language pack. This band only changes context and should not look like a card. It should sit close to the workspace and visually read as a lightweight selector rather than content.

### 2. Practice Workspace

This is the dominant screen region and contains the current template context plus the writing surface.

The workspace includes:

- current glyph title and supporting label
- score display
- clear action
- previous and next template chevron buttons fixed to the left and right edges of the canvas
- the large writing canvas itself
- optional preview state rendered as an overlay on top of the same canvas

The preview must not appear in a separate card. When preview is opened, the canvas should temporarily present guided stroke playback or equivalent overlay content on the same surface.

### 3. Template Grid Band

The active language pack's template cards are displayed below the canvas in a fully expanded grid. The user should be able to scan the whole set without horizontal clipping, drawers, or carousels.

The grid should feel flat and utilitarian:

- minimal framing
- clear selected state
- responsive columns
- no large enclosing card shell

## Component Boundaries

Refactor the current `PrototypePracticeSheet` layout into smaller, purpose-focused units.

### `PracticeWorkspace`

Owns high-level orchestration for the practice screen:

- selected language
- selected template
- strokes
- score
- preview open state

This component lays out the language tabs, practice canvas region, and template grid.

### `LanguagePackTabs`

Renders the active language pack selector as underline tabs inspired by the shadcn/radix line-style tabs pattern. It should have minimal background treatment and no heavy card styling.

### `PracticeCanvas`

Encapsulates the main practice surface and its immediate controls:

- current glyph metadata
- score
- clear button
- previous and next chevrons
- SVG drawing surface
- guide glyph layer
- user stroke rendering
- preview overlay state

This component is the visual center of the page.

### `CanvasOverlayPreview`

An internal presentation mode of `PracticeCanvas`, not a separate page region. It renders stroke preview or guidance over the existing canvas when toggled on.

### `TemplateGrid`

Displays the full set of templates for the current language pack below the canvas. It allows direct switching to any template and clearly highlights the active one.

## Interaction Model

### Initial View

When the page loads, the user should immediately see:

- active language tab
- current glyph context
- large practice canvas
- score and clear controls
- full template grid below

No introductory hero block or competing support sidebar should sit above or beside the canvas.

### Language Switching

Changing the language pack updates the template grid and resets:

- selected template to the default for that pack
- strokes
- score
- preview state

### Template Switching

Users can switch templates in two ways:

- click a template in the full grid
- use the previous and next chevron controls beside the canvas

Both pathways must update the same shared selection state.

### Preview Behavior

Preview is treated as a canvas mode. When activated, the canvas shows guided stroke visualization on the same surface. Starting a new stroke should close the preview automatically so the workspace returns to active writing mode without manual cleanup.

### Clear Behavior

Clear only resets the current drawing session:

- remove strokes
- reset score
- preserve selected language and selected template

## Visual Principles

- Avoid stacked framed containers around already-framed content.
- Prefer open spacing and lightweight separators over more cards.
- The canvas must occupy the strongest visual mass on the page.
- Support controls should feel attached to the canvas, not independent panels.
- Template selection should be visible, but not visually louder than the canvas.

## Responsive Behavior

- The language tabs remain a lightweight top row on all breakpoints.
- The canvas remains the primary region on tablet and desktop.
- The template grid should reflow responsively so the whole active set is still presented as an expanded list rather than a horizontally clipped strip.
- On smaller screens, the layout may stack vertically, but the principle remains the same: canvas first, controls attached, template list fully exposed below.

## Error And Empty States

- If a selected language pack has no templates, replace the canvas with a compact empty state message and disable navigation controls.
- If preview data is unavailable for a template, preview toggle can remain hidden or present a simple unavailable state inside the canvas overlay.
- Score pending state should use lightweight inline feedback near the canvas rather than a separate panel.

## Testing Strategy

### Behavioral Tests

- Switching language packs resets template, strokes, score, and preview state.
- Template selection via grid and chevrons updates the same selected template state.
- Clear resets only the current drawing session state.
- Preview opens inside the canvas surface and closes when drawing begins.
- The template grid renders the full active template list for the selected language pack.

### Visual Verification

- The first screen view is dominated by the practice canvas.
- There are no nested major cards around language tabs, canvas controls, and template grid.
- The previous support sidebar is removed.
- Preview appears on the canvas itself rather than in a separate right-side panel.
- The template list remains visible below the canvas as an expanded set.

## Implementation Notes For Planning

- Start by splitting layout responsibilities out of `PrototypePracticeSheet`.
- Preserve current scoring and stroke logic where possible.
- Reuse current template and language data structures.
- Minimize data-model changes; this is primarily a layout and interaction refactor.
- Review current card primitives carefully and avoid applying them by default to every region in the new structure.
