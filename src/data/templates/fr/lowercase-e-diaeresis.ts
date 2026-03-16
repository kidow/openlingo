import { WritingTemplate } from "@/types/writing";

export const frLowercaseEDiaeresisTemplate: WritingTemplate = {
  id: "fr-lowercase-e-diaeresis",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 e 트레마", en: "Lowercase E-Diaeresis" },
  nativeLabel: "ë",
  cue: {
    ko: "e를 먼저 쓰고, 위에 점 두 개를 찍으세요.",
    en: "Write a lowercase e, then add two dots (diaeresis) above.",
  },
  description: {
    ko: "프랑스어 문자 'ë' (소문자 트레마) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'ë' (lowercase e-diaeresis).",
  },
  direction: "ltr",
  guidePathD: "M30 54 H70 C70 36, 30 36, 30 54 C30 72, 70 72, 70 60 M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26 M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26",
  strokeGuides: [
    { id: "fr-lowercase-e-diaeresis-1", pathD: "M30 54 H70 C70 36, 30 36, 30 54 C30 72, 70 72, 70 60", order: 1 },
    { id: "fr-lowercase-e-diaeresis-2", pathD: "M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26", order: 2 },
    { id: "fr-lowercase-e-diaeresis-3", pathD: "M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
