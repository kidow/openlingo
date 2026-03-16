import { WritingTemplate } from "@/types/writing";

export const jaHiraganaUTemplate: WritingTemplate = {
  id: "ja-hiragana-u",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 우", en: "Hiragana U" },
  nativeLabel: "う",
  cue: {
    ko: "윗점을 찍고 아래 곡선을 부드럽게 이어가세요.",
    en: "Place the top mark first, then draw the curved body smoothly.",
  },
  description: {
    ko: "일본어 히라가나 'う' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'う'.",
  },
  direction: "ltr",
  guidePathD:
    "M45 24 L55 28 M40 38 C52 35, 62 40, 65 50 C68 60, 60 72, 48 76",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
