import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { PrototypePracticeSheet } from "@/components/practice/prototype-practice-sheet";
import { getDictionary } from "@/i18n/dictionaries";

describe("PrototypePracticeSheet", () => {
  it("shows auxiliary tools as tabs and swaps the active panel", async () => {
    const user = userEvent.setup();

    render(<PrototypePracticeSheet locale="ko" dictionary={getDictionary("ko")} />);

    expect(screen.getByRole("tab", { name: "획 미리보기" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel", { name: "획 미리보기" })).toBeInTheDocument();
    expect(screen.queryByRole("tabpanel", { name: "점수" })).not.toBeInTheDocument();

    await user.click(screen.getByRole("tab", { name: "점수" }));

    expect(screen.getByRole("tab", { name: "점수" })).toHaveAttribute("aria-selected", "true");
    expect(screen.getByRole("tabpanel", { name: "점수" })).toBeInTheDocument();
    expect(screen.queryByRole("tabpanel", { name: "획 미리보기" })).not.toBeInTheDocument();
  });

  it("renders language pack toggles as a vertical list instead of a horizontal scroller", () => {
    render(<PrototypePracticeSheet locale="ko" dictionary={getDictionary("ko")} />);

    const englishPackButton = screen.getByRole("button", { name: /English/i });
    const languagePackList = englishPackButton.parentElement;

    expect(languagePackList).toHaveClass("grid", "overflow-y-auto");
    expect(languagePackList).not.toHaveClass("overflow-x-auto");
  });

  it("uses the custom giyeok glyph across cards, worksheet guide, and preview", () => {
    render(<PrototypePracticeSheet locale="ko" dictionary={getDictionary("ko")} />);

    expect(screen.getByTestId("primary-template-card-glyph-ko-giyeok")).toBeInTheDocument();
    expect(screen.getByTestId("worksheet-template-card-glyph-ko-giyeok")).toBeInTheDocument();
    expect(screen.getByTestId("practice-guide-glyph-ko-giyeok")).toBeInTheDocument();
    expect(screen.getByTestId("stroke-preview-glyph-ko-giyeok")).toBeInTheDocument();
  });
});
