import { WritingTemplate } from "@/types/writing";

export const jaHiraganaKaTemplate: WritingTemplate = {
  id: "ja-hiragana-ka",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 카", en: "Hiragana Ka" },
  nativeLabel: "か",
  cue: {
    ko: "세로획을 먼저 긋고 오른쪽 곡선을 자연스럽게 붙이세요.",
    en: "Draw the vertical stroke first, then add the curved right part.",
  },
  description: {
    ko: "일본어 히라가나 'か' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'か'.",
  },
  direction: "ltr",
  guidePathD:
    "M25 35 H55 M40 22 V65 M58 35 C62 45, 68 58, 75 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
