import { WritingTemplate } from "@/types/writing";

export const frUppercaseOeLigatureTemplate: WritingTemplate = {
  id: "fr-uppercase-oe-ligature",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 외 합자", en: "Uppercase Œ Ligature" },
  nativeLabel: "Œ",
  cue: {
    ko: "O의 왼쪽 곡선을 그린 뒤 E의 가로획 세 개를 연결하세요.",
    en: "Draw the left curve of O, then connect three horizontal strokes of E.",
  },
  description: {
    ko: "프랑스어 합자 'Œ' (O-E 리가처) 연습용 템플릿입니다.",
    en: "Practice template for the French ligature 'Œ' (O-E ligature).",
  },
  direction: "ltr",
  guidePathD: "M44 20 C20 20, 14 40, 14 50 C14 60, 20 80, 44 80 M44 20 H76 M44 50 H68 M44 80 H76 M44 20 V80",
  strokeGuides: [
    { id: "fr-uppercase-oe-ligature-1", pathD: "M44 20 C20 20, 14 40, 14 50 C14 60, 20 80, 44 80", order: 1 },
    { id: "fr-uppercase-oe-ligature-2", pathD: "M44 20 V80", order: 2 },
    { id: "fr-uppercase-oe-ligature-3", pathD: "M44 20 H76", order: 3 },
    { id: "fr-uppercase-oe-ligature-4", pathD: "M44 50 H68", order: 4 },
    { id: "fr-uppercase-oe-ligature-5", pathD: "M44 80 H76", order: 5 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
