import { WritingTemplate } from "@/types/writing";

export const jaHiraganaHeTemplate: WritingTemplate = {
  id: "ja-hiragana-he",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 헤", en: "Hiragana He" },
  nativeLabel: "へ",
  cue: {
    ko: "산 모양의 꺾임을 또렷하게 표현하세요.",
    en: "Make the mountain-shaped angle clear and sharp.",
  },
  description: {
    ko: "일본어 히라가나 'へ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'へ'.",
  },
  direction: "ltr",
  guidePathD: "M22 55 L50 30 L78 65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
