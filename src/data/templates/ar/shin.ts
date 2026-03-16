import { WritingTemplate } from "@/types/writing";

export const arShinTemplate: WritingTemplate = {
  id: "ar-shin",
  languageId: "ar",
  mode: "character",
  label: { ko: "신", en: "Shin" },
  nativeLabel: "ش",
  cue: {
    ko: "신과 같은 톱니 형태를 그리고 위에 세 점을 찍으세요.",
    en: "Draw the same teeth as Sin, then place three dots above.",
  },
  description: {
    ko: "아랍어 문자 'ش' (Shin) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ش' (Shin).",
  },
  direction: "rtl",
  guidePathD:
    "M78 56 L72 48 L66 56 L60 48 L54 56 C46 64, 34 72, 24 76 C20 78, 18 82, 22 84 M60 36 C62 32, 66 32, 68 36 C66 40, 62 40, 60 36 M50 28 C52 24, 56 24, 58 28 C56 32, 52 32, 50 28 M70 28 C72 24, 76 24, 78 28 C76 32, 72 32, 70 28",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
