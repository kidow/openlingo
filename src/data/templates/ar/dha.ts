import { WritingTemplate } from "@/types/writing";

export const arDhaTemplate: WritingTemplate = {
  id: "ar-dha",
  languageId: "ar",
  mode: "character",
  label: { ko: "자", en: "Dha'" },
  nativeLabel: "ظ",
  cue: {
    ko: "따와 같은 형태를 그리고 위에 점을 찍으세요.",
    en: "Draw the same shape as Ta', then add a dot above.",
  },
  description: {
    ko: "아랍어 문자 'ظ' (Dha') 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ظ' (Dha').",
  },
  direction: "rtl",
  guidePathD:
    "M60 20 V56 C60 68, 50 74, 40 74 C30 74, 22 68, 22 58 C22 48, 30 42, 40 42 C50 42, 60 48, 60 56 M22 58 H78 M64 14 C66 10, 70 10, 72 14 C70 18, 66 18, 64 14",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
