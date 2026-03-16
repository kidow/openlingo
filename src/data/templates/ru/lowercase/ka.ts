import { WritingTemplate } from "@/types/writing";

export const ruLowercaseKaTemplate: WritingTemplate = {
  id: "ru-lowercase-ka",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 к", en: "Lowercase к" },
  nativeLabel: "к",
  cue: {
    ko: "세로획에서 두 대각선이 같은 지점에서 갈라지도록 하세요.",
    en: "Both diagonals branch from the same point on the vertical.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'к' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'к'.",
  },
  direction: "ltr",
  guidePathD: "M32 36 V76 M32 56 L64 36 M32 56 L64 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
