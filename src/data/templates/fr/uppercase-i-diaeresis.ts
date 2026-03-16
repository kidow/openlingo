import { WritingTemplate } from "@/types/writing";

export const frUppercaseIDiaeresisTemplate: WritingTemplate = {
  id: "fr-uppercase-i-diaeresis",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 I 트레마", en: "Uppercase I-Diaeresis" },
  nativeLabel: "Ï",
  cue: {
    ko: "I를 먼저 쓰고, 위에 점 두 개를 찍으세요.",
    en: "Write a standard I, then add two dots (diaeresis) above.",
  },
  description: {
    ko: "프랑스어 문자 'Ï' (트레마) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'Ï' (I-diaeresis).",
  },
  direction: "ltr",
  guidePathD: "M24 20 H76 M50 20 V80 M24 80 H76 M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10 M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10",
  strokeGuides: [
    { id: "fr-uppercase-i-diaeresis-1", pathD: "M24 20 H76", order: 1 },
    { id: "fr-uppercase-i-diaeresis-2", pathD: "M50 20 V80", order: 2 },
    { id: "fr-uppercase-i-diaeresis-3", pathD: "M24 80 H76", order: 3 },
    { id: "fr-uppercase-i-diaeresis-4", pathD: "M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10", order: 4 },
    { id: "fr-uppercase-i-diaeresis-5", pathD: "M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10", order: 5 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
