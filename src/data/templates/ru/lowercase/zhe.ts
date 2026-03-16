import { WritingTemplate } from "@/types/writing";

export const ruLowercaseZheTemplate: WritingTemplate = {
  id: "ru-lowercase-zhe",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 ж", en: "Lowercase ж" },
  nativeLabel: "ж",
  cue: {
    ko: "중심 세로획을 기준으로 대각선을 대칭으로 그리세요.",
    en: "Use the center vertical as the axis for symmetric diagonals.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ж' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ж'.",
  },
  direction: "ltr",
  guidePathD:
    "M50 36 V76 M26 36 L50 56 M74 36 L50 56 M26 76 L50 56 M74 76 L50 56",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
