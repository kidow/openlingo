import { WritingTemplate } from "@/types/writing";

export const arDalTemplate: WritingTemplate = {
  id: "ar-dal",
  languageId: "ar",
  mode: "character",
  label: { ko: "달", en: "Dal" },
  nativeLabel: "د",
  cue: {
    ko: "오른쪽 위에서 왼쪽 아래로 완만한 곡선을 그으세요.",
    en: "Draw a gentle curve from the upper right to the lower left.",
  },
  description: {
    ko: "아랍어 문자 'د' (Dal) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'د' (Dal).",
  },
  direction: "rtl",
  guidePathD:
    "M72 36 C72 48, 64 58, 50 62 C36 66, 26 70, 26 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
