import { WritingTemplate } from "@/types/writing";

export const arSinTemplate: WritingTemplate = {
  id: "ar-sin",
  languageId: "ar",
  mode: "character",
  label: { ko: "신", en: "Sin" },
  nativeLabel: "س",
  cue: {
    ko: "세 개의 톱니를 균일하게 그린 뒤 꼬리를 아래로 빼세요.",
    en: "Draw three even teeth, then sweep the tail downward.",
  },
  description: {
    ko: "아랍어 문자 'س' (Sin) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'س' (Sin).",
  },
  direction: "rtl",
  guidePathD:
    "M78 56 L72 48 L66 56 L60 48 L54 56 C46 64, 34 72, 24 76 C20 78, 18 82, 22 84",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
