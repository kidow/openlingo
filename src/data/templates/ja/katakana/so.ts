import { WritingTemplate } from "@/types/writing";

export const jaKatakanaSoTemplate: WritingTemplate = {
  id: "ja-katakana-so",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 소", en: "Katakana So" },
  nativeLabel: "ソ",
  cue: {
    ko: "짧은 점과 긴 대각선을 정확하게 배치하세요.",
    en: "Place the short mark and long diagonal precisely.",
  },
  description: {
    ko: "일본어 카타카나 'ソ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ソ'.",
  },
  direction: "ltr",
  guidePathD: "M30 28 L38 40 M62 28 L40 75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
