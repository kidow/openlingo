import { WritingTemplate } from "@/types/writing";

export const ruLowercaseEReversedTemplate: WritingTemplate = {
  id: "ru-lowercase-e-reversed",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 에", en: "Lowercase E Reversed" },
  nativeLabel: "э",
  cue: {
    ko: "с를 좌우로 뒤집고 가로획을 중앙에 배치하세요.",
    en: "Mirror с horizontally and add a crossbar at the center.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'э' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'э'.",
  },
  direction: "ltr",
  guidePathD:
    "M34 40 C42 32, 56 32, 64 42 C72 52, 72 62, 64 72 C56 80, 42 80, 34 72 M42 56 H68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
