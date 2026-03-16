import { WritingTemplate } from "@/types/writing";

export const arBaTemplate: WritingTemplate = {
  id: "ar-ba",
  languageId: "ar",
  mode: "character",
  label: { ko: "바", en: "Ba" },
  nativeLabel: "ب",
  cue: {
    ko: "아랫부분 곡선을 낮게 유지하고 점은 충분히 떨어뜨려 두세요.",
    en: "Keep the bowl low and the dot clearly separated.",
  },
  description: {
    ko: "아랍어 문자 'ب' (Ba) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ب' (Ba).",
  },
  direction: "rtl",
  guidePathD:
    "M78 55 C69 44, 57 39, 44 41 C32 43, 24 50, 24 60 C24 71, 34 78, 48 78 C60 78, 70 74, 79 67 M49 84 C51 88, 56 88, 58 84 C56 80, 51 80, 49 84",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
