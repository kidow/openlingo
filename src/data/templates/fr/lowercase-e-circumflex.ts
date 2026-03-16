import { WritingTemplate } from "@/types/writing";

export const frLowercaseECircumflexTemplate: WritingTemplate = {
  id: "fr-lowercase-e-circumflex",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 e 악상시르콩플렉스", en: "Lowercase E-Circumflex" },
  nativeLabel: "ê",
  cue: {
    ko: "e를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a lowercase e, then add a circumflex (^) above.",
  },
  description: {
    ko: "프랑스어 문자 'ê' (소문자 악상시르콩플렉스) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'ê' (lowercase e-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M30 54 H70 C70 36, 30 36, 30 54 C30 72, 70 72, 70 60 M40 26 L50 16 L60 26",
  strokeGuides: [
    { id: "fr-lowercase-e-circumflex-1", pathD: "M30 54 H70 C70 36, 30 36, 30 54 C30 72, 70 72, 70 60", order: 1 },
    { id: "fr-lowercase-e-circumflex-2", pathD: "M40 26 L50 16 L60 26", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
