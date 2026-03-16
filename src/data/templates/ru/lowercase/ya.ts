import { WritingTemplate } from "@/types/writing";

export const ruLowercaseYaTemplate: WritingTemplate = {
  id: "ru-lowercase-ya",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 야", en: "Lowercase Ya" },
  nativeLabel: "я",
  cue: {
    ko: "오른쪽 세로획을 기준으로 상단 둥근 부분과 왼쪽 대각선을 균형 있게 그리세요.",
    en: "Balance the upper bowl and left diagonal around the right vertical.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'я' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'я'.",
  },
  direction: "ltr",
  guidePathD:
    "M68 36 V76 M68 36 H46 C32 36, 32 58, 46 58 H68 M46 58 L28 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
