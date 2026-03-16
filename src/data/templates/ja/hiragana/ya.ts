import { WritingTemplate } from "@/types/writing";

export const jaHiraganaYaTemplate: WritingTemplate = {
  id: "ja-hiragana-ya",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 야", en: "Hiragana Ya" },
  nativeLabel: "や",
  cue: {
    ko: "왼쪽 곡선과 오른쪽 세로획을 균형 있게 배치하세요.",
    en: "Balance the left curve with the right vertical stroke.",
  },
  description: {
    ko: "일본어 히라가나 'や' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'や'.",
  },
  direction: "ltr",
  guidePathD:
    "M35 28 C30 40, 28 55, 35 68 M40 42 H68 M60 32 V65 C60 72, 55 78, 48 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
