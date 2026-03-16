import { WritingTemplate } from "@/types/writing";

export const jaKatakanaNTemplate: WritingTemplate = {
  id: "ja-katakana-n",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 응", en: "Katakana N" },
  nativeLabel: "ン",
  cue: {
    ko: "짧은 점 후 긴 곡선을 오른쪽 위로 올리세요. シ와 방향을 구별하세요.",
    en: "Draw a short mark, then a long curve going up-right. Note direction differs from シ.",
  },
  description: {
    ko: "일본어 카타카나 'ン' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ン'.",
  },
  direction: "ltr",
  guidePathD: "M30 55 L35 60 M35 70 C45 50, 58 35, 72 25",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
