import { WritingTemplate } from "@/types/writing";

export const ruUppercaseElTemplate: WritingTemplate = {
  id: "ru-uppercase-el",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 엘", en: "Uppercase El" },
  nativeLabel: "Л",
  cue: {
    ko: "꼭짓점에서 두 대각선이 균형 있게 벌어지도록 하세요.",
    en: "Spread two diagonals evenly from the apex.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Л' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Л'.",
  },
  direction: "ltr",
  guidePathD: "M20 80 L50 20 L80 80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
