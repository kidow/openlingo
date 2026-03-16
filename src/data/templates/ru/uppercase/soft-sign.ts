import { WritingTemplate } from "@/types/writing";

export const ruUppercaseSoftSignTemplate: WritingTemplate = {
  id: "ru-uppercase-soft-sign",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 먀흐키 즈나크", en: "Uppercase Soft Sign" },
  nativeLabel: "Ь",
  cue: {
    ko: "세로획을 먼저 긋고 중간에서 오른쪽 둥근 부분을 부드럽게 연결하세요.",
    en: "Draw the vertical first, then attach the right bowl from the midpoint.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ь' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ь'.",
  },
  direction: "ltr",
  guidePathD: "M32 20 V80 M32 50 H56 C72 50, 72 80, 56 80 H32",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
