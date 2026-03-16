import { WritingTemplate } from "@/types/writing";

export const ruLowercaseUTemplate: WritingTemplate = {
  id: "ru-lowercase-u",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 우", en: "Lowercase U" },
  nativeLabel: "у",
  cue: {
    ko: "두 대각선이 만난 뒤 아래로 꼬리를 내리세요.",
    en: "Join two diagonals and let the tail descend below the baseline.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'у' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'у'.",
  },
  direction: "ltr",
  guidePathD: "M28 36 L50 66 M72 36 L50 66 L42 88",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
