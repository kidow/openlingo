import { WritingTemplate } from "@/types/writing";

export const jaKatakanaShiTemplate: WritingTemplate = {
  id: "ja-katakana-shi",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 시", en: "Katakana Shi" },
  nativeLabel: "シ",
  cue: {
    ko: "왼쪽 짧은 점 두 개 후 오른쪽 긴 곡선을 그으세요.",
    en: "Place two short marks on the left, then draw the long curve on the right.",
  },
  description: {
    ko: "일본어 카타카나 'シ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'シ'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 35 L35 40 M30 55 L35 60 M65 30 C68 45, 70 60, 65 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
