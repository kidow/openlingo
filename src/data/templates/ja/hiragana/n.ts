import { WritingTemplate } from "@/types/writing";

export const jaHiraganaNTemplate: WritingTemplate = {
  id: "ja-hiragana-n",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 응", en: "Hiragana N" },
  nativeLabel: "ん",
  cue: {
    ko: "한 획으로 부드러운 곡선을 이어가세요.",
    en: "Draw a smooth flowing curve in one stroke.",
  },
  description: {
    ko: "일본어 히라가나 'ん' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ん'.",
  },
  direction: "ltr",
  guidePathD:
    "M40 28 C35 40, 30 55, 32 65 C34 75, 45 80, 55 78 C65 75, 72 65, 68 55",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
