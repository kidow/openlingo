import { WritingTemplate } from "@/types/writing";

export const jaHiraganaKeTemplate: WritingTemplate = {
  id: "ja-hiragana-ke",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 케", en: "Hiragana Ke" },
  nativeLabel: "け",
  cue: {
    ko: "왼쪽 세로획을 안정적으로 내린 뒤 오른쪽 부분을 이어가세요.",
    en: "Steady the left vertical stroke, then add the right side.",
  },
  description: {
    ko: "일본어 히라가나 'け' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'け'.",
  },
  direction: "ltr",
  guidePathD: "M30 22 V75 M30 42 H58 M58 28 V62 C58 70, 65 76, 72 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
