import { WritingTemplate } from "@/types/writing";

export const jaHiraganaKoTemplate: WritingTemplate = {
  id: "ja-hiragana-ko",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 코", en: "Hiragana Ko" },
  nativeLabel: "こ",
  cue: {
    ko: "위 획은 짧게, 아래 획은 길게 그려 균형을 맞추세요.",
    en: "Keep the upper stroke short and the lower stroke longer for balance.",
  },
  description: {
    ko: "일본어 히라가나 'こ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'こ'.",
  },
  direction: "ltr",
  guidePathD: "M32 35 H62 M30 65 C42 62, 58 62, 70 68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
