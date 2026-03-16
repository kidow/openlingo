import { WritingTemplate } from "@/types/writing";

export const esLowercaseEnyeTemplate: WritingTemplate = {
  id: "es-lowercase-enye",
  languageId: "es",
  mode: "character",
  label: { ko: "소문자 에녜", en: "Lowercase Eñe" },
  nativeLabel: "ñ",
  cue: {
    ko: "n을 먼저 쓰고, 위쪽에 물결표(~)를 그으세요.",
    en: "Write a lowercase n, then add a tilde (~) above.",
  },
  description: {
    ko: "스페인어 문자 'ñ' (소문자 에녜) 연습용 템플릿입니다.",
    en: "Practice template for the Spanish letter 'ñ' (lowercase eñe).",
  },
  direction: "ltr",
  guidePathD: "M34 72 V36 M34 44 C34 34, 54 34, 66 44 V72 M38 26 C42 20, 50 20, 52 26 C54 32, 62 32, 66 26",
  strokeGuides: [
    { id: "es-lowercase-enye-1", pathD: "M34 72 V36", order: 1 },
    { id: "es-lowercase-enye-2", pathD: "M34 44 C34 34, 54 34, 66 44 V72", order: 2 },
    { id: "es-lowercase-enye-3", pathD: "M38 26 C42 20, 50 20, 52 26 C54 32, 62 32, 66 26", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "스페인 문자 연습 칸", en: "Spanish cell" },
};
