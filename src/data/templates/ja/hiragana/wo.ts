import { WritingTemplate } from "@/types/writing";

export const jaHiraganaWoTemplate: WritingTemplate = {
  id: "ja-hiragana-wo",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 오(wo)", en: "Hiragana Wo" },
  nativeLabel: "を",
  cue: {
    ko: "가로획들과 곡선을 정확하게 조합하세요.",
    en: "Combine the horizontal strokes and curves precisely.",
  },
  description: {
    ko: "일본어 히라가나 'を' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'を'.",
  },
  direction: "ltr",
  guidePathD:
    "M25 30 H65 M30 48 H60 M48 30 V48 C48 58, 55 65, 62 62 C68 58, 65 52, 58 52 C52 52, 48 58, 48 65 C48 72, 55 78, 65 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
