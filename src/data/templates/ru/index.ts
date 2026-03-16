import { WritingTemplate } from "@/types/writing";

// Uppercase А-Н
import { ruUppercaseATemplate } from "./uppercase/a";
import { ruUppercaseBeTemplate } from "./uppercase/be";
import { ruUppercaseVeTemplate } from "./uppercase/ve";
import { ruUppercaseGeTemplate } from "./uppercase/ge";
import { ruUppercaseDeTemplate } from "./uppercase/de";
import { ruUppercaseYeTemplate } from "./uppercase/ye";
import { ruUppercaseYoTemplate } from "./uppercase/yo";
import { ruUppercaseZheTemplate } from "./uppercase/zhe";
import { ruUppercaseZeTemplate } from "./uppercase/ze";
import { ruUppercaseITemplate } from "./uppercase/i";
import { ruUppercaseShortITemplate } from "./uppercase/short-i";
import { ruUppercaseKaTemplate } from "./uppercase/ka";
import { ruUppercaseElTemplate } from "./uppercase/el";
import { ruUppercaseEmTemplate } from "./uppercase/em";
import { ruUppercaseEnTemplate } from "./uppercase/en";
// Uppercase О-Я
import { ruUppercaseOTemplate } from "./uppercase/o";
import { ruUppercasePeTemplate } from "./uppercase/pe";
import { ruUppercaseErTemplate } from "./uppercase/er";
import { ruUppercaseEsTemplate } from "./uppercase/es";
import { ruUppercaseTeTemplate } from "./uppercase/te";
import { ruUppercaseUTemplate } from "./uppercase/u";
import { ruUppercaseEfTemplate } from "./uppercase/ef";
import { ruUppercaseKhaTemplate } from "./uppercase/kha";
import { ruUppercaseTseTemplate } from "./uppercase/tse";
import { ruUppercaseCheTemplate } from "./uppercase/che";
import { ruUppercaseShaTemplate } from "./uppercase/sha";
import { ruUppercaseShchaTemplate } from "./uppercase/shcha";
import { ruUppercaseHardSignTemplate } from "./uppercase/hard-sign";
import { ruUppercaseYeruTemplate } from "./uppercase/yeru";
import { ruUppercaseSoftSignTemplate } from "./uppercase/soft-sign";
import { ruUppercaseEReversedTemplate } from "./uppercase/e-reversed";
import { ruUppercaseYuTemplate } from "./uppercase/yu";
import { ruUppercaseYaTemplate } from "./uppercase/ya";

// Lowercase а-н
import { ruLowercaseATemplate } from "./lowercase/a";
import { ruLowercaseBeTemplate } from "./lowercase/be";
import { ruLowercaseVeTemplate } from "./lowercase/ve";
import { ruLowercaseGeTemplate } from "./lowercase/ge";
import { ruLowercaseDeTemplate } from "./lowercase/de";
import { ruLowercaseYeTemplate } from "./lowercase/ye";
import { ruLowercaseYoTemplate } from "./lowercase/yo";
import { ruLowercaseZheTemplate } from "./lowercase/zhe";
import { ruLowercaseZeTemplate } from "./lowercase/ze";
import { ruLowercaseITemplate } from "./lowercase/i";
import { ruLowercaseShortITemplate } from "./lowercase/short-i";
import { ruLowercaseKaTemplate } from "./lowercase/ka";
import { ruLowercaseElTemplate } from "./lowercase/el";
import { ruLowercaseEmTemplate } from "./lowercase/em";
import { ruLowercaseEnTemplate } from "./lowercase/en";
// Lowercase о-я
import { ruLowercaseOTemplate } from "./lowercase/o";
import { ruLowercasePeTemplate } from "./lowercase/pe";
import { ruLowercaseErTemplate } from "./lowercase/er";
import { ruLowercaseEsTemplate } from "./lowercase/es";
import { ruLowercaseTeTemplate } from "./lowercase/te";
import { ruLowercaseUTemplate } from "./lowercase/u";
import { ruLowercaseEfTemplate } from "./lowercase/ef";
import { ruLowercaseKhaTemplate } from "./lowercase/kha";
import { ruLowercaseTseTemplate } from "./lowercase/tse";
import { ruLowercaseCheTemplate } from "./lowercase/che";
import { ruLowercaseShaTemplate } from "./lowercase/sha";
import { ruLowercaseShchaTemplate } from "./lowercase/shcha";
import { ruLowercaseHardSignTemplate } from "./lowercase/hard-sign";
import { ruLowercaseYeruTemplate } from "./lowercase/yeru";
import { ruLowercaseSoftSignTemplate } from "./lowercase/soft-sign";
import { ruLowercaseEReversedTemplate } from "./lowercase/e-reversed";
import { ruLowercaseYuTemplate } from "./lowercase/yu";
import { ruLowercaseYaTemplate } from "./lowercase/ya";

export const uppercaseTemplates: WritingTemplate[] = [
  ruUppercaseATemplate,
  ruUppercaseBeTemplate,
  ruUppercaseVeTemplate,
  ruUppercaseGeTemplate,
  ruUppercaseDeTemplate,
  ruUppercaseYeTemplate,
  ruUppercaseYoTemplate,
  ruUppercaseZheTemplate,
  ruUppercaseZeTemplate,
  ruUppercaseITemplate,
  ruUppercaseShortITemplate,
  ruUppercaseKaTemplate,
  ruUppercaseElTemplate,
  ruUppercaseEmTemplate,
  ruUppercaseEnTemplate,
  ruUppercaseOTemplate,
  ruUppercasePeTemplate,
  ruUppercaseErTemplate,
  ruUppercaseEsTemplate,
  ruUppercaseTeTemplate,
  ruUppercaseUTemplate,
  ruUppercaseEfTemplate,
  ruUppercaseKhaTemplate,
  ruUppercaseTseTemplate,
  ruUppercaseCheTemplate,
  ruUppercaseShaTemplate,
  ruUppercaseShchaTemplate,
  ruUppercaseHardSignTemplate,
  ruUppercaseYeruTemplate,
  ruUppercaseSoftSignTemplate,
  ruUppercaseEReversedTemplate,
  ruUppercaseYuTemplate,
  ruUppercaseYaTemplate,
];

export const lowercaseTemplates: WritingTemplate[] = [
  ruLowercaseATemplate,
  ruLowercaseBeTemplate,
  ruLowercaseVeTemplate,
  ruLowercaseGeTemplate,
  ruLowercaseDeTemplate,
  ruLowercaseYeTemplate,
  ruLowercaseYoTemplate,
  ruLowercaseZheTemplate,
  ruLowercaseZeTemplate,
  ruLowercaseITemplate,
  ruLowercaseShortITemplate,
  ruLowercaseKaTemplate,
  ruLowercaseElTemplate,
  ruLowercaseEmTemplate,
  ruLowercaseEnTemplate,
  ruLowercaseOTemplate,
  ruLowercasePeTemplate,
  ruLowercaseErTemplate,
  ruLowercaseEsTemplate,
  ruLowercaseTeTemplate,
  ruLowercaseUTemplate,
  ruLowercaseEfTemplate,
  ruLowercaseKhaTemplate,
  ruLowercaseTseTemplate,
  ruLowercaseCheTemplate,
  ruLowercaseShaTemplate,
  ruLowercaseShchaTemplate,
  ruLowercaseHardSignTemplate,
  ruLowercaseYeruTemplate,
  ruLowercaseSoftSignTemplate,
  ruLowercaseEReversedTemplate,
  ruLowercaseYuTemplate,
  ruLowercaseYaTemplate,
];

export const ruTemplates: WritingTemplate[] = [
  ...uppercaseTemplates,
  ...lowercaseTemplates,
];
