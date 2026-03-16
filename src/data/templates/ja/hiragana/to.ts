import { WritingTemplate } from "@/types/writing";

export const jaHiraganaToTemplate: WritingTemplate = {
  id: "ja-hiragana-to",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 토", en: "Hiragana To" },
  nativeLabel: "と",
  cue: {
    ko: "세로획을 내린 뒤 아래에서 오른쪽으로 곡선을 이어가세요.",
    en: "Draw the vertical stroke, then curve right at the bottom.",
  },
  description: {
    ko: "일본어 히라가나 'と' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'と'.",
  },
  direction: "ltr",
  guidePathD: "M40 22 V55 C40 65, 50 72, 65 68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
