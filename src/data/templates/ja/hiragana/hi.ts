import { WritingTemplate } from "@/types/writing";

export const jaHiraganaHiTemplate: WritingTemplate = {
  id: "ja-hiragana-hi",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 히", en: "Hiragana Hi" },
  nativeLabel: "ひ",
  cue: {
    ko: "곡선의 흐름을 끊지 말고 부드럽게 연결하세요.",
    en: "Keep the curved flow smooth and connected.",
  },
  description: {
    ko: "일본어 히라가나 'ひ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'ひ'.",
  },
  direction: "ltr",
  guidePathD:
    "M55 25 C45 30, 35 40, 30 50 C25 60, 30 72, 45 75 C55 77, 65 72, 70 62 C75 52, 70 42, 60 38",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
