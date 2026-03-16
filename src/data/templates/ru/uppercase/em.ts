import { WritingTemplate } from "@/types/writing";

export const ruUppercaseEmTemplate: WritingTemplate = {
  id: "ru-uppercase-em",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 엠", en: "Uppercase Em" },
  nativeLabel: "М",
  cue: {
    ko: "양쪽 세로획을 먼저 세우고 가운데 V자를 정확히 연결하세요.",
    en: "Raise two verticals first, then connect with a center V.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'М' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'М'.",
  },
  direction: "ltr",
  guidePathD: "M22 80 V20 L50 50 L78 20 V80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
