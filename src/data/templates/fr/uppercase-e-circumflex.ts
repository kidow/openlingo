import { WritingTemplate } from "@/types/writing";

export const frUppercaseECircumflexTemplate: WritingTemplate = {
  id: "fr-uppercase-e-circumflex",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 E 악상시르콩플렉스", en: "Uppercase E-Circumflex" },
  nativeLabel: "Ê",
  cue: {
    ko: "E를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a standard E, then add a circumflex (^) above.",
  },
  description: {
    ko: "프랑스어 문자 'Ê' (악상시르콩플렉스) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'Ê' (E-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V80 M24 20 H76 M24 50 H76 M24 80 H76 M40 14 L50 4 L60 14",
  strokeGuides: [
    { id: "fr-uppercase-e-circumflex-1", pathD: "M24 20 V80", order: 1 },
    { id: "fr-uppercase-e-circumflex-2", pathD: "M24 20 H76", order: 2 },
    { id: "fr-uppercase-e-circumflex-3", pathD: "M24 50 H76", order: 3 },
    { id: "fr-uppercase-e-circumflex-4", pathD: "M24 80 H76", order: 4 },
    { id: "fr-uppercase-e-circumflex-5", pathD: "M40 14 L50 4 L60 14", order: 5 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
