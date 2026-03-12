import { WritingTemplate } from "@/types/writing";

export const koDigeutTemplate: WritingTemplate = {
  id: "ko-digeut",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "디귿",
    en: "Digeut",
  },
  nativeLabel: "ㄷ",
  cue: {
    ko: "윗가로획을 먼저 긋고, 왼쪽 세로획 뒤에 아랫가로획으로 닫아 주세요.",
    en: "Start with the top bar, then draw the left vertical and close with the bottom bar.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 디귿(ㄷ) 템플릿입니다.",
    en: "Digeut (ㄷ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M30 24 L70 24 M30 24 L30 76 M30 76 L70 76",
  strokeGuides: [
    {
      id: "ko-digeut-1",
      pathD: "M30 24 L70 24",
      order: 1,
    },
    {
      id: "ko-digeut-2",
      pathD: "M30 24 L30 76",
      order: 2,
    },
    {
      id: "ko-digeut-3",
      pathD: "M30 76 L70 76",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
