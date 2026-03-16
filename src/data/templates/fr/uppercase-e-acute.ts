import { WritingTemplate } from "@/types/writing";

export const frUppercaseEAcuteTemplate: WritingTemplate = {
  id: "fr-uppercase-e-acute",
  languageId: "fr",
  mode: "character",
  label: { ko: "대문자 E 악상테귀", en: "Uppercase E-Acute" },
  nativeLabel: "É",
  cue: {
    ko: "E를 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a standard E, then add an acute accent (´) above.",
  },
  description: {
    ko: "프랑스어 문자 'É' (악상테귀) 연습용 템플릿입니다.",
    en: "Practice template for the French letter 'É' (E-acute).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V80 M24 20 H76 M24 50 H76 M24 80 H76 M46 14 L58 6",
  strokeGuides: [
    { id: "fr-uppercase-e-acute-1", pathD: "M24 20 V80", order: 1 },
    { id: "fr-uppercase-e-acute-2", pathD: "M24 20 H76", order: 2 },
    { id: "fr-uppercase-e-acute-3", pathD: "M24 50 H76", order: 3 },
    { id: "fr-uppercase-e-acute-4", pathD: "M24 80 H76", order: 4 },
    { id: "fr-uppercase-e-acute-5", pathD: "M46 14 L58 6", order: 5 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
