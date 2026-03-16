import { WritingTemplate } from "@/types/writing";

export const ruLowercaseBeTemplate: WritingTemplate = {
  id: "ru-lowercase-be",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 б", en: "Lowercase б" },
  nativeLabel: "б",
  cue: {
    ko: "둥근 몸체를 그린 뒤 오른쪽 위로 올라가는 꼬리를 자연스럽게 이어가세요.",
    en: "Form the round body, then extend the ascending tail naturally.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'б' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'б'.",
  },
  direction: "ltr",
  guidePathD:
    "M62 44 C56 36, 44 36, 38 44 C30 52, 30 64, 38 72 C44 78, 56 78, 62 72 C68 64, 68 52, 62 44 L58 26 C54 22, 48 20, 40 22",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
