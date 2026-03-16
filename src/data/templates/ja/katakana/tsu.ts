import { WritingTemplate } from "@/types/writing";

export const jaKatakanaTsuTemplate: WritingTemplate = {
  id: "ja-katakana-tsu",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 츠", en: "Katakana Tsu" },
  nativeLabel: "ツ",
  cue: {
    ko: "짧은 점 두 개 후 긴 대각선을 그으세요. シ와 방향을 구별하세요.",
    en: "Draw two short marks then a long diagonal. Note the direction differs from シ.",
  },
  description: {
    ko: "일본어 카타카나 'ツ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ツ'.",
  },
  direction: "ltr",
  guidePathD: "M28 28 L35 40 M52 25 L55 38 M70 25 L38 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
