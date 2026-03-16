import { WritingTemplate } from "@/types/writing";

export const frUppercaseCCedillaTemplate: WritingTemplate = {
  id: "fr-uppercase-c-cedilla",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 C 세디유", en: "Uppercase C-Cedilla" },
  nativeLabel: "Ç",
  cue: {
    ko: "C를 먼저 쓰고, 아래 가운데에 갈고리(,)를 그으세요.",
    en: "Write a standard C, then add a cedilla hook below.",
  },
  description: {
    ko: "프랑스어 문자 'Ç' (세디유) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'Ç' (C-cedilla).",
  },
  direction: "ltr",
  guidePathD: "M76 28 C68 18, 32 18, 24 40 V60 C24 78, 60 82, 76 72 M50 82 L54 90 C54 96, 42 96, 42 92",
  strokeGuides: [
    { id: "fr-uppercase-c-cedilla-1", pathD: "M76 28 C68 18, 32 18, 24 40 V60 C24 78, 60 82, 76 72", order: 1 },
    { id: "fr-uppercase-c-cedilla-2", pathD: "M50 82 L54 90 C54 96, 42 96, 42 92", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
