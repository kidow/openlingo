import { WritingTemplate } from "@/types/writing";

export const koHieutTemplate: WritingTemplate = {
  id: "ko-hieut",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "히읗",
    en: "Hieut",
  },
  nativeLabel: "ㅎ",
  cue: {
    ko: "윗점 형태의 짧은 획 두 개를 먼저 쓰고, 가운데 가로획과 아래 원형을 이어 주세요.",
    en: "Write the two short top ticks first, then add the middle bar and bottom circle.",
  },
  description: {
    ko: "한글 자음 연습 시트를 확장하기 위한 히읗(ㅎ) 템플릿입니다.",
    en: "Hieut (ㅎ) template for expanding the Hangul consonant worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M40 24 L46 24 M54 24 L60 24 M36 42 L64 42 M50 54 C59 54, 66 61, 66 70 C66 79, 59 86, 50 86 C41 86, 34 79, 34 70 C34 61, 41 54, 50 54",
  strokeGuides: [
    { id: "ko-hieut-1", pathD: "M40 24 L46 24", order: 1 },
    { id: "ko-hieut-2", pathD: "M54 24 L60 24", order: 2 },
    { id: "ko-hieut-3", pathD: "M36 42 L64 42", order: 3 },
    {
      id: "ko-hieut-4",
      pathD: "M50 54 C59 54, 66 61, 66 70 C66 79, 59 86, 50 86 C41 86, 34 79, 34 70 C34 61, 41 54, 50 54",
      order: 4,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
