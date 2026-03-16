import { WritingTemplate } from "@/types/writing";

export const ptLowercaseCCedillaTemplate: WritingTemplate = {
  id: "pt-lowercase-c-cedilla",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 c 세딜랴", en: "Lowercase C-Cedilla" },
  nativeLabel: "ç",
  cue: {
    ko: "c를 먼저 쓰고, 아래 가운데에 갈고리를 그으세요.",
    en: "Write a lowercase c, then add a cedilla hook below.",
  },
  description: {
    ko: "포르투갈어 문자 'ç' (소문자 세딜랴) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'ç' (lowercase c-cedilla).",
  },
  direction: "ltr",
  guidePathD: "M66 40 C62 34, 40 34, 34 44 C28 54, 28 62, 34 68 C40 74, 62 74, 66 68 M50 74 L54 82 C54 88, 42 88, 42 84",
  strokeGuides: [
    { id: "pt-lowercase-c-cedilla-1", pathD: "M66 40 C62 34, 40 34, 34 44 C28 54, 28 62, 34 68 C40 74, 62 74, 66 68", order: 1 },
    { id: "pt-lowercase-c-cedilla-2", pathD: "M50 74 L54 82 C54 88, 42 88, 42 84", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
