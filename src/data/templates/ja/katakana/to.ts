import { WritingTemplate } from "@/types/writing";

export const jaKatakanaToTemplate: WritingTemplate = {
  id: "ja-katakana-to",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 토", en: "Katakana To" },
  nativeLabel: "ト",
  cue: {
    ko: "세로획을 내린 뒤 오른쪽으로 대각선을 뻗으세요.",
    en: "Draw the vertical down, then extend a diagonal to the right.",
  },
  description: {
    ko: "일본어 카타카나 'ト' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ト'.",
  },
  direction: "ltr",
  guidePathD: "M38 22 V78 M38 45 L68 65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
