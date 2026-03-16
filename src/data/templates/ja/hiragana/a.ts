import { WritingTemplate } from "@/types/writing";

export const jaHiraganaATemplate: WritingTemplate = {
  id: "ja-hiragana-a",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 아", en: "Hiragana A" },
  nativeLabel: "あ",
  cue: {
    ko: "안쪽 곡선을 과하게 조이지 말고 자연스럽게 이어가세요.",
    en: "Follow the curve without over-tightening the inner loop.",
  },
  description: {
    ko: "일본어 히라가나 'あ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'あ'.",
  },
  direction: "ltr",
  guidePathD:
    "M28 36 C40 26, 58 26, 68 38 C76 48, 74 61, 63 70 C54 78, 40 79, 31 72 C23 66, 22 56, 27 48 C31 42, 40 38, 53 38 M52 22 V78 M41 52 H68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
