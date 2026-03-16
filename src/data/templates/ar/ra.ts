import { WritingTemplate } from "@/types/writing";

export const arRaTemplate: WritingTemplate = {
  id: "ar-ra",
  languageId: "ar",
  mode: "character",
  label: { ko: "라", en: "Ra" },
  nativeLabel: "ر",
  cue: {
    ko: "짧은 곡선을 오른쪽에서 왼쪽 아래로 자연스럽게 그으세요.",
    en: "Draw a short curve descending naturally from right to lower left.",
  },
  description: {
    ko: "아랍어 문자 'ر' (Ra) 연습용 템플릿입니다.",
    en: "Practice template for the Arabic letter 'ر' (Ra).",
  },
  direction: "rtl",
  guidePathD:
    "M62 40 C62 52, 56 64, 46 72 C40 78, 34 80, 30 82",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "아랍 문자 연습 칸", en: "Arabic cell" },
};
