import { WritingTemplate } from "@/types/writing";

export const frLowercaseOeLigatureTemplate: WritingTemplate = {
  id: "fr-lowercase-oe-ligature",
  languageId: "fr",
  mode: "character",
  label: { ko: "소문자 외 합자", en: "Lowercase Œ Ligature" },
  nativeLabel: "œ",
  cue: {
    ko: "o의 둥근 부분을 그린 뒤 e를 오른쪽에 이어 붙이세요.",
    en: "Draw the round part of o, then connect an e on the right.",
  },
  description: {
    ko: "프랑스어 합자 'œ' (소문자 o-e 리가처) 연습용 템플릿입니다.",
    en: "Practice template for the French ligature 'œ' (lowercase o-e ligature).",
  },
  direction: "ltr",
  guidePathD: "M36 42 C24 42, 18 50, 18 54 C18 66, 24 72, 36 72 C48 72, 50 64, 50 54 C50 44, 48 42, 36 42 M50 54 H78 C78 42, 62 38, 56 42 C50 46, 50 54, 50 54 M50 54 C50 66, 62 72, 70 72 C76 72, 80 68, 80 62",
  strokeGuides: [
    { id: "fr-lowercase-oe-ligature-1", pathD: "M36 42 C24 42, 18 50, 18 54 C18 66, 24 72, 36 72 C48 72, 50 64, 50 54 C50 44, 48 42, 36 42", order: 1 },
    { id: "fr-lowercase-oe-ligature-2", pathD: "M50 54 H78 C78 42, 62 38, 56 42 C50 46, 50 54, 50 54", order: 2 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "프랑스 문자 연습 칸", en: "French cell" },
};
