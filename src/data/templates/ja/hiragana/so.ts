import { WritingTemplate } from "@/types/writing";

export const jaHiraganaSoTemplate: WritingTemplate = {
  id: "ja-hiragana-so",
  languageId: "ja",
  mode: "character",
  label: { ko: "히라가나 소", en: "Hiragana So" },
  nativeLabel: "そ",
  cue: {
    ko: "한 획으로 이어지는 흐름을 끊지 말고 부드럽게 쓰세요.",
    en: "Write in one continuous flowing stroke without breaking.",
  },
  description: {
    ko: "일본어 히라가나 'そ' 연습용 템플릿입니다.",
    en: "Practice template for the Japanese hiragana 'そ'.",
  },
  direction: "ltr",
  guidePathD:
    "M30 28 C42 25, 58 28, 62 35 C65 42, 45 50, 35 52 C28 54, 35 62, 48 65 C60 68, 68 72, 65 78",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "가나 연습 칸", en: "Kana cell" },
};
