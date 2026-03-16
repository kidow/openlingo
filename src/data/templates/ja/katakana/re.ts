import { WritingTemplate } from "@/types/writing";

export const jaKatakanaReTemplate: WritingTemplate = {
  id: "ja-katakana-re",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 레", en: "Katakana Re" },
  nativeLabel: "レ",
  cue: {
    ko: "세로획을 내린 뒤 오른쪽으로 꺾어 대각선을 그으세요.",
    en: "Draw the vertical down, then angle to the right.",
  },
  description: {
    ko: "일본어 카타카나 'レ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'レ'.",
  },
  direction: "ltr",
  guidePathD: "M35 22 V70 L68 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
