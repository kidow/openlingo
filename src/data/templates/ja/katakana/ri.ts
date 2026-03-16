import { WritingTemplate } from "@/types/writing";

export const jaKatakanaRiTemplate: WritingTemplate = {
  id: "ja-katakana-ri",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 리", en: "Katakana Ri" },
  nativeLabel: "リ",
  cue: {
    ko: "왼쪽 짧은 세로획과 오른쪽 긴 곡선 세로획을 그으세요.",
    en: "Draw the short left vertical and the longer right curved vertical.",
  },
  description: {
    ko: "일본어 카타카나 'リ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'リ'.",
  },
  direction: "ltr",
  guidePathD: "M38 25 V60 M62 25 V65 C62 72, 58 78, 52 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
