import { WritingTemplate } from "@/types/writing";

export const jaHiraganaNiTemplate: WritingTemplate = {
  id: "ja-hiragana-ni",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 니", en: "Hiragana Ni" },
  nativeLabel: "に",
  cue: {
    ko: "왼쪽 세로획을 먼저 쓰고 오른쪽 가로 두 획을 붙이세요.",
    en: "Draw the left vertical first, then add two horizontal strokes on the right.",
  },
  description: {
    ko: "일본어 히라가나 'に' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'に'.",
  },
  direction: "ltr",
  guidePathD: "M30 25 V75 M48 35 H72 M48 65 H72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
