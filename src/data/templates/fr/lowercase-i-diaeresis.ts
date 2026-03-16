import { WritingTemplate } from "@/types/writing";

export const frLowercaseIDiaeresisTemplate: WritingTemplate = {
  id: "fr-lowercase-i-diaeresis",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 i 트레마", en: "Lowercase I-Diaeresis" },
  nativeLabel: "ï",
  cue: {
    ko: "i의 세로획을 먼저 쓰고, 위에 점 두 개를 찍으세요.",
    en: "Write the vertical stroke of i, then add two dots (diaeresis) above.",
  },
  description: {
    ko: "프랑스어 문자 'ï' (소문자 트레마) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'ï' (lowercase i-diaeresis).",
  },
  direction: "ltr",
  guidePathD: "M50 36 V72 M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26 M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26",
  strokeGuides: [
    { id: "fr-lowercase-i-diaeresis-1", pathD: "M50 36 V72", order: 1 },
    { id: "fr-lowercase-i-diaeresis-2", pathD: "M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26", order: 2 },
    { id: "fr-lowercase-i-diaeresis-3", pathD: "M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
