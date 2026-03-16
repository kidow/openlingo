import { WritingTemplate } from "@/types/writing";

export const jaHiraganaNaTemplate: WritingTemplate = {
  id: "ja-hiragana-na",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 나", en: "Hiragana Na" },
  nativeLabel: "な",
  cue: {
    ko: "가로획, 세로획 교차 후 오른쪽 곡선과 고리를 이어가세요.",
    en: "Cross horizontal and vertical, then add the right curve and loop.",
  },
  description: {
    ko: "일본어 히라가나 'な' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'な'.",
  },
  direction: "ltr",
  guidePathD:
    "M25 35 H55 M40 22 V62 M55 40 C65 48, 72 58, 68 68 C64 75, 55 78, 48 74 C42 70, 42 64, 48 60",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
