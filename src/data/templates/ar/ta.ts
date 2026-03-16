import { WritingTemplate } from "@/types/writing";

export const arTaTemplate: WritingTemplate = {
  id: "ar-ta",
  languageId: "ar",
  mode: "character",
  label: { ko: "타", en: "Ta" },
  nativeLabel: "ت",
  cue: {
    ko: "바와 같은 몸체를 그리고 위에 두 점을 나란히 찍으세요.",
    en: "Draw the same body as Ba, then place two dots above.",
  },
  description: {
    ko: "아랍어 문자 'ت' (Ta) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ت' (Ta).",
  },
  direction: "rtl",
  guidePathD:
    "M78 55 C69 44, 57 39, 44 41 C32 43, 24 50, 24 60 C24 71, 34 78, 48 78 C60 78, 70 74, 79 67 M42 28 C44 24, 48 24, 50 28 C48 32, 44 32, 42 28 M56 28 C58 24, 62 24, 64 28 C62 32, 58 32, 56 28",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
