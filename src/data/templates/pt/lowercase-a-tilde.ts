import { WritingTemplate } from "@/types/writing";

export const ptLowercaseATildeTemplate: WritingTemplate = {
  id: "pt-lowercase-a-tilde",
  languageId: "pt",
  mode: "character",
  label: { ko: "소문자 a 틸", en: "Lowercase A-Tilde" },
  nativeLabel: "ã",
  cue: {
    ko: "a를 먼저 쓰고, 위에 물결표(~)를 그으세요.",
    en: "Write a lowercase a, then add a tilde (~) above.",
  },
  description: {
    ko: "포르투갈어 문자 'ã' (소문자 틸) 연습용 템플릿입니다.",
    en: "Practice template for the Portuguese letter 'ã' (lowercase a-tilde).",
  },
  direction: "ltr",
  guidePathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50 M62 36 V72 M38 22 C42 16, 48 16, 50 22 C52 28, 58 28, 62 22",
  strokeGuides: [
    { id: "pt-lowercase-a-tilde-1", pathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50", order: 1 },
    { id: "pt-lowercase-a-tilde-2", pathD: "M62 36 V72", order: 2 },
    { id: "pt-lowercase-a-tilde-3", pathD: "M38 22 C42 16, 48 16, 50 22 C52 28, 58 28, 62 22", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "포르투갈 문자 연습 칸", en: "Portuguese cell" },
};
