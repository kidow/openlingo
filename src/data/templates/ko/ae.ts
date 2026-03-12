import { WritingTemplate } from "@/types/writing";

export const koAeTemplate: WritingTemplate = {
  id: "ko-ae",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "애",
    en: "Ae",
  },
  nativeLabel: "ㅐ",
  cue: {
    ko: "세로획을 세운 뒤 오른쪽 짧은 가로획 두 개와 보조 세로획을 더해 쓰세요.",
    en: "Draw the main vertical, then add two right bars and the helper vertical.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 애(ㅐ) 템플릿입니다.",
    en: "Ae (ㅐ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M42 22 L42 78 M42 40 H66 M42 60 H66 M66 22 L66 78",
  strokeGuides: [
    {
      id: "ko-ae-1",
      pathD: "M42 22 L42 78",
      order: 1,
    },
    {
      id: "ko-ae-2",
      pathD: "M42 40 H66",
      order: 2,
    },
    {
      id: "ko-ae-3",
      pathD: "M42 60 H66",
      order: 3,
    },
    {
      id: "ko-ae-4",
      pathD: "M66 22 L66 78",
      order: 4,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
