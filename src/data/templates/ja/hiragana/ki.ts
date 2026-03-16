import { WritingTemplate } from "@/types/writing";

export const jaHiraganaKiTemplate: WritingTemplate = {
  id: "ja-hiragana-ki",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 키", en: "Hiragana Ki" },
  nativeLabel: "き",
  cue: {
    ko: "가로획 두 개를 먼저 긋고 세로획과 아래 곡선을 이어가세요.",
    en: "Draw the two horizontal strokes first, then the vertical and curved tail.",
  },
  description: {
    ko: "일본어 히라가나 'き' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'き'.",
  },
  direction: "ltr",
  guidePathD:
    "M28 32 H68 M28 52 H68 M55 22 V62 C55 70, 45 76, 35 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
