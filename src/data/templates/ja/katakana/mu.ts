import { WritingTemplate } from "@/types/writing";

export const jaKatakanaMuTemplate: WritingTemplate = {
  id: "ja-katakana-mu",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 무", en: "Katakana Mu" },
  nativeLabel: "ム",
  cue: {
    ko: "삼각형 형태로 대각선을 그은 뒤 작은 꺾임을 추가하세요.",
    en: "Draw a triangular shape with diagonals, then add a small hook.",
  },
  description: {
    ko: "일본어 카타카나 'ム' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ム'.",
  },
  direction: "ltr",
  guidePathD: "M25 70 L50 25 L75 70 M68 58 L78 65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
