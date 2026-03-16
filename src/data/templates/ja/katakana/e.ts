import { WritingTemplate } from "@/types/writing";

export const jaKatakanaETemplate: WritingTemplate = {
  id: "ja-katakana-e",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 에", en: "Katakana E" },
  nativeLabel: "エ",
  cue: {
    ko: "위아래 가로획과 가운데 세로획의 균형을 맞추세요.",
    en: "Balance the top and bottom horizontals with the center vertical.",
  },
  description: {
    ko: "일본어 카타카나 'エ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'エ'.",
  },
  direction: "ltr",
  guidePathD: "M30 28 H70 M50 28 V72 M25 72 H75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
