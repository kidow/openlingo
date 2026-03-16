import { WritingTemplate } from "@/types/writing";

export const ptUppercaseATildeTemplate: WritingTemplate = {
  id: "pt-uppercase-a-tilde",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 A 틸", en: "Uppercase A-Tilde" },
  nativeLabel: "Ã",
  cue: {
    ko: "A를 먼저 쓰고, 위에 물결표(~)를 그으세요.",
    en: "Write a standard A, then add a tilde (~) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Ã' (틸) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Ã' (A-tilde).",
  },
  direction: "ltr",
  guidePathD: "M24 80 L50 24 L76 80 M34 56 H66 M36 10 C40 4, 48 4, 50 10 C52 16, 60 16, 64 10",
  strokeGuides: [
    { id: "pt-uppercase-a-tilde-1", pathD: "M24 80 L50 24", order: 1 },
    { id: "pt-uppercase-a-tilde-2", pathD: "M50 24 L76 80", order: 2 },
    { id: "pt-uppercase-a-tilde-3", pathD: "M34 56 H66", order: 3 },
    { id: "pt-uppercase-a-tilde-4", pathD: "M36 10 C40 4, 48 4, 50 10 C52 16, 60 16, 64 10", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
