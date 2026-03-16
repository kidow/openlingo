import { WritingTemplate } from "@/types/writing";

export const ptUppercaseECircumflexTemplate: WritingTemplate = {
  id: "pt-uppercase-e-circumflex",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 E 시르쿤플렉수", en: "Uppercase E-Circumflex" },
  nativeLabel: "Ê",
  cue: {
    ko: "E를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a standard E, then add a circumflex (^) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Ê' (시르쿤플렉수) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Ê' (E-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V80 M24 20 H76 M24 50 H76 M24 80 H76 M40 14 L50 4 L60 14",
  strokeGuides: [
    { id: "pt-uppercase-e-circumflex-1", pathD: "M24 20 V80", order: 1 },
    { id: "pt-uppercase-e-circumflex-2", pathD: "M24 20 H76", order: 2 },
    { id: "pt-uppercase-e-circumflex-3", pathD: "M24 50 H76", order: 3 },
    { id: "pt-uppercase-e-circumflex-4", pathD: "M24 80 H76", order: 4 },
    { id: "pt-uppercase-e-circumflex-5", pathD: "M40 14 L50 4 L60 14", order: 5 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
