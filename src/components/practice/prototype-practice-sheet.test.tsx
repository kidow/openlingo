import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { ExampleWordsActionProvider } from "@/components/layout/example-words-action-context";
import { PrototypePracticeSheet } from "@/components/practice/prototype-practice-sheet";
import { languagePacks } from "@/data/practice-content";
import { getDictionary } from "@/i18n/dictionaries";

function renderSheet(dictionary = getDictionary(), selectedLanguageId?: string) {
  return render(
    <ExampleWordsActionProvider>
      <PrototypePracticeSheet dictionary={dictionary} selectedLanguageId={selectedLanguageId} />
    </ExampleWordsActionProvider>
  );
}

function drawStroke(surface: HTMLElement) {
  Object.defineProperty(surface, "setPointerCapture", {
    configurable: true,
    value: () => undefined,
  });
  Object.defineProperty(surface, "hasPointerCapture", {
    configurable: true,
    value: () => true,
  });
  Object.defineProperty(surface, "releasePointerCapture", {
    configurable: true,
    value: () => undefined,
  });
  Object.defineProperty(surface, "getBoundingClientRect", {
    configurable: true,
    value: () =>
      ({
        left: 0,
        top: 0,
        width: 100,
        height: 100,
      }) as DOMRect,
  });

  fireEvent.pointerDown(surface, {
    button: 0,
    clientX: 24,
    clientY: 28,
    pointerId: 1,
    pointerType: "mouse",
  });
  fireEvent.pointerMove(surface, {
    clientX: 68,
    clientY: 72,
    pointerId: 1,
    pointerType: "mouse",
  });
  fireEvent.pointerUp(surface, {
    clientX: 68,
    clientY: 72,
    pointerId: 1,
    pointerType: "mouse",
  });
}

describe("PrototypePracticeSheet", () => {
  it("renders language routes as links for the canvas workflow", () => {
    const dictionary = getDictionary();

    renderSheet(dictionary);

    const workspace = screen.getByTestId("practice-workspace");
    const languagePackBand = within(workspace).getByTestId("practice-language-nav-band");
    const languagePackNav = within(languagePackBand).getByRole("navigation", {
      name: dictionary.sections.languagePacksTitle,
    });
    const links = within(languagePackNav).getAllByRole("link");

    expect(links).toHaveLength(languagePacks.length);
    expect(links[0]).toHaveAttribute("aria-current", "page");
    expect(links[0]).toHaveAttribute("href", "/practice/ko");
    expect(links[1]).toHaveAttribute("href", "/practice/en");
  });

  it("renders the template library as a full grid below the practice canvas", () => {
    const dictionary = getDictionary();

    renderSheet(dictionary);

    const workspace = screen.getByTestId("practice-workspace");
    const canvasStage = within(workspace).getByTestId("practice-canvas-stage");
    const templateGrid = within(workspace).getByTestId("template-grid");

    expect(templateGrid.compareDocumentPosition(canvasStage)).toBe(Node.DOCUMENT_POSITION_PRECEDING);
    expect(templateGrid).not.toHaveClass("overflow-x-auto", "overflow-y-auto");
    expect(within(templateGrid).getAllByRole("button")).toHaveLength(languagePacks[0].templates.length);
  });

  it("renders canvas-attached controls for score, navigation, and ink actions", async () => {
    const dictionary = getDictionary();
    const user = userEvent.setup();

    renderSheet(dictionary);

    const canvasStage = screen.getByTestId("practice-canvas-stage");
    const previousButton = within(canvasStage).getByTestId("practice-template-previous");
    const nextButton = within(canvasStage).getByTestId("practice-template-next");

    expect(within(canvasStage).queryByTestId("practice-canvas-score")).not.toBeInTheDocument();
    expect(within(canvasStage).queryByText(dictionary.score.status.waiting)).not.toBeInTheDocument();
    const floatingControls = within(canvasStage).getByTestId("practice-canvas-floating-controls");
    expect(floatingControls).toBeInTheDocument();
    expect(within(floatingControls).getByTestId("practice-template-previous")).toBeInTheDocument();
    expect(within(floatingControls).getByTestId("practice-template-next")).toBeInTheDocument();
    expect(within(canvasStage).getByRole("button", { name: dictionary.buttons.clearPage })).toBeDisabled();
    expect(within(canvasStage).getByRole("button", { name: dictionary.sections.strokePreviewTitle })).toBeInTheDocument();
    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeEnabled();

    await user.click(nextButton);

    expect(previousButton).toBeEnabled();
  });

  it("resets strokes and score status when template navigation changes the selected worksheet", async () => {
    const dictionary = getDictionary();
    const user = userEvent.setup();

    renderSheet(dictionary);

    const canvasStage = screen.getByTestId("practice-canvas-stage");
    const surface = within(canvasStage).getByTestId("practice-canvas-surface");

    drawStroke(surface);

    await waitFor(() => {
      expect(within(canvasStage).getByRole("button", { name: dictionary.buttons.clearPage })).toBeEnabled();
    });

    expect(within(canvasStage).queryByRole("button", { name: dictionary.buttons.undoStroke })).not.toBeInTheDocument();
    expect(within(canvasStage).getByRole("button", { name: dictionary.buttons.clearPage })).toBeEnabled();

    await user.click(within(canvasStage).getByTestId("practice-template-next"));

    expect(within(canvasStage).queryByTestId("practice-canvas-score")).not.toBeInTheDocument();
    expect(within(canvasStage).queryByRole("button", { name: dictionary.buttons.undoStroke })).not.toBeInTheDocument();
    expect(within(canvasStage).getByRole("button", { name: dictionary.buttons.clearPage })).toBeDisabled();
  });

  it("keeps stroke preview in a canvas overlay instead of a separate tab-panel workflow", async () => {
    const user = userEvent.setup();
    const dictionary = getDictionary();

    renderSheet(dictionary);

    const canvasStage = screen.getByTestId("practice-canvas-stage");
    const previewControl = within(canvasStage).getByRole("button", {
      name: dictionary.sections.strokePreviewTitle,
    });

    await user.click(previewControl);

    expect(screen.queryByRole("tab", { name: dictionary.sections.strokePreviewTitle })).not.toBeInTheDocument();
    expect(screen.queryByRole("tabpanel", { name: dictionary.sections.strokePreviewTitle })).not.toBeInTheDocument();
    expect(screen.getByTestId("canvas-preview-overlay")).toBeInTheDocument();
  });

  it("dismisses the canvas preview overlay when drawing begins", async () => {
    const user = userEvent.setup();
    const dictionary = getDictionary();

    renderSheet(dictionary);

    const canvasStage = screen.getByTestId("practice-canvas-stage");
    const previewControl = within(canvasStage).getByRole("button", {
      name: dictionary.sections.strokePreviewTitle,
    });

    await user.click(previewControl);
    expect(screen.getByTestId("canvas-preview-overlay")).toBeInTheDocument();

    drawStroke(within(canvasStage).getByTestId("practice-canvas-surface"));

    await waitFor(() => {
      expect(screen.queryByTestId("canvas-preview-overlay")).not.toBeInTheDocument();
    });
  });
});
