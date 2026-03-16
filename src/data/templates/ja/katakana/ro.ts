import { WritingTemplate } from "@/types/writing";

export const jaKatakanaRoTemplate: WritingTemplate = {
  id: "ja-katakana-ro",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 로", en: "Katakana Ro" },
  nativeLabel: "ロ",
  cue: {
    ko: "네모 형태를 정확하게 그으세요.",
    en: "Draw the rectangle shape precisely.",
  },
  description: {
    ko: "일본어 카타카나 'ロ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ロ'.",
  },
  direction: "ltr",
  guidePathD: "M28 25 H72 M28 25 V75 M72 25 V75 M28 75 H72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
