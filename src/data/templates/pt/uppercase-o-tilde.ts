import { WritingTemplate } from "@/types/writing";

export const ptUppercaseOTildeTemplate: WritingTemplate = {
  id: "pt-uppercase-o-tilde",
  languageId: "pt",
  mode: "character",
  label: { ko: "대문자 O 틸", en: "Uppercase O-Tilde" },
  nativeLabel: "Õ",
  cue: {
    ko: "O를 먼저 쓰고, 위에 물결표(~)를 그으세요.",
    en: "Write a standard O, then add a tilde (~) above.",
  },
  description: {
    ko: "포르투갈어 문자 'Õ' (틸) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'Õ' (O-tilde).",
  },
  direction: "ltr",
  guidePathD: "M50 20 C28 20, 20 40, 20 50 C20 60, 28 80, 50 80 C72 80, 80 60, 80 50 C80 40, 72 20, 50 20 M36 10 C40 4, 48 4, 50 10 C52 16, 60 16, 64 10",
  strokeGuides: [
    { id: "pt-uppercase-o-tilde-1", pathD: "M50 20 C28 20, 20 40, 20 50 C20 60, 28 80, 50 80 C72 80, 80 60, 80 50 C80 40, 72 20, 50 20", order: 1 },
    { id: "pt-uppercase-o-tilde-2", pathD: "M36 10 C40 4, 48 4, 50 10 C52 16, 60 16, 64 10", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
