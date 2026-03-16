import { WritingTemplate } from "@/types/writing";

export const jaHiraganaHoTemplate: WritingTemplate = {
  id: "ja-hiragana-ho",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 호", en: "Hiragana Ho" },
  nativeLabel: "ほ",
  cue: {
    ko: "왼쪽 세로획, 가로획 교차 후 오른쪽 고리와 점을 추가하세요.",
    en: "Draw left vertical, cross horizontal, then add the right loop and dot.",
  },
  description: {
    ko: "일본어 히라가나 'ほ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ほ'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 25 V75 M25 40 H70 M55 40 V60 C55 70, 48 75, 42 72 C36 68, 36 62, 42 58 M62 55 L65 58",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
