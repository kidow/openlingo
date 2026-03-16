import { WritingTemplate } from "@/types/writing";

export const ruLowercaseATemplate: WritingTemplate = {
  id: "ru-lowercase-a",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 а", en: "Lowercase а" },
  nativeLabel: "а",
  cue: {
    ko: "둥근 부분을 먼저 그리고 오른쪽 세로획으로 마무리하세요.",
    en: "Draw the round part first, then finish with the right vertical.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'а' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'а'.",
  },
  direction: "ltr",
  guidePathD:
    "M62 36 C56 30, 44 30, 38 36 C30 44, 30 56, 38 66 C44 74, 56 74, 62 66 M62 32 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
