import { WritingTemplate } from "@/types/writing";

export const arGhainTemplate: WritingTemplate = {
  id: "ar-ghain",
  languageId: "ar",
  mode: "character",
  label: { ko: "가인", en: "Ghain" },
  nativeLabel: "غ",
  cue: {
    ko: "아인과 같은 형태를 그리고 위에 점을 찍으세요.",
    en: "Draw the same shape as Ain, then add a dot above.",
  },
  description: {
    ko: "아랍어 문자 'غ' (Ghain) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'غ' (Ghain).",
  },
  direction: "rtl",
  guidePathD:
    "M66 34 C58 28, 46 32, 44 42 C42 52, 48 58, 56 58 C56 66, 48 74, 38 78 C30 82, 24 84, 22 84 M54 22 C56 18, 60 18, 62 22 C60 26, 56 26, 54 22",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
