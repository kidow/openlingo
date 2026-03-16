import { WritingTemplate } from "@/types/writing";

export const jaHiraganaShiTemplate: WritingTemplate = {
  id: "ja-hiragana-shi",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 시", en: "Hiragana Shi" },
  nativeLabel: "し",
  cue: {
    ko: "아래에서 시작해 오른쪽으로 올리며 자연스럽게 마무리하세요.",
    en: "Start from the bottom and curve upward to the right.",
  },
  description: {
    ko: "일본어 히라가나 'し' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'し'.",
  },
  direction: "ltr",
  guidePathD: "M42 25 V60 C42 72, 52 78, 68 70",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
