import { WritingTemplate } from "@/types/writing";

export const jaHiraganaSeTemplate: WritingTemplate = {
  id: "ja-hiragana-se",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 세", en: "Hiragana Se" },
  nativeLabel: "せ",
  cue: {
    ko: "세로획과 가로획의 교차점을 정확하게 맞추세요.",
    en: "Align the crossing point of the vertical and horizontal strokes precisely.",
  },
  description: {
    ko: "일본어 히라가나 'せ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'せ'.",
  },
  direction: "ltr",
  guidePathD:
    "M35 22 V68 M25 42 H65 M60 42 V58 C60 68, 52 75, 42 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
