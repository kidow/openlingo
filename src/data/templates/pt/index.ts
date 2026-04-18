import { WritingTemplate } from "@/types/writing";
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
export const ptTemplates: WritingTemplate[] = [
  ...ptUppercaseLatinAlphabetTemplates,
  ...ptUppercaseAccentedTemplates,
  ...ptLowercaseLatinAlphabetTemplates,
  ...ptLowercaseAccentedTemplates,
];
