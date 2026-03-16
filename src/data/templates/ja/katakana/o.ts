import { WritingTemplate } from "@/types/writing";

export const jaKatakanaOTemplate: WritingTemplate = {
  id: "ja-katakana-o",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 오", en: "Katakana O" },
  nativeLabel: "オ",
  cue: {
    ko: "가로획과 세로획을 교차시킨 뒤 대각선을 추가하세요.",
    en: "Cross the horizontal and vertical, then add the diagonal.",
  },
  description: {
    ko: "일본어 카타카나 'オ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'オ'.",
  },
  direction: "ltr",
  guidePathD: "M25 35 H70 M50 22 V78 M55 35 L75 70",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
