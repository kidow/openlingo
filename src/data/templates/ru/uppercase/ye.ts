import { WritingTemplate } from "@/types/writing";

export const ruUppercaseYeTemplate: WritingTemplate = {
  id: "ru-uppercase-ye",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 예", en: "Uppercase Ye" },
  nativeLabel: "Е",
  cue: {
    ko: "세로획을 먼저 긋고 세 가로획의 길이 비율에 주의하세요.",
    en: "Draw the vertical first, then three horizontals of varying length.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Е' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Е'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 H72 M28 20 V80 M28 50 H64 M28 80 H72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
