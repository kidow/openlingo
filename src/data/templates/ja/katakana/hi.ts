import { WritingTemplate } from "@/types/writing";

export const jaKatakanaHiTemplate: WritingTemplate = {
  id: "ja-katakana-hi",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 히", en: "Katakana Hi" },
  nativeLabel: "ヒ",
  cue: {
    ko: "세로획을 먼저 내리고 가로획을 왼쪽에서 붙이세요.",
    en: "Draw the vertical down first, then attach the horizontal from the left.",
  },
  description: {
    ko: "일본어 카타카나 'ヒ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ヒ'.",
  },
  direction: "ltr",
  guidePathD: "M65 25 V65 M30 50 H65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
