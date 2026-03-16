import { WritingTemplate } from "@/types/writing";

export const ruLowercaseYeTemplate: WritingTemplate = {
  id: "ru-lowercase-ye",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 е", en: "Lowercase е" },
  nativeLabel: "е",
  cue: {
    ko: "가로획에서 시작해 반시계 방향으로 곡선을 이어가세요.",
    en: "Start at the crossbar and curve counter-clockwise.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'е' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'е'.",
  },
  direction: "ltr",
  guidePathD:
    "M32 54 H68 C68 40, 58 32, 48 32 C36 32, 28 42, 28 54 C28 66, 36 76, 48 76 C58 76, 66 70, 68 64",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
