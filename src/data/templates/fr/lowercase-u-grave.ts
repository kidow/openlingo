import { WritingTemplate } from "@/types/writing";

export const frLowercaseUGraveTemplate: WritingTemplate = {
  id: "fr-lowercase-u-grave",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 u 악상그라브", en: "Lowercase U-Grave" },
  nativeLabel: "ù",
  cue: {
    ko: "u를 먼저 쓰고, 위에 왼쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a lowercase u, then add a grave accent (`) above.",
  },
  description: {
    ko: "프랑스어 문자 'ù' (소문자 악상그라브) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'ù' (lowercase u-grave).",
  },
  direction: "ltr",
  guidePathD: "M34 36 V60 C34 72, 46 74, 54 72 M66 36 V72 M54 26 L42 18",
  strokeGuides: [
    { id: "fr-lowercase-u-grave-1", pathD: "M34 36 V60 C34 72, 46 74, 54 72", order: 1 },
    { id: "fr-lowercase-u-grave-2", pathD: "M66 36 V72", order: 2 },
    { id: "fr-lowercase-u-grave-3", pathD: "M54 26 L42 18", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
