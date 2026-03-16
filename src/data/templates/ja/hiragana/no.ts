import { WritingTemplate } from "@/types/writing";

export const jaHiraganaNoTemplate: WritingTemplate = {
  id: "ja-hiragana-no",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 노", en: "Hiragana No" },
  nativeLabel: "の",
  cue: {
    ko: "한 획으로 나선형을 그리듯 부드럽게 이어가세요.",
    en: "Draw a smooth spiral-like curve in one continuous stroke.",
  },
  description: {
    ko: "일본어 히라가나 'の' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'の'.",
  },
  direction: "ltr",
  guidePathD:
    "M65 25 C55 30, 35 45, 30 55 C25 65, 30 75, 42 78 C55 80, 68 72, 72 58 C76 44, 70 32, 58 28",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
