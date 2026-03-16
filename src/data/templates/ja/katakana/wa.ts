import { WritingTemplate } from "@/types/writing";

export const jaKatakanaWaTemplate: WritingTemplate = {
  id: "ja-katakana-wa",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 와", en: "Katakana Wa" },
  nativeLabel: "ワ",
  cue: {
    ko: "가로획 후 좌우 세로획을 내려 그으세요. 오른쪽은 안쪽으로 기울이세요.",
    en: "Draw horizontal, then left vertical and right inward diagonal.",
  },
  description: {
    ko: "일본어 카타카나 'ワ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ワ'.",
  },
  direction: "ltr",
  guidePathD: "M28 28 H72 M28 28 V55 M72 28 L50 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
