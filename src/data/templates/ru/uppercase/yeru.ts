import { WritingTemplate } from "@/types/writing";

export const ruUppercaseYeruTemplate: WritingTemplate = {
  id: "ru-uppercase-yeru",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 이에루", en: "Uppercase Yeru" },
  nativeLabel: "Ы",
  cue: {
    ko: "왼쪽 Ь 부분과 오른쪽 세로획 사이의 간격을 충분히 두세요.",
    en: "Leave enough space between the left soft-sign shape and the right vertical.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ы' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ы'.",
  },
  direction: "ltr",
  guidePathD:
    "M24 20 V80 M24 50 H40 C54 50, 54 80, 40 80 H24 M72 20 V80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
