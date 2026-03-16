import { WritingTemplate } from "@/types/writing";

export const jaKatakanaUTemplate: WritingTemplate = {
  id: "ja-katakana-u",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 우", en: "Katakana U" },
  nativeLabel: "ウ",
  cue: {
    ko: "윗점을 찍고 좌우 세로획을 내려 그으세요.",
    en: "Place the top mark, then draw the two vertical strokes down.",
  },
  description: {
    ko: "일본어 카타카나 'ウ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ウ'.",
  },
  direction: "ltr",
  guidePathD: "M45 25 L55 25 M30 38 V72 M70 38 V72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
