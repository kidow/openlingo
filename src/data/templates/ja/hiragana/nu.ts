import { WritingTemplate } from "@/types/writing";

export const jaHiraganaNuTemplate: WritingTemplate = {
  id: "ja-hiragana-nu",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 누", en: "Hiragana Nu" },
  nativeLabel: "ぬ",
  cue: {
    ko: "곡선과 고리를 자연스럽게 이어 쓰세요.",
    en: "Connect the curves and loop smoothly.",
  },
  description: {
    ko: "일본어 히라가나 'ぬ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ぬ'.",
  },
  direction: "ltr",
  guidePathD:
    "M28 40 C38 30, 55 28, 65 35 C72 42, 68 55, 58 62 C48 68, 38 72, 30 68 C24 62, 28 50, 38 45 M58 55 C65 65, 72 72, 78 70",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
