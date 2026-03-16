import { WritingTemplate } from "@/types/writing";

export const jaKatakanaChiTemplate: WritingTemplate = {
  id: "ja-katakana-chi",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 치", en: "Katakana Chi" },
  nativeLabel: "チ",
  cue: {
    ko: "짧은 곡선, 가로획, 세로획 순서로 그으세요.",
    en: "Draw the short curve, horizontal, then vertical in order.",
  },
  description: {
    ko: "일본어 카타카나 'チ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'チ'.",
  },
  direction: "ltr",
  guidePathD:
    "M35 25 C42 22, 55 25, 58 30 M25 42 H75 M50 42 V78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
