import { WritingTemplate } from "@/types/writing";

export const ruUppercaseShaTemplate: WritingTemplate = {
  id: "ru-uppercase-sha",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 샤", en: "Uppercase Sha" },
  nativeLabel: "Ш",
  cue: {
    ko: "세 세로획의 간격을 균등하게 유지하고 하단을 가로획으로 연결하세요.",
    en: "Space three verticals evenly and connect them at the bottom.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ш' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ш'.",
  },
  direction: "ltr",
  guidePathD: "M22 20 V80 H78 V20 M50 20 V80",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
