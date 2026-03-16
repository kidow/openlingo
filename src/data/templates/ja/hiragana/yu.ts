import { WritingTemplate } from "@/types/writing";

export const jaHiraganaYuTemplate: WritingTemplate = {
  id: "ja-hiragana-yu",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 유", en: "Hiragana Yu" },
  nativeLabel: "ゆ",
  cue: {
    ko: "둥근 형태를 유지하면서 곡선을 이어가세요.",
    en: "Maintain the rounded shape while connecting the curves.",
  },
  description: {
    ko: "일본어 히라가나 'ゆ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ゆ'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 30 C28 45, 28 60, 35 72 C42 80, 58 80, 65 72 M55 28 V72 M35 48 H55",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
