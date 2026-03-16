import { WritingTemplate } from "@/types/writing";

export const jaHiraganaTeTemplate: WritingTemplate = {
  id: "ja-hiragana-te",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 테", en: "Hiragana Te" },
  nativeLabel: "て",
  cue: {
    ko: "가로획 후 왼쪽으로 내려오는 곡선을 이어가세요.",
    en: "After the horizontal stroke, curve downward to the left.",
  },
  description: {
    ko: "일본어 히라가나 'て' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'て'.",
  },
  direction: "ltr",
  guidePathD: "M25 35 H70 C65 50, 55 60, 35 68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
