import { WritingTemplate } from "@/types/writing";

export const koMieumTemplate: WritingTemplate = {
  id: "ko-mieum",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "미음",
    en: "Mieum",
  },
  nativeLabel: "ㅁ",
  cue: {
    ko: "윗가로획 뒤에 오른쪽 세로획, 아랫가로획, 왼쪽 세로획 순서로 네모를 닫아 주세요.",
    en: "Draw the top bar, right vertical, bottom bar, then close with the left vertical.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 미음(ㅁ) 템플릿입니다.",
    en: "Mieum (ㅁ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M30 24 L70 24 M70 24 L70 76 M70 76 L30 76 M30 76 L30 24",
  strokeGuides: [
    {
      id: "ko-mieum-1",
      pathD: "M30 24 L70 24",
      order: 1,
    },
    {
      id: "ko-mieum-2",
      pathD: "M70 24 L70 76",
      order: 2,
    },
    {
      id: "ko-mieum-3",
      pathD: "M70 76 L30 76",
      order: 3,
    },
    {
      id: "ko-mieum-4",
      pathD: "M30 76 L30 24",
      order: 4,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
