import { WritingTemplate } from "@/types/writing";

export const frLowercaseUCircumflexTemplate: WritingTemplate = {
  id: "fr-lowercase-u-circumflex",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 u 악상시르콩플렉스", en: "Lowercase U-Circumflex" },
  nativeLabel: "û",
  cue: {
    ko: "u를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a lowercase u, then add a circumflex (^) above.",
  },
  description: {
    ko: "프랑스어 문자 'û' (소문자 악상시르콩플렉스) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'û' (lowercase u-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M34 36 V60 C34 72, 46 74, 54 72 M66 36 V72 M40 26 L50 16 L60 26",
  strokeGuides: [
    { id: "fr-lowercase-u-circumflex-1", pathD: "M34 36 V60 C34 72, 46 74, 54 72", order: 1 },
    { id: "fr-lowercase-u-circumflex-2", pathD: "M66 36 V72", order: 2 },
    { id: "fr-lowercase-u-circumflex-3", pathD: "M40 26 L50 16 L60 26", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
