import { WritingTemplate } from "@/types/writing";

export const deLowercaseUUmlautTemplate: WritingTemplate = {
  id: "de-lowercase-u-umlaut",
  languageId: "de",
  mode: "character",
  label: { ko: "소문자 우 움라우트", en: "Lowercase U-Umlaut" },
  nativeLabel: "ü",
  cue: {
    ko: "둥근 u를 먼저 그리고, 위에 점 두 개를 찍으세요.",
    en: "Draw a u shape, then add two dots above.",
  },
  description: {
    ko: "독일어 문자 'ü' (소문자 u 움라우트) 연습용 템플릿입니다.",
    en: "Practice template for the German letter 'ü' (lowercase u-umlaut).",
  },
  direction: "ltr",
  guidePathD: "M34 36 V60 C34 72, 46 74, 54 72 M66 36 V72 M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26 M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26",
  strokeGuides: [
    { id: "de-lowercase-u-umlaut-1", pathD: "M34 36 V60 C34 72, 46 74, 54 72", order: 1 },
    { id: "de-lowercase-u-umlaut-2", pathD: "M66 36 V72", order: 2 },
    { id: "de-lowercase-u-umlaut-3", pathD: "M40 26 A4 4 0 1 1 48 26 A4 4 0 1 1 40 26", order: 3 },
    { id: "de-lowercase-u-umlaut-4", pathD: "M56 26 A4 4 0 1 1 64 26 A4 4 0 1 1 56 26", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "독일 문자 연습 칸", en: "German cell" },
};
