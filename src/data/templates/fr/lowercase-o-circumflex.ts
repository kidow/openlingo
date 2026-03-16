import { WritingTemplate } from "@/types/writing";

export const frLowercaseOCircumflexTemplate: WritingTemplate = {
  id: "fr-lowercase-o-circumflex",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 o 악상시르콩플렉스", en: "Lowercase O-Circumflex" },
  nativeLabel: "ô",
  cue: {
    ko: "o를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a lowercase o, then add a circumflex (^) above.",
  },
  description: {
    ko: "프랑스어 문자 'ô' (소문자 악상시르콩플렉스) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'ô' (lowercase o-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M50 36 C36 36, 30 44, 30 54 C30 64, 36 72, 50 72 C64 72, 70 64, 70 54 C70 44, 64 36, 50 36 M40 26 L50 16 L60 26",
  strokeGuides: [
    { id: "fr-lowercase-o-circumflex-1", pathD: "M50 36 C36 36, 30 44, 30 54 C30 64, 36 72, 50 72 C64 72, 70 64, 70 54 C70 44, 64 36, 50 36", order: 1 },
    { id: "fr-lowercase-o-circumflex-2", pathD: "M40 26 L50 16 L60 26", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
