import { WritingTemplate } from "@/types/writing";

export const ptUppercaseUDiaeresisTemplate: WritingTemplate = {
  id: "pt-uppercase-u-diaeresis",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 U 트레마", en: "Uppercase U-Diaeresis" },
  nativeLabel: "Ü",
  cue: {
    ko: "U를 먼저 쓰고, 위에 점 두 개를 찍으세요.",
    en: "Write a standard U, then add two dots (diaeresis) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Ü' (트레마) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Ü' (U-diaeresis).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V64 C24 78, 40 82, 50 82 C60 82, 76 78, 76 64 V20 M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10 M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10",
  strokeGuides: [
    { id: "pt-uppercase-u-diaeresis-1", pathD: "M24 20 V64 C24 78, 40 82, 50 82", order: 1 },
    { id: "pt-uppercase-u-diaeresis-2", pathD: "M76 20 V64 C76 78, 60 82, 50 82", order: 2 },
    { id: "pt-uppercase-u-diaeresis-3", pathD: "M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10", order: 3 },
    { id: "pt-uppercase-u-diaeresis-4", pathD: "M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
