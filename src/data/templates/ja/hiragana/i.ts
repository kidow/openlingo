import { WritingTemplate } from "@/types/writing";

export const jaHiraganaITemplate: WritingTemplate = {
  id: "ja-hiragana-i",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 이", en: "Hiragana I" },
  nativeLabel: "い",
  cue: {
    ko: "두 획의 간격을 일정하게 유지하세요.",
    en: "Keep consistent spacing between the two strokes.",
  },
  description: {
    ko: "일본어 히라가나 'い' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'い'.",
  },
  direction: "ltr",
  guidePathD: "M35 30 C33 45, 30 60, 32 72 M60 28 C62 42, 65 55, 62 70",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
