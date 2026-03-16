import { WritingTemplate } from "@/types/writing";

export const jaHiraganaFuTemplate: WritingTemplate = {
  id: "ja-hiragana-fu",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 후", en: "Hiragana Fu" },
  nativeLabel: "ふ",
  cue: {
    ko: "윗점을 찍고 아래 좌우 곡선을 펼치세요.",
    en: "Place the top mark, then spread the left and right curves below.",
  },
  description: {
    ko: "일본어 히라가나 'ふ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ふ'.",
  },
  direction: "ltr",
  guidePathD:
    "M48 25 C50 28, 52 28, 54 25 M35 45 C30 55, 28 68, 32 75 M65 45 C70 55, 72 68, 68 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
