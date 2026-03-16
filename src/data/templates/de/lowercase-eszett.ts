import { WritingTemplate } from "@/types/writing";

export const deLowercaseEszettTemplate: WritingTemplate = {
  id: "de-lowercase-eszett",
  languageId: "de",
  mode: "character",
  label: { ko: "소문자 에스체트", en: "Lowercase Eszett" },
  nativeLabel: "ß",
  cue: {
    ko: "아래에서 위로 세로획을 올린 뒤 오른쪽으로 두 번 꺾으며 내려오세요.",
    en: "Draw up from the baseline, loop right at the top, curve right at mid-height, then return left.",
  },
  description: {
    ko: "독일어 문자 'ß' (소문자 에스체트) 연습용 템플릿입니다.",
    en: "Practice template for the German letter 'ß' (lowercase Eszett).",
  },
  direction: "ltr",
  guidePathD: "M30 80 V30 C30 18, 44 16, 54 24 C64 32, 72 30, 72 40 C72 48, 60 52, 52 54 C64 56, 74 60, 74 68 C74 80, 58 82, 48 76",
  strokeGuides: [
    { id: "de-lowercase-eszett-1", pathD: "M30 80 V30", order: 1 },
    { id: "de-lowercase-eszett-2", pathD: "M30 30 C30 18, 44 16, 54 24 C64 32, 72 30, 72 40 C72 48, 60 52, 52 54", order: 2 },
    { id: "de-lowercase-eszett-3", pathD: "M52 54 C64 56, 74 60, 74 68 C74 80, 58 82, 48 76", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "독일 문자 연습 칸", en: "German cell" },
};
