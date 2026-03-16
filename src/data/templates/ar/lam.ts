import { WritingTemplate } from "@/types/writing";

export const arLamTemplate: WritingTemplate = {
  id: "ar-lam",
  languageId: "ar",
  mode: "character",
  label: { ko: "람", en: "Lam" },
  nativeLabel: "ل",
  cue: {
    ko: "긴 세로획을 내린 뒤 아래쪽에서 왼쪽으로 부드럽게 곡선을 그으세요.",
    en: "Draw a tall vertical, then curve smoothly to the left at the bottom.",
  },
  description: {
    ko: "아랍어 문자 'ل' (Lam) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ل' (Lam).",
  },
  direction: "rtl",
  guidePathD:
    "M60 18 V62 C60 74, 50 80, 38 80 C30 80, 24 76, 22 70",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
