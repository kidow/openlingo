import { WritingTemplate } from "@/types/writing";

export const ruUppercaseTseTemplate: WritingTemplate = {
  id: "ru-uppercase-tse",
  languageId: "ru",
  mode: "character",
  label: { ko: "대문자 체", en: "Uppercase Tse" },
  nativeLabel: "Ц",
  cue: {
    ko: "П처럼 쓰고 오른쪽 하단에 짧은 꼬리를 추가하세요.",
    en: "Write like П, then add a short descender on the lower right.",
  },
  description: {
    ko: "러시아어 키릴 대문자 'Ц' 연습용 템플릿입니다.",
    en: "Practice template for the Russian Cyrillic uppercase 'Ц'.",
  },
  direction: "ltr",
  guidePathD: "M28 20 V80 H72 V20 M72 80 V88",
  viewBox: [0, 0, 100, 100],
  gridLabel: { ko: "키릴 문자 연습 칸", en: "Cyrillic cell" },
};
