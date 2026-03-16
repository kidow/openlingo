import { WritingTemplate } from "@/types/writing";

export const ruUppercaseErTemplate: WritingTemplate = {
  id: "ru-uppercase-er",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 에르", en: "Uppercase Er" },
  nativeLabel: "Р",
  cue: {
    ko: "세로획을 먼저 긋고 상단 둥근 부분을 반원으로 마무리하세요.",
    en: "Draw the vertical first, then close the top with a semicircle.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Р' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Р'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 V80 M28 20 H58 C76 20, 76 50, 58 50 H28",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
