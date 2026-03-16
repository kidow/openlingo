import { WritingTemplate } from "@/types/writing";

export const jaHiraganaTaTemplate: WritingTemplate = {
  id: "ja-hiragana-ta",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 타", en: "Hiragana Ta" },
  nativeLabel: "た",
  cue: {
    ko: "가로획과 세로획을 교차시킨 뒤 오른쪽 곡선을 붙이세요.",
    en: "Cross the horizontal and vertical strokes, then add the right curve.",
  },
  description: {
    ko: "일본어 히라가나 'た' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'た'.",
  },
  direction: "ltr",
  guidePathD: "M25 35 H55 M40 22 V65 M58 45 C62 55, 68 65, 75 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
