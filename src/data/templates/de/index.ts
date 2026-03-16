import { WritingTemplate } from "@/types/writing";
import { deLatinAlphabetTemplates } from "./alphabet";
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
export const deTemplates: WritingTemplate[] = [
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
