import { WritingTemplate } from "@/types/writing";

export const koTieutTemplate: WritingTemplate = {
  id: "ko-tieut",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "티읕",
    en: "Tieut",
  },
  nativeLabel: "ㅌ",
  cue: {
    ko: "윗가로획과 왼쪽 세로획을 쓰고, 가운데 가로획 뒤에 아랫가로획으로 마무리하세요.",
    en: "Draw top bar and left vertical, add middle bar, then finish with bottom bar.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 티읕(ㅌ) 템플릿입니다.",
    en: "Tieut (ㅌ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M30 24 L70 24 M30 24 L30 76 M30 50 L66 50 M30 76 L70 76",
  strokeGuides: [
    { id: "ko-tieut-1", pathD: "M30 24 L70 24", order: 1 },
    { id: "ko-tieut-2", pathD: "M30 24 L30 76", order: 2 },
    { id: "ko-tieut-3", pathD: "M30 50 L66 50", order: 3 },
    { id: "ko-tieut-4", pathD: "M30 76 L70 76", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
