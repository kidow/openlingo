import { WritingTemplate } from "@/types/writing";

export const ruUppercaseZeTemplate: WritingTemplate = {
  id: "ru-uppercase-ze",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 제", en: "Uppercase Ze" },
  nativeLabel: "З",
  cue: {
    ko: "위아래 곡선이 자연스럽게 이어지도록 중간 꺾임을 부드럽게 처리하세요.",
    en: "Smooth the mid-joint so upper and lower curves flow together.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'З' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'З'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 26 C40 18, 62 18, 68 30 C74 42, 62 50, 50 50 C62 50, 76 58, 70 72 C64 84, 40 84, 30 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
