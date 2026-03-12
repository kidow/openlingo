import { WritingTemplate } from "@/types/writing";

export const koBieupTemplate: WritingTemplate = {
  id: "ko-bieup",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "비읍",
    en: "Bieup",
  },
  nativeLabel: "ㅂ",
  cue: {
    ko: "상단을 비워 두고 좌우 짧은 윗획을 나눠 쓴 뒤, 아래 네모와 가운데 가로획을 완성하세요.",
    en: "Leave the top center open, then complete the lower frame and center bar.",
  },
  description: {
    ko: "상단이 열린 형태를 반영한 비읍(ㅂ) 연습 템플릿입니다.",
    en: "Bieup (ㅂ) template reflecting the top-open worksheet style.",
  },
  direction: "ltr",
  guidePathD: "M34 24 L44 24 M56 24 L66 24 M30 24 L30 76 M70 24 L70 76 M30 76 L70 76 M30 50 L70 50",
  strokeGuides: [
    {
      id: "ko-bieup-1",
      pathD: "M34 24 L44 24",
      order: 1,
    },
    {
      id: "ko-bieup-2",
      pathD: "M56 24 L66 24",
      order: 2,
    },
    {
      id: "ko-bieup-3",
      pathD: "M30 24 L30 76",
      order: 3,
    },
    {
      id: "ko-bieup-4",
      pathD: "M70 24 L70 76",
      order: 4,
    },
    {
      id: "ko-bieup-5",
      pathD: "M30 76 L70 76",
      order: 5,
    },
    {
      id: "ko-bieup-6",
      pathD: "M30 50 L70 50",
      order: 6,
    },
  ],
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
