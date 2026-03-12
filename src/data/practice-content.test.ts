import { languagePacks } from "@/data/practice-content";

describe("languagePacks English templates", () => {
  it("includes uppercase A-Z practice templates", () => {
    const englishPack = languagePacks.find((pack) => pack.id === "en");

    expect(englishPack).toBeDefined();
    expect(englishPack?.templates).toHaveLength(26);

    const templateIds = new Set(englishPack?.templates.map((template) => template.id));

    for (const codePoint of Array.from({ length: 26 }, (_, offset) => 97 + offset)) {
      const letter = String.fromCharCode(codePoint);
      expect(templateIds.has(`en-${letter}`)).toBe(true);
    }
  });
});
