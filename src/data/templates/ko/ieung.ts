import { WritingTemplate } from "@/types/writing";

export const koIeungTemplate: WritingTemplate = {
  id: "ko-ieung",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "이응",
    en: "Ieung",
  },
  nativeLabel: "ㅇ",
  cue: {
    ko: "윗부분에서 시작해 둥근 곡선을 한 번에 이어, 시작점 근처에서 자연스럽게 닫아 주세요.",
    en: "Start near the top and continue a smooth circular stroke that closes near the start.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 이응(ㅇ) 템플릿입니다.",
    en: "Ieung (ㅇ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M50 24 C64 24, 76 36, 76 50 C76 64, 64 76, 50 76 C36 76, 24 64, 24 50 C24 36, 36 24, 50 24",
  strokeGuides: [
    {
      id: "ko-ieung-1",
      pathD: "M50 24 C64 24, 76 36, 76 50 C76 64, 64 76, 50 76 C36 76, 24 64, 24 50 C24 36, 36 24, 50 24",
      order: 1,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
