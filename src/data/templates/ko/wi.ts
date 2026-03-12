import { WritingTemplate } from "@/types/writing";

export const koWiTemplate: WritingTemplate = {
  id: "ko-wi",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "위",
    en: "Wi",
  },
  nativeLabel: "ㅟ",
  cue: {
    ko: "우 형태를 쓴 뒤 오른쪽 보조 세로획을 더해 완성하세요.",
    en: "Write the u-shape, then add the right helper vertical.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 위(ㅟ) 템플릿입니다.",
    en: "Wi (ㅟ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M20 66 L64 66 M42 66 L42 32 M70 22 L70 78",
  strokeGuides: [
    {
      id: "ko-wi-1",
      pathD: "M20 66 L64 66",
      order: 1,
    },
    {
      id: "ko-wi-2",
      pathD: "M42 66 L42 32",
      order: 2,
    },
    {
      id: "ko-wi-3",
      pathD: "M70 22 L70 78",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
