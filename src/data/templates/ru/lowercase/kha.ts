import { WritingTemplate } from "@/types/writing";

export const ruLowercaseKhaTemplate: WritingTemplate = {
  id: "ru-lowercase-kha",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 하", en: "Lowercase Kha" },
  nativeLabel: "х",
  cue: {
    ko: "두 대각선이 정중앙에서 교차하도록 하세요.",
    en: "Cross the two diagonals exactly at the center.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'х' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'х'.",
  },
  direction: "ltr",
  guidePathD: "M30 36 L70 76 M70 36 L30 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
