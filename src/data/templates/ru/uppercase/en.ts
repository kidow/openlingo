import { WritingTemplate } from "@/types/writing";

export const ruUppercaseEnTemplate: WritingTemplate = {
  id: "ru-uppercase-en",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 엔", en: "Uppercase En" },
  nativeLabel: "Н",
  cue: {
    ko: "두 세로획의 높이를 맞추고 가로획을 정중앙에 배치하세요.",
    en: "Match two verticals in height and center the crossbar.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Н' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Н'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 V80 M72 20 V80 M28 50 H72",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
