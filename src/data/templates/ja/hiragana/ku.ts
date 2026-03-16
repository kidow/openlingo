import { WritingTemplate } from "@/types/writing";

export const jaHiraganaKuTemplate: WritingTemplate = {
  id: "ja-hiragana-ku",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 쿠", en: "Hiragana Ku" },
  nativeLabel: "く",
  cue: {
    ko: "꺾이는 지점을 뚜렷하게 표현하세요.",
    en: "Make the angle point sharp and clear.",
  },
  description: {
    ko: "일본어 히라가나 'く' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'く'.",
  },
  direction: "ltr",
  guidePathD: "M62 22 L35 50 L62 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
