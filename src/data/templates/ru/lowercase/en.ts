import { WritingTemplate } from "@/types/writing";

export const ruLowercaseEnTemplate: WritingTemplate = {
  id: "ru-lowercase-en",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 н", en: "Lowercase н" },
  nativeLabel: "н",
  cue: {
    ko: "두 세로획의 높이를 맞추고 가로획을 중앙에 배치하세요.",
    en: "Match two verticals and center the crossbar.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'н' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'н'.",
  },
  direction: "ltr",
  guidePathD: "M32 36 V76 M68 36 V76 M32 56 H68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
