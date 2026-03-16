import { WritingTemplate } from "@/types/writing";

export const ptUppercaseUAcuteTemplate: WritingTemplate = {
  id: "pt-uppercase-u-acute",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 U 아큐트", en: "Uppercase U-Acute" },
  nativeLabel: "Ú",
  cue: {
    ko: "U를 먼저 쓰고, 위에 오른쪽 위로 향하는 짧은 사선을 그으세요.",
    en: "Write a standard U, then add an acute accent (´) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Ú' (아큐트) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Ú' (U-acute).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V64 C24 78, 40 82, 50 82 C60 82, 76 78, 76 64 V20 M46 10 L58 2",
  strokeGuides: [
    { id: "pt-uppercase-u-acute-1", pathD: "M24 20 V64 C24 78, 40 82, 50 82", order: 1 },
    { id: "pt-uppercase-u-acute-2", pathD: "M76 20 V64 C76 78, 60 82, 50 82", order: 2 },
    { id: "pt-uppercase-u-acute-3", pathD: "M46 10 L58 2", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
