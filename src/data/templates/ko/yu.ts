import { WritingTemplate } from "@/types/writing";

export const koYuTemplate: WritingTemplate = {
  id: "ko-yu",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "유",
    en: "Yu",
  },
  nativeLabel: "ㅠ",
  cue: {
    ko: "아랫가로획을 먼저 쓰고 짧은 세로획 두 개를 위로 올려 유를 완성하세요.",
    en: "Draw the bottom bar first, then add two short upward stems.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 유(ㅠ) 템플릿입니다.",
    en: "Yu (ㅠ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M24 66 L76 66 M40 66 L40 40 M60 66 L60 40",
  strokeGuides: [
    {
      id: "ko-yu-1",
      pathD: "M24 66 L76 66",
      order: 1,
    },
    {
      id: "ko-yu-2",
      pathD: "M40 66 L40 40",
      order: 2,
    },
    {
      id: "ko-yu-3",
      pathD: "M60 66 L60 40",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
