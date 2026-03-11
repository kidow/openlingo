import { WritingTemplate } from "@/types/writing";

export const koNieunTemplate: WritingTemplate = {
  id: "ko-nieun",
  languageId: "ko",
  mode: "character",
  label: {
    ko: "니은",
    en: "Nieun",
  },
  nativeLabel: "ㄴ",
  cue: {
    ko: "받침선 폭을 넉넉하게 유지하고 세로획을 단단히 세우세요.",
    en: "Keep the base wide and the vertical stroke firm.",
  },
  description: {
    ko: "템플릿 전환 흐름을 점검하기 위한 두 번째 한글 프로토타입입니다.",
    en: "A second Hangul shape to test template switching.",
  },
  direction: "ltr",
  guidePathD: "M30 24 L30 76 L70 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: {
    ko: "한글 연습 칸",
    en: "Hangul box",
  },
};
