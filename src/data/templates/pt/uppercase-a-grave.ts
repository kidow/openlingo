import { WritingTemplate } from "@/types/writing";

export const ptUppercaseAGraveTemplate: WritingTemplate = {
  id: "pt-uppercase-a-grave",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 A 그라브", en: "Uppercase A-Grave" },
  nativeLabel: "À",
  cue: {
    ko: "A를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a standard A, then add a grave accent (`) above.",
  },
  description: {
    ko: "포르투갈어 문자 'À' (그라브) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'À' (A-grave).",
  },
  direction: "ltr",
  guidePathD: "M24 80 L50 24 L76 80 M34 56 H66 M54 14 L42 6",
  strokeGuides: [
    { id: "pt-uppercase-a-grave-1", pathD: "M24 80 L50 24", order: 1 },
    { id: "pt-uppercase-a-grave-2", pathD: "M50 24 L76 80", order: 2 },
    { id: "pt-uppercase-a-grave-3", pathD: "M34 56 H66", order: 3 },
    { id: "pt-uppercase-a-grave-4", pathD: "M54 14 L42 6", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
