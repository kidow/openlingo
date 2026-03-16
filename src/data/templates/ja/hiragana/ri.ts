import { WritingTemplate } from "@/types/writing";

export const jaHiraganaRiTemplate: WritingTemplate = {
  id: "ja-hiragana-ri",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 리", en: "Hiragana Ri" },
  nativeLabel: "り",
  cue: {
    ko: "왼쪽 짧은 획과 오른쪽 긴 곡선의 균형을 맞추세요.",
    en: "Balance the short left stroke with the longer right curve.",
  },
  description: {
    ko: "일본어 히라가나 'り' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'り'.",
  },
  direction: "ltr",
  guidePathD: "M38 28 V55 M58 28 V62 C58 70, 52 76, 45 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
