import { WritingTemplate } from "@/types/writing";

export const jaKatakanaKiTemplate: WritingTemplate = {
  id: "ja-katakana-ki",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 키", en: "Katakana Ki" },
  nativeLabel: "キ",
  cue: {
    ko: "가로획 두 개와 세로획을 교차시켜 그으세요.",
    en: "Cross two horizontal strokes with one vertical.",
  },
  description: {
    ko: "일본어 카타카나 'キ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'キ'.",
  },
  direction: "ltr",
  guidePathD: "M28 35 H72 M28 55 H72 M50 22 V72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
