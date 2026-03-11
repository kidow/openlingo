import { WritingTemplate } from "@/types/writing";

export const koGiyeokTemplate: WritingTemplate = {
  id: "ko-giyeok",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "기역",
    en: "Giyeok",
  },
  nativeLabel: "ㄱ",
  cue: {
    ko: "세로획을 안정적으로 내리고 아래 가로획을 또렷하게 마무리하세요.",
    en: "Square corner with a steady downstroke.",
  },
  description: {
    ko: "한국어 MVP 세트를 위한 첫 프로토타입 템플릿입니다.",
    en: "Prototype starter for the Korean MVP set.",
  },
  direction: "ltr",
  guidePathD: "M30 24 L30 76 L72 76",
  strokeGuides: [
    {
      id: "ko-giyeok-1",
      pathD: "M30 24 L30 76",
      order: 1,
    },
    {
      id: "ko-giyeok-2",
      pathD: "M30 76 L72 76",
      order: 2,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
