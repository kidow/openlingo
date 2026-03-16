import { WritingTemplate } from "@/types/writing";

export const frUppercaseEDiaeresisTemplate: WritingTemplate = {
  id: "fr-uppercase-e-diaeresis",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 E 트레마", en: "Uppercase E-Diaeresis" },
  nativeLabel: "Ë",
  cue: {
    ko: "E를 먼저 쓰고, 위에 점 두 개를 찍으세요.",
    en: "Write a standard E, then add two dots (diaeresis) above.",
  },
  description: {
    ko: "프랑스어 문자 'Ë' (트레마) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'Ë' (E-diaeresis).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V80 M24 20 H76 M24 50 H76 M24 80 H76 M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10 M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10",
  strokeGuides: [
    { id: "fr-uppercase-e-diaeresis-1", pathD: "M24 20 V80", order: 1 },
    { id: "fr-uppercase-e-diaeresis-2", pathD: "M24 20 H76", order: 2 },
    { id: "fr-uppercase-e-diaeresis-3", pathD: "M24 50 H76", order: 3 },
    { id: "fr-uppercase-e-diaeresis-4", pathD: "M24 80 H76", order: 4 },
    { id: "fr-uppercase-e-diaeresis-5", pathD: "M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10", order: 5 },
    { id: "fr-uppercase-e-diaeresis-6", pathD: "M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10", order: 6 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
