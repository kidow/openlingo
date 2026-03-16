import { WritingTemplate } from "@/types/writing";

export const ruLowercasePeTemplate: WritingTemplate = {
  id: "ru-lowercase-pe",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 페", en: "Lowercase Pe" },
  nativeLabel: "п",
  cue: {
    ko: "두 세로획을 평행하게 세우고 상단을 가로획으로 연결하세요.",
    en: "Raise two parallel verticals and connect them at the top.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'п' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'п'.",
  },
  direction: "ltr",
  guidePathD: "M32 36 H68 M32 36 V76 M68 36 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
