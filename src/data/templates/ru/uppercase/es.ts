import { WritingTemplate } from "@/types/writing";

export const ruUppercaseEsTemplate: WritingTemplate = {
  id: "ru-uppercase-es",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 에스", en: "Uppercase Es" },
  nativeLabel: "С",
  cue: {
    ko: "열린 곡선의 위아래 끝을 대칭에 가깝게 유지하세요.",
    en: "Keep the open curve nearly symmetric at top and bottom.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'С' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'С'.",
  },
  direction: "ltr",
  guidePathD:
    "M72 28 C62 18, 40 18, 30 30 C20 42, 20 58, 30 70 C40 82, 62 82, 72 72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
