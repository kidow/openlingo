import { WritingTemplate } from "@/types/writing";

export const jaKatakanaKeTemplate: WritingTemplate = {
  id: "ja-katakana-ke",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 케", en: "Katakana Ke" },
  nativeLabel: "ケ",
  cue: {
    ko: "가로획, 세로획, 대각선을 차례로 그으세요.",
    en: "Draw horizontal, vertical, then diagonal in sequence.",
  },
  description: {
    ko: "일본어 카타카나 'ケ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ケ'.",
  },
  direction: "ltr",
  guidePathD: "M28 30 H65 M48 22 V50 M48 50 L72 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
