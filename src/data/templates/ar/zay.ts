import { WritingTemplate } from "@/types/writing";

export const arZayTemplate: WritingTemplate = {
  id: "ar-zay",
  languageId: "ar",
  mode: "character",
  label: { ko: "자이", en: "Zay" },
  nativeLabel: "ز",
  cue: {
    ko: "라와 같은 곡선을 그리고 위에 점을 찍으세요.",
    en: "Draw the same curve as Ra, then add a dot above.",
  },
  description: {
    ko: "아랍어 문자 'ز' (Zay) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ز' (Zay).",
  },
  direction: "rtl",
  guidePathD:
    "M62 44 C62 56, 56 66, 46 74 C40 78, 34 80, 30 82 M54 34 C56 30, 60 30, 62 34 C60 38, 56 38, 54 34",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
