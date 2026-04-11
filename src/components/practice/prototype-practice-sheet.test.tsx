import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PrototypePracticeSheet } from "@/components/practice/prototype-practice-sheet";
import { languagePacks } from "@/data/practice-content";
import { getDictionary } from "@/i18n/dictionaries";

describe("PrototypePracticeSheet", () => {
  it("renders language packs as tabs for the canvas workflow", () => {
    const dictionary = getDictionary("ko");

    render(<PrototypePracticeSheet locale="ko" dictionary={dictionary} />);

    const languagePackBand = screen.getByTestId("language-pack-tabs-band");
    const languagePackTabs = within(languagePackBand).getByRole("tablist", {
      name: dictionary.sections.languagePacksTitle,
    });

    expect(within(languagePackTabs).getAllByRole("tab")).toHaveLength(languagePacks.length);
    expect(
      within(languagePackTabs).getByRole("tab", {
        name: languagePacks[0].nativeLabel,
      })
    ).toHaveAttribute("aria-selected", "true");
    expect(
      screen.queryByRole("button", {
        name: new RegExp(`^${languagePacks[0].nativeLabel}`),
      })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("button", {
        name: new RegExp(`^${languagePacks[1].nativeLabel}`),
      })
    ).not.toBeInTheDocument();
  });

  it("renders the template library as a full grid below the practice canvas", () => {
    const dictionary = getDictionary("ko");

    render(<PrototypePracticeSheet locale="ko" dictionary={dictionary} />);

    const canvasStage = screen.getByTestId("practice-canvas-stage");
    const templateGrid = screen.getByTestId("template-grid");

    expect(templateGrid.compareDocumentPosition(canvasStage)).toBe(Node.DOCUMENT_POSITION_PRECEDING);
    expect(templateGrid).not.toHaveClass("overflow-x-auto", "overflow-y-auto");
    expect(within(templateGrid).getAllByRole("button")).toHaveLength(languagePacks[0].templates.length);
  });

  it("keeps stroke preview in a canvas overlay instead of a separate tab-panel workflow", async () => {
    const user = userEvent.setup();

    render(<PrototypePracticeSheet locale="ko" dictionary={getDictionary("ko")} />);

    const canvasStage = screen.getByTestId("practice-canvas-stage");
    const previewControl = within(canvasStage).getByRole("button", {
      name: /획 미리보기|stroke preview/i,
    });

    await user.click(previewControl);

    expect(screen.queryByRole("tab", { name: /획 미리보기|stroke preview/i })).not.toBeInTheDocument();
    expect(screen.queryByRole("tabpanel", { name: /획 미리보기|stroke preview/i })).not.toBeInTheDocument();
    expect(screen.getByTestId("canvas-preview-overlay")).toBeInTheDocument();
  });
});
