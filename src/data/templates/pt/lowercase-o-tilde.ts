import { WritingTemplate } from "@/types/writing";

export const ptLowercaseOTildeTemplate: WritingTemplate = {
  id: "pt-lowercase-o-tilde",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 o 틸", en: "Lowercase O-Tilde" },
  nativeLabel: "õ",
  cue: {
    ko: "o를 먼저 쓰고, 위에 물결표(~)를 그으세요.",
    en: "Write a lowercase o, then add a tilde (~) above.",
  },
  description: {
    ko: "포르투갈어 문자 'õ' (소문자 틸) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'õ' (lowercase o-tilde).",
  },
  direction: "ltr",
  guidePathD: "M50 36 C36 36, 30 44, 30 54 C30 64, 36 72, 50 72 C64 72, 70 64, 70 54 C70 44, 64 36, 50 36 M38 26 C42 20, 48 20, 50 26 C52 32, 58 32, 62 26",
  strokeGuides: [
    { id: "pt-lowercase-o-tilde-1", pathD: "M50 36 C36 36, 30 44, 30 54 C30 64, 36 72, 50 72 C64 72, 70 64, 70 54 C70 44, 64 36, 50 36", order: 1 },
    { id: "pt-lowercase-o-tilde-2", pathD: "M38 26 C42 20, 48 20, 50 26 C52 32, 58 32, 62 26", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
