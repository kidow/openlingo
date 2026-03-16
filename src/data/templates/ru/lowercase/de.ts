import { WritingTemplate } from "@/types/writing";

export const ruLowercaseDeTemplate: WritingTemplate = {
  id: "ru-lowercase-de",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 д", en: "Lowercase д" },
  nativeLabel: "д",
  cue: {
    ko: "양쪽 다리가 균형을 이루도록 하세요.",
    en: "Keep both legs balanced under the body.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'д' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'д'.",
  },
  direction: "ltr",
  guidePathD: "M24 76 V70 H34 V36 H66 V70 H76 V76 H24",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
