import { WritingTemplate } from "@/types/writing";

export const ruUppercaseDeTemplate: WritingTemplate = {
  id: "ru-uppercase-de",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 데", en: "Uppercase De" },
  nativeLabel: "Д",
  cue: {
    ko: "양쪽 다리가 균형을 이루도록 하고 지붕 부분을 안정적으로 그리세요.",
    en: "Keep the two legs balanced and the roof stable.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Д' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Д'.",
  },
  direction: "ltr",
  guidePathD: "M20 80 V72 H32 V20 H68 V72 H80 V80 H20",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
