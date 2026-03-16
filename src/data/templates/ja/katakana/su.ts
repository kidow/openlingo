import { WritingTemplate } from "@/types/writing";

export const jaKatakanaSuTemplate: WritingTemplate = {
  id: "ja-katakana-su",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 스", en: "Katakana Su" },
  nativeLabel: "ス",
  cue: {
    ko: "가로획 후 교차하는 대각선 두 개를 그으세요.",
    en: "Draw the horizontal, then two crossing diagonals.",
  },
  description: {
    ko: "일본어 카타카나 'ス' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ス'.",
  },
  direction: "ltr",
  guidePathD: "M28 30 H72 M65 30 L35 60 M45 50 L70 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
