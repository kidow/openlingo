import { WritingTemplate } from "@/types/writing";

export const jaKatakanaWoTemplate: WritingTemplate = {
  id: "ja-katakana-wo",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 오(wo)", en: "Katakana Wo" },
  nativeLabel: "ヲ",
  cue: {
    ko: "가로획 두 개 후 대각선을 내려 그으세요.",
    en: "Draw two horizontals, then the diagonal down.",
  },
  description: {
    ko: "일본어 카타카나 'ヲ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ヲ'.",
  },
  direction: "ltr",
  guidePathD: "M28 28 H72 M28 48 H68 M65 28 L30 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
