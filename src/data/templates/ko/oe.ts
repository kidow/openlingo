import { WritingTemplate } from "@/types/writing";

export const koOeTemplate: WritingTemplate = {
  id: "ko-oe",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "외",
    en: "Oe",
  },
  nativeLabel: "ㅚ",
  cue: {
    ko: "오 형태를 쓴 뒤 오른쪽 보조 세로획을 세워 마무리하세요.",
    en: "Write the o-shape first, then add the right helper vertical.",
  },
  description: {
    ko: "한글 모음 연습 시트를 확장하기 위한 외(ㅚ) 템플릿입니다.",
    en: "Oe (ㅚ) template for expanding the Hangul vowel worksheet set.",
  },
  direction: "ltr",
  guidePathD: "M20 34 L64 34 M42 34 L42 68 M70 22 L70 78",
  strokeGuides: [
    {
      id: "ko-oe-1",
      pathD: "M20 34 L64 34",
      order: 1,
    },
    {
      id: "ko-oe-2",
      pathD: "M42 34 L42 68",
      order: 2,
    },
    {
      id: "ko-oe-3",
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
