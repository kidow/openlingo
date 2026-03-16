import { WritingTemplate } from "@/types/writing";

export const ruUppercaseATemplate: WritingTemplate = {
  id: "ru-uppercase-a",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 아", en: "Uppercase A" },
  nativeLabel: "А",
  cue: {
    ko: "두 대각선을 꼭짓점에서 만나게 하고 중간 가로획을 수평으로 긋세요.",
    en: "Meet two diagonals at the apex and add a level crossbar.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'А' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'А'.",
  },
  direction: "ltr",
  guidePathD: "M50 20 L24 80 M50 20 L76 80 M34 56 H66",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
