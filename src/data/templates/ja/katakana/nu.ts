import { WritingTemplate } from "@/types/writing";

export const jaKatakanaNuTemplate: WritingTemplate = {
  id: "ja-katakana-nu",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 누", en: "Katakana Nu" },
  nativeLabel: "ヌ",
  cue: {
    ko: "가로획 후 X자 형태의 교차 대각선을 그으세요.",
    en: "Draw the horizontal, then the X-shaped crossing diagonals.",
  },
  description: {
    ko: "일본어 카타카나 'ヌ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ヌ'.",
  },
  direction: "ltr",
  guidePathD: "M28 28 H72 M65 28 L30 75 M35 50 L70 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
