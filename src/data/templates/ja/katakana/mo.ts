import { WritingTemplate } from "@/types/writing";

export const jaKatakanaMoTemplate: WritingTemplate = {
  id: "ja-katakana-mo",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 모", en: "Katakana Mo" },
  nativeLabel: "モ",
  cue: {
    ko: "가로획 두 개를 긋고 세로획을 아래로 내리세요.",
    en: "Draw two horizontals, then the vertical stroke down.",
  },
  description: {
    ko: "일본어 카타카나 'モ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'モ'.",
  },
  direction: "ltr",
  guidePathD: "M28 32 H72 M28 55 H72 M50 55 V78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
