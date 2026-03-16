import { WritingTemplate } from "@/types/writing";

export const ruLowercaseYuTemplate: WritingTemplate = {
  id: "ru-lowercase-yu",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 유", en: "Lowercase Yu" },
  nativeLabel: "ю",
  cue: {
    ko: "왼쪽 세로획과 오른쪽 원을 가로획으로 연결하세요.",
    en: "Link the left vertical to the right circle with a crossbar.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ю' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ю'.",
  },
  direction: "ltr",
  guidePathD:
    "M26 36 V76 M26 56 H40 M58 36 C72 36, 78 46, 78 56 C78 66, 72 76, 58 76 C44 76, 38 66, 38 56 C38 46, 44 36, 58 36 Z",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
