import { WritingTemplate } from "@/types/writing";

export const jaKatakanaRaTemplate: WritingTemplate = {
  id: "ja-katakana-ra",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 라", en: "Katakana Ra" },
  nativeLabel: "ラ",
  cue: {
    ko: "가로획 후 아래로 곡선을 내려 그으세요.",
    en: "Draw the horizontal, then curve downward.",
  },
  description: {
    ko: "일본어 카타카나 'ラ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ラ'.",
  },
  direction: "ltr",
  guidePathD: "M28 30 H68 M55 30 C50 45, 40 60, 32 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
