import { WritingTemplate } from "@/types/writing";

export const ruLowercaseShaTemplate: WritingTemplate = {
  id: "ru-lowercase-sha",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 샤", en: "Lowercase Sha" },
  nativeLabel: "ш",
  cue: {
    ko: "세 세로획의 간격을 균등하게 유지하세요.",
    en: "Space three verticals evenly and connect at the bottom.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ш' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ш'.",
  },
  direction: "ltr",
  guidePathD: "M26 36 V76 H74 V36 M50 36 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
