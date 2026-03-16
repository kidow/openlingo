import { WritingTemplate } from "@/types/writing";

export const jaKatakanaNiTemplate: WritingTemplate = {
  id: "ja-katakana-ni",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 니", en: "Katakana Ni" },
  nativeLabel: "ニ",
  cue: {
    ko: "짧은 윗 가로획과 긴 아래 가로획의 길이 차이를 분명히 하세요.",
    en: "Make the top horizontal clearly shorter than the bottom one.",
  },
  description: {
    ko: "일본어 카타카나 'ニ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ニ'.",
  },
  direction: "ltr",
  guidePathD: "M32 35 H68 M25 68 H75",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
