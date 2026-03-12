import { WritingTemplate } from "@/types/writing";

export const koEoTemplate: WritingTemplate = {
  id: "ko-eo",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "어",
    en: "Eo",
  },
  nativeLabel: "ㅓ",
  cue: {
    ko: "세로획을 먼저 쓰고 가운데에서 왼쪽 짧은 가로획을 붙여 마무리하세요.",
    en: "Draw the vertical first, then add the short left bar at the middle.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 어(ㅓ) 템플릿입니다.",
    en: "Eo (ㅓ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M58 22 L58 78 M58 50 H32",
  strokeGuides: [
    {
      id: "ko-eo-1",
      pathD: "M58 22 L58 78",
      order: 1,
    },
    {
      id: "ko-eo-2",
      pathD: "M58 50 H32",
      order: 2,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
