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
});
