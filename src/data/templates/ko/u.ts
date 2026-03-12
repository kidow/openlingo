import { WritingTemplate } from "@/types/writing";

export const koUTemplate: WritingTemplate = {
  id: "ko-u",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "우",
    en: "U",
  },
  nativeLabel: "ㅜ",
  cue: {
    ko: "아랫가로획을 먼저 긋고 가운데 세로획을 위로 올려 쓰세요.",
    en: "Draw the bottom bar first, then move the center vertical upward.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 우(ㅜ) 템플릿입니다.",
    en: "U (ㅜ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M24 66 L76 66 M50 66 L50 32",
  strokeGuides: [
    {
      id: "ko-u-1",
      pathD: "M24 66 L76 66",
      order: 1,
    },
    {
      id: "ko-u-2",
      pathD: "M50 66 L50 32",
      order: 2,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
