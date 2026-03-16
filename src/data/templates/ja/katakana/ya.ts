import { WritingTemplate } from "@/types/writing";

export const jaKatakanaYaTemplate: WritingTemplate = {
  id: "ja-katakana-ya",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 야", en: "Katakana Ya" },
  nativeLabel: "ヤ",
  cue: {
    ko: "가로획, 세로획, 대각선을 균형 있게 배치하세요.",
    en: "Balance the horizontal, vertical, and diagonal strokes.",
  },
  description: {
    ko: "일본어 카타카나 'ヤ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ヤ'.",
  },
  direction: "ltr",
  guidePathD: "M25 35 H65 M50 22 V78 M55 35 L72 65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
