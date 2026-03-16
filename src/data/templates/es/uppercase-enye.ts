import { WritingTemplate } from "@/types/writing";

export const esUppercaseEnyeTemplate: WritingTemplate = {
  id: "es-uppercase-enye",
  languageId: "es",
  mode: "character",
  label: { ko: "대문자 에녜", en: "Uppercase Eñe" },
  nativeLabel: "Ñ",
  cue: {
    ko: "N을 먼저 쓰고, 위쪽에 물결표(~)를 그으세요.",
    en: "Write a standard N, then add a tilde (~) above.",
  },
  description: {
    ko: "스페인어 문자 'Ñ' (에녜) 연습용 템플릿입니다.",
    en: "Practice template for the Spanish letter 'Ñ' (Eñe).",
  },
  direction: "ltr",
  guidePathD: "M24 80 V20 M76 80 V20 M24 20 L76 80 M36 10 C40 4, 48 4, 50 10 C52 16, 60 16, 64 10",
  strokeGuides: [
    { id: "es-uppercase-enye-1", pathD: "M24 80 V20", order: 1 },
    { id: "es-uppercase-enye-2", pathD: "M24 20 L76 80", order: 2 },
    { id: "es-uppercase-enye-3", pathD: "M76 80 V20", order: 3 },
    { id: "es-uppercase-enye-4", pathD: "M36 10 C40 4, 48 4, 50 10 C52 16, 60 16, 64 10", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "스페인 문자 연습 칸", en: "Spanish cell" },
};
