import { PracticeTemplateGroup, WritingTemplate } from "@/types/writing";
import { esLatinAlphabetTemplates } from "./alphabet";
import { esUppercaseEnyeTemplate } from "./uppercase-enye";
import { esLowercaseEnyeTemplate } from "./lowercase-enye";

/* Standard Latin A–Z (uppercase + lowercase) */
/* Eñe: Ñ/ñ */
export const esTemplates: WritingTemplate[] = [
  ...esLatinAlphabetTemplates,
  esUppercaseEnyeTemplate,
  esLowercaseEnyeTemplate,
];

export const esTemplateGroups: PracticeTemplateGroup[] = [
  {
    id: "basic-uppercase",
    label: { ko: "기본 문자 - 대문자", en: "Basic letters - Uppercase" },
    description: {
      ko: "스페인어 표준 알파벳의 대문자를 연습합니다.",
      en: "Practice uppercase standard Spanish letters.",
    },
    templateIds: esLatinAlphabetTemplates.slice(0, 26).map((template) => template.id),
  },
  {
    id: "basic-lowercase",
    label: { ko: "기본 문자 - 소문자", en: "Basic letters - Lowercase" },
    description: {
      ko: "스페인어 표준 알파벳의 소문자를 연습합니다.",
      en: "Practice lowercase standard Spanish letters.",
    },
    templateIds: esLatinAlphabetTemplates.slice(26).map((template) => template.id),
  },
  {
    id: "special-uppercase",
    label: { ko: "특수 문자 - 대문자", en: "Special letters - Uppercase" },
    description: {
      ko: "에녜 대문자를 따로 연습합니다.",
      en: "Practice uppercase eñe separately.",
    },
    templateIds: [esUppercaseEnyeTemplate.id],
  },
  {
    id: "special-lowercase",
    label: { ko: "특수 문자 - 소문자", en: "Special letters - Lowercase" },
    description: {
      ko: "에녜 소문자를 따로 연습합니다.",
      en: "Practice lowercase eñe separately.",
    },
    templateIds: [esLowercaseEnyeTemplate.id],
  },
];
