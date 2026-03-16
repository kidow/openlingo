import { WritingTemplate } from "@/types/writing";

export const ruLowercaseGeTemplate: WritingTemplate = {
  id: "ru-lowercase-ge",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 г", en: "Lowercase г" },
  nativeLabel: "г",
  cue: {
    ko: "상단 가로획에서 직각으로 세로획을 내리세요.",
    en: "Drop a right-angle vertical from the top bar.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'г' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'г'.",
  },
  direction: "ltr",
  guidePathD: "M32 36 H64 M32 36 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
