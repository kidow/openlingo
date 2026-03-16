import { WritingTemplate } from "@/types/writing";

export const jaKatakanaKaTemplate: WritingTemplate = {
  id: "ja-katakana-ka",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 카", en: "Katakana Ka" },
  nativeLabel: "カ",
  cue: {
    ko: "가로획, 세로획, 대각선을 차례로 그으세요.",
    en: "Draw horizontal, vertical, then diagonal in order.",
  },
  description: {
    ko: "일본어 카타카나 'カ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'カ'.",
  },
  direction: "ltr",
  guidePathD: "M30 30 L65 38 M55 22 V55 L40 78 M55 55 L72 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
