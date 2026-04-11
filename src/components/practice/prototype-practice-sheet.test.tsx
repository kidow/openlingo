import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PrototypePracticeSheet } from "@/components/practice/prototype-practice-sheet";
import { languagePacks } from "@/data/practice-content";
import { getDictionary } from "@/i18n/dictionaries";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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
  it("renders language packs as tabs for the canvas workflow", async () => {
    const dictionary = getDictionary("ko");
    const user = userEvent.setup();

    render(<PrototypePracticeSheet locale="ko" dictionary={dictionary} />);

    const workspace = screen.getByTestId("practice-workspace");
    const languagePackBand = within(workspace).getByTestId("language-pack-tabs-band");
    const languagePackTabs = within(languagePackBand).getByRole("tablist", {
      name: dictionary.sections.languagePacksTitle,
    });
    const tabs = within(languagePackTabs).getAllByRole("tab");

    expect(tabs).toHaveLength(languagePacks.length);
    expect(tabs[0]).toHaveAttribute("aria-selected", "true");
    expect(
      within(languagePackBand).queryByRole("button", {
        name: new RegExp(`^${escapeRegExp(languagePacks[0].nativeLabel)}`),
      })
    ).not.toBeInTheDocument();
    expect(
      within(languagePackBand).queryByRole("button", {
        name: new RegExp(`^${escapeRegExp(languagePacks[1].nativeLabel)}`),
      })
    ).not.toBeInTheDocument();

    await user.click(tabs[1]);

    expect(tabs[1]).toHaveAttribute("aria-selected", "true");
    expect(tabs[0]).toHaveAttribute("aria-selected", "false");
  });

  it("renders the template library as a full grid below the practice canvas", () => {
    const dictionary = getDictionary("ko");

    render(<PrototypePracticeSheet locale="ko" dictionary={dictionary} />);

    const workspace = screen.getByTestId("practice-workspace");
    const canvasStage = within(workspace).getByTestId("practice-canvas-stage");
    const templateGrid = within(workspace).getByTestId("template-grid");

    expect(templateGrid.compareDocumentPosition(canvasStage)).toBe(Node.DOCUMENT_POSITION_PRECEDING);
    expect(templateGrid).not.toHaveClass("overflow-x-auto", "overflow-y-auto");
    expect(within(templateGrid).getAllByRole("button")).toHaveLength(languagePacks[0].templates.length);
  });

  it("renders canvas-attached controls for score, navigation, and ink actions", async () => {
    const dictionary = getDictionary("ko");
    const user = userEvent.setup();

    render(<PrototypePracticeSheet locale="ko" dictionary={dictionary} />);

    const canvasStage = screen.getByTestId("practice-canvas-stage");
    const previousButton = within(canvasStage).getByTestId("practice-template-previous");
    const nextButton = within(canvasStage).getByTestId("practice-template-next");

    expect(
      within(canvasStage).getByRole("heading", { name: languagePacks[0].templates[0].nativeLabel })
    ).toBeInTheDocument();
    expect(within(canvasStage).getByText(dictionary.sections.scoreTitle)).toBeInTheDocument();
    expect(within(canvasStage).getByText(dictionary.score.status.waiting)).toBeInTheDocument();
    expect(within(canvasStage).getByRole("button", { name: dictionary.buttons.clearPage })).toBeDisabled();
    expect(previousButton).toBeDisabled();
    expect(nextButton).toBeEnabled();

    await user.click(nextButton);

    expect(
      within(canvasStage).getByRole("heading", { name: languagePacks[0].templates[1].nativeLabel })
    ).toBeInTheDocument();
    expect(previousButton).toBeEnabled();
  });

  it("resets strokes and score status when template navigation changes the selected worksheet", async () => {
    const dictionary = getDictionary("ko");
    const user = userEvent.setup();

    render(<PrototypePracticeSheet locale="ko" dictionary={dictionary} />);

    const canvasStage = screen.getByTestId("practice-canvas-stage");
    const surface = within(canvasStage).getByTestId("practice-canvas-surface");

    drawStroke(surface);

    await waitFor(() => {
      expect(within(canvasStage).getByText(dictionary.score.status.pending)).toBeInTheDocument();
    });

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(within(canvasStage).getByRole("button", { name: dictionary.buttons.clearPage })).toBeEnabled();

    await user.click(within(canvasStage).getByTestId("practice-template-next"));

    expect(within(canvasStage).getByText(dictionary.score.status.waiting)).toBeInTheDocument();
    expect(within(canvasStage).getByRole("button", { name: dictionary.buttons.clearPage })).toBeDisabled();
    expect(screen.getByText("0")).toBeInTheDocument();
  });

  it("keeps stroke preview in a canvas overlay instead of a separate tab-panel workflow", async () => {
    const user = userEvent.setup();
    const dictionary = getDictionary("ko");

    render(<PrototypePracticeSheet locale="ko" dictionary={dictionary} />);

    const canvasStage = screen.getByTestId("practice-canvas-stage");
    const previewControl = within(canvasStage).getByRole("button", {
      name: dictionary.sections.strokePreviewTitle,
    });

    await user.click(previewControl);

    expect(screen.queryByRole("tab", { name: dictionary.sections.strokePreviewTitle })).not.toBeInTheDocument();
    expect(screen.queryByRole("tabpanel", { name: dictionary.sections.strokePreviewTitle })).not.toBeInTheDocument();
    expect(screen.getByTestId("canvas-preview-overlay")).toBeInTheDocument();
  });
});
