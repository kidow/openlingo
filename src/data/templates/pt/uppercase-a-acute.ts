import { WritingTemplate } from "@/types/writing";

export const ptUppercaseAAcuteTemplate: WritingTemplate = {
  id: "pt-uppercase-a-acute",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 A 아큐트", en: "Uppercase A-Acute" },
  nativeLabel: "Á",
  cue: {
    ko: "A를 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a standard A, then add an acute accent (´) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Á' (아큐트) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Á' (A-acute).",
  },
  direction: "ltr",
  guidePathD: "M24 80 L50 24 L76 80 M34 56 H66 M46 14 L58 6",
  strokeGuides: [
    { id: "pt-uppercase-a-acute-1", pathD: "M24 80 L50 24", order: 1 },
    { id: "pt-uppercase-a-acute-2", pathD: "M50 24 L76 80", order: 2 },
    { id: "pt-uppercase-a-acute-3", pathD: "M34 56 H66", order: 3 },
    { id: "pt-uppercase-a-acute-4", pathD: "M46 14 L58 6", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
