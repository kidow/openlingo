import { WritingTemplate } from "@/types/writing";

export const frUppercaseUCircumflexTemplate: WritingTemplate = {
  id: "fr-uppercase-u-circumflex",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 U 악상시르콩플렉스", en: "Uppercase U-Circumflex" },
  nativeLabel: "Û",
  cue: {
    ko: "U를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a standard U, then add a circumflex (^) above.",
  },
  description: {
    ko: "프랑스어 문자 'Û' (악상시르콩플렉스) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'Û' (U-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V64 C24 78, 40 82, 50 82 C60 82, 76 78, 76 64 V20 M40 10 L50 0 L60 10",
  strokeGuides: [
    { id: "fr-uppercase-u-circumflex-1", pathD: "M24 20 V64 C24 78, 40 82, 50 82", order: 1 },
    { id: "fr-uppercase-u-circumflex-2", pathD: "M76 20 V64 C76 78, 60 82, 50 82", order: 2 },
    { id: "fr-uppercase-u-circumflex-3", pathD: "M40 10 L50 0 L60 10", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
