import { WritingTemplate } from "@/types/writing";

export const arHaLetterTemplate: WritingTemplate = {
  id: "ar-ha-letter",
  languageId: "ar",
  mode: "character",
  label: { ko: "하 (ه)", en: "Ha (end)" },
  nativeLabel: "ه",
  cue: {
    ko: "둥근 고리를 시계 방향으로 매끄럽게 그리세요.",
    en: "Draw a round loop clockwise in a smooth motion.",
  },
  description: {
    ko: "아랍어 문자 'ه' (Ha (end)) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ه' (Ha (end)).",
  },
  direction: "rtl",
  guidePathD:
    "M56 34 C44 28, 32 36, 32 50 C32 64, 44 72, 56 66 C68 60, 68 40, 56 34 Z",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
