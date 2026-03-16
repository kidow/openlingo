import { WritingTemplate } from "@/types/writing";

export const arKhaTemplate: WritingTemplate = {
  id: "ar-kha",
  languageId: "ar",
  mode: "character",
  label: { ko: "카", en: "Kha" },
  nativeLabel: "خ",
  cue: {
    ko: "하와 같은 갈고리 형태를 그리고 위에 점을 찍으세요.",
    en: "Draw the same hook as Ha, then add a dot above.",
  },
  description: {
    ko: "아랍어 문자 'خ' (Kha) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'خ' (Kha).",
  },
  direction: "rtl",
  guidePathD:
    "M68 30 C68 42, 60 50, 50 50 C40 50, 34 56, 34 66 C34 76, 42 82, 50 82 L30 82 M50 50 V30 M52 22 C54 18, 58 18, 60 22 C58 26, 54 26, 52 22",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
