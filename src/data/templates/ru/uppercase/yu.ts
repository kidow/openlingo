import { WritingTemplate } from "@/types/writing";

export const ruUppercaseYuTemplate: WritingTemplate = {
  id: "ru-uppercase-yu",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 유", en: "Uppercase Yu" },
  nativeLabel: "Ю",
  cue: {
    ko: "왼쪽 세로획과 오른쪽 원을 가로획으로 자연스럽게 연결하세요.",
    en: "Link the left vertical to the right circle with a crossbar.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ю' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ю'.",
  },
  direction: "ltr",
  guidePathD:
    "M22 20 V80 M22 50 H42 M60 20 C78 20, 82 36, 82 50 C82 64, 78 80, 60 80 C42 80, 38 64, 38 50 C38 36, 42 20, 60 20 Z",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
