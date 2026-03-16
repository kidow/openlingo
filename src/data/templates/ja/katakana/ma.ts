import { WritingTemplate } from "@/types/writing";

export const jaKatakanaMaTemplate: WritingTemplate = {
  id: "ja-katakana-ma",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 마", en: "Katakana Ma" },
  nativeLabel: "マ",
  cue: {
    ko: "가로획 후 대각선을 왼쪽 아래로 내려 그으세요.",
    en: "Draw the horizontal, then a diagonal going down to the left.",
  },
  description: {
    ko: "일본어 카타카나 'マ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'マ'.",
  },
  direction: "ltr",
  guidePathD: "M25 30 H75 M68 30 L30 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
