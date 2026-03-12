import { WritingTemplate } from "@/types/writing";

export const koPieupTemplate: WritingTemplate = {
  id: "ko-pieup",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "피읖",
    en: "Pieup",
  },
  nativeLabel: "ㅍ",
  cue: {
    ko: "위아래 가로획을 쓰고 양쪽 세로획을 세운 뒤, 가운데 가로획을 넣어 마무리하세요.",
    en: "Draw top and bottom bars, add both verticals, then place the center bar.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 피읖(ㅍ) 템플릿입니다.",
    en: "Pieup (ㅍ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M30 24 L70 24 M30 24 L30 76 M70 24 L70 76 M30 76 L70 76 M30 50 L70 50",
  strokeGuides: [
    { id: "ko-pieup-1", pathD: "M30 24 L70 24", order: 1 },
    { id: "ko-pieup-2", pathD: "M30 24 L30 76", order: 2 },
    { id: "ko-pieup-3", pathD: "M70 24 L70 76", order: 3 },
    { id: "ko-pieup-4", pathD: "M30 76 L70 76", order: 4 },
    { id: "ko-pieup-5", pathD: "M30 50 L70 50", order: 5 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
