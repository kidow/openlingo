import { WritingTemplate } from "@/types/writing";

export const deUppercaseUUmlautTemplate: WritingTemplate = {
  id: "de-uppercase-u-umlaut",
  languageId: "de",
  mode: "character",
  label: { ko: "대문자 우 움라우트", en: "Uppercase U-Umlaut" },
  nativeLabel: "Ü",
  cue: {
    ko: "U를 먼저 쓰고, 위쪽 가운데에 점 두 개를 찍으세요.",
    en: "Write a standard U, then add two dots (Umlaut) above.",
  },
  description: {
    ko: "독일어 문자 'Ü' (U 움라우트) 연습용 템플릿입니다.",
    en: "Practice template for the German letter 'Ü' (U-Umlaut).",
  },
  direction: "ltr",
  guidePathD: "M24 20 V64 C24 78, 40 82, 50 82 C60 82, 76 78, 76 64 V20 M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10 M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10",
  strokeGuides: [
    { id: "de-uppercase-u-umlaut-1", pathD: "M24 20 V64 C24 78, 40 82, 50 82", order: 1 },
    { id: "de-uppercase-u-umlaut-2", pathD: "M76 20 V64 C76 78, 60 82, 50 82", order: 2 },
    { id: "de-uppercase-u-umlaut-3", pathD: "M40 10 A4 4 0 1 1 48 10 A4 4 0 1 1 40 10", order: 3 },
    { id: "de-uppercase-u-umlaut-4", pathD: "M56 10 A4 4 0 1 1 64 10 A4 4 0 1 1 56 10", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "독일 문자 연습 칸", en: "German cell" },
};
