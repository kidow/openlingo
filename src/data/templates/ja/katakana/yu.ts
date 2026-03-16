import { WritingTemplate } from "@/types/writing";

export const jaKatakanaYuTemplate: WritingTemplate = {
  id: "ja-katakana-yu",
  languageId: "ja",
  mode: "character",
  label: { ko: "카타카나 유", en: "Katakana Yu" },
  nativeLabel: "ユ",
  cue: {
    ko: "ㄷ 자를 옆으로 뉘인 형태로 그으세요.",
    en: "Draw a sideways U-shape: top horizontal, right vertical, bottom horizontal.",
  },
  description: {
    ko: "일본어 카타카나 'ユ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese katakana 'ユ'.",
  },
  direction: "ltr",
  guidePathD: "M30 30 H65 M65 30 V70 M25 70 H65",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
