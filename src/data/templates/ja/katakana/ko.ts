import { WritingTemplate } from "@/types/writing";

export const jaKatakanaKoTemplate: WritingTemplate = {
  id: "ja-katakana-ko",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 코", en: "Katakana Ko" },
  nativeLabel: "コ",
  cue: {
    ko: "ㄷ 자 모양으로 위, 오른쪽, 아래 순서로 그으세요.",
    en: "Draw the top, right side, and bottom to form an open box.",
  },
  description: {
    ko: "일본어 카타카나 'コ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'コ'.",
  },
  direction: "ltr",
  guidePathD: "M28 28 H72 M72 28 V72 M28 72 H72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
