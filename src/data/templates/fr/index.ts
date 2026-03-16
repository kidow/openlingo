import { WritingTemplate } from "@/types/writing";
import { frLatinAlphabetTemplates } from "./alphabet";
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
export const frTemplates: WritingTemplate[] = [
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
