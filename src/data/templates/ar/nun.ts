import { WritingTemplate } from "@/types/writing";

export const arNunTemplate: WritingTemplate = {
  id: "ar-nun",
  languageId: "ar",
  mode: "character",
  label: { ko: "눈", en: "Nun" },
  nativeLabel: "ن",
  cue: {
    ko: "바와 같은 보트 형태를 그리고 위에 점을 찍으세요.",
    en: "Draw the same boat shape as Ba, then place a dot above.",
  },
  description: {
    ko: "아랍어 문자 'ن' (Nun) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ن' (Nun).",
  },
  direction: "rtl",
  guidePathD:
    "M78 55 C69 44, 57 39, 44 41 C32 43, 24 50, 24 60 C24 71, 34 78, 48 78 C60 78, 70 74, 79 67 M49 30 C51 26, 56 26, 58 30 C56 34, 51 34, 49 30",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
