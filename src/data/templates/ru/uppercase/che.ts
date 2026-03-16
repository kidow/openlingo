import { WritingTemplate } from "@/types/writing";

export const ruUppercaseCheTemplate: WritingTemplate = {
  id: "ru-uppercase-che",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 체", en: "Uppercase Che" },
  nativeLabel: "Ч",
  cue: {
    ko: "왼쪽 짧은 세로획과 가로획을 먼저 긋고 오른쪽 긴 세로획을 내리세요.",
    en: "Draw the short left vertical and crossbar first, then the long right vertical.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ч' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ч'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 V52 H72 M72 20 V80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
