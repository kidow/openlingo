import { WritingTemplate } from "@/types/writing";

export const koYoTemplate: WritingTemplate = {
  id: "ko-yo",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "요",
    en: "Yo",
  },
  nativeLabel: "ㅛ",
  cue: {
    ko: "윗가로획을 긋고 짧은 세로획 두 개를 아래로 내려 요를 완성하세요.",
    en: "Draw the top bar, then add two short downward stems.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 요(ㅛ) 템플릿입니다.",
    en: "Yo (ㅛ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M24 34 L76 34 M40 34 L40 60 M60 34 L60 60",
  strokeGuides: [
    {
      id: "ko-yo-1",
      pathD: "M24 34 L76 34",
      order: 1,
    },
    {
      id: "ko-yo-2",
      pathD: "M40 34 L40 60",
      order: 2,
    },
    {
      id: "ko-yo-3",
      pathD: "M60 34 L60 60",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
