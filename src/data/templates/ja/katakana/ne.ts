import { WritingTemplate } from "@/types/writing";

export const jaKatakanaNeTemplate: WritingTemplate = {
  id: "ja-katakana-ne",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 네", en: "Katakana Ne" },
  nativeLabel: "ネ",
  cue: {
    ko: "윗점, 가로획, 세로획, 대각선을 순서대로 그으세요.",
    en: "Draw top mark, horizontal, vertical, then diagonal in order.",
  },
  description: {
    ko: "일본어 카타카나 'ネ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ネ'.",
  },
  direction: "ltr",
  guidePathD: "M48 20 L52 28 M25 38 H75 M50 28 V78 M50 50 L28 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
