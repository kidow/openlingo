import { WritingTemplate } from "@/types/writing";

export const arJimTemplate: WritingTemplate = {
  id: "ar-jim",
  languageId: "ar",
  mode: "character",
  label: { ko: "짐", en: "Jim" },
  nativeLabel: "ج",
  cue: {
    ko: "갈고리 형태의 몸체를 그리고 안쪽에 점을 찍으세요.",
    en: "Draw the hook-shaped body and place a dot inside.",
  },
  description: {
    ko: "아랍어 문자 'ج' (Jim) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ج' (Jim).",
  },
  direction: "rtl",
  guidePathD:
    "M68 30 C68 42, 60 50, 50 50 C40 50, 34 56, 34 66 C34 76, 42 82, 50 82 L30 82 M50 50 V30 M42 68 C44 64, 48 64, 50 68 C48 72, 44 72, 42 68",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
