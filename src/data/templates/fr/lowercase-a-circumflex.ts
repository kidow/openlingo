import { WritingTemplate } from "@/types/writing";

export const frLowercaseACircumflexTemplate: WritingTemplate = {
  id: "fr-lowercase-a-circumflex",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 a 악상시르콩플렉스", en: "Lowercase A-Circumflex" },
  nativeLabel: "â",
  cue: {
    ko: "a를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a lowercase a, then add a circumflex (^) above.",
  },
  description: {
    ko: "프랑스어 문자 'â' (소문자 악상시르콩플렉스) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'â' (lowercase a-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50 M62 36 V72 M40 22 L50 12 L60 22",
  strokeGuides: [
    { id: "fr-lowercase-a-circumflex-1", pathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50", order: 1 },
    { id: "fr-lowercase-a-circumflex-2", pathD: "M62 36 V72", order: 2 },
    { id: "fr-lowercase-a-circumflex-3", pathD: "M40 22 L50 12 L60 22", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
