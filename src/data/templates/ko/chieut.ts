import { WritingTemplate } from "@/types/writing";

export const koChieutTemplate: WritingTemplate = {
  id: "ko-chieut",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "치읓",
    en: "Chieut",
  },
  nativeLabel: "ㅊ",
  cue: {
    ko: "짧은 윗획을 먼저 넣고, 가로획 다음 왼쪽·오른쪽 대각선을 내려 치읓의 균형을 맞춰 보세요.",
    en: "Add the short top tick first, then draw the bar and both diagonals in sequence.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 치읓(ㅊ) 템플릿입니다.",
    en: "Chieut (ㅊ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M40 24 L60 24 M32 34 L68 34 M38 40 L50 76 M62 40 L50 76",
  strokeGuides: [
    {
      id: "ko-chieut-1",
      pathD: "M40 24 L60 24",
      order: 1,
    },
    {
      id: "ko-chieut-2",
      pathD: "M32 34 L68 34",
      order: 2,
    },
    {
      id: "ko-chieut-3",
      pathD: "M38 40 L50 76",
      order: 3,
    },
    {
      id: "ko-chieut-4",
      pathD: "M62 40 L50 76",
      order: 4,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
