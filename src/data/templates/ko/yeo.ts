import { WritingTemplate } from "@/types/writing";

export const koYeoTemplate: WritingTemplate = {
  id: "ko-yeo",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "여",
    en: "Yeo",
  },
  nativeLabel: "ㅕ",
  cue: {
    ko: "세로획 뒤에 왼쪽 짧은 가로획 두 개를 차례로 붙여 쓰세요.",
    en: "Draw the vertical, then place two short left bars in order.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 여(ㅕ) 템플릿입니다.",
    en: "Yeo (ㅕ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M58 22 L58 78 M58 40 H32 M58 60 H32",
  strokeGuides: [
    {
      id: "ko-yeo-1",
      pathD: "M58 22 L58 78",
      order: 1,
    },
    {
      id: "ko-yeo-2",
      pathD: "M58 40 H32",
      order: 2,
    },
    {
      id: "ko-yeo-3",
      pathD: "M58 60 H32",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
