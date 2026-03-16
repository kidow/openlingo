import { WritingTemplate } from "@/types/writing";

export const ptLowercaseUAcuteTemplate: WritingTemplate = {
  id: "pt-lowercase-u-acute",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 u 아큐트", en: "Lowercase U-Acute" },
  nativeLabel: "ú",
  cue: {
    ko: "u를 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a lowercase u, then add an acute accent (´) above.",
  },
  description: {
    ko: "포르투갈어 문자 'ú' (소문자 아큐트) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'ú' (lowercase u-acute).",
  },
  direction: "ltr",
  guidePathD: "M34 36 V60 C34 72, 46 74, 54 72 M66 36 V72 M46 26 L58 18",
  strokeGuides: [
    { id: "pt-lowercase-u-acute-1", pathD: "M34 36 V60 C34 72, 46 74, 54 72", order: 1 },
    { id: "pt-lowercase-u-acute-2", pathD: "M66 36 V72", order: 2 },
    { id: "pt-lowercase-u-acute-3", pathD: "M46 26 L58 18", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
