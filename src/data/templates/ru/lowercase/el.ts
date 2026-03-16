import { WritingTemplate } from "@/types/writing";

export const ruLowercaseElTemplate: WritingTemplate = {
  id: "ru-lowercase-el",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 л", en: "Lowercase л" },
  nativeLabel: "л",
  cue: {
    ko: "꼭짓점에서 양쪽으로 균형 있게 벌리세요.",
    en: "Spread evenly from the apex on both sides.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'л' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'л'.",
  },
  direction: "ltr",
  guidePathD: "M24 76 L50 36 L76 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
