import { WritingTemplate } from "@/types/writing";

export const jaHiraganaSuTemplate: WritingTemplate = {
  id: "ja-hiragana-su",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 스", en: "Hiragana Su" },
  nativeLabel: "す",
  cue: {
    ko: "가로획 후 세로획을 내려 아래 고리를 자연스럽게 만드세요.",
    en: "Draw the horizontal stroke, then the vertical with a loop at the bottom.",
  },
  description: {
    ko: "일본어 히라가나 'す' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'す'.",
  },
  direction: "ltr",
  guidePathD:
    "M25 32 H70 M50 22 V58 C50 68, 42 75, 35 72 C28 68, 30 60, 38 56",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
