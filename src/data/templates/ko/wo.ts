import { WritingTemplate } from "@/types/writing";

export const koWoTemplate: WritingTemplate = {
  id: "ko-wo",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "워",
    en: "Wo",
  },
  nativeLabel: "ㅝ",
  cue: {
    ko: "우 형태를 쓰고 가운데에서 왼쪽 짧은 가로획을 더해 워를 완성하세요.",
    en: "Write u first, then add a short left bar from the center.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 워(ㅝ) 템플릿입니다.",
    en: "Wo (ㅝ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M20 66 L68 66 M44 66 L44 32 M44 50 H20",
  strokeGuides: [
    {
      id: "ko-wo-1",
      pathD: "M20 66 L68 66",
      order: 1,
    },
    {
      id: "ko-wo-2",
      pathD: "M44 66 L44 32",
      order: 2,
    },
    {
      id: "ko-wo-3",
      pathD: "M44 50 H20",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
