import { WritingTemplate } from "@/types/writing";

export const ruUppercaseKhaTemplate: WritingTemplate = {
  id: "ru-uppercase-kha",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 하", en: "Uppercase Kha" },
  nativeLabel: "Х",
  cue: {
    ko: "두 대각선이 정중앙에서 교차하도록 하세요.",
    en: "Cross the two diagonals exactly at the center.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Х' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Х'.",
  },
  direction: "ltr",
  guidePathD: "M24 20 L76 80 M76 20 L24 80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
