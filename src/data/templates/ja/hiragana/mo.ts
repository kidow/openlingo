import { WritingTemplate } from "@/types/writing";

export const jaHiraganaMoTemplate: WritingTemplate = {
  id: "ja-hiragana-mo",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 모", en: "Hiragana Mo" },
  nativeLabel: "も",
  cue: {
    ko: "가로획 두 개를 긋고 세로획을 아래로 내려 곡선으로 마무리하세요.",
    en: "Draw two horizontals, then a vertical curving at the bottom.",
  },
  description: {
    ko: "일본어 히라가나 'も' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'も'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 32 H65 M30 52 H65 M48 22 V65 C48 72, 55 78, 65 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
