import { WritingTemplate } from "@/types/writing";

export const jaHiraganaMuTemplate: WritingTemplate = {
  id: "ja-hiragana-mu",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 무", en: "Hiragana Mu" },
  nativeLabel: "む",
  cue: {
    ko: "가로획 후 아래로 곡선을 그리고 고리와 점을 추가하세요.",
    en: "Draw horizontal, curve downward with a loop, then add the dot.",
  },
  description: {
    ko: "일본어 히라가나 'む' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'む'.",
  },
  direction: "ltr",
  guidePathD:
    "M25 35 H60 M60 35 C58 50, 45 62, 35 68 C28 72, 25 68, 28 62 C32 56, 42 55, 50 58 M65 60 C67 63, 67 66, 65 65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
