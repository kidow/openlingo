import { WritingTemplate } from "@/types/writing";

export const ptLowercaseOAcuteTemplate: WritingTemplate = {
  id: "pt-lowercase-o-acute",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 o 아큐트", en: "Lowercase O-Acute" },
  nativeLabel: "ó",
  cue: {
    ko: "o를 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a lowercase o, then add an acute accent (´) above.",
  },
  description: {
    ko: "포르투갈어 문자 'ó' (소문자 아큐트) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'ó' (lowercase o-acute).",
  },
  direction: "ltr",
  guidePathD: "M50 36 C36 36, 30 44, 30 54 C30 64, 36 72, 50 72 C64 72, 70 64, 70 54 C70 44, 64 36, 50 36 M46 26 L58 18",
  strokeGuides: [
    { id: "pt-lowercase-o-acute-1", pathD: "M50 36 C36 36, 30 44, 30 54 C30 64, 36 72, 50 72 C64 72, 70 64, 70 54 C70 44, 64 36, 50 36", order: 1 },
    { id: "pt-lowercase-o-acute-2", pathD: "M46 26 L58 18", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
