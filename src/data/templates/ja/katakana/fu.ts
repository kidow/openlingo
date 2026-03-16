import { WritingTemplate } from "@/types/writing";

export const jaKatakanaFuTemplate: WritingTemplate = {
  id: "ja-katakana-fu",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 후", en: "Katakana Fu" },
  nativeLabel: "フ",
  cue: {
    ko: "짧은 가로획 후 긴 대각선을 내려 그으세요.",
    en: "Draw the short horizontal, then the long diagonal down.",
  },
  description: {
    ko: "일본어 카타카나 'フ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'フ'.",
  },
  direction: "ltr",
  guidePathD: "M30 28 L65 32 M62 28 L30 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
