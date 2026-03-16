import { WritingTemplate } from "@/types/writing";

export const jaKatakanaHaTemplate: WritingTemplate = {
  id: "ja-katakana-ha",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 하", en: "Katakana Ha" },
  nativeLabel: "ハ",
  cue: {
    ko: "가운데에서 좌우로 벌어지는 두 대각선을 그으세요.",
    en: "Draw two diagonal lines spreading outward from the center.",
  },
  description: {
    ko: "일본어 카타카나 'ハ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ハ'.",
  },
  direction: "ltr",
  guidePathD: "M45 25 L25 78 M55 25 L75 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
