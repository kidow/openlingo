import { WritingTemplate } from "@/types/writing";

export const frUppercaseICircumflexTemplate: WritingTemplate = {
  id: "fr-uppercase-i-circumflex",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 I 악상시르콩플렉스", en: "Uppercase I-Circumflex" },
  nativeLabel: "Î",
  cue: {
    ko: "I를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a standard I, then add a circumflex (^) above.",
  },
  description: {
    ko: "프랑스어 문자 'Î' (악상시르콩플렉스) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'Î' (I-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M24 20 H76 M50 20 V80 M24 80 H76 M40 10 L50 0 L60 10",
  strokeGuides: [
    { id: "fr-uppercase-i-circumflex-1", pathD: "M24 20 H76", order: 1 },
    { id: "fr-uppercase-i-circumflex-2", pathD: "M50 20 V80", order: 2 },
    { id: "fr-uppercase-i-circumflex-3", pathD: "M24 80 H76", order: 3 },
    { id: "fr-uppercase-i-circumflex-4", pathD: "M40 10 L50 0 L60 10", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
