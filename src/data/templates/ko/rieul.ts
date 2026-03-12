import { WritingTemplate } from "@/types/writing";

export const koRieulTemplate: WritingTemplate = {
  id: "ko-rieul",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "리을",
    en: "Rieul",
  },
  nativeLabel: "ㄹ",
  cue: {
    ko: "윗가로획 다음 오른쪽 세로획으로 내려오고, 왼쪽으로 꺾은 뒤 아래에서 마무리하세요.",
    en: "After the top bar, descend on the right, bend left, then finish along the bottom.",
  },
  description: {
    ko: "자음 연습 시트를 연달아 확장하기 위한 리을(ㄹ) 템플릿입니다.",
    en: "Rieul (ㄹ) template for extending the consonant worksheet sequence.",
  },
  direction: "ltr",
  guidePathD: "M30 24 L70 24 M70 24 L70 50 L30 50 M30 50 L30 76 L70 76",
  strokeGuides: [
    {
      id: "ko-rieul-1",
      pathD: "M30 24 L70 24",
      order: 1,
    },
    {
      id: "ko-rieul-2",
      pathD: "M70 24 L70 50 L30 50",
      order: 2,
    },
    {
      id: "ko-rieul-3",
      pathD: "M30 50 L30 76 L70 76",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
