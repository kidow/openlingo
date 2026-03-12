import { WritingTemplate } from "@/types/writing";

export const koUiTemplate: WritingTemplate = {
  id: "ko-ui",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "의",
    en: "Ui",
  },
  nativeLabel: "ㅢ",
  cue: {
    ko: "가운데 가로획을 쓰고 오른쪽 세로획을 내려 의를 완성하세요.",
    en: "Draw the center bar, then add the right vertical.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 의(ㅢ) 템플릿입니다.",
    en: "Ui (ㅢ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M24 50 L64 50 M70 22 L70 78",
  strokeGuides: [
    {
      id: "ko-ui-1",
      pathD: "M24 50 L64 50",
      order: 1,
    },
    {
      id: "ko-ui-2",
      pathD: "M70 22 L70 78",
      order: 2,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
