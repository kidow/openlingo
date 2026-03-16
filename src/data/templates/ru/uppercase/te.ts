import { WritingTemplate } from "@/types/writing";

export const ruUppercaseTeTemplate: WritingTemplate = {
  id: "ru-uppercase-te",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 테", en: "Uppercase Te" },
  nativeLabel: "Т",
  cue: {
    ko: "상단 가로획의 중앙에서 세로획을 수직으로 내리세요.",
    en: "Drop the vertical from the exact center of the top bar.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Т' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Т'.",
  },
  direction: "ltr",
  guidePathD: "M20 20 H80 M50 20 V80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
