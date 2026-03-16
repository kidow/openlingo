import { WritingTemplate } from "@/types/writing";

export const jaHiraganaSaTemplate: WritingTemplate = {
  id: "ja-hiragana-sa",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 사", en: "Hiragana Sa" },
  nativeLabel: "さ",
  cue: {
    ko: "가로획과 세로획의 교차 후 아래 곡선을 부드럽게 마무리하세요.",
    en: "Cross the horizontal and vertical strokes, then finish with a smooth curve below.",
  },
  description: {
    ko: "일본어 히라가나 'さ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'さ'.",
  },
  direction: "ltr",
  guidePathD:
    "M25 35 H65 M50 22 V55 C50 65, 42 72, 32 68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
