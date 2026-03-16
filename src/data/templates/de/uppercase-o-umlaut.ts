import { WritingTemplate } from "@/types/writing";

export const deUppercaseOUmlautTemplate: WritingTemplate = {
  id: "de-uppercase-o-umlaut",
  languageId: "de",
  mode: "character",
  label: { ko: "대문자 오 움라우트", en: "Uppercase O-Umlaut" },
  nativeLabel: "Ö",
  cue: {
    ko: "O를 먼저 쓰고, 위쪽 가운데에 점 두 개를 찍으세요.",
    en: "Write a standard O, then add two dots (Umlaut) above.",
  },
  description: {
    ko: "독일어 문자 'Ö' (O 움라우트) 연습용 템플릿입니다.",
    en: "Practice template for the German letter 'Ö' (O-Umlaut).",
  },
  direction: "ltr",
  guidePathD: "M50 20 C28 20, 20 40, 20 50 C20 60, 28 80, 50 80 C72 80, 80 60, 80 50 C80 40, 72 20, 50 20 M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10 M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10",
  strokeGuides: [
    { id: "de-uppercase-o-umlaut-1", pathD: "M50 20 C28 20, 20 40, 20 50 C20 60, 28 80, 50 80 C72 80, 80 60, 80 50 C80 40, 72 20, 50 20", order: 1 },
    { id: "de-uppercase-o-umlaut-2", pathD: "M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10", order: 2 },
    { id: "de-uppercase-o-umlaut-3", pathD: "M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "독일 문자 연습 칸", en: "German cell" },
};
