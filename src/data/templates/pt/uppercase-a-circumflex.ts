import { WritingTemplate } from "@/types/writing";

export const ptUppercaseACircumflexTemplate: WritingTemplate = {
  id: "pt-uppercase-a-circumflex",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 A 시르쿤플렉수", en: "Uppercase A-Circumflex" },
  nativeLabel: "Â",
  cue: {
    ko: "A를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a standard A, then add a circumflex (^) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Â' (시르쿤플렉수) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Â' (A-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M24 80 L50 24 L76 80 M34 56 H66 M40 14 L50 4 L60 14",
  strokeGuides: [
    { id: "pt-uppercase-a-circumflex-1", pathD: "M24 80 L50 24", order: 1 },
    { id: "pt-uppercase-a-circumflex-2", pathD: "M50 24 L76 80", order: 2 },
    { id: "pt-uppercase-a-circumflex-3", pathD: "M34 56 H66", order: 3 },
    { id: "pt-uppercase-a-circumflex-4", pathD: "M40 14 L50 4 L60 14", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
