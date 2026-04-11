import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PrototypePracticeSheet } from "@/components/practice/prototype-practice-sheet";
import { languagePacks } from "@/data/practice-content";
import { getDictionary } from "@/i18n/dictionaries";

describe("PrototypePracticeSheet", () => {
  it("renders language packs as tabs for the canvas workflow", () => {
    const dictionary = getDictionary("ko");

    render(<PrototypePracticeSheet locale="ko" dictionary={dictionary} />);

    const languagePackTabs = screen.getByRole("tablist", {
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

    const templateGrid = screen.getByTestId("template-grid");

    expect(within(templateGrid).getAllByRole("button")).toHaveLength(languagePacks[0].templates.length);
  });

  it("keeps stroke preview in a canvas overlay instead of a separate tab-panel workflow", async () => {
    const dictionary = getDictionary("ko");
    const user = userEvent.setup();

    render(<PrototypePracticeSheet locale="ko" dictionary={dictionary} />);

    const practiceTools = screen.getByRole("tablist", {
      name: dictionary.sections.practiceToolsTitle,
    });
    const previewControl = within(practiceTools).getByRole("tab", {
      name: dictionary.sections.strokePreviewTitle,
    });

    await user.click(previewControl);

    expect(
      within(practiceTools).queryByRole("tab", {
        name: dictionary.sections.strokePreviewTitle,
      })
    ).not.toBeInTheDocument();
    expect(
      screen.queryByRole("tabpanel", {
        name: dictionary.sections.strokePreviewTitle,
      })
    ).not.toBeInTheDocument();
    expect(screen.getByTestId("canvas-preview-overlay")).toBeInTheDocument();
  });
});
