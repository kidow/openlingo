import { WritingTemplate } from "@/types/writing";

export const koOTemplate: WritingTemplate = {
  id: "ko-o",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "오",
    en: "O",
  },
  nativeLabel: "ㅗ",
  cue: {
    ko: "윗가로획을 긋고 가운데 세로획을 아래로 내려 쓰세요.",
    en: "Draw the top bar, then bring the center vertical downward.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 오(ㅗ) 템플릿입니다.",
    en: "O (ㅗ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M24 34 L76 34 M50 34 L50 68",
  strokeGuides: [
    {
      id: "ko-o-1",
      pathD: "M24 34 L76 34",
      order: 1,
    },
    {
      id: "ko-o-2",
      pathD: "M50 34 L50 68",
      order: 2,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
