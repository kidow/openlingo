import { WritingTemplate } from "@/types/writing";

export const jaKatakanaNaTemplate: WritingTemplate = {
  id: "ja-katakana-na",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 나", en: "Katakana Na" },
  nativeLabel: "ナ",
  cue: {
    ko: "가로획을 먼저 긋고 대각선을 교차시켜 내리세요.",
    en: "Draw the horizontal first, then cross with a diagonal down.",
  },
  description: {
    ko: "일본어 카타카나 'ナ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ナ'.",
  },
  direction: "ltr",
  guidePathD: "M25 35 H72 M55 22 L32 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
