import { WritingTemplate } from "@/types/writing";

export const koSiotTemplate: WritingTemplate = {
  id: "ko-siot",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "시옷",
    en: "Siot",
  },
  nativeLabel: "ㅅ",
  cue: {
    ko: "꼭짓점에서 시작해 왼쪽 대각선을 먼저 내리고, 오른쪽 대각선으로 균형을 맞춰 마무리하세요.",
    en: "Start at the apex, draw the left diagonal first, then balance with the right diagonal.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 시옷(ㅅ) 템플릿입니다.",
    en: "Siot (ㅅ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M50 24 L34 76 M50 24 L66 76",
  strokeGuides: [
    {
      id: "ko-siot-1",
      pathD: "M50 24 L34 76",
      order: 1,
    },
    {
      id: "ko-siot-2",
      pathD: "M50 24 L66 76",
      order: 2,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
