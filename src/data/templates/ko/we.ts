import { WritingTemplate } from "@/types/writing";

export const koWeTemplate: WritingTemplate = {
  id: "ko-we",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "웨",
    en: "We",
  },
  nativeLabel: "ㅞ",
  cue: {
    ko: "워 형태를 쓴 뒤 보조 세로획을 더해 웨를 완성하세요.",
    en: "Write wo first, then add the helper vertical to complete we.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 웨(ㅞ) 템플릿입니다.",
    en: "We (ㅞ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M18 66 L62 66 M40 66 L40 32 M40 44 H18 M40 58 H18 M66 22 L66 78",
  strokeGuides: [
    {
      id: "ko-we-1",
      pathD: "M18 66 L62 66",
      order: 1,
    },
    {
      id: "ko-we-2",
      pathD: "M40 66 L40 32",
      order: 2,
    },
    {
      id: "ko-we-3",
      pathD: "M40 44 H18",
      order: 3,
    },
    {
      id: "ko-we-4",
      pathD: "M40 58 H18",
      order: 4,
    },
    {
      id: "ko-we-5",
      pathD: "M66 22 L66 78",
      order: 5,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
