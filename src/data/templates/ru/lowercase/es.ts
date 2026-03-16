import { WritingTemplate } from "@/types/writing";

export const ruLowercaseEsTemplate: WritingTemplate = {
  id: "ru-lowercase-es",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 에스", en: "Lowercase Es" },
  nativeLabel: "с",
  cue: {
    ko: "열린 곡선의 위아래 끝이 대칭에 가깝도록 하세요.",
    en: "Keep the open curve nearly symmetric at top and bottom.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'с' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'с'.",
  },
  direction: "ltr",
  guidePathD:
    "M66 40 C58 32, 44 32, 36 42 C28 52, 28 62, 36 72 C44 80, 58 80, 66 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
