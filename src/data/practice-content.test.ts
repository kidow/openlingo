import { languagePacks } from "@/data/practice-content";

describe("languagePacks English templates", () => {
  it("includes uppercase A-Z practice templates", () => {
    const englishPack = languagePacks.find((pack) => pack.id === "en");

    expect(englishPack).toBeDefined();
    const uppercaseTemplates = englishPack?.templates.filter((template) => template.label.en.startsWith("Uppercase "));
    const templateIds = new Set(uppercaseTemplates?.map((template) => template.id));

    expect(uppercaseTemplates).toHaveLength(26);

    for (const codePoint of Array.from({ length: 26 }, (_, offset) => 97 + offset)) {
      const letter = String.fromCharCode(codePoint);
      expect(templateIds.has(`en-${letter}`)).toBe(true);
    }
  });

  it("includes lowercase a-z practice templates", () => {
    const englishPack = languagePacks.find((pack) => pack.id === "en");

    expect(englishPack).toBeDefined();
    expect(englishPack?.templates).toHaveLength(52);

    const templateIds = new Set(englishPack?.templates.map((template) => template.id));
    const lowercaseTemplates = englishPack?.templates.filter((template) => template.label.en.startsWith("Lowercase "));

    expect(lowercaseTemplates).toHaveLength(26);

    for (const codePoint of Array.from({ length: 26 }, (_, offset) => 97 + offset)) {
      const letter = String.fromCharCode(codePoint);
      expect(templateIds.has(`en-lower-${letter}`)).toBe(true);
      expect(lowercaseTemplates?.some((template) => template.nativeLabel === letter)).toBe(true);
    }
  });
});
