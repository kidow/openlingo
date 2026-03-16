import { WritingTemplate } from "@/types/writing";

export const deUppercaseEszettTemplate: WritingTemplate = {
  id: "de-uppercase-eszett",
  languageId: "de",
  mode: "character",
  label: { ko: "대문자 에스체트", en: "Uppercase Eszett" },
  nativeLabel: "ẞ",
  cue: {
    ko: "왼쪽 세로획을 올린 뒤 위에서 오른쪽으로 두 번 꺾어 내려오세요.",
    en: "Draw the tall left vertical, loop right at the top, then curve right again at mid-height.",
  },
  description: {
    ko: "독일어 문자 'ẞ' (대문자 에스체트) 연습용 템플릿입니다.",
    en: "Practice template for the German letter 'ẞ' (capital Eszett).",
  },
  direction: "ltr",
  guidePathD: "M28 80 V24 C28 16, 42 14, 52 22 C62 30, 72 28, 72 38 C72 46, 60 50, 52 52 C64 54, 76 58, 76 66 C76 78, 60 82, 48 76",
  strokeGuides: [
    { id: "de-uppercase-eszett-1", pathD: "M28 80 V24", order: 1 },
    { id: "de-uppercase-eszett-2", pathD: "M28 24 C28 16, 42 14, 52 22 C62 30, 72 28, 72 38 C72 46, 60 50, 52 52", order: 2 },
    { id: "de-uppercase-eszett-3", pathD: "M52 52 C64 54, 76 58, 76 66 C76 78, 60 82, 48 76", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "독일 문자 연습 칸", en: "German cell" },
};
