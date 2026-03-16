import { WritingTemplate } from "@/types/writing";

export const ruLowercaseYoTemplate: WritingTemplate = {
  id: "ru-lowercase-yo",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 ё", en: "Lowercase ё" },
  nativeLabel: "ё",
  cue: {
    ko: "е와 동일하게 쓰되 상단에 두 점을 정확히 찍으세요.",
    en: "Write like е, then add two dots above.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ё' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ё'.",
  },
  direction: "ltr",
  guidePathD:
    "M32 54 H68 C68 40, 58 32, 48 32 C36 32, 28 42, 28 54 C28 66, 36 76, 48 76 C58 76, 66 70, 68 64 M38 24 C40 20, 44 20, 46 24 C44 28, 40 28, 38 24 M54 24 C56 20, 60 20, 62 24 C60 28, 56 28, 54 24",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
