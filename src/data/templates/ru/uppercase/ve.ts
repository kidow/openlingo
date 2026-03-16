import { WritingTemplate } from "@/types/writing";

export const ruUppercaseVeTemplate: WritingTemplate = {
  id: "ru-uppercase-ve",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 베(Ve)", en: "Uppercase Ve" },
  nativeLabel: "В",
  cue: {
    ko: "세로획을 먼저 긋고 위아래 둥근 부분의 크기를 균형 있게 맞추세요.",
    en: "Balance the upper and lower bumps evenly along the vertical stroke.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'В' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'В'.",
  },
  direction: "ltr",
  guidePathD:
    "M28 20 V80 M28 20 H58 C74 20, 74 50, 58 50 H28 M28 50 H58 C74 50, 74 80, 58 80 H28",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
