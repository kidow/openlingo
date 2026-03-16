import { WritingTemplate } from "@/types/writing";

export const jaHiraganaETemplate: WritingTemplate = {
  id: "ja-hiragana-e",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 에", en: "Hiragana E" },
  nativeLabel: "え",
  cue: {
    ko: "상단 짧은 획 후 아래 S자 곡선을 자연스럽게 이어가세요.",
    en: "Start with the short top stroke, then flow into the S-curve below.",
  },
  description: {
    ko: "일본어 히라가나 'え' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'え'.",
  },
  direction: "ltr",
  guidePathD:
    "M40 25 L55 30 M48 35 C38 42, 30 52, 35 60 C40 68, 55 72, 65 65 C72 58, 65 50, 55 48",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
