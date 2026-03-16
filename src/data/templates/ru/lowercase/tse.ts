import { WritingTemplate } from "@/types/writing";

export const ruLowercaseTseTemplate: WritingTemplate = {
  id: "ru-lowercase-tse",
  languageId: "ru",
  mode: "character",
  label: { ko: "소문자 체", en: "Lowercase Tse" },
  nativeLabel: "ц",
  cue: {
    ko: "п처럼 쓰고 오른쪽 하단에 짧은 꼬리를 추가하세요.",
    en: "Write like п, then add a short descender on the lower right.",
  },
  description: {
    ko: "러시아어 키릴 소문자 'ц' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic lowercase 'ц'.",
  },
  direction: "ltr",
  guidePathD: "M32 36 V76 H68 V36 M68 76 V86",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
