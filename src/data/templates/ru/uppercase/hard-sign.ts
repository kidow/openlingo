import { WritingTemplate } from "@/types/writing";

export const ruUppercaseHardSignTemplate: WritingTemplate = {
  id: "ru-uppercase-hard-sign",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 트뵤르디 즈나크", en: "Uppercase Hard Sign" },
  nativeLabel: "Ъ",
  cue: {
    ko: "상단 왼쪽 가로획을 짧게 긋고 세로획 하단의 둥근 부분을 매끄럽게 마무리하세요.",
    en: "Start with a short top bar, then smooth the lower-right bowl.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ъ' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ъ'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 H44 V50 H58 C74 50, 74 80, 58 80 H44 V80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
