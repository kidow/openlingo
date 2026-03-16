import { WritingTemplate } from "@/types/writing";

export const ruUppercaseITemplate: WritingTemplate = {
  id: "ru-uppercase-i",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 이", en: "Uppercase I" },
  nativeLabel: "И",
  cue: {
    ko: "왼쪽 세로획에서 오른쪽 상단으로 대각선을 연결하세요.",
    en: "Connect the bottom of the left vertical diagonally to the top of the right.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'И' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'И'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 V80 M28 80 L72 20 M72 20 V80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
