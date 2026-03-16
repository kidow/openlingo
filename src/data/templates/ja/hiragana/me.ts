import { WritingTemplate } from "@/types/writing";

export const jaHiraganaMeTemplate: WritingTemplate = {
  id: "ja-hiragana-me",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 메", en: "Hiragana Me" },
  nativeLabel: "め",
  cue: {
    ko: "곡선을 부드럽게 이어 고리를 만드세요.",
    en: "Connect the curves smoothly to form the loop.",
  },
  description: {
    ko: "일본어 히라가나 'め' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'め'.",
  },
  direction: "ltr",
  guidePathD:
    "M28 40 C38 30, 55 28, 65 35 C72 42, 68 55, 58 62 C48 68, 38 72, 30 68 C24 62, 28 50, 38 45",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
