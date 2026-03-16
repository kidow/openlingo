import { WritingTemplate } from "@/types/writing";

export const jaHiraganaRaTemplate: WritingTemplate = {
  id: "ja-hiragana-ra",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 라", en: "Hiragana Ra" },
  nativeLabel: "ら",
  cue: {
    ko: "윗부분 짧은 획 후 아래 곡선을 이어가세요.",
    en: "Start with the short top stroke, then flow into the curve below.",
  },
  description: {
    ko: "일본어 히라가나 'ら' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ら'.",
  },
  direction: "ltr",
  guidePathD:
    "M35 30 H58 M48 30 C48 42, 55 52, 62 55 C68 58, 68 65, 60 72 C52 78, 40 76, 35 68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
