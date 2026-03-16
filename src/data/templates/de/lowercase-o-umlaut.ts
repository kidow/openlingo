import { WritingTemplate } from "@/types/writing";

export const deLowercaseOUmlautTemplate: WritingTemplate = {
  id: "de-lowercase-o-umlaut",
  languageId: "de",
  mode: "character",
  label: { ko: "소문자 오 움라우트", en: "Lowercase O-Umlaut" },
  nativeLabel: "ö",
  cue: {
    ko: "둥근 o를 먼저 그리고, 위에 점 두 개를 찍으세요.",
    en: "Draw a round o, then add two dots above.",
  },
  description: {
    ko: "독일어 문자 'ö' (소문자 o 움라우트) 연습용 템플릿입니다.",
    en: "Practice template for the German letter 'ö' (lowercase o-umlaut).",
  },
  direction: "ltr",
  guidePathD: "M50 36 C36 36, 30 44, 30 54 C30 64, 36 72, 50 72 C64 72, 70 64, 70 54 C70 44, 64 36, 50 36 M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26 M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26",
  strokeGuides: [
    { id: "de-lowercase-o-umlaut-1", pathD: "M50 36 C36 36, 30 44, 30 54 C30 64, 36 72, 50 72 C64 72, 70 64, 70 54 C70 44, 64 36, 50 36", order: 1 },
    { id: "de-lowercase-o-umlaut-2", pathD: "M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26", order: 2 },
    { id: "de-lowercase-o-umlaut-3", pathD: "M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "독일 문자 연습 칸", en: "German cell" },
};
