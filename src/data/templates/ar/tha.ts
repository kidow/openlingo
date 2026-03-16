import { WritingTemplate } from "@/types/writing";

export const arThaTemplate: WritingTemplate = {
  id: "ar-tha",
  languageId: "ar",
  mode: "character",
  label: { ko: "싸", en: "Tha" },
  nativeLabel: "ث",
  cue: {
    ko: "바와 같은 몸체를 그리고 위에 세 점을 삼각형으로 찍으세요.",
    en: "Draw the same body as Ba, then place three dots in a triangle above.",
  },
  description: {
    ko: "아랍어 문자 'ث' (Tha) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ث' (Tha).",
  },
  direction: "rtl",
  guidePathD:
    "M78 55 C69 44, 57 39, 44 41 C32 43, 24 50, 24 60 C24 71, 34 78, 48 78 C60 78, 70 74, 79 67 M49 22 C51 18, 56 18, 58 22 C56 26, 51 26, 49 22 M38 32 C40 28, 44 28, 46 32 C44 36, 40 36, 38 32 M58 32 C60 28, 64 28, 66 32 C64 36, 60 36, 58 32",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
