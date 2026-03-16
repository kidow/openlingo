import { WritingTemplate } from "@/types/writing";

export const jaKatakanaSeTemplate: WritingTemplate = {
  id: "ja-katakana-se",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 세", en: "Katakana Se" },
  nativeLabel: "セ",
  cue: {
    ko: "세로획, 가로획 교차 후 오른쪽 대각선을 내려 그으세요.",
    en: "Cross the vertical and horizontal, then draw the right diagonal down.",
  },
  description: {
    ko: "일본어 카타카나 'セ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'セ'.",
  },
  direction: "ltr",
  guidePathD: "M35 22 V50 M25 42 H70 M55 42 L70 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
