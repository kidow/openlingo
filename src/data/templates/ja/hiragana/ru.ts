import { WritingTemplate } from "@/types/writing";

export const jaHiraganaRuTemplate: WritingTemplate = {
  id: "ja-hiragana-ru",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 루", en: "Hiragana Ru" },
  nativeLabel: "る",
  cue: {
    ko: "가로에서 시작해 곡선으로 내려오고 아래 고리를 만드세요.",
    en: "Start horizontally, curve down, and form the loop at the bottom.",
  },
  description: {
    ko: "일본어 히라가나 'る' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'る'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 30 H58 C55 42, 45 52, 38 58 C32 62, 30 70, 35 75 C40 80, 50 78, 55 72 C60 66, 58 60, 52 58",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
