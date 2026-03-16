import { WritingTemplate } from "@/types/writing";

export const ruUppercaseShortITemplate: WritingTemplate = {
  id: "ru-uppercase-short-i",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 단이", en: "Uppercase Short I" },
  nativeLabel: "Й",
  cue: {
    ko: "И와 동일하게 쓰고 상단에 짧은 곡선(브레베)을 추가하세요.",
    en: "Write И first, then add a short breve above.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Й' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Й'.",
  },
  direction: "ltr",
  guidePathD: "M28 24 V80 M28 80 L72 24 M72 24 V80 M40 14 C46 8, 54 8, 60 14",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
