import { WritingTemplate } from "@/types/writing";

export const jaKatakanaYoTemplate: WritingTemplate = {
  id: "ja-katakana-yo",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 요", en: "Katakana Yo" },
  nativeLabel: "ヨ",
  cue: {
    ko: "가로획 두 개와 오른쪽 세로획을 연결하세요.",
    en: "Connect two horizontals with the right vertical.",
  },
  description: {
    ko: "일본어 카타카나 'ヨ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ヨ'.",
  },
  direction: "ltr",
  guidePathD: "M30 28 H68 M30 50 H68 M68 28 V72 M30 72 H68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
