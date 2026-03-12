import { WritingTemplate } from "@/types/writing";

export const koEuTemplate: WritingTemplate = {
  id: "ko-eu",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "으",
    en: "Eu",
  },
  nativeLabel: "ㅡ",
  cue: {
    ko: "가운데 높이에서 수평 가로획을 곧게 유지해 쓰세요.",
    en: "Keep a steady horizontal stroke across the center.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 으(ㅡ) 템플릿입니다.",
    en: "Eu (ㅡ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M24 50 L76 50",
  strokeGuides: [
    {
      id: "ko-eu-1",
      pathD: "M24 50 L76 50",
      order: 1,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
