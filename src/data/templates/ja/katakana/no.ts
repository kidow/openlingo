import { WritingTemplate } from "@/types/writing";

export const jaKatakanaNoTemplate: WritingTemplate = {
  id: "ja-katakana-no",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 노", en: "Katakana No" },
  nativeLabel: "ノ",
  cue: {
    ko: "한 획으로 대각선을 부드럽게 내려 그으세요.",
    en: "Draw a single smooth diagonal stroke downward.",
  },
  description: {
    ko: "일본어 카타카나 'ノ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ノ'.",
  },
  direction: "ltr",
  guidePathD: "M65 22 L30 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
