import { WritingTemplate } from "@/types/writing";

export const ptLowercaseAGraveTemplate: WritingTemplate = {
  id: "pt-lowercase-a-grave",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 a 그라브", en: "Lowercase A-Grave" },
  nativeLabel: "à",
  cue: {
    ko: "a를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a lowercase a, then add a grave accent (`) above.",
  },
  description: {
    ko: "포르투갈어 문자 'à' (소문자 그라브) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'à' (lowercase a-grave).",
  },
  direction: "ltr",
  guidePathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50 M62 36 V72 M54 22 L42 14",
  strokeGuides: [
    { id: "pt-lowercase-a-grave-1", pathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50", order: 1 },
    { id: "pt-lowercase-a-grave-2", pathD: "M62 36 V72", order: 2 },
    { id: "pt-lowercase-a-grave-3", pathD: "M54 22 L42 14", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
