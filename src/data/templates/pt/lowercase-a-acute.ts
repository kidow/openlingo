import { WritingTemplate } from "@/types/writing";

export const ptLowercaseAAcuteTemplate: WritingTemplate = {
  id: "pt-lowercase-a-acute",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 a 아큐트", en: "Lowercase A-Acute" },
  nativeLabel: "á",
  cue: {
    ko: "a를 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a lowercase a, then add an acute accent (´) above.",
  },
  description: {
    ko: "포르투갈어 문자 'á' (소문자 아큐트) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'á' (lowercase a-acute).",
  },
  direction: "ltr",
  guidePathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50 M62 36 V72 M46 22 L58 14",
  strokeGuides: [
    { id: "pt-lowercase-a-acute-1", pathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50", order: 1 },
    { id: "pt-lowercase-a-acute-2", pathD: "M62 36 V72", order: 2 },
    { id: "pt-lowercase-a-acute-3", pathD: "M46 22 L58 14", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
