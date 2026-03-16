import { WritingTemplate } from "@/types/writing";

export const jaHiraganaOTemplate: WritingTemplate = {
  id: "ja-hiragana-o",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 오", en: "Hiragana O" },
  nativeLabel: "お",
  cue: {
    ko: "가로획과 세로획의 교차점을 정확히 맞추고 곡선을 마무리하세요.",
    en: "Align the cross point of horizontal and vertical strokes, then finish the curve.",
  },
  description: {
    ko: "일본어 히라가나 'お' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'お'.",
  },
  direction: "ltr",
  guidePathD:
    "M25 35 H60 M45 22 V68 M55 45 C65 50, 70 60, 65 70 C60 78, 48 78, 42 72 C38 66, 40 58, 48 55 M68 55 L72 60",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
