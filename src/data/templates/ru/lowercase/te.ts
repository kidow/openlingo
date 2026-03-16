import { WritingTemplate } from "@/types/writing";

export const ruLowercaseTeTemplate: WritingTemplate = {
  id: "ru-lowercase-te",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 테", en: "Lowercase Te" },
  nativeLabel: "т",
  cue: {
    ko: "상단 가로획의 중앙에서 세로획을 수직으로 내리세요.",
    en: "Drop the vertical from the exact center of the top bar.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'т' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'т'.",
  },
  direction: "ltr",
  guidePathD: "M26 36 H74 M50 36 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
