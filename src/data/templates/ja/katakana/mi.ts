import { WritingTemplate } from "@/types/writing";

export const jaKatakanaMiTemplate: WritingTemplate = {
  id: "ja-katakana-mi",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 미", en: "Katakana Mi" },
  nativeLabel: "ミ",
  cue: {
    ko: "세 개의 가로획을 길이를 달리하여 균형 있게 그으세요.",
    en: "Draw three horizontal strokes with varying lengths for balance.",
  },
  description: {
    ko: "일본어 카타카나 'ミ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ミ'.",
  },
  direction: "ltr",
  guidePathD: "M35 28 H65 M30 50 H70 M35 72 H65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
