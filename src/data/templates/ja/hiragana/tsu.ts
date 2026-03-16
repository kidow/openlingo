import { WritingTemplate } from "@/types/writing";

export const jaHiraganaTsuTemplate: WritingTemplate = {
  id: "ja-hiragana-tsu",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 츠", en: "Hiragana Tsu" },
  nativeLabel: "つ",
  cue: {
    ko: "오른쪽으로 열린 곡선을 부드럽게 그리세요.",
    en: "Draw a smooth curve opening to the right.",
  },
  description: {
    ko: "일본어 히라가나 'つ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'つ'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 35 C38 28, 58 26, 70 35 C78 44, 72 60, 55 70",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
