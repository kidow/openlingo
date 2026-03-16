import { WritingTemplate } from "@/types/writing";

export const ruUppercaseGeTemplate: WritingTemplate = {
  id: "ru-uppercase-ge",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 게", en: "Uppercase Ge" },
  nativeLabel: "Г",
  cue: {
    ko: "상단 가로획에서 시작해 세로획을 직각으로 내리세요.",
    en: "Start with the top bar, then drop a right-angle vertical.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Г' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Г'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 H72 M28 20 V80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
