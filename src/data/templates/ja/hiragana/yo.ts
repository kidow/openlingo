import { WritingTemplate } from "@/types/writing";

export const jaHiraganaYoTemplate: WritingTemplate = {
  id: "ja-hiragana-yo",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 요", en: "Hiragana Yo" },
  nativeLabel: "よ",
  cue: {
    ko: "가로획 후 세로획을 내려 곡선으로 마무리하세요.",
    en: "Draw the horizontal, then the vertical with a curved tail.",
  },
  description: {
    ko: "일본어 히라가나 'よ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'よ'.",
  },
  direction: "ltr",
  guidePathD: "M35 38 H60 M48 25 V62 C48 70, 55 76, 65 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
