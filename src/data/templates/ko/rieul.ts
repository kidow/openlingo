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
    ko: "윗가로획 뒤에 ㄴ 모양, 반대 ㄴ 모양으로 이어서 리을의 흐름을 살려 써 보세요.",
    en: "After the top bar, connect an ㄴ shape and a reversed ㄴ shape to form Rieul naturally.",
  },
  description: {
    ko: "자음 연습 시트를 연달아 확장하기 위한 리을(ㄹ) 템플릿입니다.",
    en: "Rieul (ㄹ) template for extending the consonant worksheet sequence.",
  },
  direction: "ltr",
  guidePathD: "M30 24 L70 24 M30 24 L30 50 L70 50 M70 50 L70 76 L30 76",
  strokeGuides: [
    {
      id: "ko-rieul-1",
      pathD: "M30 24 L70 24",
      order: 1,
    },
    {
      id: "ko-rieul-2",
      pathD: "M30 24 L30 50 L70 50",
      order: 2,
    },
    {
      id: "ko-rieul-3",
      pathD: "M70 50 L70 76 L30 76",
      order: 3,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
