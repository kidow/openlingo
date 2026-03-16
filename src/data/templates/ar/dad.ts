import { WritingTemplate } from "@/types/writing";

export const arDadTemplate: WritingTemplate = {
  id: "ar-dad",
  languageId: "ar",
  mode: "character",
  label: { ko: "다드", en: "Dad" },
  nativeLabel: "ض",
  cue: {
    ko: "사드와 같은 형태를 그리고 위에 점을 찍으세요.",
    en: "Draw the same shape as Sad, then add a dot above.",
  },
  description: {
    ko: "아랍어 문자 'ض' (Dad) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ض' (Dad).",
  },
  direction: "rtl",
  guidePathD:
    "M78 50 C78 38, 68 32, 58 32 C48 32, 40 38, 40 50 C40 62, 48 68, 58 68 C68 68, 78 62, 78 50 M40 58 C32 66, 24 74, 20 78 M58 24 C60 20, 64 20, 66 24 C64 28, 60 28, 58 24",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
