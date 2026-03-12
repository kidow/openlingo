import { WritingTemplate } from "@/types/writing";

export const koYaeTemplate: WritingTemplate = {
  id: "ko-yae",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "얘",
    en: "Yae",
  },
  nativeLabel: "ㅒ",
  cue: {
    ko: "야 형태를 쓴 뒤 오른쪽 보조 세로획을 더해 얘를 완성하세요.",
    en: "Write ya first, then add the right helper vertical.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 얘(ㅒ) 템플릿입니다.",
    en: "Yae (ㅒ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M40 22 L40 78 M40 40 H64 M40 60 H64 M64 22 L64 78",
  strokeGuides: [
    {
      id: "ko-yae-1",
      pathD: "M40 22 L40 78",
      order: 1,
    },
    {
      id: "ko-yae-2",
      pathD: "M40 40 H64",
      order: 2,
    },
    {
      id: "ko-yae-3",
      pathD: "M40 60 H64",
      order: 3,
    },
    {
      id: "ko-yae-4",
      pathD: "M64 22 L64 78",
      order: 4,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
