import { WritingTemplate } from "@/types/writing";

export const arQafTemplate: WritingTemplate = {
  id: "ar-qaf",
  languageId: "ar",
  mode: "character",
  label: { ko: "까프", en: "Qaf" },
  nativeLabel: "ق",
  cue: {
    ko: "파와 비슷한 원을 그리고 위에 두 점을 찍으세요.",
    en: "Draw a circle similar to Fa, then place two dots above.",
  },
  description: {
    ko: "아랍어 문자 'ق' (Qaf) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ق' (Qaf).",
  },
  direction: "rtl",
  guidePathD:
    "M70 46 C70 36, 62 30, 54 30 C46 30, 38 36, 38 46 C38 56, 46 62, 54 62 C62 62, 70 56, 70 46 M38 54 C32 64, 26 72, 22 78 M46 22 C48 18, 52 18, 54 22 C52 26, 48 26, 46 22 M60 22 C62 18, 66 18, 68 22 C66 26, 62 26, 60 22",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
