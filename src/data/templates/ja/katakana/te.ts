import { WritingTemplate } from "@/types/writing";

export const jaKatakanaTeTemplate: WritingTemplate = {
  id: "ja-katakana-te",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 테", en: "Katakana Te" },
  nativeLabel: "テ",
  cue: {
    ko: "짧은 가로획, 긴 가로획, 세로획 순서로 그으세요.",
    en: "Draw the short horizontal, long horizontal, then vertical.",
  },
  description: {
    ko: "일본어 카타카나 'テ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'テ'.",
  },
  direction: "ltr",
  guidePathD: "M35 28 H65 M25 45 H75 M50 45 V78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
