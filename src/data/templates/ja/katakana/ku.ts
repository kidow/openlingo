import { WritingTemplate } from "@/types/writing";

export const jaKatakanaKuTemplate: WritingTemplate = {
  id: "ja-katakana-ku",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 쿠", en: "Katakana Ku" },
  nativeLabel: "ク",
  cue: {
    ko: "짧은 윗획 후 긴 대각선을 내려 그으세요.",
    en: "Draw the short top stroke, then the long diagonal down.",
  },
  description: {
    ko: "일본어 카타카나 'ク' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ク'.",
  },
  direction: "ltr",
  guidePathD: "M35 28 L60 35 M58 25 L30 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
