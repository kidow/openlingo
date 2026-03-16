import { WritingTemplate } from "@/types/writing";

export const ruLowercaseEfTemplate: WritingTemplate = {
  id: "ru-lowercase-ef",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 에프", en: "Lowercase Ef" },
  nativeLabel: "ф",
  cue: {
    ko: "세로획을 위아래로 길게 긋고 중간에 원을 대칭으로 그리세요.",
    en: "Draw a long vertical, then center a circle symmetrically on it.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ф' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ф'.",
  },
  direction: "ltr",
  guidePathD:
    "M50 20 V88 M50 38 C34 38, 26 46, 26 56 C26 66, 34 74, 50 74 C66 74, 74 66, 74 56 C74 46, 66 38, 50 38",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
