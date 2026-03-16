import { WritingTemplate } from "@/types/writing";

export const jaHiraganaMiTemplate: WritingTemplate = {
  id: "ja-hiragana-mi",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 미", en: "Hiragana Mi" },
  nativeLabel: "み",
  cue: {
    ko: "곡선 두 부분을 자연스럽게 이어 쓰세요.",
    en: "Connect the two curved parts smoothly.",
  },
  description: {
    ko: "일본어 히라가나 'み' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'み'.",
  },
  direction: "ltr",
  guidePathD:
    "M55 25 C45 30, 38 40, 35 50 C32 60, 38 68, 48 65 M48 55 C55 62, 62 68, 68 72 C72 75, 70 78, 65 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
