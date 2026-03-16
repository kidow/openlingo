import { WritingTemplate } from "@/types/writing";

export const ruLowercaseYeruTemplate: WritingTemplate = {
  id: "ru-lowercase-yeru",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 이에루", en: "Lowercase Yeru" },
  nativeLabel: "ы",
  cue: {
    ko: "왼쪽 ь 부분과 오른쪽 세로획 사이에 충분한 간격을 두세요.",
    en: "Leave enough space between the left soft-sign shape and the right vertical.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ы' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ы'.",
  },
  direction: "ltr",
  guidePathD:
    "M28 36 V76 M28 56 H42 C54 56, 54 76, 42 76 H28 M70 36 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
