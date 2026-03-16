import { WritingTemplate } from "@/types/writing";

export const frUppercaseACircumflexTemplate: WritingTemplate = {
  id: "fr-uppercase-a-circumflex",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 A 악상시르콩플렉스", en: "Uppercase A-Circumflex" },
  nativeLabel: "Â",
  cue: {
    ko: "A를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a standard A, then add a circumflex (^) above.",
  },
  description: {
    ko: "프랑스어 문자 'Â' (악상시르콩플렉스) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'Â' (A-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M24 80 L50 24 L76 80 M34 56 H66 M40 14 L50 4 L60 14",
  strokeGuides: [
    { id: "fr-uppercase-a-circumflex-1", pathD: "M24 80 L50 24", order: 1 },
    { id: "fr-uppercase-a-circumflex-2", pathD: "M50 24 L76 80", order: 2 },
    { id: "fr-uppercase-a-circumflex-3", pathD: "M34 56 H66", order: 3 },
    { id: "fr-uppercase-a-circumflex-4", pathD: "M40 14 L50 4 L60 14", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
