import { WritingTemplate } from "@/types/writing";

export const ruLowercaseITemplate: WritingTemplate = {
  id: "ru-lowercase-i",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 и", en: "Lowercase и" },
  nativeLabel: "и",
  cue: {
    ko: "왼쪽 하단에서 오른쪽 상단으로 대각선을 연결하세요.",
    en: "Connect the bottom left to the top right with a diagonal.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'и' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'и'.",
  },
  direction: "ltr",
  guidePathD: "M32 36 V76 M32 76 L68 36 M68 36 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
