import { WritingTemplate } from "@/types/writing";

export const koITemplate: WritingTemplate = {
  id: "ko-i",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "이",
    en: "I",
  },
  nativeLabel: "ㅣ",
  cue: {
    ko: "중앙 세로획을 위에서 아래로 곧게 내려 쓰세요.",
    en: "Draw a straight center vertical from top to bottom.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 이(ㅣ) 템플릿입니다.",
    en: "I (ㅣ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M50 22 L50 78",
  strokeGuides: [
    {
      id: "ko-i-1",
      pathD: "M50 22 L50 78",
      order: 1,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
