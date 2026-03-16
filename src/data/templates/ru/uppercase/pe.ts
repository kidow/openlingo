import { WritingTemplate } from "@/types/writing";

export const ruUppercasePeTemplate: WritingTemplate = {
  id: "ru-uppercase-pe",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 페", en: "Uppercase Pe" },
  nativeLabel: "П",
  cue: {
    ko: "두 세로획을 평행하게 세우고 상단을 가로획으로 연결하세요.",
    en: "Raise two parallel verticals and connect them at the top.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'П' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'П'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 H72 M28 20 V80 M72 20 V80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
