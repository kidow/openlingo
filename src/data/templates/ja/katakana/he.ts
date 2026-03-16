import { WritingTemplate } from "@/types/writing";

export const jaKatakanaHeTemplate: WritingTemplate = {
  id: "ja-katakana-he",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 헤", en: "Katakana He" },
  nativeLabel: "ヘ",
  cue: {
    ko: "산 모양의 꺾임을 또렷하게 표현하세요.",
    en: "Make the mountain-shaped angle clear and sharp.",
  },
  description: {
    ko: "일본어 카타카나 'ヘ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ヘ'.",
  },
  direction: "ltr",
  guidePathD: "M22 55 L50 30 L78 65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
