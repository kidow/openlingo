import { WritingTemplate } from "@/types/writing";

export const jaHiraganaRoTemplate: WritingTemplate = {
  id: "ja-hiragana-ro",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 로", en: "Hiragana Ro" },
  nativeLabel: "ろ",
  cue: {
    ko: "가로에서 시작해 아래로 곡선을 부드럽게 이어가세요.",
    en: "Start horizontally and curve down smoothly.",
  },
  description: {
    ko: "일본어 히라가나 'ろ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ろ'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 30 H58 C55 42, 45 55, 38 62 C32 68, 30 75, 35 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
