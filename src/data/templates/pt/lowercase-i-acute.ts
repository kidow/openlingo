import { WritingTemplate } from "@/types/writing";

export const ptLowercaseIAcuteTemplate: WritingTemplate = {
  id: "pt-lowercase-i-acute",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 i 아큐트", en: "Lowercase I-Acute" },
  nativeLabel: "í",
  cue: {
    ko: "i의 세로획을 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write the vertical stroke of i, then add an acute accent (´) above.",
  },
  description: {
    ko: "포르투갈어 문자 'í' (소문자 아큐트) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'í' (lowercase i-acute).",
  },
  direction: "ltr",
  guidePathD: "M50 36 V72 M46 26 L58 18",
  strokeGuides: [
    { id: "pt-lowercase-i-acute-1", pathD: "M50 36 V72", order: 1 },
    { id: "pt-lowercase-i-acute-2", pathD: "M46 26 L58 18", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
