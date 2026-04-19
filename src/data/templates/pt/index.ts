import { PracticeTemplateGroup, WritingTemplate } from "@/types/writing";
import { applyPortugueseGlyphAssets } from "./glyph-assets";
import {
  ptLowercaseLatinAlphabetTemplates,
  ptUppercaseLatinAlphabetTemplates,
} from "./alphabet";
/* A variants */
import { ptUppercaseAGraveTemplate } from "./uppercase-a-grave";
import { ptLowercaseAGraveTemplate } from "./lowercase-a-grave";
import { ptUppercaseAAcuteTemplate } from "./uppercase-a-acute";
import { ptLowercaseAAcuteTemplate } from "./lowercase-a-acute";
import { ptUppercaseACircumflexTemplate } from "./uppercase-a-circumflex";
import { ptLowercaseACircumflexTemplate } from "./lowercase-a-circumflex";
import { ptUppercaseATildeTemplate } from "./uppercase-a-tilde";
import { ptLowercaseATildeTemplate } from "./lowercase-a-tilde";
/* C cedilla */
import { ptUppercaseCCedillaTemplate } from "./uppercase-c-cedilla";
import { ptLowercaseCCedillaTemplate } from "./lowercase-c-cedilla";
/* E variants */
import { ptUppercaseEAcuteTemplate } from "./uppercase-e-acute";
import { ptLowercaseEAcuteTemplate } from "./lowercase-e-acute";
import { ptUppercaseECircumflexTemplate } from "./uppercase-e-circumflex";
import { ptLowercaseECircumflexTemplate } from "./lowercase-e-circumflex";
/* I acute */
import { ptUppercaseIAcuteTemplate } from "./uppercase-i-acute";
import { ptLowercaseIAcuteTemplate } from "./lowercase-i-acute";
/* O variants */
import { ptUppercaseOAcuteTemplate } from "./uppercase-o-acute";
import { ptLowercaseOAcuteTemplate } from "./lowercase-o-acute";
import { ptUppercaseOCircumflexTemplate } from "./uppercase-o-circumflex";
import { ptLowercaseOCircumflexTemplate } from "./lowercase-o-circumflex";
import { ptUppercaseOTildeTemplate } from "./uppercase-o-tilde";
import { ptLowercaseOTildeTemplate } from "./lowercase-o-tilde";
/* U acute */
import { ptUppercaseUAcuteTemplate } from "./uppercase-u-acute";
import { ptLowercaseUAcuteTemplate } from "./lowercase-u-acute";
/* U diaeresis */
import { ptUppercaseUDiaeresisTemplate } from "./uppercase-u-diaeresis";
import { ptLowercaseUDiaeresisTemplate } from "./lowercase-u-diaeresis";

/* Standard Latin A–Z (uppercase + lowercase) */
/* Accented: À/à, Á/á, Â/â, Ã/ã, Ç/ç, É/é, Ê/ê, Í/í, Ó/ó, Ô/ô, Õ/õ, Ú/ú, Ü/ü */
const ptUppercaseAccentedTemplates: WritingTemplate[] = [
  ptUppercaseAGraveTemplate,
  ptUppercaseAAcuteTemplate,
  ptUppercaseACircumflexTemplate,
  ptUppercaseATildeTemplate,
  ptUppercaseCCedillaTemplate,
  ptUppercaseEAcuteTemplate,
  ptUppercaseECircumflexTemplate,
  ptUppercaseIAcuteTemplate,
  ptUppercaseOAcuteTemplate,
  ptUppercaseOCircumflexTemplate,
  ptUppercaseOTildeTemplate,
  ptUppercaseUAcuteTemplate,
  ptUppercaseUDiaeresisTemplate,
];

const ptLowercaseAccentedTemplates: WritingTemplate[] = [
  ptLowercaseAGraveTemplate,
  ptLowercaseAAcuteTemplate,
  ptLowercaseACircumflexTemplate,
  ptLowercaseATildeTemplate,
  ptLowercaseCCedillaTemplate,
  ptLowercaseEAcuteTemplate,
  ptLowercaseECircumflexTemplate,
  ptLowercaseIAcuteTemplate,
  ptLowercaseOAcuteTemplate,
  ptLowercaseOCircumflexTemplate,
  ptLowercaseOTildeTemplate,
  ptLowercaseUAcuteTemplate,
  ptLowercaseUDiaeresisTemplate,
];

/* Portuguese counts accented letters as separate practice cards here:
   39 uppercase templates + 39 lowercase templates */
const ptBaseTemplates: WritingTemplate[] = [
  ...ptUppercaseLatinAlphabetTemplates,
  ...ptUppercaseAccentedTemplates,
  ...ptLowercaseLatinAlphabetTemplates,
  ...ptLowercaseAccentedTemplates,
];

export const ptTemplates: WritingTemplate[] = applyPortugueseGlyphAssets(ptBaseTemplates);

export const ptTemplateGroups: PracticeTemplateGroup[] = [
  {
    id: "basic-uppercase",
    label: { ko: "기본 문자 - 대문자", en: "Basic letters - Uppercase" },
    description: {
      ko: "포르투갈어 표준 알파벳의 대문자를 연습합니다.",
      en: "Practice uppercase standard Portuguese letters.",
    },
    templateIds: ptUppercaseLatinAlphabetTemplates.map((template) => template.id),
  },
  {
    id: "basic-lowercase",
    label: { ko: "기본 문자 - 소문자", en: "Basic letters - Lowercase" },
    description: {
      ko: "포르투갈어 표준 알파벳의 소문자를 연습합니다.",
      en: "Practice lowercase standard Portuguese letters.",
    },
    templateIds: ptLowercaseLatinAlphabetTemplates.map((template) => template.id),
  },
  {
    id: "special-uppercase",
    label: { ko: "특수 문자 - 대문자", en: "Special letters - Uppercase" },
    description: {
      ko: "악센트와 세딜랴, 틸, 트레마의 대문자를 따로 연습합니다.",
      en: "Practice uppercase accented letters, cedilla, tilde, and diaeresis separately.",
    },
    templateIds: ptUppercaseAccentedTemplates.map((template) => template.id),
  },
  {
    id: "special-lowercase",
    label: { ko: "특수 문자 - 소문자", en: "Special letters - Lowercase" },
    description: {
      ko: "악센트와 세딜랴, 틸, 트레마의 소문자를 따로 연습합니다.",
      en: "Practice lowercase accented letters, cedilla, tilde, and diaeresis separately.",
    },
    templateIds: ptLowercaseAccentedTemplates.map((template) => template.id),
  },
];
