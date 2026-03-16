import { WritingTemplate } from "@/types/writing";

export const ruLowercaseOTemplate: WritingTemplate = {
  id: "ru-lowercase-o",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 오", en: "Lowercase O" },
  nativeLabel: "о",
  cue: {
    ko: "작은 타원을 균일한 두께로 매끄럽게 그리세요.",
    en: "Draw a small even oval with consistent thickness.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'о' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'о'.",
  },
  direction: "ltr",
  guidePathD:
    "M50 34 C66 34, 72 44, 72 56 C72 68, 66 78, 50 78 C34 78, 28 68, 28 56 C28 44, 34 34, 50 34 Z",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
