import { WritingTemplate } from "@/types/writing";

export const jaKatakanaMeTemplate: WritingTemplate = {
  id: "ja-katakana-me",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 메", en: "Katakana Me" },
  nativeLabel: "メ",
  cue: {
    ko: "짧은 대각선 후 긴 교차 대각선을 그으세요.",
    en: "Draw the short diagonal mark, then the long crossing diagonal.",
  },
  description: {
    ko: "일본어 카타카나 'メ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'メ'.",
  },
  direction: "ltr",
  guidePathD: "M55 25 L45 45 M65 22 L28 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
