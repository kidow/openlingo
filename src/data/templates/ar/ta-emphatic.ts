import { WritingTemplate } from "@/types/writing";

export const arTaEmphaticTemplate: WritingTemplate = {
  id: "ar-ta-emphatic",
  languageId: "ar",
  mode: "character",
  label: { ko: "따", en: "Ta'" },
  nativeLabel: "ط",
  cue: {
    ko: "세로획을 내린 뒤 아래에 고리를 만들고 가로획을 그으세요.",
    en: "Draw a vertical, form a loop below, then add a horizontal bar.",
  },
  description: {
    ko: "아랍어 문자 'ط' (Ta') 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ط' (Ta').",
  },
  direction: "rtl",
  guidePathD:
    "M60 20 V56 C60 68, 50 74, 40 74 C30 74, 22 68, 22 58 C22 48, 30 42, 40 42 C50 42, 60 48, 60 56 M22 58 H78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
