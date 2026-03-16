import { WritingTemplate } from "@/types/writing";

export const ruLowercaseErTemplate: WritingTemplate = {
  id: "ru-lowercase-er",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 에르", en: "Lowercase Er" },
  nativeLabel: "р",
  cue: {
    ko: "세로획을 길게 내린 뒤 상단에 둥근 부분을 붙이세요.",
    en: "Extend the vertical below the baseline, then attach the top bowl.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'р' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'р'.",
  },
  direction: "ltr",
  guidePathD: "M32 20 V88 M32 36 H52 C68 36, 68 60, 52 60 H32",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
