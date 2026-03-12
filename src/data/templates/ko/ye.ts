import { WritingTemplate } from "@/types/writing";

export const koYeTemplate: WritingTemplate = {
  id: "ko-ye",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "예",
    en: "Ye",
  },
  nativeLabel: "ㅖ",
  cue: {
    ko: "여 형태를 쓴 뒤 왼쪽 보조 세로획을 더해 예를 완성하세요.",
    en: "Write yeo first, then add the left helper vertical.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 예(ㅖ) 템플릿입니다.",
    en: "Ye (ㅖ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M60 22 L60 78 M60 40 H36 M60 60 H36 M36 22 L36 78",
  strokeGuides: [
    {
      id: "ko-ye-1",
      pathD: "M60 22 L60 78",
      order: 1,
    },
    {
      id: "ko-ye-2",
      pathD: "M60 40 H36",
      order: 2,
    },
    {
      id: "ko-ye-3",
      pathD: "M60 60 H36",
      order: 3,
    },
    {
      id: "ko-ye-4",
      pathD: "M36 22 L36 78",
      order: 4,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
