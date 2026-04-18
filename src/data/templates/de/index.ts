import { PracticeTemplateGroup, WritingTemplate } from "@/types/writing";
import { deLatinAlphabetTemplates } from "./alphabet";
import { applyGermanGlyphAssets } from "./glyph-assets";
import { deUppercaseAUmlautTemplate } from "./uppercase-a-umlaut";
import { deLowercaseAUmlautTemplate } from "./lowercase-a-umlaut";
import { deUppercaseOUmlautTemplate } from "./uppercase-o-umlaut";
import { deLowercaseOUmlautTemplate } from "./lowercase-o-umlaut";
import { deUppercaseUUmlautTemplate } from "./uppercase-u-umlaut";
import { deLowercaseUUmlautTemplate } from "./lowercase-u-umlaut";
import { deUppercaseEszettTemplate } from "./uppercase-eszett";
import { deLowercaseEszettTemplate } from "./lowercase-eszett";

/* Standard Latin A–Z (uppercase + lowercase) */
/* Umlauts: Ä/ä, Ö/ö, Ü/ü */
/* Eszett: ẞ/ß */
const deBaseTemplates: WritingTemplate[] = [
  ...deLatinAlphabetTemplates,
  deUppercaseAUmlautTemplate,
  deLowercaseAUmlautTemplate,
  deUppercaseOUmlautTemplate,
  deLowercaseOUmlautTemplate,
  deUppercaseUUmlautTemplate,
  deLowercaseUUmlautTemplate,
  deUppercaseEszettTemplate,
  deLowercaseEszettTemplate,
];

export const deTemplates: WritingTemplate[] = applyGermanGlyphAssets(deBaseTemplates);

export const deTemplateGroups: PracticeTemplateGroup[] = [
  {
    id: "basic-uppercase",
    label: { ko: "기본 문자 - 대문자", en: "Basic letters - Uppercase" },
    description: {
      ko: "독일어 표준 알파벳의 대문자를 연습합니다.",
      en: "Practice uppercase standard German letters.",
    },
    templateIds: deLatinAlphabetTemplates.slice(0, 26).map((template) => template.id),
  },
  {
    id: "basic-lowercase",
    label: { ko: "기본 문자 - 소문자", en: "Basic letters - Lowercase" },
    description: {
      ko: "독일어 표준 알파벳의 소문자를 연습합니다.",
      en: "Practice lowercase standard German letters.",
    },
    templateIds: deLatinAlphabetTemplates.slice(26).map((template) => template.id),
  },
  {
    id: "special-uppercase",
    label: { ko: "특수 문자 - 대문자", en: "Special letters - Uppercase" },
    description: {
      ko: "움라우트와 에스체트 대문자를 따로 연습합니다.",
      en: "Practice uppercase umlauts and Eszett separately.",
    },
    templateIds: [
      deUppercaseAUmlautTemplate.id,
      deUppercaseOUmlautTemplate.id,
      deUppercaseUUmlautTemplate.id,
      deUppercaseEszettTemplate.id,
    ],
  },
  {
    id: "special-lowercase",
    label: { ko: "특수 문자 - 소문자", en: "Special letters - Lowercase" },
    description: {
      ko: "움라우트와 에스체트 소문자를 따로 연습합니다.",
      en: "Practice lowercase umlauts and Eszett separately.",
    },
    templateIds: [
      deLowercaseAUmlautTemplate.id,
      deLowercaseOUmlautTemplate.id,
      deLowercaseUUmlautTemplate.id,
      deLowercaseEszettTemplate.id,
    ],
  },
];
