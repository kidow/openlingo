import { WritingTemplate } from "@/types/writing";

export const jaKatakanaRuTemplate: WritingTemplate = {
  id: "ja-katakana-ru",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 루", en: "Katakana Ru" },
  nativeLabel: "ル",
  cue: {
    ko: "왼쪽 세로획에서 곡선으로 이어가고 오른쪽 대각선을 추가하세요.",
    en: "Draw the left vertical curving out, then add the right diagonal.",
  },
  description: {
    ko: "일본어 카타카나 'ル' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ル'.",
  },
  direction: "ltr",
  guidePathD: "M35 25 V65 C35 72, 42 78, 50 75 M55 25 L72 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
