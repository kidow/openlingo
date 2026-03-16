import { WritingTemplate } from "@/types/writing";

export const jaHiraganaMaTemplate: WritingTemplate = {
  id: "ja-hiragana-ma",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 마", en: "Hiragana Ma" },
  nativeLabel: "ま",
  cue: {
    ko: "가로획과 세로획 교차 후 아래 고리를 부드럽게 마무리하세요.",
    en: "Cross horizontal and vertical, then finish with a smooth loop below.",
  },
  description: {
    ko: "일본어 히라가나 'ま' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ま'.",
  },
  direction: "ltr",
  guidePathD:
    "M25 35 H65 M45 22 V68 M55 55 C62 62, 65 70, 60 75 C55 78, 48 75, 45 68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
