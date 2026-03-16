import { WritingTemplate } from "@/types/writing";

export const ruLowercaseShchaTemplate: WritingTemplate = {
  id: "ru-lowercase-shcha",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 샤", en: "Lowercase Shcha" },
  nativeLabel: "щ",
  cue: {
    ko: "ш처럼 쓰고 오른쪽 하단에 짧은 꼬리를 추가하세요.",
    en: "Write like ш, then add a short descender on the lower right.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'щ' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'щ'.",
  },
  direction: "ltr",
  guidePathD: "M24 36 V76 H76 V36 M50 36 V76 M76 76 V86",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
