import { WritingTemplate } from "@/types/writing";

export const koJieutTemplate: WritingTemplate = {
  id: "ko-jieut",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "지읒",
    en: "Jieut",
  },
  nativeLabel: "ㅈ",
  cue: {
    ko: "윗가로획을 먼저 긋고, 왼쪽·오른쪽 대각선을 차례로 내려 지읒의 균형을 맞춰 보세요.",
    en: "Draw the top bar first, then add the left and right diagonals in order.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 지읒(ㅈ) 템플릿입니다.",
    en: "Jieut (ㅈ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M32 30 L68 30 M38 36 L50 76 M62 36 L50 76",
  strokeGuides: [
    {
      id: "ko-jieut-1",
      pathD: "M32 30 L68 30",
      order: 1,
    },
    {
      id: "ko-jieut-2",
      pathD: "M38 36 L50 76",
      order: 2,
    },
    {
      id: "ko-jieut-3",
      pathD: "M62 36 L50 76",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
