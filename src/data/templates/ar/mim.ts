import { WritingTemplate } from "@/types/writing";

export const arMimTemplate: WritingTemplate = {
  id: "ar-mim",
  languageId: "ar",
  mode: "character",
  label: { ko: "밈", en: "Mim" },
  nativeLabel: "م",
  cue: {
    ko: "작은 원을 그리고 아래로 세로획을 내리세요.",
    en: "Draw a small circle, then extend a vertical stroke downward.",
  },
  description: {
    ko: "아랍어 문자 'م' (Mim) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'م' (Mim).",
  },
  direction: "rtl",
  guidePathD:
    "M66 42 C66 34, 58 28, 50 28 C42 28, 34 34, 34 42 C34 50, 42 56, 50 56 C58 56, 66 50, 66 42 M34 50 V78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
