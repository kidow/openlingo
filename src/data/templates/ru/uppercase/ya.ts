import { WritingTemplate } from "@/types/writing";

export const ruUppercaseYaTemplate: WritingTemplate = {
  id: "ru-uppercase-ya",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 야", en: "Uppercase Ya" },
  nativeLabel: "Я",
  cue: {
    ko: "오른쪽 세로획을 기준으로 상단 둥근 부분과 왼쪽 대각선을 균형 있게 그리세요.",
    en: "Balance the upper bowl and left diagonal around the right vertical.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Я' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Я'.",
  },
  direction: "ltr",
  guidePathD:
    "M72 20 V80 M72 20 H42 C26 20, 26 50, 42 50 H72 M42 50 L24 80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
