import { WritingTemplate } from "@/types/writing";

export const arWawTemplate: WritingTemplate = {
  id: "ar-waw",
  languageId: "ar",
  mode: "character",
  label: { ko: "와우", en: "Waw" },
  nativeLabel: "و",
  cue: {
    ko: "위에 작은 원을 그리고 아래로 곡선 꼬리를 내리세요.",
    en: "Draw a small circle on top, then extend a curved tail downward.",
  },
  description: {
    ko: "아랍어 문자 'و' (Waw) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'و' (Waw).",
  },
  direction: "rtl",
  guidePathD:
    "M62 36 C62 28, 54 24, 48 24 C42 24, 36 28, 36 36 C36 44, 42 48, 50 48 C58 48, 62 44, 62 36 M36 44 C32 56, 28 68, 28 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
