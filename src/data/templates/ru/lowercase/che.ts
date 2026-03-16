import { WritingTemplate } from "@/types/writing";

export const ruLowercaseCheTemplate: WritingTemplate = {
  id: "ru-lowercase-che",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 체", en: "Lowercase Che" },
  nativeLabel: "ч",
  cue: {
    ko: "왼쪽 짧은 세로획과 가로획을 먼저 긋고 오른쪽 세로획을 내리세요.",
    en: "Draw the short left vertical and crossbar, then the long right vertical.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ч' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ч'.",
  },
  direction: "ltr",
  guidePathD: "M32 36 V58 H68 M68 36 V76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
