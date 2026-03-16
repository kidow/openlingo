import { WritingTemplate } from "@/types/writing";

export const jaHiraganaNeTemplate: WritingTemplate = {
  id: "ja-hiragana-ne",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 네", en: "Hiragana Ne" },
  nativeLabel: "ね",
  cue: {
    ko: "세로획 후 가로획을 긋고 오른쪽 고리를 이어가세요.",
    en: "Draw the vertical, then horizontal, and connect the right loop.",
  },
  description: {
    ko: "일본어 히라가나 'ね' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ね'.",
  },
  direction: "ltr",
  guidePathD:
    "M32 25 V70 M25 42 H55 M55 42 C65 48, 72 58, 68 68 C64 75, 55 78, 48 74 C42 70, 42 62, 48 58",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
