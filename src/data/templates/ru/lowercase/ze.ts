import { WritingTemplate } from "@/types/writing";

export const ruLowercaseZeTemplate: WritingTemplate = {
  id: "ru-lowercase-ze",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 з", en: "Lowercase з" },
  nativeLabel: "з",
  cue: {
    ko: "위아래 곡선의 연결 부분을 부드럽게 처리하세요.",
    en: "Smooth the junction where the two curves meet.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'з' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'з'.",
  },
  direction: "ltr",
  guidePathD:
    "M34 40 C42 32, 58 32, 64 42 C68 50, 60 56, 50 56 C60 56, 70 62, 66 72 C62 80, 44 82, 34 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
