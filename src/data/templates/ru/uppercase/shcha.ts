import { WritingTemplate } from "@/types/writing";

export const ruUppercaseShchaTemplate: WritingTemplate = {
  id: "ru-uppercase-shcha",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 샤", en: "Uppercase Shcha" },
  nativeLabel: "Щ",
  cue: {
    ko: "Ш처럼 쓰고 오른쪽 하단에 짧은 꼬리를 추가하세요.",
    en: "Write like Ш, then add a short descender on the lower right.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Щ' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Щ'.",
  },
  direction: "ltr",
  guidePathD: "M20 20 V80 H80 V20 M50 20 V80 M80 80 V88",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
