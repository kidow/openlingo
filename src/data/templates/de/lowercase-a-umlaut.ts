import { WritingTemplate } from "@/types/writing";

export const deLowercaseAUmlautTemplate: WritingTemplate = {
  id: "de-lowercase-a-umlaut",
  languageId: "de",
  mode: "character",
  label: { ko: "소문자 에이 움라우트", en: "Lowercase A-Umlaut" },
  nativeLabel: "ä",
  cue: {
    ko: "둥근 몸체를 먼저 그리고, 오른쪽 세로획을 내린 뒤 위에 점 두 개를 찍으세요.",
    en: "Draw the round body, add the right downstroke, then place two dots above.",
  },
  description: {
    ko: "독일어 문자 'ä' (소문자 a 움라우트) 연습용 템플릿입니다.",
    en: "Practice template for the German letter 'ä' (lowercase a-umlaut).",
  },
  direction: "ltr",
  guidePathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50 M62 36 V72 M40 22 A4 4 0 1 1 48 22 A4 4 0 1 1 40 22 M56 22 A4 4 0 1 1 64 22 A4 4 0 1 1 56 22",
  strokeGuides: [
    { id: "de-lowercase-a-umlaut-1", pathD: "M62 36 C62 28, 38 28, 38 50 C38 72, 62 72, 62 50", order: 1 },
    { id: "de-lowercase-a-umlaut-2", pathD: "M62 36 V72", order: 2 },
    { id: "de-lowercase-a-umlaut-3", pathD: "M40 22 A4 4 0 1 1 48 22 A4 4 0 1 1 40 22", order: 3 },
    { id: "de-lowercase-a-umlaut-4", pathD: "M56 22 A4 4 0 1 1 64 22 A4 4 0 1 1 56 22", order: 4 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "독일 문자 연습 칸", en: "German cell" },
};
