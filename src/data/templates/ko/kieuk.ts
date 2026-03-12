import { WritingTemplate } from "@/types/writing";

export const koKieukTemplate: WritingTemplate = {
  id: "ko-kieuk",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "키읔",
    en: "Kieuk",
  },
  nativeLabel: "ㅋ",
  cue: {
    ko: "기역 형태를 쓴 뒤 가운데 짧은 가로획을 더해 키읔을 완성하세요.",
    en: "Draw a giyeok shape, then add the short middle bar.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 키읔(ㅋ) 템플릿입니다.",
    en: "Kieuk (ㅋ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M30 24 L30 76 M30 76 L72 76 M30 50 L62 50",
  strokeGuides: [
    { id: "ko-kieuk-1", pathD: "M30 24 L30 76", order: 1 },
    { id: "ko-kieuk-2", pathD: "M30 76 L72 76", order: 2 },
    { id: "ko-kieuk-3", pathD: "M30 50 L62 50", order: 3 },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
