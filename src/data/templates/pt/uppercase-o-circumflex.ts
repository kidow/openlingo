import { WritingTemplate } from "@/types/writing";

export const ptUppercaseOCircumflexTemplate: WritingTemplate = {
  id: "pt-uppercase-o-circumflex",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 O 시르쿤플렉수", en: "Uppercase O-Circumflex" },
  nativeLabel: "Ô",
  cue: {
    ko: "O를 먼저 쓰고, 위에 꺾인 모자(^)를 그으세요.",
    en: "Write a standard O, then add a circumflex (^) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Ô' (시르쿤플렉수) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Ô' (O-circumflex).",
  },
  direction: "ltr",
  guidePathD: "M50 20 C28 20, 20 40, 20 50 C20 60, 28 80, 50 80 C72 80, 80 60, 80 50 C80 40, 72 20, 50 20 M40 10 L50 0 L60 10",
  strokeGuides: [
    { id: "pt-uppercase-o-circumflex-1", pathD: "M50 20 C28 20, 20 40, 20 50 C20 60, 28 80, 50 80 C72 80, 80 60, 80 50 C80 40, 72 20, 50 20", order: 1 },
    { id: "pt-uppercase-o-circumflex-2", pathD: "M40 10 L50 0 L60 10", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
