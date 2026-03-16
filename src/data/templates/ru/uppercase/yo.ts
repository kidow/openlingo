import { WritingTemplate } from "@/types/writing";

export const ruUppercaseYoTemplate: WritingTemplate = {
  id: "ru-uppercase-yo",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 요", en: "Uppercase Yo" },
  nativeLabel: "Ё",
  cue: {
    ko: "Е와 동일하게 쓰되 상단에 두 점을 정확히 찍으세요.",
    en: "Write like Е, then add two dots above.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ё' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ё'.",
  },
  direction: "ltr",
  guidePathD:
    "M28 24 H72 M28 24 V80 M28 52 H64 M28 80 H72 M40 14 C42 10, 46 10, 48 14 C46 18, 42 18, 40 14 M56 14 C58 10, 62 10, 64 14 C62 18, 58 18, 56 14",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
