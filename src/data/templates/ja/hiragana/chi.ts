import { WritingTemplate } from "@/types/writing";

export const jaHiraganaChiTemplate: WritingTemplate = {
  id: "ja-hiragana-chi",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 치", en: "Hiragana Chi" },
  nativeLabel: "ち",
  cue: {
    ko: "가로획 후 큰 곡선을 왼쪽으로 감아 마무리하세요.",
    en: "After the horizontal stroke, sweep a large curve to the left.",
  },
  description: {
    ko: "일본어 히라가나 'ち' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ち'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 30 H60 M50 30 C50 45, 58 52, 65 52 C58 62, 42 72, 30 65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
