import { WritingTemplate } from "@/types/writing";

export const frUppercaseUGraveTemplate: WritingTemplate = {
  id: "fr-uppercase-u-grave",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 U 악상그라브", en: "Uppercase U-Grave" },
  nativeLabel: "Ù",
  cue: {
    ko: "U를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a standard U, then add a grave accent (`) above.",
  },
  description: {
    ko: "프랑스어 문자 'Ù' (악상그라브) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'Ù' (U-grave).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V64 C24 78, 40 82, 50 82 C60 82, 76 78, 76 64 V20 M54 10 L42 2",
  strokeGuides: [
    { id: "fr-uppercase-u-grave-1", pathD: "M24 20 V64 C24 78, 40 82, 50 82", order: 1 },
    { id: "fr-uppercase-u-grave-2", pathD: "M76 20 V64 C76 78, 60 82, 50 82", order: 2 },
    { id: "fr-uppercase-u-grave-3", pathD: "M54 10 L42 2", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
