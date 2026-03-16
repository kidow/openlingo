import { WritingTemplate } from "@/types/writing";

export const jaKatakanaHoTemplate: WritingTemplate = {
  id: "ja-katakana-ho",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 호", en: "Katakana Ho" },
  nativeLabel: "ホ",
  cue: {
    ko: "가로획, 세로획 후 좌우 대각선을 추가하세요.",
    en: "Draw horizontal, vertical, then add left and right diagonals.",
  },
  description: {
    ko: "일본어 카타카나 'ホ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ホ'.",
  },
  direction: "ltr",
  guidePathD: "M25 28 H75 M50 28 V78 M50 50 L28 78 M50 50 L72 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
