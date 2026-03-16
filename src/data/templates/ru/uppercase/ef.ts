import { WritingTemplate } from "@/types/writing";

export const ruUppercaseEfTemplate: WritingTemplate = {
  id: "ru-uppercase-ef",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 에프", en: "Uppercase Ef" },
  nativeLabel: "Ф",
  cue: {
    ko: "세로획을 중심으로 원이 좌우 대칭이 되도록 그리세요.",
    en: "Center the circle on the vertical so both halves are symmetric.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ф' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ф'.",
  },
  direction: "ltr",
  guidePathD:
    "M50 16 V84 M50 30 C30 30, 22 42, 22 50 C22 58, 30 70, 50 70 C70 70, 78 58, 78 50 C78 42, 70 30, 50 30",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
