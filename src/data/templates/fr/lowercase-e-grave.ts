import { WritingTemplate } from "@/types/writing";

export const frLowercaseEGraveTemplate: WritingTemplate = {
  id: "fr-lowercase-e-grave",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 e 악상그라브", en: "Lowercase E-Grave" },
  nativeLabel: "è",
  cue: {
    ko: "e를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a lowercase e, then add a grave accent (`) above.",
  },
  description: {
    ko: "프랑스어 문자 'è' (소문자 악상그라브) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'è' (lowercase e-grave).",
  },
  direction: "ltr",
  guidePathD: "M30 54 H70 C70 36, 30 36, 30 54 C30 72, 70 72, 70 60 M54 26 L42 18",
  strokeGuides: [
    { id: "fr-lowercase-e-grave-1", pathD: "M30 54 H70 C70 36, 30 36, 30 54 C30 72, 70 72, 70 60", order: 1 },
    { id: "fr-lowercase-e-grave-2", pathD: "M54 26 L42 18", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
