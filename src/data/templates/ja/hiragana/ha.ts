import { WritingTemplate } from "@/types/writing";

export const jaHiraganaHaTemplate: WritingTemplate = {
  id: "ja-hiragana-ha",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 하", en: "Hiragana Ha" },
  nativeLabel: "は",
  cue: {
    ko: "왼쪽 세로획 후 오른쪽에 가로획과 고리를 이어가세요.",
    en: "Draw the left vertical, then add the horizontal and loop on the right.",
  },
  description: {
    ko: "일본어 히라가나 'は' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'は'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 25 V75 M45 35 H70 M58 35 V55 C58 65, 52 72, 45 70 C38 68, 36 60, 40 55 C44 50, 52 48, 58 50",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
