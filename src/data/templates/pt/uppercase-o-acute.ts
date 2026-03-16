import { WritingTemplate } from "@/types/writing";

export const ptUppercaseOAcuteTemplate: WritingTemplate = {
  id: "pt-uppercase-o-acute",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 O 아큐트", en: "Uppercase O-Acute" },
  nativeLabel: "Ó",
  cue: {
    ko: "O를 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a standard O, then add an acute accent (´) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Ó' (아큐트) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Ó' (O-acute).",
  },
  direction: "ltr",
  guidePathD: "M50 20 C28 20, 20 40, 20 50 C20 60, 28 80, 50 80 C72 80, 80 60, 80 50 C80 40, 72 20, 50 20 M46 10 L58 2",
  strokeGuides: [
    { id: "pt-uppercase-o-acute-1", pathD: "M50 20 C28 20, 20 40, 20 50 C20 60, 28 80, 50 80 C72 80, 80 60, 80 50 C80 40, 72 20, 50 20", order: 1 },
    { id: "pt-uppercase-o-acute-2", pathD: "M46 10 L58 2", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
