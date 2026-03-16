import { WritingTemplate } from "@/types/writing";

export const arDhalTemplate: WritingTemplate = {
  id: "ar-dhal",
  languageId: "ar",
  mode: "character",
  label: { ko: "달", en: "Dhal" },
  nativeLabel: "ذ",
  cue: {
    ko: "달과 같은 곡선을 그리고 위에 점을 찍으세요.",
    en: "Draw the same curve as Dal, then add a dot above.",
  },
  description: {
    ko: "아랍어 문자 'ذ' (Dhal) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ذ' (Dhal).",
  },
  direction: "rtl",
  guidePathD:
    "M72 36 C72 48, 64 58, 50 62 C36 66, 26 70, 26 76 M58 28 C60 24, 64 24, 66 28 C64 32, 60 32, 58 28",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
