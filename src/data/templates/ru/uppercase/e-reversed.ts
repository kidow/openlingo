import { WritingTemplate } from "@/types/writing";

export const ruUppercaseEReversedTemplate: WritingTemplate = {
  id: "ru-uppercase-e-reversed",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 에", en: "Uppercase E Reversed" },
  nativeLabel: "Э",
  cue: {
    ko: "С를 좌우로 뒤집은 형태로 가로획을 중앙에 배치하세요.",
    en: "Mirror С horizontally and add a crossbar at the center.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Э' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Э'.",
  },
  direction: "ltr",
  guidePathD:
    "M28 28 C38 18, 60 18, 70 30 C80 42, 80 58, 70 70 C60 82, 38 82, 28 72 M40 50 H72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
