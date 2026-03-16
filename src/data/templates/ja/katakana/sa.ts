import { WritingTemplate } from "@/types/writing";

export const jaKatakanaSaTemplate: WritingTemplate = {
  id: "ja-katakana-sa",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 사", en: "Katakana Sa" },
  nativeLabel: "サ",
  cue: {
    ko: "짧은 세로획 두 개 후 가로획을 긋고 아래 세로획을 내리세요.",
    en: "Draw two short verticals, the horizontal, then the long vertical down.",
  },
  description: {
    ko: "일본어 카타카나 'サ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'サ'.",
  },
  direction: "ltr",
  guidePathD: "M35 22 V48 M58 22 V48 M25 40 H75 M50 48 V78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
