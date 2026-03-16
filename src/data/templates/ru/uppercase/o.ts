import { WritingTemplate } from "@/types/writing";

export const ruUppercaseOTemplate: WritingTemplate = {
  id: "ru-uppercase-o",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 오", en: "Uppercase O" },
  nativeLabel: "О",
  cue: {
    ko: "타원을 균일한 두께로 매끄럽게 이어 그리세요.",
    en: "Draw an even oval with consistent thickness.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'О' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'О'.",
  },
  direction: "ltr",
  guidePathD:
    "M50 20 C74 20, 80 38, 80 50 C80 62, 74 80, 50 80 C26 80, 20 62, 20 50 C20 38, 26 20, 50 20 Z",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
