import { WritingTemplate } from "@/types/writing";

export const ruLowercaseEmTemplate: WritingTemplate = {
  id: "ru-lowercase-em",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 м", en: "Lowercase м" },
  nativeLabel: "м",
  cue: {
    ko: "양쪽 세로획을 세우고 가운데 V자를 정확히 연결하세요.",
    en: "Raise two verticals and connect with a center V.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'м' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'м'.",
  },
  direction: "ltr",
  guidePathD: "M26 76 V36 L50 56 L74 36 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
