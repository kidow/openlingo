import { WritingTemplate } from "@/types/writing";

export const ruLowercaseHardSignTemplate: WritingTemplate = {
  id: "ru-lowercase-hard-sign",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 경자음 부호", en: "Lowercase Hard Sign" },
  nativeLabel: "ъ",
  cue: {
    ko: "상단 가로획을 짧게 긋고 하단 둥근 부분을 매끄럽게 마무리하세요.",
    en: "Start with a short top bar, then smooth the lower-right bowl.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ъ' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ъ'.",
  },
  direction: "ltr",
  guidePathD: "M30 36 H46 V56 H56 C68 56, 68 76, 56 76 H46 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
