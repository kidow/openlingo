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

describe("languagePacks Japanese templates", () => {
  const japanesePack = languagePacks.find((pack) => pack.id === "ja");

  it("includes 46 hiragana and 46 katakana templates (92 total)", () => {
    expect(japanesePack).toBeDefined();
    expect(japanesePack?.templates).toHaveLength(92);

    const hiraganaTemplates = japanesePack?.templates.filter((t) => t.id.startsWith("ja-hiragana-"));
    const katakanaTemplates = japanesePack?.templates.filter((t) => t.id.startsWith("ja-katakana-"));

    expect(hiraganaTemplates).toHaveLength(46);
    expect(katakanaTemplates).toHaveLength(46);
  });

  it("has unique IDs for all templates", () => {
    const ids = japanesePack?.templates.map((t) => t.id) ?? [];
    const uniqueIds = new Set(ids);
    expect(uniqueIds.size).toBe(ids.length);
  });

  it("all templates have required fields", () => {
    for (const template of japanesePack?.templates ?? []) {
      expect(template.languageId).toBe("ja");
      expect(template.mode).toBe("character");
      expect(template.nativeLabel).toBeTruthy();
      expect(template.guidePathD).toBeTruthy();
      expect(template.label.ko).toBeTruthy();
      expect(template.label.en).toBeTruthy();
      expect(template.viewBox).toEqual([0, 0, 100, 100]);
    }
  });
});
