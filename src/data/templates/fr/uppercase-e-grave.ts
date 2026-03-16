import { WritingTemplate } from "@/types/writing";

export const frUppercaseEGraveTemplate: WritingTemplate = {
  id: "fr-uppercase-e-grave",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 E 악상그라브", en: "Uppercase E-Grave" },
  nativeLabel: "È",
  cue: {
    ko: "E를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a standard E, then add a grave accent (`) above.",
  },
  description: {
    ko: "프랑스어 문자 'È' (악상그라브) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'È' (E-grave).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V80 M24 20 H76 M24 50 H76 M24 80 H76 M54 14 L42 6",
  strokeGuides: [
    { id: "fr-uppercase-e-grave-1", pathD: "M24 20 V80", order: 1 },
    { id: "fr-uppercase-e-grave-2", pathD: "M24 20 H76", order: 2 },
    { id: "fr-uppercase-e-grave-3", pathD: "M24 50 H76", order: 3 },
    { id: "fr-uppercase-e-grave-4", pathD: "M24 80 H76", order: 4 },
    { id: "fr-uppercase-e-grave-5", pathD: "M54 14 L42 6", order: 5 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
