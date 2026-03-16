import { WritingTemplate } from "@/types/writing";

export const jaKatakanaTaTemplate: WritingTemplate = {
  id: "ja-katakana-ta",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 타", en: "Katakana Ta" },
  nativeLabel: "タ",
  cue: {
    ko: "가로획과 짧은 점 후 긴 대각선을 내려 그으세요.",
    en: "Draw the horizontal and short mark, then the long diagonal.",
  },
  description: {
    ko: "일본어 카타카나 'タ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'タ'.",
  },
  direction: "ltr",
  guidePathD: "M25 30 H68 M55 22 L60 35 M58 30 L30 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
