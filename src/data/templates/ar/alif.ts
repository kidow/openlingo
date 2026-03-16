import { WritingTemplate } from "@/types/writing";

export const arAlifTemplate: WritingTemplate = {
  id: "ar-alif",
  languageId: "ar",
  mode: "character",
  label: { ko: "알리프", en: "Alif" },
  nativeLabel: "ا",
  cue: {
    ko: "위에서 아래로 곧은 세로획을 한 번에 그으세요.",
    en: "Draw a single straight vertical stroke from top to bottom.",
  },
  description: {
    ko: "아랍어 문자 'ا' (Alif) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ا' (Alif).",
  },
  direction: "rtl",
  guidePathD: "M55 18 V82",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
