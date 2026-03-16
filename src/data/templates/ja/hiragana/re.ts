import { WritingTemplate } from "@/types/writing";

export const jaHiraganaReTemplate: WritingTemplate = {
  id: "ja-hiragana-re",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 레", en: "Hiragana Re" },
  nativeLabel: "れ",
  cue: {
    ko: "왼쪽 세로획 후 가로를 긋고 오른쪽 곡선을 아래로 내리세요.",
    en: "Draw the left vertical, then horizontal, and curve down on the right.",
  },
  description: {
    ko: "일본어 히라가나 'れ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'れ'.",
  },
  direction: "ltr",
  guidePathD:
    "M32 25 V75 M32 42 H55 M55 42 C60 52, 65 62, 68 72 C70 78, 65 80, 58 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
