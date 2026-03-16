import { WritingTemplate } from "@/types/writing";

export const ruUppercaseZheTemplate: WritingTemplate = {
  id: "ru-uppercase-zhe",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 줴", en: "Uppercase Zhe" },
  nativeLabel: "Ж",
  cue: {
    ko: "중심 세로획을 기준으로 양쪽 대각선을 대칭으로 그리세요.",
    en: "Use the center vertical as the axis for symmetric diagonals.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ж' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ж'.",
  },
  direction: "ltr",
  guidePathD:
    "M50 20 V80 M22 20 L50 50 M78 20 L50 50 M22 80 L50 50 M78 80 L50 50",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
