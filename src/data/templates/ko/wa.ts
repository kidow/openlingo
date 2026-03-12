import { WritingTemplate } from "@/types/writing";

export const koWaTemplate: WritingTemplate = {
  id: "ko-wa",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "와",
    en: "Wa",
  },
  nativeLabel: "ㅘ",
  cue: {
    ko: "오를 쓴 뒤 가운데 세로획에서 오른쪽 짧은 가로획을 더해 와를 완성하세요.",
    en: "Write o first, then add the right bar from the center stem.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 와(ㅘ) 템플릿입니다.",
    en: "Wa (ㅘ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M20 34 L68 34 M44 34 L44 72 M44 54 H74",
  strokeGuides: [
    {
      id: "ko-wa-1",
      pathD: "M20 34 L68 34",
      order: 1,
    },
    {
      id: "ko-wa-2",
      pathD: "M44 34 L44 72",
      order: 2,
    },
    {
      id: "ko-wa-3",
      pathD: "M44 54 H74",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
