import { WritingTemplate } from "@/types/writing";

export const ruLowercaseShortITemplate: WritingTemplate = {
  id: "ru-lowercase-short-i",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 й", en: "Lowercase й" },
  nativeLabel: "й",
  cue: {
    ko: "и와 동일하게 쓰고 상단에 짧은 곡선을 추가하세요.",
    en: "Write и first, then add a short breve above.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'й' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'й'.",
  },
  direction: "ltr",
  guidePathD:
    "M32 40 V76 M32 76 L68 40 M68 40 V76 M42 30 C48 24, 52 24, 58 30",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
