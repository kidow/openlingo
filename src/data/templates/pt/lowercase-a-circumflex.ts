import { WritingTemplate } from "@/types/writing";

export const ptLowercaseACircumflexTemplate: WritingTemplate = {
  id: "pt-lowercase-a-circumflex",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 a 시르쿤플렉수", en: "Lowercase A-Circumflex" },
  nativeLabel: "â",
  cue: {
    ko: "a를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a lowercase a, then add a circumflex (^) above.",
  },
  description: {
    ko: "포르투갈어 문자 'â' (소문자 시르쿤플렉수) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'â' (lowercase a-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50 M62 36 V72 M40 22 L50 12 L60 22",
  strokeGuides: [
    { id: "pt-lowercase-a-circumflex-1", pathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50", order: 1 },
    { id: "pt-lowercase-a-circumflex-2", pathD: "M62 36 V72", order: 2 },
    { id: "pt-lowercase-a-circumflex-3", pathD: "M40 22 L50 12 L60 22", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
