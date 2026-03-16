import { WritingTemplate } from "@/types/writing";

export const jaKatakanaITemplate: WritingTemplate = {
  id: "ja-katakana-i",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 이", en: "Katakana I" },
  nativeLabel: "イ",
  cue: {
    ko: "오른쪽에서 내려오는 짧은 대각선 후 긴 세로획을 그으세요.",
    en: "Draw the short diagonal from the right, then the long vertical.",
  },
  description: {
    ko: "일본어 카타카나 'イ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'イ'.",
  },
  direction: "ltr",
  guidePathD: "M60 25 L42 50 M42 28 V75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
