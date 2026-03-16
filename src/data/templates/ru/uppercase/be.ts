import { WritingTemplate } from "@/types/writing";

export const ruUppercaseBeTemplate: WritingTemplate = {
  id: "ru-uppercase-be",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 베", en: "Uppercase Be" },
  nativeLabel: "Б",
  cue: {
    ko: "상단 가로획을 먼저 긋고 세로획으로 내려온 뒤 하단 둥근 부분을 마무리하세요.",
    en: "Draw the top bar first, then the vertical, and finish with the lower bowl.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Б' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Б'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 H72 M28 20 V80 M28 80 H60 C76 80, 76 52, 60 52 H28",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
