import { WritingTemplate } from "@/types/writing";

export const ruLowercaseSoftSignTemplate: WritingTemplate = {
  id: "ru-lowercase-soft-sign",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 연자음 부호", en: "Lowercase Soft Sign" },
  nativeLabel: "ь",
  cue: {
    ko: "세로획을 먼저 긋고 중간에서 오른쪽 둥근 부분을 연결하세요.",
    en: "Draw the vertical first, then attach the right bowl from the midpoint.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ь' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ь'.",
  },
  direction: "ltr",
  guidePathD: "M34 36 V76 M34 56 H54 C68 56, 68 76, 54 76 H34",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
