import { WritingTemplate } from "@/types/writing";

export const arYaTemplate: WritingTemplate = {
  id: "ar-ya",
  languageId: "ar",
  mode: "character",
  label: { ko: "야", en: "Ya" },
  nativeLabel: "ي",
  cue: {
    ko: "부드러운 곡선을 그리고 아래에 두 점을 나란히 찍으세요.",
    en: "Draw a smooth curve, then place two dots side by side below.",
  },
  description: {
    ko: "아랍어 문자 'ي' (Ya) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ي' (Ya).",
  },
  direction: "rtl",
  guidePathD:
    "M72 40 C64 32, 50 32, 42 40 C34 48, 30 60, 26 72 M42 80 C44 76, 48 76, 50 80 C48 84, 44 84, 42 80 M56 80 C58 76, 62 76, 64 80 C62 84, 58 84, 56 80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
