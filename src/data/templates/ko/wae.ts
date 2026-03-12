import { WritingTemplate } from "@/types/writing";

export const koWaeTemplate: WritingTemplate = {
  id: "ko-wae",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "왜",
    en: "Wae",
  },
  nativeLabel: "ㅙ",
  cue: {
    ko: "와 형태를 쓴 뒤 오른쪽 보조 세로획을 추가해 왜를 완성하세요.",
    en: "Write wa first, then add the right helper vertical.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 왜(ㅙ) 템플릿입니다.",
    en: "Wae (ㅙ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M18 34 L62 34 M40 34 L40 72 M40 46 H66 M40 62 H66 M66 22 L66 78",
  strokeGuides: [
    {
      id: "ko-wae-1",
      pathD: "M18 34 L62 34",
      order: 1,
    },
    {
      id: "ko-wae-2",
      pathD: "M40 34 L40 72",
      order: 2,
    },
    {
      id: "ko-wae-3",
      pathD: "M40 46 H66",
      order: 3,
    },
    {
      id: "ko-wae-4",
      pathD: "M40 62 H66",
      order: 4,
    },
    {
      id: "ko-wae-5",
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
