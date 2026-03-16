import { WritingTemplate } from "@/types/writing";

export const arHaTemplate: WritingTemplate = {
  id: "ar-ha",
  languageId: "ar",
  mode: "character",
  label: { ko: "하", en: "Ha" },
  nativeLabel: "ح",
  cue: {
    ko: "갈고리 형태를 부드럽게 그리세요. 점은 없습니다.",
    en: "Draw the hook shape smoothly. No dots needed.",
  },
  description: {
    ko: "아랍어 문자 'ح' (Ha) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ح' (Ha).",
  },
  direction: "rtl",
  guidePathD:
    "M68 30 C68 42, 60 50, 50 50 C40 50, 34 56, 34 66 C34 76, 42 82, 50 82 L30 82 M50 50 V30",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
