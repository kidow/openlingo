import { WritingTemplate } from "@/types/writing";

export const ruUppercaseUTemplate: WritingTemplate = {
  id: "ru-uppercase-u",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 우", en: "Uppercase U" },
  nativeLabel: "У",
  cue: {
    ko: "두 대각선이 만난 뒤 아래로 자연스럽게 꼬리를 내리세요.",
    en: "Join two diagonals then let the tail descend naturally.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'У' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'У'.",
  },
  direction: "ltr",
  guidePathD: "M24 20 L50 54 M76 20 L50 54 L40 80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
