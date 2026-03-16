import { WritingTemplate } from "@/types/writing";

export const ptLowercaseEAcuteTemplate: WritingTemplate = {
  id: "pt-lowercase-e-acute",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 e 아큐트", en: "Lowercase E-Acute" },
  nativeLabel: "é",
  cue: {
    ko: "e를 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a lowercase e, then add an acute accent (´) above.",
  },
  description: {
    ko: "포르투갈어 문자 'é' (소문자 아큐트) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'é' (lowercase e-acute).",
  },
  direction: "ltr",
  guidePathD: "M30 54 H70 C70 36, 30 36, 30 54 C30 72, 70 72, 70 60 M46 26 L58 18",
  strokeGuides: [
    { id: "pt-lowercase-e-acute-1", pathD: "M30 54 H70 C70 36, 30 36, 30 54 C30 72, 70 72, 70 60", order: 1 },
    { id: "pt-lowercase-e-acute-2", pathD: "M46 26 L58 18", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
