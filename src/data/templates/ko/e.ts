import { WritingTemplate } from "@/types/writing";

export const koETemplate: WritingTemplate = {
  id: "ko-e",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "에",
    en: "E",
  },
  nativeLabel: "ㅔ",
  cue: {
    ko: "세로획 뒤에 왼쪽 짧은 가로획 두 개와 보조 세로획을 더해 쓰세요.",
    en: "After the main vertical, add two left bars and the helper vertical.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 에(ㅔ) 템플릿입니다.",
    en: "E (ㅔ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M58 22 L58 78 M58 40 H34 M58 60 H34 M34 22 L34 78",
  strokeGuides: [
    {
      id: "ko-e-1",
      pathD: "M58 22 L58 78",
      order: 1,
    },
    {
      id: "ko-e-2",
      pathD: "M58 40 H34",
      order: 2,
    },
    {
      id: "ko-e-3",
      pathD: "M58 60 H34",
      order: 3,
    },
    {
      id: "ko-e-4",
      pathD: "M34 22 L34 78",
      order: 4,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
