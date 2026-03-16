import { WritingTemplate } from "@/types/writing";

export const jaKatakanaATemplate: WritingTemplate = {
  id: "ja-katakana-a",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 아", en: "Katakana A" },
  nativeLabel: "ア",
  cue: {
    ko: "짧은 가로획 후 긴 대각선을 내려 그으세요.",
    en: "Draw the short horizontal, then the long diagonal downward.",
  },
  description: {
    ko: "일본어 카타카나 'ア' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ア'.",
  },
  direction: "ltr",
  guidePathD: "M30 30 L55 38 M55 25 L35 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
