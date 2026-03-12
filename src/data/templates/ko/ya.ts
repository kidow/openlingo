import { WritingTemplate } from "@/types/writing";

export const koYaTemplate: WritingTemplate = {
  id: "ko-ya",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "야",
    en: "Ya",
  },
  nativeLabel: "ㅑ",
  cue: {
    ko: "세로획 뒤에 오른쪽 짧은 가로획 두 개를 일정한 간격으로 넣어 쓰세요.",
    en: "After the vertical, add two right bars with even spacing.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 야(ㅑ) 템플릿입니다.",
    en: "Ya (ㅑ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M42 22 L42 78 M42 40 H68 M42 60 H68",
  strokeGuides: [
    {
      id: "ko-ya-1",
      pathD: "M42 22 L42 78",
      order: 1,
    },
    {
      id: "ko-ya-2",
      pathD: "M42 40 H68",
      order: 2,
    },
    {
      id: "ko-ya-3",
      pathD: "M42 60 H68",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
