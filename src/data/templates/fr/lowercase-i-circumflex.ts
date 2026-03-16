import { WritingTemplate } from "@/types/writing";

export const frLowercaseICircumflexTemplate: WritingTemplate = {
  id: "fr-lowercase-i-circumflex",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 i 악상시르콩플렉스", en: "Lowercase I-Circumflex" },
  nativeLabel: "î",
  cue: {
    ko: "i의 세로획을 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write the vertical stroke of i, then add a circumflex (^) above.",
  },
  description: {
    ko: "프랑스어 문자 'î' (소문자 악상시르콩플렉스) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'î' (lowercase i-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M50 36 V72 M40 26 L50 16 L60 26",
  strokeGuides: [
    { id: "fr-lowercase-i-circumflex-1", pathD: "M50 36 V72", order: 1 },
    { id: "fr-lowercase-i-circumflex-2", pathD: "M40 26 L50 16 L60 26", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
