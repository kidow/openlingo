import { WritingTemplate } from "@/types/writing";

export const jaHiraganaWaTemplate: WritingTemplate = {
  id: "ja-hiragana-wa",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 와", en: "Hiragana Wa" },
  nativeLabel: "わ",
  cue: {
    ko: "왼쪽 세로획 후 오른쪽 곡선을 부드럽게 이어가세요.",
    en: "Draw the left vertical, then connect the right curve smoothly.",
  },
  description: {
    ko: "일본어 히라가나 'わ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'わ'.",
  },
  direction: "ltr",
  guidePathD:
    "M32 25 V75 M32 42 H55 M55 42 C62 50, 68 60, 65 70 C62 78, 52 80, 45 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
