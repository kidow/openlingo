import { WritingTemplate } from "@/types/writing";

export const frLowercaseUDiaeresisTemplate: WritingTemplate = {
  id: "fr-lowercase-u-diaeresis",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 u 트레마", en: "Lowercase U-Diaeresis" },
  nativeLabel: "ü",
  cue: {
    ko: "u를 먼저 쓰고, 위에 점 두 개를 찍으세요.",
    en: "Write a lowercase u, then add two dots (diaeresis) above.",
  },
  description: {
    ko: "프랑스어 문자 'ü' (소문자 트레마) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'ü' (lowercase u-diaeresis).",
  },
  direction: "ltr",
  guidePathD: "M34 36 V60 C34 72, 46 74, 54 72 M66 36 V72 M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26 M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26",
  strokeGuides: [
    { id: "fr-lowercase-u-diaeresis-1", pathD: "M34 36 V60 C34 72, 46 74, 54 72", order: 1 },
    { id: "fr-lowercase-u-diaeresis-2", pathD: "M66 36 V72", order: 2 },
    { id: "fr-lowercase-u-diaeresis-3", pathD: "M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26", order: 3 },
    { id: "fr-lowercase-u-diaeresis-4", pathD: "M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
