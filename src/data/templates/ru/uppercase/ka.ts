import { WritingTemplate } from "@/types/writing";

export const ruUppercaseKaTemplate: WritingTemplate = {
  id: "ru-uppercase-ka",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 카", en: "Uppercase Ka" },
  nativeLabel: "К",
  cue: {
    ko: "세로획에서 대각선 두 획이 같은 지점에서 갈라지도록 하세요.",
    en: "Both diagonals branch from the same point on the vertical.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'К' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'К'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 V80 M28 50 L72 20 M28 50 L72 80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
