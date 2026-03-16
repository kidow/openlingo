import { WritingTemplate } from "@/types/writing";

export const deUppercaseAUmlautTemplate: WritingTemplate = {
  id: "de-uppercase-a-umlaut",
  languageId: "de",
  mode: "character",
  label: { ko: "대문자 에이 움라우트", en: "Uppercase A-Umlaut" },
  nativeLabel: "Ä",
  cue: {
    ko: "A를 먼저 쓰고, 꼭짓점 위에 점 두 개를 찍으세요.",
    en: "Write a standard A, then add two dots (Umlaut) above the apex.",
  },
  description: {
    ko: "독일어 문자 'Ä' (A 움라우트) 연습용 템플릿입니다.",
    en: "Practice template for the German letter 'Ä' (A-Umlaut).",
  },
  direction: "ltr",
  guidePathD: "M24 80 L50 24 L76 80 M34 56 H66 M40 14 A4 4 0 1 1 48 14 A4 4 0 1 1 40 14 M56 14 A4 4 0 1 1 64 14 A4 4 0 1 1 56 14",
  strokeGuides: [
    { id: "de-uppercase-a-umlaut-1", pathD: "M24 80 L50 24", order: 1 },
    { id: "de-uppercase-a-umlaut-2", pathD: "M50 24 L76 80", order: 2 },
    { id: "de-uppercase-a-umlaut-3", pathD: "M34 56 H66", order: 3 },
    { id: "de-uppercase-a-umlaut-4", pathD: "M40 14 A4 4 0 1 1 48 14 A4 4 0 1 1 40 14", order: 4 },
    { id: "de-uppercase-a-umlaut-5", pathD: "M56 14 A4 4 0 1 1 64 14 A4 4 0 1 1 56 14", order: 5 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "독일 문자 연습 칸", en: "German cell" },
};
