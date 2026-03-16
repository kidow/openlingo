import { WritingTemplate } from "@/types/writing";

export const arFaTemplate: WritingTemplate = {
  id: "ar-fa",
  languageId: "ar",
  mode: "character",
  label: { ko: "파", en: "Fa" },
  nativeLabel: "ف",
  cue: {
    ko: "작은 원을 그린 뒤 왼쪽으로 꼬리를 빼고 위에 점을 찍으세요.",
    en: "Draw a small circle, extend a tail to the left, then add a dot above.",
  },
  description: {
    ko: "아랍어 문자 'ف' (Fa) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ف' (Fa).",
  },
  direction: "rtl",
  guidePathD:
    "M70 50 C70 40, 62 34, 54 34 C46 34, 38 40, 38 50 C38 60, 46 66, 54 66 C62 66, 70 60, 70 50 M38 58 C32 66, 26 72, 22 76 M54 26 C56 22, 60 22, 62 26 C60 30, 56 30, 54 26",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
