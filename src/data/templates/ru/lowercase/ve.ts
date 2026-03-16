import { WritingTemplate } from "@/types/writing";

export const ruLowercaseVeTemplate: WritingTemplate = {
  id: "ru-lowercase-ve",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 в", en: "Lowercase в" },
  nativeLabel: "в",
  cue: {
    ko: "세로획을 먼저 긋고 위아래 둥근 부분의 크기를 맞추세요.",
    en: "Draw the vertical first, then balance the upper and lower bumps.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'в' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'в'.",
  },
  direction: "ltr",
  guidePathD:
    "M32 36 V76 M32 36 H52 C64 36, 64 54, 52 54 H32 M32 54 H52 C64 54, 64 76, 52 76 H32",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
