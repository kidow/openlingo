import { WritingTemplate } from "@/types/writing";

export const ptUppercaseIAcuteTemplate: WritingTemplate = {
  id: "pt-uppercase-i-acute",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 I 아큐트", en: "Uppercase I-Acute" },
  nativeLabel: "Í",
  cue: {
    ko: "I를 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a standard I, then add an acute accent (´) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Í' (아큐트) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Í' (I-acute).",
  },
  direction: "ltr",
  guidePathD: "M24 20 H76 M50 20 V80 M24 80 H76 M46 10 L58 2",
  strokeGuides: [
    { id: "pt-uppercase-i-acute-1", pathD: "M24 20 H76", order: 1 },
    { id: "pt-uppercase-i-acute-2", pathD: "M50 20 V80", order: 2 },
    { id: "pt-uppercase-i-acute-3", pathD: "M24 80 H76", order: 3 },
    { id: "pt-uppercase-i-acute-4", pathD: "M46 10 L58 2", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
