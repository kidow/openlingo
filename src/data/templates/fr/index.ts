import { PracticeTemplateGroup, WritingTemplate } from "@/types/writing";
import { frLatinAlphabetTemplates } from "./alphabet";
import { applyFrenchGlyphAssets } from "./glyph-assets";
/* A variants */
import { frUppercaseAGraveTemplate } from "./uppercase-a-grave";
import { frLowercaseAGraveTemplate } from "./lowercase-a-grave";
import { frUppercaseACircumflexTemplate } from "./uppercase-a-circumflex";
import { frLowercaseACircumflexTemplate } from "./lowercase-a-circumflex";
/* C cedilla */
import { frUppercaseCCedillaTemplate } from "./uppercase-c-cedilla";
import { frLowercaseCCedillaTemplate } from "./lowercase-c-cedilla";
/* E variants */
import { frUppercaseEAcuteTemplate } from "./uppercase-e-acute";
import { frLowercaseEAcuteTemplate } from "./lowercase-e-acute";
import { frUppercaseEGraveTemplate } from "./uppercase-e-grave";
import { frLowercaseEGraveTemplate } from "./lowercase-e-grave";
import { frUppercaseECircumflexTemplate } from "./uppercase-e-circumflex";
import { frLowercaseECircumflexTemplate } from "./lowercase-e-circumflex";
import { frUppercaseEDiaeresisTemplate } from "./uppercase-e-diaeresis";
import { frLowercaseEDiaeresisTemplate } from "./lowercase-e-diaeresis";
/* I variants */
import { frUppercaseICircumflexTemplate } from "./uppercase-i-circumflex";
import { frLowercaseICircumflexTemplate } from "./lowercase-i-circumflex";
import { frUppercaseIDiaeresisTemplate } from "./uppercase-i-diaeresis";
import { frLowercaseIDiaeresisTemplate } from "./lowercase-i-diaeresis";
/* O circumflex */
import { frUppercaseOCircumflexTemplate } from "./uppercase-o-circumflex";
import { frLowercaseOCircumflexTemplate } from "./lowercase-o-circumflex";
/* U variants */
import { frUppercaseUGraveTemplate } from "./uppercase-u-grave";
import { frLowercaseUGraveTemplate } from "./lowercase-u-grave";
import { frUppercaseUCircumflexTemplate } from "./uppercase-u-circumflex";
import { frLowercaseUCircumflexTemplate } from "./lowercase-u-circumflex";
import { frUppercaseUDiaeresisTemplate } from "./uppercase-u-diaeresis";
import { frLowercaseUDiaeresisTemplate } from "./lowercase-u-diaeresis";
/* Œ ligature */
import { frUppercaseOeLigatureTemplate } from "./uppercase-oe-ligature";
import { frLowercaseOeLigatureTemplate } from "./lowercase-oe-ligature";

/* Standard Latin A–Z (uppercase + lowercase) */
/* Accented: À/à, Â/â, Ç/ç, É/é, È/è, Ê/ê, Ë/ë, Î/î, Ï/ï, Ô/ô, Ù/ù, Û/û, Ü/ü, Œ/œ */
const frBaseTemplates: WritingTemplate[] = [
  ...frLatinAlphabetTemplates,
  frUppercaseAGraveTemplate,
  frLowercaseAGraveTemplate,
  frUppercaseACircumflexTemplate,
  frLowercaseACircumflexTemplate,
  frUppercaseCCedillaTemplate,
  frLowercaseCCedillaTemplate,
  frUppercaseEAcuteTemplate,
  frLowercaseEAcuteTemplate,
  frUppercaseEGraveTemplate,
  frLowercaseEGraveTemplate,
  frUppercaseECircumflexTemplate,
  frLowercaseECircumflexTemplate,
  frUppercaseEDiaeresisTemplate,
  frLowercaseEDiaeresisTemplate,
  frUppercaseICircumflexTemplate,
  frLowercaseICircumflexTemplate,
  frUppercaseIDiaeresisTemplate,
  frLowercaseIDiaeresisTemplate,
  frUppercaseOCircumflexTemplate,
  frLowercaseOCircumflexTemplate,
  frUppercaseUGraveTemplate,
  frLowercaseUGraveTemplate,
  frUppercaseUCircumflexTemplate,
  frLowercaseUCircumflexTemplate,
  frUppercaseUDiaeresisTemplate,
  frLowercaseUDiaeresisTemplate,
  frUppercaseOeLigatureTemplate,
  frLowercaseOeLigatureTemplate,
];

export const frTemplates: WritingTemplate[] = applyFrenchGlyphAssets(frBaseTemplates);

export const frTemplateGroups: PracticeTemplateGroup[] = [
  {
    id: "basic-uppercase",
    label: { ko: "기본 문자 - 대문자", en: "Basic letters - Uppercase" },
    description: {
      ko: "프랑스어 표준 알파벳의 대문자를 연습합니다.",
      en: "Practice uppercase standard French letters.",
    },
    templateIds: frLatinAlphabetTemplates.slice(0, 26).map((template) => template.id),
  },
  {
    id: "basic-lowercase",
    label: { ko: "기본 문자 - 소문자", en: "Basic letters - Lowercase" },
    description: {
      ko: "프랑스어 표준 알파벳의 소문자를 연습합니다.",
      en: "Practice lowercase standard French letters.",
    },
    templateIds: frLatinAlphabetTemplates.slice(26).map((template) => template.id),
  },
  {
    id: "special-uppercase",
    label: { ko: "특수 문자 - 대문자", en: "Special letters - Uppercase" },
    description: {
      ko: "악센트 문자와 합자 대문자를 따로 연습합니다.",
      en: "Practice uppercase accented letters and ligatures separately.",
    },
    templateIds: [
      frUppercaseAGraveTemplate.id,
      frUppercaseACircumflexTemplate.id,
      frUppercaseCCedillaTemplate.id,
      frUppercaseEAcuteTemplate.id,
      frUppercaseEGraveTemplate.id,
      frUppercaseECircumflexTemplate.id,
      frUppercaseEDiaeresisTemplate.id,
      frUppercaseICircumflexTemplate.id,
      frUppercaseIDiaeresisTemplate.id,
      frUppercaseOCircumflexTemplate.id,
      frUppercaseUGraveTemplate.id,
      frUppercaseUCircumflexTemplate.id,
      frUppercaseUDiaeresisTemplate.id,
      frUppercaseOeLigatureTemplate.id,
    ],
  },
  {
    id: "special-lowercase",
    label: { ko: "특수 문자 - 소문자", en: "Special letters - Lowercase" },
    description: {
      ko: "악센트 문자와 합자 소문자를 따로 연습합니다.",
      en: "Practice lowercase accented letters and ligatures separately.",
    },
    templateIds: [
      frLowercaseAGraveTemplate.id,
      frLowercaseACircumflexTemplate.id,
      frLowercaseCCedillaTemplate.id,
      frLowercaseEAcuteTemplate.id,
      frLowercaseEGraveTemplate.id,
      frLowercaseECircumflexTemplate.id,
      frLowercaseEDiaeresisTemplate.id,
      frLowercaseICircumflexTemplate.id,
      frLowercaseIDiaeresisTemplate.id,
      frLowercaseOCircumflexTemplate.id,
      frLowercaseUGraveTemplate.id,
      frLowercaseUCircumflexTemplate.id,
      frLowercaseUDiaeresisTemplate.id,
      frLowercaseOeLigatureTemplate.id,
    ],
  },
];
